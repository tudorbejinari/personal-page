# Filing Bugs and Tracking Work Without Leaving the Terminal

*Two commands. One turns a test failure into a properly formatted bug report. The other creates a tracking task for automation work with the right format and PR link attached.*

---

## The problem with manual filing

Filling out a bug report by hand is repetitive and easy to get wrong. You need the right project, the right type, the right priority, the environment details, the steps to reproduce, the expected outcome, the actual outcome. People skip fields. People forget the environment. People paste markdown that the issue tracker renders as literal `##` characters.

Tracking automation work has a different problem: it's optional, so it often doesn't happen. The format gets forgotten. The parent ticket doesn't get linked. The PR never gets attached. When someone tries to find what automation work happened in a quarter, the answer is "check git log."

## Bug filing: one command

When a test failure turns out to be a real product bug, one command turns the failure into a properly filled report:

```
$ /create-bug checkoutTests.spec.js
  reading test + trace → gathering details
  env: staging · browser: chromium
  steps: open order → apply discount → submit
  expected: total updates · actual: total unchanged
  [draft ready — confirm to create]
✓ WEB-2048 filed with steps + trace
```

What it does:

- **Reads the failing test and trace** to identify the steps, what was expected, and what actually happened
- **Builds the report** with the environment, reproduction steps, expected vs actual, and any relevant attachments
- **Shows you the draft** and waits for confirmation before creating anything
- **Creates the report** with the right defaults for the project
- **Verifies the description saved** — some issue trackers silently drop content on creation, so the command checks and re-applies if needed

You don't touch the issue tracker. You don't copy-paste anything. What gets filed is a complete report: steps that actually reproduce the issue, an environment that's actually real, fields that are actually filled.

## Automation task tracking: one command

When you finish automation work — new tests, a refactor, fixing a flaky spec, performance changes — one command creates a properly formatted tracking task:

```
$ /create-qa-task https://github.com/org/repo/pull/88
  gh → read PR title + summary
  goal: add coverage for checkout discount flow
  done when: spec runs green in CI · PR linked
✓ WEB-2049 created · key + URL reported
```

- **Reads the pull request** — pulls the title and summary automatically
- **Builds the task** with a consistent format: goal statement, done-when bullets, and the PR linked
- **Shows you the draft** before creating anything
- **Creates the task** in the right project with the right parent and priority
- **Verifies it saved** and reports the link

The format is consistent across every task, because the command enforces it. The PR is always attached. Searching for automation work actually works.

## The combined effect

Neither of these saves a huge amount of time on its own — maybe five minutes per item. The value is consistency and completeness over time.

A year from now, every bug filed through this command has the same structure. Every automation task has the PR link. The history is searchable. The fields are filled. Nothing got skipped because it was the end of the day.
