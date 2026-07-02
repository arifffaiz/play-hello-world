# play-hello-world

## Stack
- **Runtime:** Bun (1.3+) via mise
- **Build:** Vite (vanilla JS)
- **CSS:** Custom properties with two theme palettes (BB Pastel / Nord)
- **Data:** None (static client-side app)
- **Secrets:** `.env` file (none needed currently)

## Project structure
```
/
├── index.html         # Entry point
├── src/
│   ├── main.js       # App logic
│   └── style.css     # App styles
├── theme.css         # Color tokens (BB Pastel + Nord)
├── vite.config.js    # Vite config
├── .gitignore
├── mise.toml         # Runtime pinning
└── AGENTS.md         # This file
```

## Commands
- `bun run dev` — start dev server (localhost:5173)
- `bun run build` — production build to `dist/`
- `bun run preview` — preview production build

## Conventions
- No hardcoded hex colors — use CSS variables from theme.css
- `data-theme="bb-pastel" | "nord"` on `<html>` for theme
- Theme preference persisted in `localStorage`
- Use `safeAsync()` wrapper for async error handling

## Design system
- Two locked palettes in theme.css: BB Pastel (default) and Nord (alt)
- BB Pastel: sage greens, butter yellows, peach corals, warm Montessori feel
- Nord: arctic blues, cool greys, snow whites, clean minimal feel
- Light mode only (dark mode not implemented yet)
