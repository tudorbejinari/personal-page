# Building an AI-Powered QA Toolkit

*A short intro to a set of small AI tools I've been building — each one takes a repetitive, easy-to-miss part of software quality off my plate.*

---

## The idea

Most "AI assistant" demos try to do everything at once. I went the other way. I built a set of **small tools that each do one job well** — the boring, repetitive, or easy-to-miss work that slows a team down.

A few principles guide all of them:

- **One job each.** A tool that does one thing is easier to trust than one that does ten.
- **The AI proposes, I decide.** Nothing important happens without my okay.
- **Built from real pain.** Each tool started from a task I was tired of doing by hand.
- **It checks its work.** A fix isn't done until it's been tested.

## The toolkit so far

- **Compare a design to the live app** — checks a built screen against its design and lists exactly what's off, with the precise value to fix. *(read more)*
- **A team of AI specialists** — focused helpers that write tests, debug failures, and review code, each with its own mindset. *(read more)*
- **Handle PR review comments** — reads each review comment, checks it against the real code, and fixes the valid ones after I approve. *(read more)*
- **Catch flaky tests** — runs an unreliable test many times, reads what actually happened, and finds the real cause. *(read more)*
- **Turn a ticket into a test** — reads a requirement and helps build a clean, working automated test from it. *(read more)*
- **A test plan that writes itself** — reads a code change the moment it's opened and writes the QA test plan for it, including what might break. *(read more)*

## Where this is going

This is an ongoing experiment. Each tool is a first iteration, and the best ideas for what comes next have come from people actually using them.

If any of these sound useful — or you'd build them differently — I'd love to hear.
