<!-- stardust:provenance
  writtenBy: stardust:extract (--design-source)
  writtenAt: 2026-10-19T18:22:00Z
  againstInput: "--design-source https://www.supermicro.com/en/"
  readArtifacts:
    - stardust/canon-source/_brand-extraction.json
    - stardust/canon-source/_computed-styles.json (aggregate + per-page 1440 buttons/headings/text)
    - stardust/canon-source/pages/{en,en-solutions-ai-servers,en-solutions-ai-supercluster,en-solutions-dcbbs,en-products-gpu}.json
  synthesizedInputs: []
  mode: descriptive (donor design system as observed; direct pins it as the target)
  stardustVersion: 0.29.1
-->
---
name: Supermicro corporate (design donor)
description: Supermicro's public corporate site — engineering-blue type, navy grounds, square deep-red CTAs, dark data-hall photography.
colors:
  page-ground: "#f1f1f1"
  surface: "#ffffff"
  ink: "#242424"
  ink-soft: "#222222"
  ink-muted: "#636569"
  cta-red: "#961919"
  cta-red-hover: "#d30015"
  heading-blue: "#1d7bb6"
  bright-blue: "#0c82c4"
  sky-blue: "#4698d5"
  navy: "#003a70"
  gold: "#ffad00"
  rule-grey: "#cccccc"
typography:
  display:
    fontFamily: "\"PT Sans Narrow\", \"Arial Narrow\", Helvetica, Arial, sans-serif"
    fontSize: "66px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.015em"
  h1:
    fontFamily: "\"Source Sans Pro\", Helvetica, Arial, sans-serif"
    fontSize: "76px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "normal"
  h2:
    fontFamily: "\"Source Sans Pro\", Helvetica, Arial, sans-serif"
    fontSize: "42px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.01em"
  h3:
    fontFamily: "\"Source Sans Pro\", Helvetica, Arial, sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  h4:
    fontFamily: "\"Source Sans Pro\", Helvetica, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "normal"
  lede:
    fontFamily: "\"Source Sans Pro\", Helvetica, Arial, sans-serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "normal"
  body:
    fontFamily: "\"Source Sans Pro\", Helvetica, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  button:
    fontFamily: "\"Source Sans Pro\", Helvetica, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
rounded:
  none: "0px"
  card: "6px"
  tab: "4px 4px 0 0"
  panel: "10px"
  tile: "15px"
  dot: "50%"
spacing: {}
components:
  button-primary:
    backgroundColor: "{colors.cta-red}"
    textColor: "#f4f4f4"
    rounded: "{rounded.none}"
    padding: "10px 13px"
    typography: "{typography.button}"
  button-primary-hover:
    backgroundColor: "{colors.cta-red-hover}"
    textColor: "#ffffff"
  button-primary-large:
    backgroundColor: "{colors.cta-red}"
    textColor: "#f4f4f4"
    rounded: "{rounded.none}"
    padding: "19px 25px"
  button-outline-inverse:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "10px 13px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.cta-red}"
    rounded: "{rounded.none}"
    padding: "10.8px 18px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
---

# Design System: Supermicro corporate (design donor)

## Overview

An engineering-company site: confident, technical, dense. Photography of server racks and data halls sits behind white or navy display type; content sections alternate between a light-grey ground (`#f1f1f1`), white cards and full-bleed navy/blue bands. Blue carries the information hierarchy (section headings, ledes); a single deep red is reserved for actions. The tone is serious and specification-led ("Industry's broadest selection…", "Download Datasheet", "Read the Solution Brief").

## Colors

### Primary
`#961919` deep red — every primary CTA (fill + 1px border), link hover; hover brightens to `#d30015`. 616 weighted uses across 5 pages.

### Secondary
Engineering blues: `#1d7bb6` (h2/h3, ledes at 22px), `#0c82c4` (h3, accents), `#4698d5` (smaller h2). Navy `#003a70` for hero display type and dark bands; the band gradient runs `#2294d6 → #0c82c4 → #186296 → rgba(0,58,112,.86)` (255 uses, on section header strips).

### Tertiary
Gold `#ffad00` — footer column headings and link hover on dark grounds only.

### Neutral
Ground `#f1f1f1`, surface `#ffffff`, ink `#242424` / `#222222`, muted `#636569`, rules `#cccccc` and `rgba(0,0,0,.1)`.

## Typography

Source Sans Pro carries everything (567 measured elements; weights 600 for headings and buttons, 400 for text). PT Sans Narrow 700 appears only as the home hero display (66px, navy, tight -1px tracking). Section headings are blue 600 (42px h2, 28/20px h3); ledes are blue 22px/400. Mixed case throughout (2% uppercase headings). Scale is ad-hoc (76 → 42 → 20 → 18).

## Layout

Fixed-width centred content with full-bleed photographic heroes and coloured bands. Card grids of 3–5 columns ("Learn More" per card), tabbed "Portfolio Overview" panels with 4px top-rounded tabs, product cut-outs on white. Header: 88px white bar, logo left, mega-menu centre (Artificial Intelligence, Products, Solutions, Company, Support, Buy), utility icons right. Footer: navy, multi-column link lists with gold headings.

## Elevation & Depth

Low and functional: buttons `rgba(0,0,0,.3) 1px 1px 2px` (109 uses); cards `rgba(0,0,0,.2) 0 6px 15px` (32) and `rgba(151,151,151,.25) 0 5px 15px` (30).

## Shapes

Buttons are square (0px, every captured button). Cards 6px (most-used radius by area), tiles 15px and 10px, tabs `4px 4px 0 0`, carousel dots and social icons 50%.

## Components

### Buttons
Primary: red fill, `#f4f4f4` text, square, 16px/600, padding 10px 13px (large variant 20px, 19px 25px), small drop shadow; hover `#d30015`. Outline: red text + 1px red border; inverse outline: white 2px border on dark bands.

### Cards / Containers
White, 6px radius, soft shadow, product image on white, blue heading, short spec line, "Learn More >" link.

### Navigation
Mega-menu with grouped columns (e.g. Products → Servers & Storage, Building Blocks, Edge/Embedded/Telecom, Networking, Client); separate eStore entry under Buy; search, region and account icons.

## Do's and Don'ts

Descriptive capture — the target rules are written by `direct` into the project-root DESIGN.md.
