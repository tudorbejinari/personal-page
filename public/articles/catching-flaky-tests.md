# Catching Flaky Tests Before They Catch Me

*A test that passes most of the time and fails once in a while is worse than one that always fails. Here's a tool that hunts down the cause.*

---

## The problem

Imagine a test that passes nine times and fails the tenth — for no obvious reason. Run it again and it's green. This is a **flaky** test, and it's quietly poisonous.

Why? Because it teaches the whole team to *stop trusting the tests*. When a failure might be "just flaky," people start ignoring failures. And a test suite you don't trust is barely worth having.

The usual response — "it passed on retry, move on" — isn't a fix. It's the problem getting worse.

## What I built

A tool that turns "it's just flaky" into a real diagnosis:

1. **Runs the test many times** in a row, so the rare failure actually shows up.
2. **Counts** how often it passes and fails.
3. **Reads the trace** of the failing run — what the page was doing, step by step.
4. **Finds the root cause** and applies the fix, then re-runs to prove it.

## How it works

```
$ /pw-flaky checkout.spec.js --runs 10
  7 passed · 3 failed
  reading trace → error-context.md
✗ cause: currency field reformats on blur;
  save fired before value committed →
  empty amount in the request body
✓ fix: fill → press('Tab') → assert value
✓ re-run 10/10 green
```

**Repetition makes the flake appear.**
A bug that shows up one time in ten will almost never appear in a single run. Running it many times forces the pattern into the open.

**The trace shows the truth.**
Instead of guessing, the tool reads a step-by-step capture of the failing run. It can see what the screen was actually doing at the exact moment things went wrong — which is usually very different from what we assumed was happening.

**It matches the cause to a known fix.**
Most flakiness comes from a small set of root causes: the test moved on before the page was ready, two things raced each other, or it waited for the wrong signal. The tool recognizes these and points to the proper fix instead of a band-aid.

## When the CI pipeline fails overnight

When multiple specs fail in the overnight run, the tool delegates each one to a separate debugger agent running in parallel — one per file:

```
$ /fix-ci
  ci → pull the overnight run
  parsed report: 3 specs failed
  → debugger agent, one per file
✓ checkout: dropdown detach → waitForAttached
✓ dashboard: list refresh → waitForVisible
• orders: backend 500 → transient, retry
```

By the time anyone opens their laptop, each failure has a diagnosis. The transient backend error gets flagged separately — that's not a test problem, that's an infra alert.

## The benefits

**Fixes the cause, not the symptom.** No more hiding flakiness behind automatic retries.

**Protects trust in the suite.** When failures are real and rare bugs are explained, people pay attention again.

**Saves frustrating hours.** Chasing a flake by hand is miserable — this does the boring repetition and evidence-gathering for you.

## A real example

A test kept passing on retry, so it looked harmless. Running it ten times in a row revealed the real story: a currency input was reformatting on blur, and the save action was firing before the value committed — leaving an empty amount in the request body. Once that was clear, the fix was one line. Without the repetition and the trace, it would have stayed a mystery indefinitely.
