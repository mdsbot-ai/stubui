# Phase 2: Prompt Builder — Specification

## Overview

The builder is the core interactive feature of stubui. It turns browsing into doing.

Users type a natural language description of what they want to build, @mention components along the way, and get a copy-ready prompt that includes their intent + ASCII layouts + component descriptions.

---

## URL

`/builder`

---

## Layout

Full-width page, two-panel layout on desktop:

```
[header nav]
+----------------------------------+-------------------+
|                                  |                   |
|  PROMPT INPUT                    |  GENERATED OUTPUT |
|  (left panel, ~60%)              |  (right panel)    |
|                                  |                   |
+----------------------------------+-------------------+
```

On mobile: stacked vertically (input on top, output below).

---

## Left Panel: Prompt Input

### 1. Text Area with @mention Support

- Large textarea (min 200px height, auto-grows)
- When user types `@`, show a fuzzy-search dropdown of all 99 components
- Dropdown filters as they type after `@` (e.g., `@dat` shows "Data Table", "Date Picker")
- Selecting a component inserts `@component-name` as a styled tag/chip in the textarea
- Multiple @mentions allowed in a single prompt
- The textarea should feel like writing a message, not filling out a form

### 2. @mention Autocomplete Dropdown

- Appears below the cursor position (or at a fixed position below the textarea on mobile)
- Shows component name + category + tiny ASCII preview
- Keyboard navigable (arrow keys + enter to select)
- Escape to dismiss
- Max 8 results shown at once
- Fuzzy matching (same Fuse.js config as the component search)

### 3. Quick-Add Component Bar

- Below the textarea, a horizontal scrollable row of popular/recent components
- Click to insert @mention without typing
- Show as small chips: `[btn]` `[nav]` `[table]` `[card]` `[sidebar]` `[input]` `[dialog]` `[tabs]`
- These are the most commonly used components, hardcoded initially

### 4. Layout Template Selector (Optional)

- A small "Start from template" link/button
- Opens a dropdown with the 5 pre-built layouts (Dashboard, Landing Page, Settings, Blog, E-Commerce)
- Selecting one pre-fills the textarea with that layout's ASCII + a starter prompt
- User can then modify from there

---

## Right Panel: Generated Output

### 1. Live Preview

- Updates in real-time as the user types
- Shows the assembled prompt exactly as it will be copied

### 2. Prompt Structure

The generated prompt follows this format:

```
## Layout Intent

[user's natural language description]

## Components Used

[for each @mentioned component:]

### @component-name
[ASCII art block]
[one-line description]

## Notation Key

(~ fill ~) = stretches to fill available space
[ fixed ] = explicit/fixed width
( hug ) = shrinks to fit content
```

### 3. Copy Button

- Large, prominent "Copy Prompt" button at the top of the output panel
- Copies the full generated text to clipboard
- Visual feedback on copy (checkmark, "Copied!" text)
- The button should be sticky/visible even when scrolling the output

### 4. Token Count (Nice to Have)

- Small text showing approximate token count of the generated prompt
- Helps users understand prompt size

---

## Interaction Details

### @mention Rendering in Textarea

- After selecting a component, it renders as an inline chip/tag in the text
- The chip shows the component name and is styled distinctly (background color, monospace)
- Chips are deletable (backspace removes them)
- Internally stored as `@slug` in the text value

### Real-time Output Generation

- Output regenerates on every keystroke/change
- No submit button needed — it's always live
- Debounce the regeneration by ~150ms to avoid excessive rerenders

### Empty State

When the builder is empty, show:
- A brief explanation: "Describe your UI and @mention components to build a prompt"
- Example prompt to inspire: "Build me a dashboard with @sidebar, @data-table, and @pagination"
- The quick-add bar is visible

### Component Detail on Hover

- Hovering over an @mention chip in the textarea (or in the output) shows a tooltip with:
  - Full ASCII art
  - Component description
  - Category
  - Sizing mode

---

## Data Requirements

Uses the existing `components.json` — no new data files needed.

Need a utility function:
```typescript
function buildPrompt(text: string, mentionedComponents: Component[]): string
```

That takes the raw input text + resolved components and returns the formatted prompt string.

---

## Component Files to Create

```
/app/builder/page.tsx              — Page wrapper (server component)
/app/builder/BuilderClient.tsx     — Main builder client component
/components/PromptInput.tsx        — Textarea with @mention support
/components/MentionDropdown.tsx    — Autocomplete dropdown
/components/QuickAddBar.tsx        — Popular component chips
/components/PromptOutput.tsx       — Generated output panel
/components/CopyButton.tsx         — Copy to clipboard button
/lib/prompt.ts                     — Prompt generation utility
```

---

## Styling Rules

- Same 13px IBM Plex Mono everywhere
- Same font-weight 400
- ALL CAPS for section headings in the output
- Subtle box-shadow on the panels
- The @mention chips should use `var(--accent)` background with `var(--accent-fg)` text
- Output panel has a slightly different background (`var(--card-bg)`) to visually separate
- Works in both light and dark mode
- Mobile responsive: panels stack vertically

---

## Mobile Behavior

- Input textarea takes full width
- Quick-add bar scrolls horizontally
- @mention dropdown appears below textarea (not floating at cursor)
- Output panel appears below input with a "Show Output" toggle or just stacks naturally
- Copy button stays sticky at bottom of screen on mobile

---

## What NOT to Build Yet

- Visual 12-column grid tool (Phase 3)
- Save/share prompts via URL (Phase 4)
- MCP server integration (Phase 2 but separate track)
- npm CLI (Phase 2 but separate track)
