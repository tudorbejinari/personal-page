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
3. **Captures a recording** of the moments it failed — what the page was doing, step by step.
4. **Finds the likely cause** and suggests a fix.

## How it works (in simple terms)

**Repetition makes the flake appear.**
A bug that shows up one time in ten will almost never appear in a single run. Running it many times forces the pattern into the open.

**The recording shows the truth.**
Instead of guessing, the tool looks at a step-by-step capture of the failing run. It can see what the screen was actually doing at the exact moment things went wrong — which is usually very different from what we *assumed* was happening.

**It matches the cause to a known fix.**
Most flakiness comes from a small set of root causes — the test moved on before the page was ready, two things raced each other, or it waited for the wrong signal. The tool recognizes these and points to the proper fix instead of a band-aid.

## The benefits

**Fixes the cause, not the symptom.** No more hiding flakiness behind automatic retries.

**Protects trust in the suite.** When failures are real and rare bugs are explained, people pay attention to failures again.

**Saves frustrating hours.** Chasing a flake by hand is miserable; this does the boring repetition and evidence-gathering for you.

## A real example

A test kept "passing on retry," so it looked harmless. Running it many times in a row revealed the real story: the first attempt was leaving a bit of leftover state behind, which tripped the next run. Once that was clear, the fix was obvious. Without the repetition and the recording, it would have stayed a mystery — and an annoyance — indefinitely.

## Who it's for

Anyone who writes or maintains automated tests. Flakiness is one of the most universal pains in testing, and it rarely fixes itself.

## This is just the start

This is an early version. I want it to get smarter at spotting flakiness caused by tests interfering with each other, not just a single test on its own. If you give it a try, I'd love to know what kinds of flakiness it catches well — and what it misses.
