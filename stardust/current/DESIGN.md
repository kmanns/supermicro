<!-- stardust:provenance
  writtenBy: stardust:extract
  writtenAt: 2026-10-19T18:16:00Z
  readArtifacts:
    - stardust/current/_brand-extraction.json
    - stardust/current/_computed-styles.json (aggregate, 1440 + 390)
    - stardust/current/pages/index.json#customProps (:root tokens)
  synthesizedInputs: []
  mode: descriptive (current state, not target)
  stardustVersion: 0.29.1
-->
---
name: Supermicro storefront (current, B2B boilerplate)
description: Unbranded Adobe Commerce B2B boilerplate on Edge Delivery Services, grey-scale with drop-in design tokens.
colors:
  background: "#ffffff"
  text: "#3d3d3d"
  text-strong: "#2b2b2b"
  text-muted: "#666666"
  brand-300: "#6d6d6d"
  brand-500: "#454545"
  brand-600: "#383838"
  brand-700: "#2b2b2b"
  neutral-300: "#e8e8e8"
  neutral-400: "#d6d6d6"
  neutral-500: "#b8b8b8"
  neutral-600: "#8f8f8f"
  warning-500: "#e79f5c"
  positive-500: "#7fb078"
  alert-500: "#db7070"
  informational-500: "#6978d9"
typography:
  display-1:
    fontFamily: "adobe-clean, roboto, roboto-fallback, system-ui, sans-serif"
    fontSize: "60px"
    fontWeight: 300
    lineHeight: "72px"
    letterSpacing: "0.04em"
  display-3:
    fontFamily: "adobe-clean, roboto, roboto-fallback, system-ui, sans-serif"
    fontSize: "34px"
    fontWeight: 300
    lineHeight: "40px"
    letterSpacing: "0.04em"
  headline-2-strong:
    fontFamily: "adobe-clean, roboto, roboto-fallback, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: "24px"
    letterSpacing: "0.04em"
  body-1:
    fontFamily: "adobe-clean, roboto, roboto-fallback, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: "24px"
    letterSpacing: "0.04em"
  body-2:
    fontFamily: "adobe-clean, roboto, roboto-fallback, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 300
    lineHeight: "20px"
    letterSpacing: "0.04em"
  button-2:
    fontFamily: "adobe-clean, roboto, roboto-fallback, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0.08em"
rounded:
  sm: "3px"
  md: "8px"
  lg: "24px"
  observed-mode: "4px"
spacing:
  xxsmall: "4px"
  xsmall: "8px"
  small: "16px"
  medium: "24px"
  big: "32px"
  xbig: "40px"
  xxbig: "48px"
  large: "64px"
  xlarge: "72px"
  xxlarge: "96px"
components:
  button-primary:
    backgroundColor: "{colors.brand-500}"
    textColor: "{colors.background}"
    rounded: "{rounded.lg}"
    typography: "{typography.button-2}"
  button-primary-hover:
    backgroundColor: "{colors.brand-600}"
  button-secondary:
    backgroundColor: "{colors.background}"
    textColor: "{colors.brand-500}"
    rounded: "{rounded.lg}"
---

# Design System: Supermicro storefront (current state)

## Overview

The captured storefront is the Adobe Commerce B2B boilerplate with no brand applied. Every surface is grey-scale: white ground, `#3d3d3d` text, dark-grey (`#454545`) pill buttons, light 300-weight type with 0.04em tracking. The header is a white bar with the text wordmark "Boilerplate", a link row (All Categories, Apparel, account and B2B links) and four icon affordances (wishlist, mini-cart, search, account). The footer carries only legal links.

The visual layer is driven by the Commerce drop-in tokens on `:root` (`--color-*`, `--type-*`, `--shape-*`, `--spacing-*`, `--grid-*`); the drop-ins (search, product listing, cart, auth) inherit them.

## Colors

### Primary
Not a hue: the "brand" ramp is grey (`--color-brand-300…700`: `#6d6d6d`, `#454545`, `#383838`, `#2b2b2b`). Buttons use `#454545`, hover `#383838`, active `#2b2b2b`.

### Neutral
White `#ffffff` ground; text `#3d3d3d` (body), `#2b2b2b` (strong), `#666666` (muted); borders `#b8b8b8` and `#e8e8e8`.

### Status
Warning `#e79f5c` (seen as the border of the "no results" alert), positive `#7fb078`, alert `#db7070`, informational `#6978d9` — defined as tokens, rarely visible.

## Typography

One family everywhere: `adobe-clean` (falls back to Roboto / system-ui). Display headings are weight 300 (h1 60px, h3 34px); the strong headline style is 700 at 20px. Body is 300 at 16px/24px. All styles track at 0.04em (buttons and captions 0.08em). The heading scale is ad-hoc (60 → 34 → 20; ratios 1.76, 1.70).

## Layout

Grid tokens: 4 columns with 16px gutters on mobile, 12 columns with 16–24px gutters above. Spacing ladder 4 → 192px (`--spacing-*`). Nav height 64px.

## Elevation & Depth

Three shadow tokens exist (`--shape-shadow-1…3`, 16% black at 0–16px blur) but the census measured no rendered shadows on the captured pages: the surfaces are flat.

## Shapes

Radius tokens 3px / 8px / 24px. Measured mode 4px (nav items), 24px on every button (pill), 3px and 2px on inputs and alerts.

## Components

### Buttons
Primary: `#454545` fill, white text, 24px radius, 16px/400 with 0.08em tracking; hover `#383838`. Secondary: outline in `#454545` on white.

### Inputs / Fields
Sign-in form: email and password fields with a show/hide toggle, thin grey borders, small radius.

### Navigation
White header bar; text wordmark; link row; icon buttons Wishlist, Cart, Search, account. The search icon opens the Product Discovery overlay.

### Empty states
Product listing / search: an orange-bordered (`#e79f5c`) alert "Your search returned no results." Cart: icon + "Your cart is empty" + "Start shopping" button.

## Do's and Don'ts

Descriptive file — no prescriptions. See `stardust/current/brand-review.html` § Tensions for the decisions the redesign must take.
