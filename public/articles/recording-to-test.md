# From a Screen Recording to a Working Test

*When you test a new feature by hand, the most valuable thing you produce is the walkthrough in your head. Normally that knowledge disappears the moment you're done.*

---

## The problem

Manual testing produces a kind of expertise that's almost impossible to transfer. You know the exact path you took — what you clicked first, which edge case you stumbled on, the specific order of operations that matters. That mental model is more valuable than any ticket or checklist, but it lives only in your head.

You finish the session, and it's gone. The next engineer who writes the automated test for this feature starts from scratch.

## What changes with a screen recording

If you record your screen while you test — talking through what you're doing and why — the narrated transcript captures that flow word for word. "First I open the form. I add a split. The total updates. Then I try to submit with a required field empty and confirm the error shows."

That maps almost directly to test steps and assertions. Not a guess from the ticket. Not a reconstruction from memory. The actual path you took, in the order you took it.

## How it works

Drop the recording link in with the work item, and the tool does the rest:

```
$ /tests-from-loom https://loom.com/share/abc123 WEB-1024
  chrome-devtools → read transcript (47 lines)
  acli → read ticket + acceptance criteria
  drafted 5 scenarios + recording checklist
  launch codegen → you record once
✓ PaymentsPage.js  (locators in constructor)
✓ paymentsTests.spec.js  (5 tests)
✓ 0 waitForTimeout · 0 force · data-testid
```

What it does step by step:

1. **Reads the transcript** — scrapes the narrated walkthrough with timestamps
2. **Layers in the acceptance criteria** from the work item, so it knows what was actually supposed to happen
3. **Drafts test scenarios** — aligns the narrated steps with the required outcomes, and flags anything that drifts out of scope
4. **Generates a recording checklist** — the exact clicks to capture so real, stable element locators come from the live app, not guesswork
5. **Writes the tests** — hands everything to the test writer, runs them, reports what was created

## What it produces

Not a raw, fragile recording. A test that:

- Follows the same patterns as the rest of the suite
- Finds elements by stable identifiers, not brittle CSS paths
- Doesn't rely on arbitrary wait times
- Won't finish until it runs green

## When to use it

- You just did manual testing on a new feature and recorded it
- You want test coverage that matches the path you actually took, not a best-guess reconstruction from the ticket
- You're covering a new area of the app and need real element locators, not invented ones

## Why this matters

The closer test coverage is to what a human actually verified, the more confidence you get from the result. A test written from a ticket is a reconstruction. A test written from a recorded walkthrough is a transcript.

This is the difference between "tests that probably cover the thing" and "tests that cover exactly what was verified."
