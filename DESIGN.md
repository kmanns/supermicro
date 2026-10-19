<!-- stardust:provenance
  writtenBy: stardust:direct
  writtenAt: 2026-10-19T18:45:00Z
  againstDirection: stardust/direction.md#active-direction
  readArtifacts:
    - stardust/canon-source/DESIGN.md
    - stardust/canon-source/DESIGN.json
    - stardust/canon-source/_brand-extraction.json
    - stardust/current/DESIGN.md
    - stardust/current/_brand-extraction.json
    - stardust/.work/stardust/contrast.cjs (WCAG pair check)
  synthesizedInputs: [type scale re-derived at major-third 1.25 for the committed expressive axis; state colours inherited from the storefront tokens; container width resolved between the storefront 1264px and the donor 1660px]
  mode: target (design-donor Mode A, hands-off)
  stardustVersion: 0.29.1
-->
---
name: Supermicro Storefront
description: Supermicro's engineering palette and type on an Adobe Commerce B2B storefront — navy bands, datasheet blues, one red for action.
colors:
  data-hall: "#f1f1f1"
  chassis-white: "#ffffff"
  schematic: "#242424"
  spec-grey: "#636569"
  rail-rule: "#cccccc"
  field-edge: "#7a7a7a"
  rack-navy: "#003a70"
  datasheet-blue: "#1d7bb6"
  signal-blue: "#0c82c4"
  sky-rail: "#4698d5"
  power-red: "#961919"
  power-red-live: "#d30015"
  status-amber: "#ffad00"
  state-positive: "#53824c"
  state-alert: "#c35050"
  state-warning: "#cc7a2e"
  state-info: "#5d6dd6"
typography:
  display:
    fontFamily: "\"PT Sans Narrow\", \"Arial Narrow\", \"Source Sans 3\", Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.6vw, 3.8125rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  h1:
    fontFamily: "\"Source Sans 3\", \"Source Sans Pro\", Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.125rem, 1.6rem + 2vw, 3.0625rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
  h2:
    fontFamily: "\"Source Sans 3\", \"Source Sans Pro\", Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 1.4rem + 1.4vw, 2.4375rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.005em"
  h3:
    fontFamily: "\"Source Sans 3\", \"Source Sans Pro\", Helvetica, Arial, sans-serif"
    fontSize: "1.5625rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  h4:
    fontFamily: "\"Source Sans 3\", \"Source Sans Pro\", Helvetica, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "normal"
  lede:
    fontFamily: "\"Source Sans 3\", \"Source Sans Pro\", Helvetica, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "\"Source Sans 3\", \"Source Sans Pro\", Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  caption:
    fontFamily: "\"Source Sans 3\", \"Source Sans Pro\", Helvetica, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "0.04em"
  button:
    fontFamily: "\"Source Sans 3\", \"Source Sans Pro\", Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
rounded:
  square: "0px"
  card: "6px"
  tab: "4px 4px 0 0"
  tile: "10px"
  dot: "50%"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "24px"
  "6": "32px"
  "7": "48px"
  "8": "64px"
  section-desktop: "48px"
  section-tablet: "36px"
  section-mobile: "24px"
  container: "1440px"
components:
  button-primary:
    backgroundColor: "{colors.power-red}"
    textColor: "#f4f4f4"
    rounded: "{rounded.square}"
    padding: "10px 16px"
    typography: "{typography.button}"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.power-red-live}"
    textColor: "{colors.chassis-white}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.power-red}"
    rounded: "{rounded.square}"
    padding: "10px 16px"
    height: "44px"
  button-inverse:
    backgroundColor: "transparent"
    textColor: "{colors.chassis-white}"
    rounded: "{rounded.square}"
    padding: "10px 16px"
    height: "44px"
  card:
    backgroundColor: "{colors.chassis-white}"
    textColor: "{colors.schematic}"
    rounded: "{rounded.card}"
    padding: "24px"
  input:
    backgroundColor: "{colors.chassis-white}"
    textColor: "{colors.schematic}"
    rounded: "{rounded.square}"
    padding: "10px 12px"
    height: "44px"
  badge:
    backgroundColor: "{colors.rack-navy}"
    textColor: "{colors.chassis-white}"
    rounded: "{rounded.square}"
    typography: "{typography.caption}"
    padding: "2px 8px"
  link:
    textColor: "{colors.datasheet-blue}"
    typography: "{typography.body}"
---

# Design System: Supermicro Storefront

## Overview

**Creative North Star: "The Rack Elevation"**

A storefront that reads like a well-labelled server rack: everything in its slot, labelled in plain captions, and lit by small precise signals. The light-grey data-hall ground and white chassis cards carry the catalog. Full-width rack-navy bands frame the moments that orient (the header strip, section bands, the footer). Datasheet blues organise information. A single power-red marks every action. Imagery is Supermicro's own data-hall and rack photography, always behind a scrim when text sits on it.

The system is pinned to supermicro.com (palette, type families, square action shapes, 6px cards) and applies it to Adobe Commerce surfaces that today look like the grey boilerplate. Density is packed: buyers and evaluators scan, compare and act, and they should not scroll past whitespace to reach the next control.

**Key Characteristics:**
- Navy bands with thin luminous blue rails (status-LED lines) instead of shadows or gradients as dividers.
- Mixed-case Source Sans headings in blue; PT Sans Narrow is reserved for the home display headline.
- Square red action buttons; 6px chassis cards; square inputs.
- Caption-style metadata labels (13px, 600, +0.04em) on badges and beside or below headings, never as eyebrows above them.
- Square 8px status LEDs at the right end of catalog rows (Signal Blue live, Rail Rule pending).
- Honest empty states that always offer the next action.

## Colors

### Primary
**Power Red** `#961919`: the only action colour (primary buttons, the add-to-cart family, text links on action rows). Hover and active: **Power Red Live** `#d30015`. White or `#f4f4f4` text on both passes AA (7.8:1 and 5.6:1).

### Secondary
- **Rack Navy** `#003a70`: bands, header utility strip, footer, badges. White text 11.4:1.
- **Datasheet Blue** `#1d7bb6`: headings and text links on white (4.6:1). On the data-hall ground use it for large headings only (4.1:1).
- **Signal Blue** `#0c82c4`: large headings and decorative rails on white only (4.2:1). Never body text, never on navy.
- **Sky Rail** `#4698d5`: rails and large labels on navy (3.7:1); never body text.

### Tertiary
**Status Amber** `#ffad00`: reserved for link hover and focus on navy grounds (6.1:1 on navy). Never on white.

### Neutral
- **Data Hall** `#f1f1f1`: page ground.
- **Chassis White** `#ffffff`: cards, inputs, panels.
- **Schematic** `#242424`: body text, 13.7:1 on ground.
- **Spec Grey** `#636569`: secondary text, 5.2:1 on ground.
- **Field Edge** `#7a7a7a`: input and control borders (4.3:1 on white, 3.8:1 on Data Hall; donor grey).
- **Rail Rule** `#cccccc`: decorative dividers only (1.6:1, never a control boundary).

### States (inherited from the storefront drop-in tokens)
Positive `#53824c` (4.5:1), alert `#c35050` (4.6:1), info `#5d6dd6` (4.5:1). Warning `#cc7a2e` fails as text (3.3:1), so it is used only for icons and borders, with Schematic text beside it.

### Named Rules
**The One Red Rule.** Power Red appears only on things the user can do. No red headings, no red decoration, no red badges. The single exception is the dashed outline of a prototype placeholder frame (see Components).

**The Blue Explains Rule.** Blues label, organise and link. They are never the fill of a primary action.

## Typography

**Source Sans 3** (the open-licence successor of the donor's Source Sans Pro) for everything except the home display headline, which uses **PT Sans Narrow 700** in Rack Navy or white, as the donor does on its hero.

The scale is major-third (1.25) for the committed expressive axis:

| Step | Size |
| --- | --- |
| body | 16 |
| h4 / lede | 20 |
| h3 | 25 |
| h2 | 39 |
| h1 | 49 |
| display | 61 |

h1, h2 and display clamp down for mobile. Headings are 600 (h1 700), mixed case. Body is 400 at 1.5 line height. Captions are 13px 600 with +0.04em tracking.

### Hierarchy
- Page title (h1) in Schematic on product surfaces, white on navy bands.
- Section heading (h2) in Datasheet Blue.
- Card title (h3/h4) in Schematic.
- Context labels sit beside or below a heading as captions or badges ("Catalog pending", a results note). No eyebrow above a heading.

### Named Rules
**The Caption Rule.** Metadata is a caption, not a sentence: one short label, 13px, set beside or below the thing it describes. Never an eyebrow above a heading.

## Layout

- Mobile-first breakpoints at 600 / 900 / 1200px.
- Content container 1440px max with 16px gutters (mobile), 24px (≥900) and 32px (≥1200).
- Bands and hero imagery run full-bleed.
- Section padding is packed: 48px desktop, 36px tablet, 24px mobile.
- Grids: 4 columns (mobile), 8 (≥600) and 12 (≥900).
- The listing grid is 2 / 3 / 4 cards per row.
- The header is 64px tall with a 32px navy utility strip above it on ≥900px.

## Elevation & Depth

Depth is mostly structural (navy bands and white cards on grey). Shadows are low and functional:
- `card-rest` `0 1px 2px rgba(0,0,0,.18)`.
- `card-hover` `0 6px 15px rgba(0,0,0,.2)`, used with a -2px lift.
- `button` `1px 1px 2px rgba(0,0,0,.3)` (the donor value).
- `overlay` `0 12px 32px rgba(0,0,0,.28)` for the search overlay, mini-cart panel and menus.

### Named Rules
**The Rail Rule.** Section and band edges get a 2px Signal Blue (on white) or Sky Rail (on navy) rail, never a gradient or a heavy shadow.

## Shapes

- Square (0px) on buttons, inputs, badges and the header search field (retained from the donor's 0px buttons).
- 6px on cards and panels.
- `4px 4px 0 0` on tabs.
- 10px on media tiles.
- 50% on avatars and carousel dots only.

## Components

### Buttons
- **Primary:** Power Red fill, `#f4f4f4` text, square, 44px tall, 16px/600, donor shadow. Hover Power Red Live. Focus: 2px Signal Blue outline with 2px offset.
- **Secondary:** transparent with a 1px Power Red border and Power Red text, filling on hover.
- **Inverse** (on navy): transparent with a 2px white border; hover fills Power Red Live.

### Cards / Containers
Chassis White, 6px radius, `card-rest`. Image area on white, a Schematic title, a caption line, and a text link or action. Hover lifts 2px to `card-hover`.

### Inputs / Fields
Chassis White, 1px Field Edge border, square, 44px tall, a visible label above. Exception: search fields use an sr-only label plus the placeholder "Search the catalog", inside a form named by `aria-label`. Focus: 2px Signal Blue border plus a 2px outline. Error: State Alert border with a message below.

### Navigation
- **Navy utility strip:** Quick Order, Search Order, Create Company Account and Sign in / My Account, as caption-size links.
- **White header below it:** Supermicro logo, catalog navigation, a persistent search field that opens the Product Discovery overlay, and icon buttons for Wishlist, Cart (mini-cart count) and Account.
- **Mobile (<900px):** the navy strip keeps Quick Order and Search Order. The bar holds the menu button, logo, a 44px Search button (opens the Product Discovery overlay), Wishlist, Cart and My Account. The menu button opens an inline panel under the bar with Catalog and the Account links.
- **Catalog disclosure (≥900px):** opens as a Chassis White overlay panel (6px, `overlay` shadow, 44px rows).

### Empty and status states
A white panel with a 2px Signal Blue top rail, an outlined icon, a short heading, an optional Spec Grey sentence (only when captured or system copy exists), and one primary action. It may show a grey "Catalog pending" badge and an unlit Rail Rule status LED. It is never filled with sample products.

### Placeholder frames (prototype honesty signature)
Slots for data that does not exist yet (product tiles, a filled cart, account data) render as frames with a `2px dashed` Power Red outline, a neutral fill and a Spec Grey `PLACEHOLDER` label. They are often marked with an "Unverified" badge. This dashed outline is the one sanctioned exception to the One Red Rule. It exists so that nobody mistakes a slot for real content, and it never ships to production.

## Do's and Don'ts

### Do:
- Do keep search, cart, quick order and account reachable in the header at every width.
- Do use Power Red for every primary action and nothing else.
- Do put a scrim (≥ 0.55 navy) under any text set on photography.
- Do label every metadata item with a caption.
- Do show empty catalog, search and cart states as designed states with one clear next step.
- Do reuse the storefront's own system strings ("Your cart is empty", "Start shopping", "Sign in").

### Don't:
- Don't invent products, SKUs, prices, specs, stock, ratings, totals or customer data. Don't render ADB150 or configuration keys.
- Don't use the solid-plus-outline twin-CTA hero, stat trust bars, glassmorphism, gradient text or dark mode by reflex.
- Don't set body text in Signal Blue or Sky Rail, or Datasheet Blue body text on the grey ground.
- Don't use Rail Rule grey for input or control borders.
- Don't round buttons or inputs.
