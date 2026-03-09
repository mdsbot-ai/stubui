# UI Component Library Gap Analysis
> Research for ASCII UI — Components Beyond shadcn/ui
> Generated: 2026-03-09

---

## Reference: shadcn/ui Complete Component List

Current (as of March 2025):

> Accordion · Alert · Alert Dialog · Aspect Ratio · Avatar · Badge · Breadcrumb · Button · Button Group · Calendar · Card · Carousel · Chart · Checkbox · Collapsible · Combobox · Command · Context Menu · Data Table · Date Picker · Dialog · Direction · Drawer · Dropdown Menu · Empty · Field · Hover Card · Input · Input Group · Input OTP · Item · Kbd · Label · Menubar · Native Select · Navigation Menu · Pagination · Popover · Progress · Radio Group · Resizable · Scroll Area · Select · Separator · Sheet · Sidebar · Skeleton · Slider · Sonner (Toast) · Spinner · Switch · Table · Tabs · Textarea · Toast · Toggle · Toggle Group · Tooltip · Typography

**Count: ~56 components**

---

## Library-by-Library Audit

### 1. Radix UI Primitives
*shadcn's foundation — any unused primitives?*

Radix UI primitives used by shadcn: Accordion, Alert Dialog, Avatar, Checkbox, Collapsible, Context Menu, Dialog, Dropdown Menu, Hover Card, Label, Menubar, Navigation Menu, Popover, Progress, Radio Group, Scroll Area, Select, Separator, Slider, Switch, Tabs, Toast, Toggle, Toggle Group, Tooltip.

**Radix primitives NOT wrapped by shadcn:**
- **Toolbar** — Grouping of actions/controls (e.g., text editor toolbar). No shadcn equivalent.
- **Direction Provider** — RTL/LTR context. Shadcn has `Direction` but it's minimal.
- **Accessible Icon** — Wraps icons for screen reader accessibility. No shadcn equivalent.
- **Visually Hidden** — Hides element visually but keeps accessible. No shadcn equivalent.
- **Portal** — Renders outside DOM tree. No direct shadcn component.
- **Announce** — Live region for screen reader announcements. No shadcn equivalent.

---

### 2. Ant Design (antd)
*The most exhaustive enterprise React library. ~60+ unique components.*

**General:**
- Button, Icon, Typography ✓ (shadcn has these)
- **FloatButton** — Floating action button pinned to viewport. Missing in shadcn.

**Layout:**
- Grid/Row/Col, Layout, Space, Flex, Divider ✓ (shadcn partial)
- **Splitter** — Resizable split pane (shadcn has `Resizable` via react-resizable-panels)

**Navigation:**
- Dropdown, Menu, Pagination, Breadcrumb, Tabs ✓ (shadcn has)
- **Anchor** — Anchor/jump-to-section navigation with active tracking. Missing in shadcn.
- **Back Top** — Scroll-to-top floating button. Missing in shadcn.
- **Steps** — Multi-step wizard indicator. Missing in shadcn.

**Data Entry:**
- Input, Select, Checkbox, Radio, Switch, Slider, DatePicker, TimePicker ✓ (shadcn has most)
- **AutoComplete** — Autocomplete input with options panel. Shadcn has `Combobox` (pattern) but not a standalone component.
- **Cascader** — Multi-level select / nested category picker. Missing in shadcn.
- **ColorPicker** — Full color picker with spectrum, presets, input modes. Missing in shadcn.
- **Mentions** — `@mention` input field with suggestion dropdown. Missing in shadcn.
- **Rate** — Star/icon rating input. Missing in shadcn.
- **TimePicker** — Standalone time input. Missing in shadcn (Date Picker handles full datetime).
- **Transfer** — Dual-list transfer widget (move items between two lists). Missing in shadcn.
- **TreeSelect** — Hierarchical tree select/dropdown. Missing in shadcn.
- **Upload** — File upload with drag-drop, preview, progress list. Missing in shadcn.

**Data Display:**
- Avatar, Badge, Card, Carousel, Table, Tooltip ✓ (shadcn has)
- **Calendar** — Full month-view event calendar. Shadcn has basic date picker calendar.
- **Collapse / Accordion** ✓
- **Descriptions** — Key-value description list. Missing in shadcn.
- **Empty** — Empty state placeholder component. Shadcn has a basic `Empty` field.
- **Image** — Enhanced image with zoom/preview gallery. Missing in shadcn.
- **List** — Vertical list with avatar, metadata, actions. Missing in shadcn.
- **Popconfirm** — Inline confirmation popover. Missing in shadcn.
- **QRCode** — QR code generator component. Missing in shadcn.
- **Segmented** — Segmented control (radio-button-style tabs). Missing in shadcn.
- **Statistic** / **Countdown** — Stat number display with optional countdown. Missing in shadcn.
- **Tag** — Closeable tag/chip component. Missing in shadcn (Badge is non-interactive).
- **Timeline** — Vertical event timeline. Missing in shadcn.
- **Tour** — Step-by-step product tour/onboarding overlay. Missing in shadcn.
- **Tree** — Hierarchical tree view with expand/collapse. Missing in shadcn.
- **Watermark** — Adds a page watermark. Missing in shadcn.

**Feedback:**
- Alert, Dialog, Skeleton, Progress, Toast ✓
- **Drawer** ✓ (shadcn has)
- **Message** — Inline flash message (top-of-page). Different from shadcn's Toast.
- **Modal** / **Popconfirm** — Inline confirm dialogs. shadcn's Alert Dialog covers modal.
- **Notification** — System notification panel (stacked, closeable). shadcn Sonner covers basic.
- **Result** — Success/error/info full-page result screen. Missing in shadcn.
- **Spin** — Loading spinner/indicator. Shadcn has `Spinner` and `Skeleton`.

---

### 3. Material UI (MUI)
*Comprehensive Material Design implementation. 90+ components across core + lab + x.*

**Inputs (beyond shadcn):**
- **Autocomplete** — Type-ahead search with async support, grouped options. Missing as standalone.
- **Rating** — Star rating input. Missing in shadcn.
- **ToggleButton / ToggleButtonGroup** — Shadcn has Toggle/ToggleGroup (similar but simpler).
- **Transfer List** — Move items between two lists. Missing in shadcn.

**Data Display (beyond shadcn):**
- **Chip** — Interactive tag/chip with avatar, delete button, clickable states. Missing in shadcn.
- **Divider** ✓ (shadcn has Separator)
- **ImageList / ImageListItem** — Masonry/grid photo gallery. Missing in shadcn.
- **List / ListItem / ListItemButton** — Full list components with density, icons, secondary actions. Missing in shadcn.
- **Typography** ✓

**Feedback (beyond shadcn):**
- **Backdrop** — Full-screen dimming overlay. Missing as standalone in shadcn.
- **CircularProgress** — Circular loading indicator. Shadcn has `Spinner` (simpler).
- **LinearProgress** — Linear loading bar with determinate/indeterminate modes. Shadcn has `Progress`.
- **Snackbar** — Non-intrusive notification snack. Similar to Sonner but different UX.
- **SpeedDial** — Expandable FAB with multiple action buttons. Missing in shadcn.

**Navigation (beyond shadcn):**
- **BottomNavigation** — Mobile bottom nav bar. Missing in shadcn.
- **Breadcrumbs** ✓
- **Drawer** ✓
- **Link** ✓
- **MobileStepper** — Simplified stepper for mobile flows. Missing in shadcn.
- **Stepper** — Full horizontal/vertical step indicator. Missing in shadcn.
- **Tabs** ✓

**Layout (beyond shadcn):**
- **Accordion** ✓
- **AppBar** — Top application bar with elevation. Missing in shadcn (Navbar pattern).
- **Card** ✓
- **Container** — Max-width content wrapper. No shadcn equivalent.
- **Grid** — 12-column layout grid. No shadcn equivalent (utility-based).
- **ImageList** — Masonry/standard/quilted gallery. Missing in shadcn.
- **Paper** — Elevated surface container. Missing in shadcn.
- **Stack** — Flexbox stack with spacing. Missing as component (Tailwind replaces it).

**Lab / X (beyond shadcn):**
- **DataGrid** — Advanced sortable, filterable, paginated data table. Shadcn has basic `Data Table`.
- **DateTimePicker** — Full date + time combined picker. Missing in shadcn.
- **Masonry** — CSS masonry layout. Missing in shadcn.
- **Timeline** — Vertical event timeline. Missing in shadcn.
- **TreeView** — Hierarchical tree with expand/collapse. Missing in shadcn.

---

### 4. Chakra UI (v3)
*Developer-friendly component library with strong accessibility focus.*

**Beyond shadcn:**
- **ActionBar** — Fixed action bar that appears on selection. Missing in shadcn.
- **Blockquote** — Styled blockquote with citation. Missing as component.
- **Chat Bubble** — Message bubble (human/bot/system style). Missing in shadcn.
- **Clipboard** — One-click copy-to-clipboard button/icon. Missing as standalone component.
- **Color Mode** — Light/dark mode switcher button. Missing in shadcn.
- **DataList** — Key-value description list. Missing in shadcn.
- **Editable** — Click-to-edit inline text. Missing in shadcn.
- **Empty State** — Full empty state with icon + heading + action. Missing in shadcn.
- **Field** — Form field with label, helper, error. Shadcn has `Field`.
- **For** / **Show** — Conditional/loop rendering utilities. Missing in shadcn.
- **Group** — Groups buttons or form elements inline. Missing as component.
- **Highlight** — Text substring highlighting. Missing in shadcn.
- **Image** — Enhanced img with fallback. Missing as component in shadcn.
- **Indicator** — Small badge/dot positioned on a corner. Missing in shadcn.
- **Link Overlay** — Makes entire card/area clickable. Missing in shadcn.
- **List** — Styled ordered/unordered/plain lists. Missing in shadcn.
- **Mark** — Inline text highlighting with background. Missing in shadcn.
- **NativeSelect** ✓ (shadcn has)
- **NumberInput** — Numeric input with stepper buttons. Missing in shadcn.
- **Pin Input** — Multi-cell OTP/PIN input. Shadcn has `Input OTP`.
- **Rating** — Star rating display/input. Missing in shadcn.
- **Segmented Control** — Alternative tab-like selection. Missing in shadcn.
- **Stat** — Statistic display (number + label + delta). Missing in shadcn.
- **Status** — Colored status indicator dot. Missing in shadcn.
- **Steps** — Stepper/wizard progress. Missing in shadcn.
- **Tag** — Closeable tag/chip. Missing in shadcn.
- **Timeline** — Vertical event timeline. Missing in shadcn.

---

### 5. Mantine (v7)
*Feature-rich library with 120+ components and 70+ hooks.*

**Beyond shadcn:**
- **ActionIcon** — Icon-only button (circular/square). Missing as standalone.
- **Anchor** — Styled link with polymorphic support. Missing as component.
- **AppShell** — Full-page layout shell (header, sidebar, main). Missing in shadcn.
- **Autocomplete** — Text input with suggestions dropdown. Missing as standalone.
- **Blockquote** — Styled blockquote. Missing as component.
- **Burger** — Animated hamburger menu button. Missing in shadcn.
- **Center** — Centering layout utility. Missing as component.
- **Chip** — Toggle chip/tag button. Missing in shadcn.
- **CloseButton** — X dismiss button. Missing as standalone.
- **Code** — Inline code display. Missing in shadcn.
- **Code Highlight** — Syntax-highlighted code block. Missing in shadcn.
- **ColorInput** — Color input with picker popup. Missing in shadcn.
- **ColorPicker** — Full color picker (hue, saturation, alpha). Missing in shadcn.
- **ColorSwatch** — Color swatch display. Missing in shadcn.
- **Combobox** ✓ (pattern in shadcn)
- **DateInput** — Date text field with parsing. Missing as standalone.
- **DatePickerInput** — Date range/multi picker input. Shadcn has basic Calendar.
- **DatesProvider** — Locale/timezone context for date components. Missing.
- **FileInput** — Styled file input. Missing in shadcn.
- **Flex** — Flexbox utility component. Missing as component.
- **FocusTrap** — Keyboard focus trap for modals. Missing as standalone.
- **Grid** — Responsive grid system. Missing as component.
- **Group** — Horizontal flex group. Missing as component.
- **Highlight** — Text substring highlight. Missing in shadcn.
- **HoverCard** ✓ (shadcn has)
- **Indicator** — Positioned badge/dot. Missing in shadcn.
- **Mark** — Text mark/highlighter. Missing in shadcn.
- **Modal** / **Drawer** ✓
- **MultiSelect** — Multiple option select with chips. Missing in shadcn.
- **NavLink** — Styled navigation link with nested support. Missing in shadcn.
- **Notification** — Toast-style notification. Shadcn has Sonner.
- **NumberFormatter** — Format numbers with locale. Missing as component.
- **NumberInput** — Number input with stepper. Missing in shadcn.
- **Paper** — Card-like elevated surface. Missing in shadcn.
- **PasswordInput** — Password field with show/hide toggle. Missing in shadcn.
- **PinInput** — OTP/PIN multi-cell input. Shadcn has Input OTP.
- **Rating** — Star rating. Missing in shadcn.
- **RichTextEditor** — Full WYSIWYG editor (based on Tiptap). Missing in shadcn.
- **RingProgress** — Circular progress ring. Missing in shadcn.
- **SegmentedControl** — Tab-like segmented selector. Missing in shadcn.
- **SimpleGrid** — Auto-responsive grid. Missing as component.
- **Space** — Spacer utility. Missing as component.
- **Spoiler** — Show-more / collapse text. Missing in shadcn.
- **Spotlight** — Command palette / keyboard search. Missing in shadcn.
- **Stack** — Vertical flex group. Missing as component.
- **Stepper** — Multi-step wizard. Missing in shadcn.
- **TagsInput** — Multi-value tag input. Missing in shadcn.
- **Timeline** — Vertical event timeline. Missing in shadcn.
- **Title** — Semantic heading. Missing as component.
- **TransferList** — Dual-list item transfer. Missing in shadcn.
- **Tree** — Hierarchical tree. Missing in shadcn.
- **YearPicker / MonthPicker** — Date range partial pickers. Missing in shadcn.

---

### 6. Headless UI
*Minimal; only 8 fully-built components (all behavior-driven).*

All 8 components:
- **Combobox** — Autocomplete. Shadcn Combobox is a pattern over Command.
- **Dialog** ✓ (shadcn has)
- **Disclosure** — Minimal show/hide toggle (lighter than Accordion). Missing in shadcn.
- **Listbox** — Custom accessible select. shadcn uses Select.
- **Menu** ✓ (shadcn Dropdown)
- **Popover** ✓
- **Radio Group** ✓
- **Switch** ✓
- **Tabs** ✓
- **Transition** — Enter/exit CSS transition wrapper. Missing in shadcn.

**Beyond shadcn:**
- **Disclosure** — Simple open/close toggle without full accordion complexity.
- **Transition** — CSS transition wrapper for enter/leave animations.

---

### 7. React Aria / Adobe Spectrum
*Accessibility-first. Strong set of unique components.*

**Beyond shadcn (from react-aria-components package):**
- **Autocomplete** — Searchable list with keyboard navigation. Missing as standalone.
- **ColorArea** — 2D saturation/brightness color picker. Missing in shadcn.
- **ColorField** — Hex color text input. Missing in shadcn.
- **ColorPicker** — Full color picker composition. Missing in shadcn.
- **ColorSlider** — Hue/saturation/alpha slider. Missing in shadcn.
- **ColorSwatch** — Color swatch display. Missing in shadcn.
- **ColorSwatchPicker** — Grid of swatches to pick from. Missing in shadcn.
- **DateRangePicker** — Range date picker with two date inputs. Missing in shadcn.
- **DropZone** — Drag-and-drop file drop target. Missing in shadcn.
- **FileTrigger** — Hidden file input trigger. Missing in shadcn.
- **GridList** — Accessible grid/list with selection. Missing in shadcn.
- **ListBox** — Standalone listbox with selection. shadcn uses inside Select.
- **Meter** — Measurement display (like fuel gauge / capacity). Missing in shadcn.
- **NumberField** — Numeric input with step/min/max. Missing in shadcn.
- **RangeCalendar** — Date range selection calendar. Missing in shadcn.
- **SearchField** — Search input with clear button. Missing in shadcn.
- **TagGroup** — Group of closeable tags. Missing in shadcn.
- **TimeField** — Time input (HH:MM format). Missing in shadcn.
- **ToggleButton** ✓ (shadcn has Toggle)
- **TreeView** — Tree with aria-tree role. Missing in shadcn.

---

### 8. Park UI
*Built on Ark UI (state machine headless library). Exposes Ark's additional primitives.*

**Ark UI components used by Park UI that go beyond shadcn:**
- **Angle Slider** — Circular/rotary angle input. Missing in shadcn.
- **Clipboard** — Copy-to-clipboard action. Missing in shadcn.
- **Color Picker** — Full color picker. Missing in shadcn.
- **Editable** — Click-to-edit inline text. Missing in shadcn.
- **File Upload** — Full drag-drop file uploader. Missing in shadcn.
- **Number Input** — Numeric stepper input. Missing in shadcn.
- **Pin Input** — Multi-cell OTP input. Shadcn has Input OTP.
- **Qr Code** — QR code generator. Missing in shadcn.
- **Rating Group** — Star rating. Missing in shadcn.
- **Segmented Control** — Tab-like selector. Missing in shadcn.
- **Signature Pad** — Freehand signature drawing pad. Missing in shadcn.
- **Splitter** — Resizable split panes. Shadcn has Resizable.
- **Steps** — Stepper/wizard progress. Missing in shadcn.
- **Tags Input** — Multi-value tag input. Missing in shadcn.
- **Timeline** — Vertical event timeline. Missing in shadcn.
- **Timer** — Countdown timer. Missing in shadcn.
- **Tour** — Product tour/onboarding overlay. Missing in shadcn.
- **Tree View** — Hierarchical tree. Missing in shadcn.

---

### 9. DaisyUI
*65 Tailwind CSS component classes. Strong on "organisms" / marketing components.*

**Beyond shadcn:**
- **Chat Bubble** — Message bubble with avatar, name, time. Missing in shadcn.
- **Countdown** — Animated number countdown (0-999). Missing in shadcn.
- **Diff** — Side-by-side comparison display. Missing in shadcn.
- **Dock** — Mobile bottom navigation bar. Missing in shadcn.
- **FAB / Speed Dial** — Floating action button with expandable actions. Missing in shadcn.
- **Filter** — Radio-button filter group (show/hide pattern). Missing in shadcn.
- **Footer** — Page footer with logo, links, copyright. Missing in shadcn.
- **Hero** — Marketing hero section (full-width CTA block). Missing in shadcn.
- **Hover 3D Card** — 3D tilt-on-hover card effect. Missing in shadcn.
- **Hover Gallery** — Horizontal hover-to-reveal image gallery. Missing in shadcn.
- **Indicator** — Corner-positioned badge/dot. Missing in shadcn.
- **Join (Group)** — Groups buttons/inputs with shared border radius. Missing in shadcn.
- **List** — Vertical info list in rows. Missing in shadcn.
- **Loading** — Animated loading spinners (multiple styles). Shadcn has Spinner.
- **Mask** — Clip-path shape masking for images. Missing in shadcn.
- **Mockup** (Browser, Code, Phone, Window) — Device/window frame mockups. Missing in shadcn.
- **Navbar** — Top navigation bar with responsive utilities. Missing in shadcn.
- **Radial Progress** — Circular progress with CSS. Similar to Mantine RingProgress.
- **Rating** — Star rating display. Missing in shadcn.
- **Stack** — Overlapping element stack. Missing in shadcn.
- **Stat** — Statistic block (number + label + trend). Missing in shadcn.
- **Status** — Colored dot status indicator. Missing in shadcn.
- **Steps** — Multi-step wizard indicator. Missing in shadcn.
- **Swap** — Toggle between two states with animation. Missing in shadcn.
- **Text Rotate** — Looping text rotation animation. Missing in shadcn.
- **Theme Controller** — Dark/light mode toggle via checkbox. Missing as component.
- **Timeline** — Vertical timeline. Missing in shadcn.
- **Validator** — Form validation color feedback utility. Missing in shadcn.

---

## Gap Analysis Table

| Component | Radix | Ant | MUI | Chakra | Mantine | HUI | React Aria | Park | DaisyUI | shadcn Status |
|-----------|-------|-----|-----|--------|---------|-----|------------|------|---------|---------------|
| **Autocomplete / Combobox** | — | ✓ | ✓ | — | ✓ | ✓ | ✓ | — | — | Pattern only (not standalone) |
| **Back to Top / Float Button** | — | ✓ | — | — | — | — | — | — | — | ❌ Missing |
| **Bottom Navigation / Dock** | — | — | ✓ | — | — | — | — | — | ✓ | ❌ Missing |
| **Cascader** | — | ✓ | — | — | — | — | — | — | — | ❌ Missing |
| **Chat Bubble** | — | — | — | ✓ | — | — | — | — | ✓ | ❌ Missing |
| **Chip / Tag (interactive)** | — | ✓ | ✓ | ✓ | ✓ | — | ✓ | — | — | ❌ Missing (Badge is static) |
| **Clipboard** | — | — | — | ✓ | — | — | — | ✓ | — | ❌ Missing |
| **Code / Code Highlight** | — | — | — | — | ✓ | — | — | — | ✓ | ❌ Missing |
| **Color Picker** | — | ✓ | — | — | ✓ | — | ✓ | ✓ | — | ❌ Missing |
| **Color Input** | — | ✓ | — | — | ✓ | — | ✓ | ✓ | — | ❌ Missing |
| **Countdown / Timer** | — | ✓ | — | — | — | — | — | ✓ | ✓ | ❌ Missing |
| **DataGrid / Advanced Table** | — | ✓ | ✓ | — | — | — | — | — | — | Partial (basic Data Table) |
| **Descriptions / DataList** | — | ✓ | — | ✓ | — | — | — | — | — | ❌ Missing |
| **Diff / Comparison** | — | — | — | — | — | — | — | — | ✓ | ❌ Missing |
| **Disclosure (simple toggle)** | — | — | — | — | — | ✓ | — | — | — | ❌ Missing |
| **Drag & Drop / DropZone** | — | ✓ | — | — | — | — | ✓ | ✓ | — | ❌ Missing |
| **Editable (inline edit)** | — | — | — | ✓ | — | — | — | ✓ | — | ❌ Missing |
| **Empty State** | — | ✓ | — | ✓ | — | — | — | — | — | Partial (basic Empty field) |
| **File Upload** | — | ✓ | — | — | ✓ | — | ✓ | ✓ | ✓ | ❌ Missing |
| **Filter / Segmented Radio** | — | — | — | — | — | — | — | — | ✓ | ❌ Missing |
| **Footer (marketing)** | — | — | — | — | — | — | — | — | ✓ | ❌ Missing |
| **Hero Section** | — | — | — | — | — | — | — | — | ✓ | ❌ Missing |
| **Highlight (text)** | — | — | — | ✓ | ✓ | — | — | — | — | ❌ Missing |
| **Image (enhanced)** | — | ✓ | — | ✓ | — | — | — | — | — | ❌ Missing |
| **ImageList / Gallery** | — | — | ✓ | — | — | — | — | — | ✓ | ❌ Missing |
| **Indicator (corner badge)** | — | — | — | ✓ | ✓ | — | — | — | ✓ | ❌ Missing |
| **List (data list)** | — | ✓ | ✓ | — | — | — | — | — | ✓ | ❌ Missing |
| **Loading (animated)** | — | ✓ | ✓ | — | — | — | — | — | ✓ | Partial (Spinner, Skeleton) |
| **Masonry Layout** | — | — | ✓ | — | — | — | — | — | — | ❌ Missing |
| **Mentions (@mention input)** | — | ✓ | — | — | — | — | — | — | — | ❌ Missing |
| **Meter (measurement)** | — | — | — | — | — | — | ✓ | — | — | ❌ Missing |
| **Mockup Frames** | — | — | — | — | — | — | — | — | ✓ | ❌ Missing |
| **MultiSelect** | — | — | — | — | ✓ | — | — | — | — | ❌ Missing |
| **Navbar / AppBar** | — | — | ✓ | — | ✓ | — | — | — | ✓ | ❌ Missing |
| **Number Input (stepper)** | — | — | — | ✓ | ✓ | — | ✓ | ✓ | — | ❌ Missing |
| **Password Input** | — | — | — | — | ✓ | — | — | — | — | ❌ Missing |
| **QR Code** | — | ✓ | — | — | — | — | — | ✓ | — | ❌ Missing |
| **Radial / Ring Progress** | — | — | — | — | ✓ | — | — | — | ✓ | ❌ Missing |
| **Range Calendar** | — | — | — | — | ✓ | — | ✓ | ✓ | — | ❌ Missing |
| **Rating (star)** | — | ✓ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ❌ Missing |
| **Result / Success State** | — | ✓ | — | — | — | — | — | — | — | ❌ Missing |
| **Rich Text Editor** | — | — | — | — | ✓ | — | — | — | — | ❌ Missing |
| **Segmented Control** | — | ✓ | — | ✓ | ✓ | — | — | ✓ | — | ❌ Missing |
| **Signature Pad** | — | — | — | — | — | — | — | ✓ | — | ❌ Missing |
| **Spoiler (show more)** | — | — | — | — | ✓ | — | — | — | — | ❌ Missing |
| **Spotlight / Command Palette** | — | — | — | — | ✓ | — | — | — | — | Partial (Command) |
| **Stat / Statistic** | — | ✓ | — | ✓ | — | — | — | — | ✓ | ❌ Missing |
| **Status Indicator** | — | — | — | ✓ | — | — | — | — | ✓ | ❌ Missing |
| **Stepper / Steps** | — | ✓ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ❌ Missing |
| **Tags Input** | — | — | — | — | ✓ | — | ✓ | ✓ | — | ❌ Missing |
| **Time Picker** | — | ✓ | ✓ | — | ✓ | — | ✓ | — | — | ❌ Missing |
| **Timeline** | — | ✓ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | ❌ Missing |
| **Toolbar (action group)** | ✓ | — | — | — | — | — | ✓ | — | — | ❌ Missing |
| **Tour / Onboarding** | — | ✓ | — | — | — | — | — | ✓ | — | ❌ Missing |
| **Transfer List** | — | ✓ | ✓ | — | ✓ | — | — | — | — | ❌ Missing |
| **Tree View** | — | ✓ | ✓ | — | ✓ | — | ✓ | ✓ | — | ❌ Missing |
| **TreeSelect** | — | ✓ | — | — | — | — | — | — | — | ❌ Missing |
| **Watermark** | — | ✓ | — | — | — | — | — | — | — | ❌ Missing |

---

## Patterns Common Across 3+ Libraries (Critical Gaps)

These are the patterns that appear in **3 or more** major libraries but are absent from shadcn:

| Pattern | Count | Libraries | Priority |
|---------|-------|-----------|----------|
| **Rating / Star Rating** | 6 | Ant, MUI, Chakra, Mantine, Park, DaisyUI | 🔴 High |
| **Timeline** | 7 | Ant, MUI, Chakra, Mantine, Park, DaisyUI, MUI Lab | 🔴 High |
| **Stepper / Steps** | 6 | Ant, MUI, Chakra, Mantine, Park, DaisyUI | 🔴 High |
| **Stat / Statistic** | 3 | Ant, Chakra, DaisyUI | 🔴 High |
| **Color Picker** | 4 | Ant, Mantine, React Aria, Park | 🔴 High |
| **Number Input (stepper)** | 4 | Chakra, Mantine, React Aria, Park | 🔴 High |
| **Tags Input / TagGroup** | 3 | Mantine, React Aria, Park | 🔴 High |
| **File Upload** | 4 | Ant, Mantine, React Aria, Park | 🟠 Medium |
| **Segmented Control** | 4 | Ant, Chakra, Mantine, Park | 🟠 Medium |
| **Tree View** | 5 | Ant, MUI, Mantine, React Aria, Park | 🟠 Medium |
| **Chip / Tag (interactive)** | 5 | Ant, MUI, Chakra, Mantine, React Aria | 🟠 Medium |
| **Navbar / AppBar** | 3 | MUI, Mantine, DaisyUI | 🟠 Medium |
| **Indicator (corner badge)** | 3 | Chakra, Mantine, DaisyUI | 🟠 Medium |
| **Transfer List** | 3 | Ant, MUI, Mantine | 🟡 Low |
| **Rich Text Editor** | 1 | Mantine only | 🟡 Low |
| **Autocomplete (standalone)** | 4 | Ant, MUI, Mantine, Headless UI | Partial in shadcn |
| **Empty State** | 2 | Ant, Chakra | Partial in shadcn |

---

## Recommended Additions for ASCII UI

These are the components most worth building for ASCII UI, grouped by priority and feasibility for an ASCII/terminal-aesthetic design system.

### 🔴 Tier 1 — High Value, Core Interactions
*These fill major gaps, appear in 3+ libraries, and have clear ASCII representations.*

1. **Rating** — Star (or ASCII `★☆`) rating input. Universal pattern.
2. **Stepper / Steps** — Multi-step wizard with numbered ASCII stages. Common in forms & onboarding.
3. **Timeline** — Vertical event log with connector lines. Perfect for ASCII rendering (lines/dots).
4. **Stat / Statistic** — Number + label + delta display. Core dashboard primitive.
5. **Tags Input** — Multi-value chip input with add/remove. Forms & filtering essential.
6. **Segmented Control** — Tab-like toggle group (3–5 options). Alternative to Tabs for small options.
7. **Number Input** — Numeric stepper with increment/decrement arrows. Form essential.
8. **File Upload / Drop Zone** — Drag-drop file area with progress. Forms essential.
9. **Chip / Tag (interactive)** — Closeable, clickable tag with delete. Status, filter, and taxonomy.

### 🟠 Tier 2 — Strong Pattern, Distinct from Existing Components
*Distinct enough from shadcn equivalents to warrant separate components.*

10. **Color Picker** — Hue/saturation/alpha picker. Design tools, palette builders.
11. **Navbar / Top App Bar** — Top navigation with logo + links + actions. Layout primitive.
12. **Indicator** — Corner-positioned dot/badge on icon or avatar. Notification states.
13. **Tree View** — Hierarchical collapsible tree. File systems, org charts.
14. **Empty State** — Full empty state slot (icon + heading + action CTA). Common UX pattern.
15. **Status Indicator** — Colored dot (online/offline/error/warning). Chat, presence, systems.
16. **Editable (Inline Edit)** — Click-to-edit text in place. Tables, dashboards.
17. **Spoiler / Show More** — Truncated text with expand. Long content containers.
18. **Password Input** — Text input with show/hide toggle. Auth forms.

### 🟡 Tier 3 — Specialized, High-Impact for Specific Use Cases
*Worth including for completeness; relevant to specific ASCII UI use cases.*

19. **Code Block / Code Highlight** — Syntax-highlighted code display with copy button. Dev tools, docs.
20. **Chat Bubble** — Message bubble (human/AI/system). Chat UIs.
21. **QR Code** — QR code display. Links, auth, sharing.
22. **Countdown / Timer** — Animated countdown. Event pages, auth timeouts.
23. **Diff / Comparison** — Side-by-side diff view. Code reviews, A/B presentation.
24. **Radial / Ring Progress** — Circular progress indicator. Dashboards.
25. **Mockup Frames** — Browser/phone/window frame wrapper. Showcases, landing pages.
26. **Signature Pad** — Freehand canvas input. Legal/admin forms.
27. **Tour / Onboarding** — Step-by-step overlay tour. Product walkthroughs.
28. **Watermark** — Content protection overlay. Documents, screenshots.

### 🟢 Tier 4 — Molecules / Organisms (Composed Patterns)
*Not single components but common compositional patterns worth pre-building.*

29. **Stat Card** — Card with metric number, label, trend arrow. Dashboard grids.
30. **Hero Section** — Full-width header with headline + CTA. Landing pages.
31. **Footer Section** — Site footer with columns + copyright. Marketing layouts.
32. **Auth Form** — Login/signup form with social buttons. App shell pattern.
33. **Pricing Table** — Plan comparison table with CTA. SaaS landing pages.
34. **Feature Grid** — Grid of icon + title + description cards. Marketing.
35. **Profile Card** — Avatar + name + bio + social links. User profiles.
36. **Notification Item** — Notification row with icon, title, time, read state. Notification lists.
37. **Confirmation Dialog** — Pre-composed confirm/cancel dialog (Popconfirm pattern). Action gates.
38. **Command Bar / Toolbar** — Fixed action bar with icon buttons (text editor toolbar). Apps.
39. **Data Description List** — Key-value pairs in a compact table format. Detail views.
40. **Image Gallery** — Grid/masonry photo layout with lightbox. Portfolio, media.

---

## ASCII UI–Specific Notes

For an ASCII/terminal aesthetic design system, some components gain special value:

- **Tree View** — Naturally ASCII (`├──`, `└──`, `│`) — extremely on-brand.
- **Timeline** — Vertical lines and dots are already ASCII primitives.
- **Code Block** — Core to terminal/dev aesthetic. Should include copy button + language label.
- **Stat Cards** — Monospace numbers in a box look excellent in ASCII style.
- **Diff** — Terminal diffs (`+`, `-`) are a natural ASCII pattern.
- **Progress / Rating** — `[████░░░░]` and `★★★☆☆` are intrinsically ASCII.
- **Mockup Frames** — ASCII art frames for terminal/browser/phone mockups are on-brand.
- **Chat Bubble** — Message threading with monospace text styling.
- **Spinner / Loading** — Braille or character-based spinners (`⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏` or `|/-\`).

---

*Research conducted March 9, 2026. Sources: shadcn/ui docs, Ant Design docs, Material UI docs, Mantine docs, Chakra UI docs, DaisyUI docs, Headless UI docs, React Aria docs, Ark UI docs, Park UI GitHub.*
