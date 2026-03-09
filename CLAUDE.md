# CLAUDE.md — stubui

## What This Is

stubui is an ASCII UI component library and prompt builder for designers using Claude Code.
It provides a shared notation language for describing UI layout in text form.

## The Notation System

Three sizing modes (borrowed from Figma auto layout):
```
(~ fill ~)    → stretches to fill available space
[ fixed ]     → explicit/fixed width
( hug )       → shrinks to fit content
```

Dashes indicate relative width: more dashes = wider component.

## Architecture

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Font:** JetBrains Mono (monospace)
- **Search:** Client-side fuzzy search (Fuse.js)
- **Data:** Single `components.json` powers everything
- **Deployment:** Vercel

## Design Constraints

- 12-column grid layout for the site itself
- Single font size (monospace)
- Very subtle box-shadow around component blocks
- Light + dark mode
- Minimal, restrained — the ASCII art IS the design language
- No unnecessary decoration

## Project Structure

```
/app                  → Next.js app router pages
/app/components       → Component library browse page
/app/builder          → Prompt builder page
/app/layouts          → Pre-built layout templates
/app/guide            → Notation reference
/components           → React components
/data                 → components.json, layouts.json
/lib                  → Utilities, search, types
/public               → Static assets
```

## Component Data Format

Each component in components.json:
```json
{
  "name": "Button",
  "slug": "button",
  "category": "form-inputs",
  "ascii": "[ Button ]",
  "description": "A clickable element that triggers an action",
  "sizing": "fixed",
  "source": "shadcn"
}
```

## Pages

- `/` — Homepage with hero, search, featured components
- `/components` — Full library with sidebar nav + grid
- `/components/[slug]` — Individual component page
- `/builder` — Prompt builder with @mentions
- `/layouts` — Pre-built full-page templates
- `/guide` — Notation reference + prompt best practices

## Key Rules

- All component data lives in a single JSON file
- ASCII representations use the notation system (hug/fixed/fill)
- Every ASCII block gets a copy button
- The prompt builder combines text + @mentioned components into copy-ready output
- Dark mode is first-class, not an afterthought

## ⚠️ CRITICAL: Monospace Alignment

ASCII art MUST render with perfect character alignment. This is non-negotiable.

### Font Rules
- Use JetBrains Mono exclusively for all ASCII blocks
- Set `font-variant-ligatures: none` — ligatures break character alignment
- Set `font-feature-settings: "liga" 0, "calt" 0` — disable all OpenType features
- Use `white-space: pre` on all ASCII containers — preserve exact spacing
- Set explicit `letter-spacing: 0` — no browser default spacing
- Set `tab-size: 4` for consistent tab rendering
- Use `text-rendering: optimizeLegibility` is FORBIDDEN on ASCII blocks (it enables kerning)

### Character Rules
- ASCII art must ONLY use characters that are exactly 1 monospace unit wide
- FORBIDDEN characters in ASCII blocks: emoji (variable width), CJK characters, most Unicode symbols
- SAFE special characters: `─ │ ├ └ ┤ ┐ ┘ ┌ ┬ ┴ ┼` (box drawing), `● ○ ★ ☆ ✓ ≡ █ ░`
- Test every special character renders at exactly 1 character width
- When in doubt, use plain ASCII: `- | + * #` instead of Unicode

### Display Rules
- Wrap all ASCII blocks in a `<pre><code>` with the monospace font
- Never apply text transforms (uppercase/lowercase) to ASCII blocks
- Never apply word-wrap or overflow-wrap to ASCII blocks
- Set `overflow-x: auto` with horizontal scroll for wide blocks
- Container width should accommodate the widest line without wrapping
- Add line-height that matches character height for vertical alignment

### Testing
- Every ASCII block must be visually verified that columns align
- A simple test: any vertical line of `|` characters must form a perfectly straight line
- Box drawing characters must connect seamlessly at corners and intersections
