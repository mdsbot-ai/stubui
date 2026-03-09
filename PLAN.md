# ASCII UI — Product Plan

> A visual prompt builder and ASCII component library for designers building UI with Claude Code.
> Open source. Standalone site. Links to Shift Nudge.

---

## What It Is

An interactive tool where designers:
1. Browse a comprehensive ASCII component library (fuzzy search + sidebar nav)
2. @mention components in a text input to compose prompts
3. Use a 12-column visual grid to define layout
4. Copy a generated prompt that combines layout + components + descriptions

**The output is what you paste into Claude Code.**

---

## Core Features

### 1. Component Library (Browse + Search)
- Every component has an ASCII art representation + short description
- Organized by category with left sidebar navigation
- Fuzzy search at the top
- Each ASCII block has a one-click copy button
- Light and dark mode

### 2. Prompt Builder (Text Input + @mentions)
- Text input field where you describe what you want
- @mention component names with fuzzy autocomplete
- Mentioning a component pulls its ASCII block into the generated prompt
- Output includes: user's description + ASCII layout + component legend

### 3. Visual Grid Tool (12-Column)
- 12×12 grid (12 columns, variable rows)
- Click and drag to highlight regions
- Assign components to regions
- Grid translates to ASCII layout in the prompt
- Visual preview of the layout you're defining

### 4. Generated Prompt Output
- Combines all three inputs into a copy-ready prompt
- Includes: natural language intent, ASCII layout diagram, component descriptions
- One-click copy to clipboard
- Maybe: save/share prompt via URL

---

## Design Constraints

- **12-column grid** for the site layout itself
- **Single font** (monospace, likely)
- **Very subtle box-shadow** around grid/component blocks
- **Light + Dark mode** (toggle)
- **Minimal, restrained** — the ASCII art IS the design language

---

## Component Inventory (99 total)

### From shadcn/ui (59 components)

#### Layout (6)
1. Aspect Ratio
2. Card
3. Resizable
4. Scroll Area
5. Separator
6. Sidebar

#### Navigation (5)
7. Breadcrumb
8. Menubar
9. Navigation Menu
10. Pagination
11. Tabs

#### Overlay / Modal (9)
12. Alert Dialog
13. Context Menu
14. Dialog
15. Drawer
16. Dropdown Menu
17. Hover Card
18. Popover
19. Sheet
20. Tooltip

#### Form Inputs (19)
21. Button
22. Button Group
23. Calendar
24. Checkbox
25. Combobox
26. Date Picker
27. Field
28. Input
29. Input Group
30. Input OTP
31. Label
32. Native Select
33. Radio Group
34. Select
35. Slider
36. Switch
37. Textarea
38. Toggle
39. Toggle Group

#### Data Display (10)
40. Avatar
41. Badge
42. Carousel
43. Chart
44. Data Table
45. Empty
46. Item
47. Kbd
48. Table
49. Typography

#### Feedback (6)
50. Alert
51. Progress
52. Skeleton
53. Sonner (Toast)
54. Spinner
55. Toast

#### Disclosure (2)
56. Accordion
57. Collapsible

#### Command / Search (1)
58. Command

#### Utility (1)
59. Direction

---

### Gap Fills — Tier 1: High Value (9)

| # | Component | Source Libraries | Notes |
|---|-----------|-----------------|-------|
| 60 | Rating | Ant, MUI, Chakra, Mantine, Park, DaisyUI | `★★★☆☆` — universal pattern |
| 61 | Stepper / Steps | Ant, MUI, Chakra, Mantine, Park, DaisyUI | Multi-step wizard indicator |
| 62 | Timeline | Ant, MUI, Chakra, Mantine, Park, DaisyUI | Vertical event log with connector lines |
| 63 | Stat / Statistic | Ant, Chakra, DaisyUI | Number + label + delta display |
| 64 | Tags Input | Mantine, React Aria, Park | Multi-value chip input |
| 65 | Segmented Control | Ant, Chakra, Mantine, Park | Tab-like toggle for small option sets |
| 66 | Number Input | Chakra, Mantine, React Aria, Park | Numeric stepper with +/- |
| 67 | File Upload / Drop Zone | Ant, Mantine, React Aria, Park | Drag-drop file area |
| 68 | Chip / Tag | Ant, MUI, Chakra, Mantine, React Aria | Interactive closeable tag |

### Gap Fills — Tier 2: Strong Patterns (9)

| # | Component | Source Libraries | Notes |
|---|-----------|-----------------|-------|
| 69 | Color Picker | Ant, Mantine, React Aria, Park | Hue/saturation selector |
| 70 | Navbar / App Bar | MUI, Mantine, DaisyUI | Top navigation bar |
| 71 | Indicator | Chakra, Mantine, DaisyUI | Corner-positioned dot/badge |
| 72 | Tree View | Ant, MUI, Mantine, React Aria, Park | Hierarchical `├──` tree |
| 73 | Empty State | Ant, Chakra | Icon + heading + CTA |
| 74 | Status Indicator | Chakra, DaisyUI | Online/offline/error dot |
| 75 | Editable | Chakra, Park | Click-to-edit inline text |
| 76 | Spoiler / Show More | Mantine | Truncated text with expand |
| 77 | Password Input | Mantine | Input with show/hide toggle |

### Gap Fills — Tier 3: Specialized (10)

| # | Component | Notes |
|---|-----------|-------|
| 78 | Code Block | Syntax display + copy button |
| 79 | Chat Bubble | Human/AI/system message bubble |
| 80 | QR Code | QR code display |
| 81 | Countdown / Timer | Animated countdown |
| 82 | Diff / Comparison | Side-by-side diff view |
| 83 | Ring Progress | Circular progress indicator |
| 84 | Mockup Frames | Browser/phone/window frames |
| 85 | Signature Pad | Freehand drawing input |
| 86 | Tour / Onboarding | Step-by-step overlay |
| 87 | Watermark | Content protection overlay |

### Gap Fills — Tier 4: Organisms / Composed Patterns (12)

| # | Component | Notes |
|---|-----------|-------|
| 88 | Stat Card | Card with metric, label, trend arrow |
| 89 | Hero Section | Full-width headline + CTA |
| 90 | Footer | Site footer with columns |
| 91 | Auth Form | Login/signup with social buttons |
| 92 | Pricing Table | Plan comparison with CTAs |
| 93 | Feature Grid | Icon + title + description cards |
| 94 | Profile Card | Avatar + name + bio + links |
| 95 | Notification Item | Icon + title + time + read state |
| 96 | Confirmation Dialog | Pre-composed confirm/cancel |
| 97 | Toolbar | Fixed action bar with icon buttons |
| 98 | Description List | Key-value pairs in compact table |
| 99 | Image Gallery | Grid/masonry photo layout |

---

## Notation System

### The Three Sizing Modes

Borrowed from Figma's auto layout mental model. Three characters, three behaviors:

```
(~ fill ~)    → stretches to fill available space
[ fixed ]     → explicit/fixed width
( hug )       → shrinks to fit content
```

This is the foundation of the entire notation language. Designers already think in hug, fixed, and fill. We're just giving it a text syntax.

### How Sizing Works in Practice

**Fill** — the `~` signals "I'm fluid, stretch me":
```
[logo] (~ nav ~) [btn]
```
Logo fixed, nav fills middle, button fixed.

**Fixed** — square brackets signal rigid width:
```
[ sidebar ] (~ content ~)
```
Sidebar is fixed width, content fills remaining space.

**Hug** — plain parens, content determines size:
```
(tag) (tag) (tag)
```
Each tag wraps to its content width.

**Centering** — equal fill on both sides:
```
(~ ~) [ card ] (~ ~)
```

**Responsive width via dash count** — more dashes = wider:
```
[btn]                              ← compact
[- - btn - -]                      ← medium
[- - - - - btn - - - - -]         ← wide
```

### Notation Rules

| Symbol | Meaning |
|--------|---------|
| `[ ]` | Fixed width container |
| `( )` | Hug content container |
| `(~ ~)` | Fill available space |
| `- -` | Stretch/spacer (dash count = relative width) |
| `\|` | Vertical divider / column separator |
| `●` / `○` | Active / inactive state |
| `✓` | Complete / checked |
| `★` / `☆` | Filled / empty (ratings) |
| `≡` | Hamburger menu / collapsed |
| `├──` `└──` `│` | Tree hierarchy connectors |

---

## ASCII Representation Format

Each component gets:
- **Name** (e.g., `Button`)
- **ASCII block** (the visual representation using the notation system)
- **Description** (one line, what it does)

### Examples

**Button:**
```
[ Button ]
```

**Navbar:**
```
[logo] (~ - - nav - - ~) [btn]
```

**Sidebar + Content:**
```
[ nav ] (~ - - - - content - - - - ~)
[ nav ] (~ - - - - - - - - - - - - ~)
[ nav ] (~ - - - - - - - - - - - - ~)
[ nav ] (~ - - - - - - - - - - - - ~)
```

**Data Table:**
```
| col    | col    | col    | col   |
|--------|--------|--------|-------|
| data   | data   | data   | data  |
| data   | data   | data   | data  |
| data   | data   | data   | data  |
```

**Timeline:**
```
  ●  Event title
  │  Description text
  │
  ○  Event title
  │  Description text
  │
  ○  Event title
```

**Rating:**
```
★ ★ ★ ☆ ☆
```

**Tree View:**
```
Root
├── Folder
│   ├── File
│   └── File
└── Folder
    └── File
```

**Stepper:**
```
(●)───(●)───(○)───( )
 ✓     ✓   current  
```

**Progress:**
```
[████████░░░░░░░░] 50%
```

**Card (centered):**
```
(~ ~) [ - - card - - ] (~ ~)
```

**Responsive Navbar (desktop vs mobile):**
```
desktop: [logo] (~ - - nav - - ~) [btn]
mobile:  [logo] (~ ~) [≡]
```

### Pre-Built Layout Templates

Full-page ASCII templates for common patterns:

**Dashboard:**
```
[logo] (~ - - nav - - ~) (avatar)
[ sidebar ] (~ - - - - - - - - - - ~)
[ sidebar ] | stat | stat | stat |
[ sidebar ] (~ - - - - - - - - - - ~)
[ sidebar ] | - - table - - - - - -|
[ sidebar ] | - - - - - - - - - - -|
```

**Landing Page:**
```
[logo] (~ - - nav - - ~) [btn]
(~ - - - - hero - - - - ~)
(~ - - - - hero - - - - ~)
| feature | feature | feature |
(~ - - testimonials - - ~)
(~ - - - - cta - - - - ~)
(~ - - - footer - - - ~)
```

**Settings Page:**
```
[logo] (~ - - nav - - ~) (avatar)
[ sidebar ] (~ - - - - - - - - ~)
[ sidebar ] [ label ] (~ input ~)
[ sidebar ] [ label ] (~ input ~)
[ sidebar ] [ label ] (~ select ~)
[ sidebar ] (~ ~) [ save ] [cancel]
```

---

## Distribution Channels

### 1. Browser (Primary)
The main product. Visual grid tool, search, prompt builder, lead magnet funnel.

### 2. MCP Server (Claude Code Native)
An MCP server that exposes all components as searchable tools:
- `get_component("data-table")` returns ASCII block + description
- `search_components("form")` returns matching components
- `get_layout("dashboard")` returns pre-built layout templates
- Claude Code discovers these tools via MCP, so you can reference components naturally in conversation
- This is the killer integration for the Claude Code audience

### 3. npm Package (Developer Reference)
Lightweight package with the JSON data file + a CLI:
- `npx ascii-ui button` prints the ASCII block
- `npx ascii-ui search form` lists matching components
- `npx ascii-ui layouts` lists pre-built templates
- Low effort to build since it's just the data file + a thin CLI wrapper

All three channels powered by the same `components.json` data file.

---

## Site Architecture

```
/                     → Homepage (hero + search + featured components)
/components           → Full library (sidebar nav + grid of components)
/components/[name]    → Individual component page (ASCII + description + copy)
/builder              → Prompt builder (text input + @mentions + grid + output)
/layouts              → Pre-built full-page layout templates
/guide                → Prompt writing best practices + notation reference
/about                → About + link to Shift Nudge
```

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Font:** Monospace (JetBrains Mono or similar)
- **Search:** Client-side fuzzy search (Fuse.js or similar)
- **Grid Tool:** Canvas or CSS Grid with click/drag interaction
- **Data:** JSON file with all components (name, category, ascii, description, legend)
- **MCP Server:** TypeScript, stdio transport (for Claude Code integration)
- **CLI:** Thin wrapper around components.json
- **Deployment:** Vercel
- **Repo:** GitHub, open source (MIT or similar)

---

## Build Phases

### Phase 1: Data + Component Library
- Define ASCII art for all 99 components using the notation system
- Create `components.json` data file (name, category, ascii, description, sizing mode)
- Build component browse page with sidebar + fuzzy search
- Copy button on each block
- Light/dark mode
- Pre-built layout templates page
- Notation reference / guide page
- Ship as v0.1

### Phase 2: Prompt Builder + MCP Server
- Text input with @mention autocomplete
- Component tagging pulls ASCII blocks into output
- Generated prompt with copy button
- MCP server (TypeScript, stdio) exposing components as tools
- npm package with CLI (`npx ascii-ui button`)
- Ship as v0.2

### Phase 3: Visual Grid Tool
- 12-column interactive grid
- Click/drag to define regions
- Assign components to regions
- Grid translates to ASCII notation in prompt output
- Sizing modes (hug/fixed/fill) assignable per region
- Ship as v0.3

### Phase 4: Polish + Lead Magnet
- Share prompt via URL
- Community submissions for ASCII art
- Premium CLAUDE.md download with full library embedded
- Email capture for updates
- Composition examples (how atoms combine into molecules)
- Ship as v1.0

---

## Claude Code Build Strategy

Using **agent teams with worktree isolation** (new Claude Code features):

1. **Planning phase:** Use `/plan` to define architecture before any code
2. **Parallel agents by category:**
   - Agent 1: Site shell (Next.js, layout, nav, dark mode)
   - Agent 2: Component data (JSON for all 99 components + ASCII art)
   - Agent 3: Search + browse UI
   - Agent 4: Prompt builder + @mention system
   - Agent 5: Grid tool
3. **Each agent in its own worktree** (`isolation: worktree`)
4. **Use `/loop`** for automated linting/testing during development
5. **Use `/batch`** for bulk operations across component files

---

## Open Questions

1. Domain name? (ascii-ui.com, asciiui.dev, etc.)
2. License? (MIT seems right for open source)
3. Do we want a markdown file export alongside the prompt? (e.g., download as .md)
4. Should the grid tool support saving/loading layouts?
5. Community contribution model for new ASCII components?

---

*Created: 2026-03-09 | Project: ASCII UI | Status: Planning*
