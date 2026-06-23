# I Built a Tool That Checks if the App Matches the Design

*A look at `/figma-compare` — a small skill that compares a live web page to its Figma design and tells you, in plain words, what's different and how to fix it.*

---

## The problem

When a designer hands off a screen in Figma, the developer builds it, and then someone has to check: **does the real app actually look like the design?**

This sounds easy. It is not.

The big things are simple to spot — wrong button text, a missing field. But the things that go wrong most often are small and quiet:

- Padding that is a little too tight.
- A color that is *close* to the design, but not the exact one.
- A divider line that should not be there.
- Text that is left a few pixels off.

These are easy to miss by eye. These are easy to miss by eye, and they often only get caught after a *second* round of design review — which means extra tickets, extra back-and-forth, and slower delivery.

I wanted a way to catch them the first time.

---

## What I built

`/figma-compare` is a small skill I added to our testing toolkit. You give it two things:

1. **The design** — a Figma link, or even just a ticket number.
2. **The real page** — a URL it can open, or a screenshot you paste.

It then gives you back a **numbered report**: each item is marked "matches" or "needs fixing," and every problem comes with the exact value the design wants.

Here is the kind of thing it produces:

> **2. Section title — ❌ Wrong color**
> - Problem: the title is too light.
> - Figma says: Grey-900 (`#0A2642`).
> - Now: a lighter grey.
> - Fix: change the title color to `#0A2642`.

A developer can read that and fix it in seconds. No guessing, no "looks about right."

---

## How it works (in simple terms)

There are three clever parts under the hood:

**1. It reads the design directly from Figma.**
Instead of someone exporting an image, the tool pulls the design straight from Figma. That means it knows the *exact* numbers — colors, fonts, spacing — not a rough guess from a picture.

**2. It can open the real app by itself.**
It reuses the same secure login the automated test suite already uses, so it can open a live page with no password sharing. Then it reads the *real* styles from the page — the actual padding, the actual color — and compares them to the design with real numbers. This is the part that catches "close but not exact."

**3. It reads the ticket for you.**
Give it a ticket number and it automatically pulls the design link, the acceptance criteria, and even the designer's review notes. So a single number is enough to start.

If you can't log in for any reason, you can simply paste a screenshot — it still works, it just can't measure exact pixels in that mode.

---

## The benefits

**Catches the bugs we usually miss.**
Padding, alignment, color, fonts, dividers — the small stuff that slips through eye-checks.

**Saves time for everyone.**
The report is ready to share. Developers get exact target values. QA gets a clear pass/fail list. No long explanations needed.

**No guessing on colors and spacing.**
"The color should be `#0A2642`" beats "the color looks a bit off." It removes the back-and-forth.

**Fewer review rounds.**
Catching design gaps before sign-off means fewer surprise tickets later.

**Easy to start.**
One ticket number in, a full report out.

**Safe.**
It never asks for your password — it reuses the login our tests already trust.

---

## A real example

I tested it on a real piece of work — a redesigned screen that had already gone through one full QA pass.

The first design review had found a list of fixes. They were made, and the ticket was marked done. But a *second* review later found another **14 issues** — and almost all of them were the quiet kind: padding, alignment, colors, fonts, and extra divider lines.

When I ran the tool against that screen, it independently flagged the same kinds of problems the designer had — including pointing at the exact colors the design system calls for. That second round is exactly what this tool is meant to prevent.

![Figma vs Impl — real comparison report output](/figma-compare-report.png)

---

## Who it's for

This isn't just a QA tool. It helps the whole team:

- **QA** — confirm a ticket's design fixes really landed before sign-off.
- **Developers** — get the exact value to change for each gap, ready to fix.
- **Designers (UI/UX)** — a quick second set of eyes on how close the build is to the design.

---

## This is just the start

This is the **first version**. It already does the core job well, but I see plenty of room to grow — checking more screens at once, covering more states (hover, error, empty), and making the report even easier to act on.

If you try it, I'd genuinely love your feedback. The best ideas for where it goes next will come from the people using it.
