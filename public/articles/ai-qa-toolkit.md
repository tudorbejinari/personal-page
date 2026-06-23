# The QA System I Built Inside My Terminal

*Not a chatbot. A closed loop — one work item in, tested, fixed, reviewed, and shipped out. Here's how the whole thing fits together.*

---

## The problem with AI assistants for QA

Most AI tooling for QA works the same way: you paste something in, you get something back, and then you do the other nine steps by hand.

A chatbot writes a test snippet. You fix it for 20 minutes because it used the wrong patterns. You figure out the locators yourself. You run it, it fails, you debug alone. You file the bug manually. You copy-paste the PR comment to resolve it.

The value isn't the model. It's everything the model is connected to.

## What I built instead

A system of 4 specialized agents, 10 one-word commands, and live connections to the tools already in use — Jira, GitHub, CI, Figma, BigQuery. Each command does one job, and the output of one feeds the next.

```
one work item in
        ↓
01 · read    /tests-from-ticket  →  ticket becomes test scenarios
02 · write   senior-qa agent     →  scenarios become production specs
03 · run     /pw-run             →  specs run, trace opens on failure
04 · fix     /pw-flaky + debugger →  root cause found and fixed
05 · ship    /pr-resolve         →  PR comments cleared and resolved
06 · close   /create-bug         →  real bugs filed with full context
        ↓
shipped — out
```

## The four agents

Each agent has a single job, its own tools, and its own rules. None of them do everything.

**senior-qa** — writes and fixes tests. Turns a ticket or screen recording into production-ready Playwright specs and page objects. Locators in the constructor. No `waitForTimeout`. No force clicks. Won't finish until the spec runs green.

**debugger** — hunts down flakes. Reads the trace file, finds the race condition or bad locator, fixes the root cause — not the timeout. Re-runs to prove the fix holds.

**reviewer** — read-only gatekeeper. Rates every change 0–10 against the same rules a senior engineer would apply. Can only judge, cannot edit. A reviewer that can fix things isn't really reviewing.

**api-test-creator** — builds API coverage. For flows where the UI isn't the right layer — backend-only paths, deprecated screens. Writes the endpoint file and the spec together.

## The ten commands

| Command | What it does |
|---|---|
| `/tests-from-ticket` | Reads a work item → drafts scenarios → records → writes specs |
| `/tests-from-loom` | Reads a screen recording transcript → same output |
| `/pw-codegen` | Launches Playwright recorder → converts raw clicks to clean page objects |
| `/pw-run` | Runs tests the right way, picks env, opens trace on failure |
| `/pw-flaky` | Runs N times, gathers stats, finds the root cause |
| `/fix-ci` | Pulls overnight CI failures → one debugger agent per failing spec |
| `/pr-resolve` | Fetches PR threads, fixes valid ones, replies, resolves |
| `/figma-compare` | Screenshots live page + Figma → scored fidelity report |
| `/create-bug` | Test failure → fully formatted bug report, fields pre-filled |
| `/create-qa-task` | Automation work → tracking task with PR linked |

## Live connections — reads the real thing

The agents don't read what you paste. They read the source directly:

```
"what's the acceptance criteria on WEB-1024?"
  atlassian → read ticket live
✓ pulled: 3 acceptance criteria + QA plan

$ /figma-compare WEB-1024
  figma → design frame + measurements
  chrome → screenshot the staging page
✓ fidelity report: 3 spacing diffs flagged
```

Issue tracker, GitHub, CI traces, Figma — all read live, during the session.

## The nightly pipeline

The suite also runs on a schedule — every night, without anyone starting it:

```
cron · 8am → suite runs → results to analytics → alert to channel → trends on dashboard
```

By the time anyone opens their laptop, the pass/fail summary is already in the team channel. Failures trigger the debugger automatically. The trend dashboard builds from the nightly data — no manual reporting.

## Why it works

The agents are specialists, not generalists. A generalist asked to write, debug, and review its own work cuts corners in all three. A specialist with one job and the right tools does that job well.

The commands are one-word triggers, not prompts. You don't describe what you want — you run the command and it knows what to do.

The connections make it specific. Generic AI guesses from a paragraph. This reads the real ticket, the real PR, the real trace — and acts on what's actually there.

---

*Each tool in this system has its own article. Start with the architecture overview for the full technical picture, or browse by topic above.*
