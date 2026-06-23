# How I Built an AI-Powered Visual QA Tool for a Large Angular Migration

A large Angular app I was working on was migrating from legacy Material components to MDC (Material Design Components). That means hundreds of pages could break visually — buttons shift, tables lose padding, dialogs change size.

**The old way:** QA opens two environments side by side, clicks through every page, takes notes, files bugs. This takes 1–2 days per migration batch.

**I built a tool that does this in minutes.**

---

## The Problem at Scale

```
Legacy Angular Material          MDC (Material Design Components)
─────────────────────            ────────────────────────────────
mat-list-item                →   mat-mdc-list-item
mat-button                   →   mat-mdc-button
mat-dialog                   →   mat-mdc-dialog

Result: Hundreds of pages. Any could break visually.
Manual QA: 1–2 days per batch.
```

A pixel regression on a financial app isn't just ugly — it breaks trust. I needed something systematic, fast, and explainable.

---

## What the Tool Does

It opens two versions of the app in a headless browser simultaneously:

| Environment | Purpose |
|---|---|
| **INTEG** | Stable baseline (before migration) |
| **Demo** | New MDC version (after migration) |

For each page, it:

1. Takes screenshots of both environments in parallel
2. Compares them **pixel by pixel** using `pixelmatch`
3. If a difference is found, sends both screenshots to **Claude AI**
4. Claude identifies what changed, explains the root cause, suggests a fix, and rates its confidence

```
┌──────────────┐     ┌──────────────┐
│     INTEG    │     │     Demo     │
│  (baseline)  │     │  (MDC build) │
└──────┬───────┘     └──────┬───────┘
       │                    │
       └────────┬───────────┘
                ▼
         pixelmatch diff
                │
         ┌──────┴──────┐
         │             │
       PASS           FAIL
         │             │
       ✓ Done    Claude AI Analysis
                       │
              ┌────────┴────────┐
              │  Pass 1         │
              │  Screenshots    │
              │  + context      │
              └────────┬────────┘
                       │
               Confident?
              ┌────────┴────────┐
             YES               NO
              │                 │
           Report          Pass 2: DOM +
                           CSS + Classes
                                │
                             Report
```

---

## The Two-Pass AI Analysis

The first pass sends screenshots and page context to Claude. If Claude isn't confident, it automatically triggers a second pass — this time grabbing the actual DOM structure, computed CSS styles, and class names from both environments.

**Pass 1 prompt gives Claude:**
- Screenshot of INTEG
- Screenshot of Demo
- Page name and route
- Pixel difference count

**Pass 2 adds:**
- DOM structure of the changed elements
- Computed CSS styles from both versions
- Class names (old vs new)
- Known MDC migration patterns

This two-pass approach means the AI makes better decisions without wasting tokens on every comparison.

---

## How Developers Use It

After deploying a migration to Demo, the developer runs one command:

```bash
node tools/migration-qa.js compare --group deals
```

The output:

```
[1/1] deals-list ... FAIL (18939px) — analyzing with AI... done [FIX] auto-fix

AI recommends auto-fixing #1:
  #1 deals-list — mat-list-item CSS selectors not targeting MDC's mat-mdc-list-item

To apply safe fixes now:
  node tools/migration-qa.js fix --group deals --approve 1
```

The developer applies the fix, redeploys, runs the tool again. If everything passes, the migration is done. If 1–2 items need human judgment, they send me the HTML report and I review it in **15 minutes**.

---

## Architecture

```
tools/
├── migration-qa.js          ← CLI entry point
└── lib/
    ├── config.js            ← page routes and selectors
    ├── screenshot.js        ← browser auth and capture
    ├── compare.js           ← pixel diff engine
    ├── ai-analysis.js       ← two-pass AI analysis
    ├── report.js            ← HTML report generator
    └── prompts/
        ├── pass1.md         ← AI prompt (editable without code changes)
        └── pass2.md
```

**Stack:** Playwright · pixelmatch · Anthropic Claude API · JavaScript

### Key Design Decisions

**Login once, reuse session**
Authenticates both environments once, saves session cookies, reuses them for all pages. No re-login per screenshot. This alone cut setup time by 80%.

**Parallel screenshots**
INTEG and Demo are captured simultaneously. Total screenshot time is the slowest single page, not the sum of all pages.

**Self-contained HTML reports**
Screenshots are embedded as base64 in the HTML file. Share it on Slack, push it to a branch — it works anywhere, no server needed.

**Knowledge base**
The tool records past fixes. AI analysis improves over time. Same root cause = instant recommendation on the next run.

---

## Results

| Test | Result |
|---|---|
| Deals page (3 stability runs) | **0px difference** — zero false positives |
| Contacts page | **18,939px regression caught** — AI identified root cause + fix with high confidence |
| QA review time | **1–2 days → ~15 minutes** |

![MDC Migration Visual Comparison — 148 pages, 139 identical, 4 with differences](/visual-qa-dashboard.png)

![Side-by-side visual diff — baseline vs migrated, with regression highlights](/visual-qa-comparison.png)

---

## What I Learned

**1. Start simple, iterate fast.**
The first version was one 1,350-line file. Through code review it became 7 focused modules with 19 tests. Production-grade code doesn't happen in one pass.

**2. AI is a force multiplier, not a replacement.**
The tool handles repetitive work — screenshot, compare, analyze. QA still makes the final call on edge cases. The value is knowing which 2 items out of 50 actually need human eyes.

**3. Shared data eliminates setup work.**
Our two environments share the same database. Any pixel difference is purely from UI changes. This eliminated an entire category of test fixture setup.

**4. Code review bots are relentless — and that's good.**
We went through 6 rounds of automated review (Copilot, Cursor). Each round found real issues: XSS in HTML reports, browser memory leaks, path traversal in AI fixes. Every fix made the tool more robust.

---

> *This tool was built entirely with JavaScript, Playwright, and the Anthropic Claude API. It replaced a manual process that consumed 1–2 days of QA time per migration batch.*
