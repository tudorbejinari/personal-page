# An AI That Handles My Pull-Request Comments

*Code review leaves a pile of comments. Some are right, some are wrong, and going through them is slow. So I built two helpers that work together — one reviews before I push, one clears the threads after.*

---

## The problem

After you open a pull request, the comments arrive. A human reviewer spots a real issue. An automated reviewer flags five things — two are good, two misread the code, and one is about a file it couldn't even see.

Now someone has to go through every comment: figure out which are real, fix those, explain the rest, and reply to each thread. It's careful, repetitive work, and it's easy to either fix the wrong thing or ignore a comment that mattered.

## Two tools, two moments

### Before you push — the reviewer agent

Before anything gets committed, a read-only reviewer rates the changes against a fixed set of rules and scores them 0–10. It can only judge — it cannot edit.

```
$ "review all changes this session"
  reviewer → rating against house rules
✓ locators in constructor
✓ no waitForTimeout / force / networkidle
△ .last() on delete not mirrored on add
  → cleanup could remove the wrong row

Score: 8/10 — fix the symmetry, then ship
```

**Read-only on purpose.** A reviewer that can edit is tempted to "just fix it." Read-only forces clear, actionable feedback instead. The symmetry flag above is the kind of subtle bug that saves a production incident.

### After the PR is open — the resolve agent

Once review comments arrive from teammates, one command handles the first pass:

```
$ /pr-resolve 88
  gh → fetch unresolved threads (5)
  auto-fix the valid, in-scope ones
✓ 4 fixed in a1b2c3d
• 1 out-of-scope → noted, not changed
✓ replied [Agent] · threads resolved
```

1. **Fetches** every open comment on the pull request
2. **Reads the actual code** for each one — not just the comment
3. **Decides** if it's a real issue, a misunderstanding, or already handled
4. **Asks me** which ones to fix — I stay in control
5. **Fixes** the approved ones and tests each fix before pushing
6. **Replies** to every thread with a short, clear explanation

## What makes this work

**It doesn't blindly trust comments.**
Automated reviewers are confident even when they're wrong. The helper always opens the real code and checks the claim before agreeing with it. A wrong comment gets a polite "this doesn't match the code," not a needless change.

**It always asks before changing anything.**
I see a short list — what each comment says, whether it looks valid, and what the proposed action is — and I pick what to fix. Nothing is changed behind my back.

**Its replies are clearly labeled.**
Every reply is marked `[Agent]` so reviewers know an assistant wrote it. It never silently closes a thread — a human makes the final call.

## A real example

On one pull request, the automated reviewers kept coming back round after round with smaller and smaller polish suggestions. The resolver handled each round the same calm way: check the code, fix the ones that were truly worth it, test them, and reply. When the suggestions got tiny and the value dropped below zero, it said so plainly — *we've reached diminishing returns* — instead of churning forever.

That honesty is exactly what I wanted.
