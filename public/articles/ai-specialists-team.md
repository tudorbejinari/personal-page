# A Team of AI Specialists, Not One Generalist

*Why I split my AI helpers into focused roles — one writes, one debugs, one reviews — and how they work together.*

---

## The problem

When you ask one AI assistant to do everything — write the code, fix the bugs, *and* review the result — it does each part only okay. It is also a little too kind to its own work. The same helper that wrote the code is not the best judge of whether the code is good.

Real teams don't work this way. A team has a person who writes, a person who reviews, and a person who digs into the hard failures. Each one has a different focus, and that focus is what makes them good.

So I built my AI helpers the same way.

## What I built

Instead of one do-everything assistant, I created a small set of **specialists**, each with a single job and its own mindset:

- **The test writer** — builds new automated tests and keeps them clean and reliable.
- **The debugger** — takes a failing or unreliable test and finds the real reason it breaks.
- **The reviewer** — checks finished work strictly, like a careful senior engineer, and is *not allowed to change anything*.
- **The API builder** — focuses on tests that talk to the system behind the scenes, not the screen.

Each one is told exactly what "good" looks like for its job, so it stays sharp instead of being a jack-of-all-trades.

## How it works (in simple terms)

**Each specialist gets only the tools it needs.**
The reviewer, for example, can *read* code but cannot *edit* it. That's on purpose — a reviewer that can quietly fix things while judging them isn't really reviewing. Keeping it read-only makes its opinion honest.

**They hand work to each other.**
The test writer can pass a stubborn failing test to the debugger. The debugger finds the cause and fixes it. The reviewer then checks the result. It's a relay, not one person juggling everything.

**They can work in parallel.**
Because each owns a different piece, several can run at once — like having more than one teammate on the job at the same time.

## The benefits

**Better quality per task.** A specialist focused on one job beats a generalist doing five.

**Honest reviews.** A read-only reviewer can't paper over problems — it has to name them.

**Faster work.** Independent helpers can run side by side instead of waiting in line.

**Consistent standards.** Each role carries the same rules every time, so the output doesn't drift.

## A real example

I asked the strict reviewer to look over a batch of finished work. It flagged a few things a friendly generalist would have waved through — small habits that quietly make a test suite fragile. Separately, when a test kept failing, the debugger didn't just make the error go away; it found *why* the page was failing and fixed the cause. Two different jobs, two different mindsets — and better results from each.

## Who it's for

Anyone using AI to help build or test software. The lesson is bigger than testing: **give your AI a clear, narrow role and the right tools, and it gets noticeably better.**

## This is just the start

This is an early version of the idea. I'm still learning where to draw the lines between roles and how best to let them hand off to each other. If you've tried something similar — or would split the roles differently — I'd love your feedback.
