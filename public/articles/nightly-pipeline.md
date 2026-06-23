# A Nightly Pipeline That Reports Itself

*The test suite runs every night on a schedule. By the time anyone opens their laptop in the morning, the results are already in the channel they check.*

---

## The problem with on-demand testing

When tests only run when someone kicks them off, you get gaps. Mornings with no one asking. Fridays when everyone's focused elsewhere. Weekends that silently accumulate regressions.

The other problem: even when tests do run, the results go somewhere that requires effort to check. A CI dashboard that needs a login. An email thread that gets buried. Something you have to remember to look at.

## The pipeline

```
cron · 8am → suite runs → results to analytics → alert to channel → trends on dashboard
```

The suite runs on a fixed schedule — every night, without anyone starting it. The pipeline:

1. **Runs the full regression suite** — all specs, in the right environment, with proper secrets decrypted
2. **Sends results to analytics** — pass/fail counts, timing, which specs changed state since last run
3. **Posts a summary to the team channel** — visible in the tool everyone already has open
4. **Builds a trend line** — pass rate over time, so you can see if things are getting better or worse, not just whether last night passed

## What the morning looks like

```
$ /fix-ci
  ci → pull the overnight run
  parsed report: 3 specs failed
  → debugger agent, one per file
✓ checkout: dropdown detach → waitForAttached
✓ dashboard: list refresh → waitForVisible
• orders: backend 500 → transient, retry
```

**You don't check the pipeline. The pipeline tells you.**

No login needed. No dashboard to remember. The morning summary shows up where conversation already happens, and it's scannable in ten seconds.

**Failures don't sit unnoticed.**

When something breaks, the failure is in the channel before anyone starts work. If the same spec keeps failing, the trend line shows it.

**A failure triggers the debugger automatically.**

Instead of a human reading a failure log and filing it, the pipeline hands each failing spec to a debugger agent — one per file, running in parallel. By the time someone opens the notification, the root cause is often already identified.

The transient backend error in the example above gets flagged separately — that's not a test problem, that's an infrastructure alert. The tool tells the difference.

## The trend dashboard

Pass rate over time is more useful than any single run result. A single failure could be noise. A trend line going down for three weeks is a signal.

The dashboard builds from the nightly data automatically:

- Pass rate per run over time
- Which specs have been consistently flaky
- Run duration trends (a slow run is often a warning sign)

No manual reporting. No spreadsheet to maintain. The data accumulates on its own.

## What this looks like in practice

A typical morning: the channel shows one spec failed overnight. The debugger agent ran in parallel and identified a race condition in a form submission. The fix is already in review before standup. No one's first task of the day is triaging CI.
