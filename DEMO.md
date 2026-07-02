# Demo Script — 2 minutes

**Setup:** Dev server running at `http://localhost:5173` in a maximized browser window.

---

### 0:00 — Start

> "We built **play-hello-world** — a clean, themed playground for quick demos. Zero backend, zero config, one command to run."

**Action:** Point to the page. It loads with the **BB Pastel** theme (sage greens, warm off-white).

---

### 0:15 — Greeting

> "Let's start with the greeting card."

**Action:** Type `Hackathon Team` into the text input. Click **Say Hello** (or press Enter).

> "Type any name, hit enter — the greeting updates instantly."

**Action:** Clear the input and click **Say Hello** without typing.

> "Empty input resets to the default greeting. No crash, no weird state."

---

### 0:30 — Theme toggle

> "Now let's flip the look."

**Action:** Click the 🎨 button in the top-right corner.

> "One click switches to the **Nord** palette — arctic blues, cool greys. Click again to go back to BB Pastel. Your preference is saved to localStorage across reloads."

**Action:** Click 🎨 once more to return to BB Pastel.

---

### 0:45 — Counter

> "The counter shows basic state management."

**Action:** Click **+1** three times.

> "Click +1 three times — the counter shows 3, and a toast pops up confirming each change."

**Action:** Click **-1**.

> "Decrement works. Toast confirms every action."

**Action:** Click **Reset**.

> "Reset goes back to zero, with a toast."

---

### 1:15 — Error boundary

> "No app ships without bugs. Let's show our error handling."

**Action:** Click **Throw Error**.

> "The error boundary slides in — red banner, descriptive message, dismiss button. The app doesn't crash; the UI stays responsive."

**Action:** Click **Dismiss** to hide the error.

> "One click dismisses. The counter and greeting still work — the error is contained."

---

### 1:30 — Responsive check (optional, 15s)

> "The layout stacks on mobile — the input goes full-width, buttons stack vertically. No horizontal scroll, no broken layout. Mobile-ready out of the box."

**Action:** Open DevTools (`Cmd+Opt+I`), toggle device toolbar, pick iPhone SE. Resize back. (Skip if time is tight.)

---

### 1:45 — Wrap up

> "One command to build, one command to deploy."

**Action:** Switch to terminal.

```bash
bun run build && npx vercel deploy --prod --yes
```

> "That's play-hello-world — simple, clean, and hackathon-ready. Questions?"

---

### 2:00 — Done

**Total: ~2 minutes.** Each section is self-contained — skip any that doesn't fit the audience.

## Tips

- **Don't rush** between actions. A 1-second pause after each click looks intentional.
- The error demo is the most memorable part — save it for late in the demo so they remember it.
- If the audience asks about "real" errors, mention this pattern extends to API failures, JSON parse errors, etc.
