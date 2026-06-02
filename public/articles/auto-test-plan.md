# The Test Plan That Writes Itself

*The moment a developer opens a code change, this tool reads what actually changed and writes the QA test plan for it — what to check, where, what might break, and what doesn't add up.*

---

## The problem

When a developer finishes a change and opens it for review, someone on QA has to answer a hard question: **what exactly do we need to test?**

That means reading the change, working out every screen and case it touches, figuring out what setup is needed, and — the part most often missed — thinking about what *else* might have broken because of it. Done by hand, this is slow, and it depends on the tester guessing what the code really did. If the description and the code don't fully match, that gap is easy to miss until it's live.

## What I built

A tool that writes the QA test plan automatically, the moment a change is opened.

It reads the *actual* code change and produces a full plan, including:

- **A clear overview** of what changed, in plain words.
- **Where to test** — which screen, and how to get there.
- **Setup needed** — for example, a setting that must be switched on first, or the test conditions won't appear.
- **Step-by-step scenarios**, each with the exact result to expect ("this text should read X", "this spacing should match the design").
- **Regression checks** — older features that might have broken.
- **Open questions for the team** — places where the change and the original request don't quite line up.

Then it posts the plan where the team already works, so it's waiting for QA when they pick up the change.

## How it works (in simple terms)

**It reads the real change, not just the description.**
This is the key. A description says what was *meant* to happen. The code shows what *actually* happened. By reading the change itself, the plan reflects reality — including small side-effects a person might overlook.

**It writes steps anyone can follow.**
Each scenario is a simple action and a clear expected result. A tester doesn't need to reverse-engineer the code; they just follow the list.

**It thinks about what could break.**
A good change can still dent something nearby. The tool adds regression checks for the things most likely affected.

**It raises its hand when something doesn't add up.**
If the request asked for two things but the change only covers one, the tool says so — as a question for the team, not a silent assumption. This is often the most valuable part.

**It runs on its own.**
No one has to remember to ask. When a change opens, the plan appears.

## The benefits

**QA starts from a ready plan, not a blank page.** The slow "what do I even test?" step is already done.

**Grounded in the real code.** Because it reads the actual change, it catches "what else did this touch," not just the happy path.

**Consistent and thorough, every time.** It doesn't get tired or rushed on a Friday. Every change gets the same careful treatment.

**It catches gaps before release.** The "open questions" surface mismatches between what was asked and what was built — exactly when they're cheapest to fix.

**It saves real time.** Writing a careful test plan by hand can take a chunk of an afternoon. This turns it into a few minutes of review.

## A real example

A change updated a screen — renaming a section, tidying spacing, and adjusting how a couple of dialogs behaved. The tool produced a plan with precise checks (this label should read exactly this, this row should line up with that), a note that a certain setting had to be enabled first or the new screen wouldn't even show, and a list of older flows to re-check.

The best part: it flagged a **question**. The original request had asked to rename something in *two* places, but the code only renamed *one*. The tool pointed this out and asked whether the second rename was intentionally left out. That's the kind of gap that usually slips through to production — caught here automatically, before anyone tested a thing.

## Who it's for

QA engineers, developers, and team leads. For QA it's a head start; for developers it's a second pair of eyes on their own change; for leads it's a consistent quality net on every change.

## How this differs from turning a ticket into a test

These two ideas are cousins, and it's worth not confusing them:

- **Turning a ticket into a test** starts from the *requirement* and produces automated test *code*. It helps you *build* automation.
- **This tool** starts from the *finished code change* and produces a *human* test plan. It helps you *review* a change.

One looks forward from "what we want to build." The other looks at "what was actually built." Together they cover both ends.

## This is just the start

This is a first version. I'd like it to get even better at judging which regression areas matter most, and at telling the truly important checks from the minor ones. If you try it, tell me which parts of the plan you actually used — and which you skipped.
