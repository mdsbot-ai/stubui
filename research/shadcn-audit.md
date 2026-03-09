# shadcn/ui — Complete Component Audit

> Audited: 2026-03-09
> Source: https://ui.shadcn.com/docs/components (live sidebar) + Charts section + GitHub repo
> Total components catalogued: 59 UI components + 7 chart types

shadcn/ui now ships components in two primitive flavors: **Radix UI** (original) and **Base UI** (newer, from MUI team). Both share the same component names and docs page — they're alternate implementations of the same visual library. This audit treats them as one library.

---

## Components by Category

### Layout

| Component | Description | URL Slug |
|-----------|-------------|----------|
| Aspect Ratio | Displays content within a desired ratio, preventing layout shift | `aspect-ratio` |
| Card | A container for grouping related content and actions | `card` |
| Resizable | Draggable panels that allow users to resize layout sections | `resizable` |
| Scroll Area | Augments native scroll functionality with custom cross-browser styling | `scroll-area` |
| Separator | A visual or semantic divider between content sections | `separator` |
| Sidebar | A composable, responsive application sidebar with navigation | `sidebar` |

### Navigation

| Component | Description | URL Slug |
|-----------|-------------|----------|
| Breadcrumb | Displays the path to the current resource using a hierarchy of links | `breadcrumb` |
| Menubar | A horizontal menu bar with dropdowns, common in desktop-style apps | `menubar` |
| Navigation Menu | A collection of links for site navigation with optional dropdowns | `navigation-menu` |
| Pagination | Enables navigation between pages of content | `pagination` |
| Tabs | A set of layered sections of content that display one at a time | `tabs` |

### Overlay / Modal

| Component | Description | URL Slug |
|-----------|-------------|----------|
| Alert Dialog | A modal that interrupts the user with important content requiring acknowledgment | `alert-dialog` |
| Context Menu | A right-click menu displaying actions relevant to the selected element | `context-menu` |
| Dialog | A window overlaid on the primary content that requires user interaction | `dialog` |
| Drawer | A panel that slides in from the edge of the screen | `drawer` |
| Dropdown Menu | A menu that appears below a trigger, offering a list of actions | `dropdown-menu` |
| Hover Card | A card that appears when hovering over a trigger element | `hover-card` |
| Popover | A floating panel anchored to a trigger element | `popover` |
| Sheet | An extended dialog that slides in from the edge of the screen | `sheet` |
| Tooltip | A floating label that appears on hover to provide brief contextual info | `tooltip` |

### Form Inputs

| Component | Description | URL Slug |
|-----------|-------------|----------|
| Button | A clickable element that triggers an action | `button` |
| Button Group | Groups multiple buttons together with shared styling and spacing | `button-group` |
| Calendar | A date picker calendar for selecting single or range dates | `calendar` |
| Checkbox | A control that allows users to toggle a binary choice | `checkbox` |
| Combobox | A searchable select built with Command and Popover primitives | `combobox` |
| Date Picker | A date picker component composed from Calendar and Popover | `date-picker` |
| Field | Wraps labels, controls, and help text into accessible form fields | `field` |
| Input | A styled HTML text input for user text entry | `input` |
| Input Group | Groups an input with addons (icons, buttons) for composed form controls | `input-group` |
| Input OTP | A one-time password input with individual character slots | `input-otp` |
| Label | An accessible label for form controls | `label` |
| Native Select | A styled wrapper around the browser's native `<select>` element | `native-select` |
| Radio Group | A group of radio buttons for single-choice selection | `radio-group` |
| Select | A styled, accessible select menu built on Radix Select primitives | `select` |
| Slider | An input that lets users select a value from a range | `slider` |
| Switch | A toggle control for binary on/off states | `switch` |
| Textarea | A multi-line text input for longer form content | `textarea` |
| Toggle | A two-state button that can be either active or inactive | `toggle` |
| Toggle Group | A set of toggle buttons where one or more can be active at a time | `toggle-group` |

### Data Display

| Component | Description | URL Slug |
|-----------|-------------|----------|
| Avatar | A user profile image with fallback initials or icon | `avatar` |
| Badge | A small inline label for displaying status, counts, or categories | `badge` |
| Carousel | A slideshow component for cycling through images or content cards | `carousel` |
| Chart | A Recharts-based charting wrapper with shared config and theming | `chart` |
| Data Table | A powerful table built with TanStack Table for sorting/filtering/pagination | `data-table` |
| Empty | A composable empty state display with icon, title, description, and action | `empty` |
| Item | A flex container for displaying title, description, media, and actions in a list | `item` |
| Kbd | A keyboard key visual element for displaying shortcuts | `kbd` |
| Table | A standard HTML table with styled headers, rows, and cells | `table` |
| Typography | Predefined typographic styles for headings, paragraphs, lists, and code | `typography` |

### Feedback

| Component | Description | URL Slug |
|-----------|-------------|----------|
| Alert | A non-dismissible callout for displaying important messages | `alert` |
| Progress | A progress bar displaying the completion status of a task | `progress` |
| Skeleton | A placeholder animation shown while content is loading | `skeleton` |
| Sonner | An opinionated toast notification component powered by Sonner | `sonner` |
| Spinner | An animated loading indicator for async operations | `spinner` |
| Toast | A brief, auto-dismissing notification message | `toast` |

### Disclosure / Collapsible

| Component | Description | URL Slug |
|-----------|-------------|----------|
| Accordion | Vertically stacked headings that each reveal a section of content | `accordion` |
| Collapsible | A component for expanding/collapsing a section of content | `collapsible` |

### Command / Search

| Component | Description | URL Slug |
|-----------|-------------|----------|
| Command | A fast, composable command palette and search interface (cmdk) | `command` |

### Utility / Primitives

| Component | Description | URL Slug |
|-----------|-------------|----------|
| Direction | A utility provider for setting RTL/LTR text direction context | `direction` |

---

## Charts (Separate Section)

Built with [Recharts](https://recharts.org). Located at `/charts/*` with their own sidebar.

| Chart Type | Description |
|------------|-------------|
| Area Chart | Displays data trends over time with a filled area below the line |
| Bar Chart | Compares categorical data using horizontal or vertical bars |
| Line Chart | Shows trends over time with connected data points |
| Pie Chart | Displays proportional data as slices of a circle |
| Radar Chart | Visualizes multivariate data on a spider/radar grid |
| Radial Chart | A circular bar chart variant for showing proportional progress |
| Tooltip (Charts) | Shared chart tooltip component with customizable content |

---

## Summary Count

| Category | Count |
|----------|-------|
| Layout | 6 |
| Navigation | 5 |
| Overlay / Modal | 9 |
| Form Inputs | 19 |
| Data Display | 10 |
| Feedback | 6 |
| Disclosure / Collapsible | 2 |
| Command / Search | 1 |
| Utility / Primitives | 1 |
| **Total UI Components** | **59** |
| Charts (separate section) | 7 types |

---

## What shadcn/ui Does NOT Cover

These are common UI patterns found in other major libraries (MUI, Ant Design, Chakra UI, Mantine, etc.) that shadcn/ui does **not** include as built-in components:

### Missing Input/Form Components
| Gap | Notes |
|-----|-------|
| **File Upload / Dropzone** | No drag-and-drop file input; must use a third-party library like `react-dropzone` |
| **Color Picker** | No HSL/RGB/hex color selector; common in design tools and settings UIs |
| **Rating / Stars** | No star rating input component |
| **Rich Text Editor** | No WYSIWYG/markdown editor (Tiptap, Quill, etc.) |
| **Multi-select** | The Combobox can be adapted, but there's no dedicated multi-select component |
| **Phone Number Input** | No masked/formatted phone field |
| **Number Input / Stepper** | No increment/decrement number input (spinner input) |
| **Time Picker** | Calendar covers dates; no dedicated time picker |
| **Date Range Picker** | Calendar supports ranges, but no dedicated date range picker component |
| **Auto-complete** | The Command/Combobox covers this partially, but no purpose-built autocomplete |
| **PIN/Code Entry** | Input OTP covers this, but it's specialized |

### Missing Data Display
| Gap | Notes |
|-----|-------|
| **Timeline** | No vertical/horizontal timeline or activity feed component |
| **Stat / KPI Card** | No pre-built metric/statistic display card |
| **Tag / Chip Input** | No interactive tag input with add/remove functionality |
| **Tree View** | No hierarchical tree node component |
| **Kanban Board** | No drag-and-drop kanban or board layout |
| **Image Gallery / Lightbox** | No image grid or lightbox overlay |
| **Diff / Code Diff** | No side-by-side or inline code diff viewer |
| **Map / Geo Component** | No map integration component |
| **QR Code** | No QR code generator display |

### Missing Feedback/Overlay
| Gap | Notes |
|-----|-------|
| **Notification Center / Inbox** | Sonner handles toasts; no persistent notification panel |
| **Spotlight / Tour** | No guided onboarding or product tour component |
| **Confirmation Popover** | Must compose from Popover + Button manually |
| **Loading Overlay** | No full-screen or section loading overlay component |

### Missing Navigation
| Gap | Notes |
|-----|-------|
| **Stepper** | No multi-step form/wizard progress indicator |
| **Speed Dial** | No floating action button with sub-actions |
| **Dock / Bottom Navigation** | No mobile-style bottom nav bar |

### Missing Layout
| Gap | Notes |
|-----|-------|
| **Masonry Grid** | No masonry/waterfall layout component |
| **Infinite Scroll** | No built-in virtual/infinite list component |
| **Sticky Header / Scroll Spy** | No scroll-aware header behavior component |
| **Split View** | Resizable covers panes; no dedicated split-view abstraction |

### Missing Typography/Content
| Gap | Notes |
|-----|-------|
| **Markdown Renderer** | No styled markdown display component |
| **Copy-to-Clipboard Button** | Must compose manually (not a standalone component) |
| **Truncated Text / Clamp** | No line-clamp display component |

---

## Notes

- **shadcn/ui philosophy:** It's a *copy-paste component collection*, not a traditional npm package. The intentional scope is focused — it provides primitives that developers extend, rather than covering every UI pattern.
- **Registry model (new):** shadcn now supports a public Registry, meaning third-party component authors can publish shadcn-compatible components. Some "missing" components may exist in the community registry.
- **Base UI parity:** As of 2026, most components now have both a Radix UI and Base UI implementation available. They are functionally equivalent but backed by different headless primitive libraries.
- **v0 / AI integration:** shadcn ships with a `Create` feature and MCP server integration, suggesting AI-generated blocks are becoming a first-class extension mechanism.
