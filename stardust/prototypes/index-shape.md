<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-10-19T19:10:00Z
  page:             index
  pageUrl:          https://main--supermicro--kmanns.aem.page/
  againstDirection: stardust/direction.md (Active 2026-10-19T19:00:00Z)
  consumedBy:       impeccable:craft
  readArtifacts:
    - stardust/current/pages/index.json
    - stardust/current/pages/index.html (header/footer map)
    - stardust/current/_brand-extraction.json
    - stardust/canon-source/pages/en.html (donor mega-menu labels)
    - stardust/prototypes/index-improvements.md
    - DESIGN.md
    - DESIGN.json
    - stardust/direction.md
  stardustVersion:  0.29.1
  _provenance:
    capturedSourceLineage:
      - { section: utility-strip, origin: "site-wide system-component (carried from _brand-extraction.json#systemComponents[kind=header]: Quick Order /quick-order, Search Order /order-status, Create New Company Account /customer/company/create, My Account /customer/account, Log in /customer/login)" }
      - { section: header, origin: "site-wide system-component (header: Catalog → Apparel /apparel; controls Wishlist, Cart, Search, account dropdown — blocks/header/header.js drop-ins)" }
      - { section: hero, origin: "consolidates captured hero (pages/index.json h1 'Ready to go - B2B!' + banner img) — replaced per direction.md named assumption 2 (donor positioning line) and 4 (donor data-hall photo)" }
      - { section: portfolio, origin: "direction-authorized new — improvements #1; labels verbatim from canon-source/pages/en.html mega-menu (/en/products/*); movement: ia-fidelity reimagined (portfolio-shaped IA)" }
      - { section: account-tools, origin: "derived from captured header Account group links (6 sublinks) — promoted to a page band per improvements #4" }
      - { section: footer, origin: "site-wide system-component (carried from _brand-extraction.json#systemComponents[kind=footer]: Privacy, Terms of Use, Cookie preferences, Do not sell my personal information, AdChoices)" }
    antiTemplatePass:
      - pattern: hero composition
        defaultReflex: "centered-stack hero with two-button CTA pair over a photo"
        alternatives: ["left-anchored display headline + inline catalog search field on a scrimmed data-hall photo (search-led hero)", "split hero: headline left, category index list right", "type-only navy band hero"]
        picked: "left-anchored display headline + inline catalog search field on a scrimmed data-hall photo"
        rationale: "search-led IA priority (DESIGN.json iaPriorities[0]); the donor hero is a left-weighted display headline on data-hall photography (canon-source en.json). One action (search), no twin CTA."
      - pattern: category navigation
        defaultReflex: "5-up image-card grid as category nav"
        alternatives: ["rack-elevation index: two labelled groups (Servers & Storage, Building Blocks) rendered as a dense ledger of rows with captions and a status rail", "4-up image card grid", "horizontal scroller of chips"]
        picked: "rack-elevation index (two grouped ledgers, one row per category)"
        rationale: "no category imagery exists for the storefront and fabricating product shots is forbidden; the donor organises products as grouped text lists in its mega-menu; the row-ledger reads like a rack elevation (seed: Neon bending rail on the live row)."
      - pattern: nav-icon glyphs (search / cart / account)
        defaultReflex: "three bare icon glyphs at top right"
        alternatives: ["persistent search FIELD in the header + labelled icon buttons (icon + caption) for Wishlist / Cart / Account", "icon-only glyphs"]
        picked: "search field + labelled icon buttons"
        rationale: "procurement audience needs search at a glance; labels remove ambiguity; drop-in buttons keep their aria-labels."
      - pattern: account/B2B links
        defaultReflex: "links buried in a dropdown"
        alternatives: ["navy utility strip above the header (desktop) + band on home", "footer link column"]
        picked: "navy utility strip + account-tools band"
        rationale: "audience-routing IA priority; donor uses a utility row above its main nav."
    substrateTransitions:
      default: "data-hall #f1f1f1"
      exceptions:
        - { section: hero, substrate: "rack-navy scrim over donor data-hall photograph", purpose: "orienting first viewport" }
        - { section: account-tools, substrate: "rack-navy band", purpose: "marks the B2B tools moment (seed dark ground → alt surface)" }
    voiceClassification:
      - { section: utility-strip, classification: captured-verbatim, copy: "Quick Order · Search Order · Create New Company Account · Sign in (direction-authorized: improvements #4 / customer-login #1 resolve T-nav-conflict to "Sign in")" , source: "pages/index.html header" }
      - { section: header, classification: captured-verbatim, copy: "Catalog · Apparel · Wishlist · Cart · Search · My Account", source: "pages/index.html header" }
      - { section: hero, classification: direction-authorized rewrite, copy: "Supermicro (display) / 'Industry’s broadest selection of high quality hardware for fully application optimized server, storage, embedded/IoT, and workstation solutions' (lede)", source: "canon-source/_brand-extraction.json voice.firstParagraph; direction.md named assumption 2" }
      - { section: hero, classification: direction-authorized rewrite, copy: "search label 'Search the catalog', button 'Search'", source: "storefront 'Search' control; direction.md DESIGN voice.do" }
      - { section: portfolio, classification: direction-authorized rewrite, copy: "group labels 'Servers & Storage', 'Building Blocks'; rows Rackmount Servers, GPU Servers, Storage Servers, Twin Servers, Motherboards, Chassis, Networking, Accessories (donor verbatim); row 'Apparel' (storefront verbatim)", source: "canon-source/pages/en.html; pages/index.html" }
      - { section: portfolio, classification: "direction-authorized chrome (per friction #3)", copy: "'Catalog pending' badges, 'Live' badge" }
      - { section: account-tools, classification: captured-verbatim, copy: "Quick Order · Search Order · Create New Company Account · My Account", source: "pages/index.html header Account group" }
      - { section: footer, classification: captured-verbatim, copy: "Privacy · Terms of Use · Cookie preferences · Do not sell my personal information · AdChoices", source: "pages/index.html footer" }
    signatureElements: []
    signatureNote: "captured storefront has no signature hero medium or site-wide motif (boilerplate); donor signature = data-hall photography + navy, carried as the hero substrate"
-->
---
slug: index
url: https://main--supermicro--kmanns.aem.page/
register: brand
surprise: low
dominantDimension: composition/rack-elevation-index
---

# Page shape: index (home)

## Sections (in render order)

1. **utility-strip** (role `utility-strip`): Rack Navy, 32px tall, ≥900px only. Right-aligned caption links: Quick Order (`/quick-order`), Search Order (`/order-status`), Create New Company Account (`/customer/company/create`), Log in (`/customer/login`). A 2px Sky Rail rule sits on its bottom edge.
2. **header** (role `header`): white, 64px. Left: Supermicro logo (`canon-source/assets/logo.svg`, alt "Supermicro"). Then the nav item "Catalog" with a disclosure listing "Apparel". Centre: a persistent search field, "Search the catalog", which in production opens the Product Discovery overlay (the prototype shows the field only). Right: labelled icon buttons Wishlist, Cart (mini-cart; no count shown, because none is captured) and My Account. Below 900px, a menu button opens a panel holding Catalog, the Account group links and the utility links. Logo, search icon-field and Cart stay in the bar.
3. **hero**: full-bleed donor data-hall photograph (`canon-source/assets/media/hero-vera-rubin-bg.webp`) under a Rack Navy scrim (≥ 0.6) with a directional gradient so the headline area clears 4.5:1. Content is left-anchored in the container:
   - caption "Supermicro Storefront"
   - display h1 "Supermicro" (PT Sans Narrow 700, white)
   - lede: the donor positioning line
   - an inline search field with one Power Red "Search" button, submitting to `/search?q=`
   - a text link "Browse Apparel" → `/apparel`
4. **portfolio** ("Shop by category", h2): a rack-elevation index, with two group panels side by side on ≥900px:
   - "Servers & Storage": Rackmount Servers, GPU Servers, Storage Servers, Twin Servers.
   - "Building Blocks": Motherboards, Chassis, Networking, Accessories.
   - A third, single-row panel, "Available now", carries "Apparel" → `/apparel` with a "Live" caption badge and a 2px Signal Blue active rail.

   Each row is a full-width line with the category name (h3 visual 20px), a "Catalog pending" caption badge and a muted chevron. Pending rows are not links: `aria-disabled` text, no href. A Spec Grey note under the h2 reads "Categories follow Supermicro's portfolio. Products are being added."
5. **account-tools** ("Account tools", h2, white on Rack Navy): a 4-up row of tool tiles: Quick Order, Search Order, Create New Company Account, My Account. Each tile shows only the captured link label, its route and an arrow; no descriptions, so all copy stays sourced. Inverse styling with a Sky Rail top rail.
6. **footer** (role `footer`): Rack Navy. The colour Supermicro logo on a white chip (never recoloured), plus the five captured legal links. No copyright or other uncaptured lines.

## Layout strategy

- Density: packed, with section padding 48 / 36 / 24px (DESIGN.md spacing).
- Container: `--max-width: 1440px` (DESIGN.json extensions.container). This steps up from the captured 1264px to give room for the two-panel index plus rails. Flagged as a change from the captured value.
- Grid: 12 columns at ≥900px. The portfolio panels span 6 + 6, with "Available now" full-width above them. They stack below 900px.
- Hero height: min(72vh, 640px) on desktop, auto on mobile (headline, lede, search, link).

## Key states

- Pending category row: non-interactive, with a "Catalog pending" badge.
- Live category row: a link with the "Live" badge and the Signal Blue rail; hover adds a Data Hall tint and the arrow moves 2px.
- Header search focus: 2px Signal Blue outline.

## Interaction model

- Hero search `<form action="/search" method="get">` with an `input name="q"`. In production the header field opens the Product Discovery overlay (the existing `blocks/header/header.js`); the prototype is static.
- "Catalog" disclosure and the mobile menu use `<details>`, or the stock hamburger with its ≤10-line a11y script.
- All live links point to captured storefront routes only.

## Data attributes

- `div[data-section="utility-strip"][data-intent="route B2B account tools"][data-layout="edge-to-edge"][data-items="4"]`
- `header[data-section="header"][data-intent="navigate and search"][data-layout="contained"]`
- `section[data-section="hero"][data-intent="search-led entry"][data-layout="full-bleed"][data-media="image"][data-interactive="form"]`
- `section[data-section="portfolio"][data-intent="catalog discovery"][data-layout="grid"][data-items="9"]`
- `section[data-section="account-tools"][data-intent="route B2B account tools"][data-layout="grid"][data-items="4"]`
- `footer[data-section="footer"][data-intent="legal navigation"][data-layout="contained"]`
- `main[data-template="landing"]`

## Unsourced content (placeholder list)

(none). Every literal is captured from the storefront or the donor, or is a direction-authorized rewrite. Pending badges are chrome (friction #3). No product imagery, counts or prices are shown, so nothing needs a placeholder.

## Open questions for craft

- Logo on the navy footer: the captured SVG is a coloured mark. Prefer the colour logo on a white chip inside the footer over recolouring it.
