# play-hello-world

A simple, polished HTML playground for hackathon demos. Greet someone, click a counter, trigger an error boundary — all with a toggleable theme.

Built for speed: zero backend, zero database, one `bun run dev`.

## Stack

| Layer | Choice |
|-------|--------|
| Runtime | Bun 1.3+ (pinned via mise) |
| Bundler | Vite |
| UI | Vanilla JS + CSS custom properties |
| Themes | BB Pastel (default) & Nord — toggle with the 🎨 button |
| Data | None (static client-side app) |

## Quick start

```bash
git clone <repo-url> play-hello-world
cd play-hello-world

# Install dependencies
bun install

# Start dev server (opens http://localhost:5173)
bun run dev
```

### Production build

```bash
bun run build     # outputs to dist/
bun run preview   # preview the built site
```

## API keys

None required. This is a fully client-side app with no external services.

## One-command deploy

```bash
bun run build && npx vercel deploy --prod --yes
```

(Requires the [Vercel CLI](https://vercel.com/docs/cli) — install with `bun install -g vercel` and authenticate once.)

## Project structure

```
├── index.html         # Entry point
├── src/
│   ├── main.js       # App logic (theme toggle, greeting, counter, error boundary)
│   └── style.css     # App styles using CSS variables
├── theme.css         # Color tokens for BB Pastel and Nord palettes
├── vite.config.js    # Vite config (port 5173, auto-open)
├── mise.toml         # Runtime pinning (node lts, bun latest)
├── AGENTS.md         # Persistent dev context
└── .gitignore
```

## Features

- **Greeting card** — type a name and hit Enter or click "Say Hello"
- **Counter** — increment, decrement, reset with toast notifications
- **Error demo** — triggers an intentional error to show the error boundary
- **Theme toggle** — switches between BB Pastel (sage greens/peach) and Nord (arctic blues/cool greys); preference saved to localStorage
