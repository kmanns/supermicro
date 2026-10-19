<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-10-19T19:40:00Z
  page:             cart
  pageUrl:          https://main--supermicro--kmanns.aem.page/cart
  againstDirection: stardust/direction.md (Active 2026-10-19T19:00:00Z)
  consumedBy:       impeccable:craft
  readArtifacts:
    - stardust/current/pages/cart.json
    - stardust/current/pages/cart.html (commerce-cart block + header/footer map)
    - stardust/current/assets/screenshots/cart-thumb.png
    - stardust/prototypes/cart-improvements.md
    - stardust/prototypes/index-shape.md
    - stardust/prototypes/index-proposed.html (chrome + tokens)
    - DESIGN.md
    - DESIGN.json (components: Primary Button, Caption Badge, Empty State; systemComponentRoles.empty-state, unverified-marker)
    - PRODUCT.md
    - stardust/direction.md
  stardustVersion:  0.29.1
  _provenance:
    capturedSourceLineage:
      - { section: utility-strip, origin: "site-wide system-component (carried verbatim from index-proposed.html: Quick Order /quick-order, Search Order /order-status, Create New Company Account /customer/company/create, Sign in /customer/login)" }
      - { section: header, origin: "site-wide system-component (carried verbatim from index-proposed.html; captured header in pages/cart.html: Catalog → Apparel, Wishlist, Cart, Search, account dropdown)" }
      - { section: page-title, origin: "consolidates captured h1 'Shopping Cart' (pages/cart.json headings[0]; commerce-cart CartSummaryList heading slot) and its divider (hr.cart-cart-summary-list__heading-divider)" }
      - { section: empty-cart, origin: "consolidates captured EmptyCart slot (pages/cart.html .cart-empty-cart: line cart icon, h2 'Your cart is empty', link 'Start shopping' → /) — restyled per improvements #1" }
      - { section: cart-tools, origin: "direction-authorized new — improvements #2; labels and routes from the captured header (Quick Order /quick-order, Search Order /order-status)" }
      - { section: company-account, origin: "direction-authorized new — improvements #3; labels and routes from the captured header Account group (Log in → 'Sign in' per index T-nav-conflict resolution; Create New Company Account /customer/company/create)" }
      - { section: filled-cart-placeholder, origin: "direction-authorized new — improvements #4 (filled-cart layout as unverified outline only); anatomy mirrors captured cart__left-column / cart__right-column (OrderSummary) containers, which rendered empty/hidden" }
      - { section: footer, origin: "site-wide system-component (carried verbatim from index-proposed.html: Privacy, Terms of Use, Cookie preferences, Do not sell my personal information, AdChoices)" }
    antiTemplatePass:
      - pattern: empty-cart composition
        defaultReflex: "centred card: big grey icon, centred heading, centred grey pill button (the captured boilerplate silhouette)"
        alternatives: ["left-aligned chassis panel: outlined icon beside the heading, square Power Red action under it, Signal Blue top rail", "full-width Rack Navy band with the heading in white and an inverse button", "type-only status line under the h1 with an inline text link"]
        picked: "left-aligned chassis panel with the icon beside the heading"
        rationale: "improvements #1 asks for left alignment and a square Power Red primary; DESIGN.md § Empty and status states pins a white panel with an outlined icon; a navy band would spend the page's one dark substrate on an absence."
      - pattern: secondary B2B routes
        defaultReflex: "two outline buttons beside the primary (twin/triple CTA row)"
        alternatives: ["ruled caption row under the panel: caption 'Account tools' on a 1px rule, then text links with arrows", "icon tiles for Quick Order / Search Order", "a bulleted 'You can also…' sentence"]
        picked: "ruled caption row with text links"
        rationale: "keeps Power Red to one action in the region (One Red Rule); icon tiles are banned as structure by the craft floor; a sentence would need invented copy."
      - pattern: sign-in prompt
        defaultReflex: "benefit-copy card ('Sign in to see your saved items…') with a solid + outline button pair"
        alternatives: ["side-column note panel: h2 'Company account' and two ruled text links, labels only", "inline sentence under the empty-state heading", "a sticky banner above the h1"]
        picked: "side-column note panel with ruled links"
        rationale: "no benefit copy is captured (no fabrication); a side note keeps it off the empty state's action line; a banner above the h1 would push the page task down."
      - pattern: future filled-cart anatomy
        defaultReflex: "a mocked cart with sample items, prices and a Subtotal line"
        alternatives: ["dashed PLACEHOLDER frame with greyed shape blocks (line-items column + totals column with a checkout shape), no figures", "a written list of what the drop-in will render", "omit the filled state entirely"]
        picked: "dashed PLACEHOLDER frame with greyed shape blocks"
        rationale: "improvements #4 asks for the layout as an unverified outline only; sample items or totals would fabricate commerce data; shapes show the column split the drop-in will fill."
    substrateTransitions:
      default: "data-hall #f1f1f1 (chassis-white panels on it)"
      exceptions:
        - { section: filled-cart-placeholder, substrate: "Chassis White frame inside the 2px dashed Power Red placeholder outline (coordinator R1: sanctioned One Red Rule exception), Data Hall columns", purpose: "required PLACEHOLDER chrome (builder brief content rules); marks unverified, never-observed layout" }
    voiceClassification:
      - { section: utility-strip, classification: captured-verbatim, copy: "Quick Order · Search Order · Create New Company Account · Sign in", source: "pages/cart.html header (Log in → Sign in, direction-authorized as on index)" }
      - { section: header, classification: captured-verbatim, copy: "Catalog · Apparel · Wishlist · Cart · Search · My Account · Registration · Menu", source: "pages/cart.html header; index-proposed.html chrome" }
      - { section: page-title, classification: captured-verbatim, copy: "Shopping Cart", source: "pages/cart.json headings[0]" }
      - { section: empty-cart, classification: captured-verbatim, copy: "Your cart is empty · Start shopping", source: "pages/cart.json headings[1], ctas[3]" }
      - { section: cart-tools, classification: "direction-authorized rewrite (improvements #2)", copy: "caption 'Account tools'; links 'Quick Order', 'Search Order'", source: "caption: index-proposed.html account-tools heading; links: captured header" }
      - { section: company-account, classification: "direction-authorized rewrite (improvements #3)", copy: "h2 'Company account'; links 'Sign in', 'Create New Company Account'", source: "improvements #3 ('Company account' note); captured header labels" }
      - { section: filled-cart-placeholder, classification: "direction-authorized chrome (improvements #4; DESIGN.json unverified-marker)", copy: "'Filled cart layout (unverified)' · badge 'Unverified' · 'PLACEHOLDER · other' · captions 'Line items', 'Totals', 'Checkout'", source: "improvements #4 named fix ('line items, totals, checkout'); builder brief placeholder label; DESIGN.json Caption Badge example 'Unverified'" }
      - { section: footer, classification: captured-verbatim, copy: "Privacy · Terms of Use · Cookie preferences · Do not sell my personal information · AdChoices", source: "pages/cart.json ctas" }
    signatureElements: []
    signatureNote: "the captured cart has no signature medium (boilerplate drop-in card); the site-wide rails (2px Signal Blue on chassis panels) carry the system motif"
-->
---
slug: cart
url: https://main--supermicro--kmanns.aem.page/cart
register: product
surprise: low
dominantDimension: composition/two-column-status-panel
---

# Page shape: cart

## Sections (in render order)

1. **utility-strip** (role `utility-strip`): verbatim from the approved home chrome. Rack Navy, ≥900px shows all four caption links; below 900px only Quick Order and Search Order.
2. **header** (role `header`): verbatim from the approved home chrome (logo, Catalog disclosure, persistent search field to `/search`, Wishlist / Cart / My Account, hamburger below 900px). Page-specific: the Cart button is marked current with `aria-label="Cart (current page)"`, a visually-hidden "(current page)" in its label, and a 2px Signal Blue inset bottom rail.
3. **page-title**: h1 "Shopping Cart" in Schematic at the h1 step, left-aligned, with a 1px Rail Rule divider under it (the drop-in's heading divider, kept). No eyebrow or caption above it.
4. **empty-cart** (main column): a Chassis White panel, 6px radius, `card-rest` shadow, 2px Signal Blue top rail. Left-aligned. Holds:
   - an outlined cart icon (48px, line-icon grammar: 24-unit grid, square-ish joins, non-scaling ~2px stroke, Datasheet Blue), sitting beside the heading on ≥600px and above it on phones
   - h2 "Your cart is empty", Schematic, styled at the h3 step (25px / 600); the heading row ends in an unlit 8px Rail Rule LED square (home status vocabulary)
   - one primary square Power Red button "Start shopping" → `/`
   No supporting sentence: none is captured, so none is written.
5. **cart-tools** (main column, under the empty state): a ruled caption row. A 1px Rail Rule on top; the caption "Account tools" (13px / 600 / +0.04em, Spec Grey) sits below the rule at the start of the row; then two text links "Quick Order" → `/quick-order` and "Search Order" → `/order-status` in Rack Navy `#003a70` (10.11:1 on Data Hall; Datasheet Blue would be 4.08:1 and fail at 16px) with a currentColor underline and a 16px arrow, 44px targets. On ≥600px caption and links share one line, left-aligned.
6. **company-account** (side column; signed-out visitors only, `data-state="signed-out"`): a Chassis White note panel, 6px, `card-rest`, 2px Rail Rule top, same top padding as the empty panel so the two h2s align. h2 "Company account" styled at the h4 step (20px). A ruled link list: "Sign in" → `/customer/login`, "Create New Company Account" → `/customer/company/create`. Text links, no buttons, no benefit copy.
7. **filled-cart-placeholder**: one PLACEHOLDER frame (2px dashed Power Red outline, the sanctioned exception per coordinator R1; neutral Chassis White frame with Data Hall columns; `PLACEHOLDER · other` monospace label in Spec Grey), `data-placeholder="true" data-placeholder-type="other" data-placeholder-source="filled-cart and totals render from the Cart drop-in; never observed (empty cart)"`. Head row: h2 "Filled cart layout (unverified)" at the h4 step plus a Rack Navy Caption Badge "Unverified" beside it. Body: the future anatomy as greyed shape blocks only:
   - Line-items column (caption "Line items"): three rows, each a square thumbnail block, two text bars of unequal length and a small quantity block.
   - Totals column (caption "Totals"): three bar pairs, then a Spec Grey caption "Checkout" above a full-width 44px greyed bar (the bar is `aria-hidden`; the caption is the readable text).
   No figures, no currency, no "Subtotal", no item names. Shapes are `aria-hidden`.
8. **footer** (role `footer`): verbatim from the approved home chrome.

## Layout strategy

- Density: packed, section padding 48 / 36 / 24px; container 1440px with 16 / 24 / 32px gutters (shared tokens).
- ≥900px: a 12-column grid. Row 1: empty-cart (8 columns) and company-account (4 columns), stretched so their bottoms are flush and their h2s share a baseline. Row 2: cart-tools under the empty panel (8 columns). The placeholder frame spans all 12 below, and its own anatomy repeats the 8 / 4 split so the outline previews the real column rhythm.
- <900px: one column in DOM order: empty-cart, cart-tools, company-account, placeholder frame.
- The empty-cart panel is capped by its column, not centred; its content is left-aligned.

## Key states

- Empty cart (observed, rendered): the empty-cart panel.
- Filled cart (never observed): only the placeholder frame. In production the Cart drop-in's CartSummaryList and OrderSummary replace the empty panel in the same 8 / 4 columns.
- Signed-in visitor (not observed): the company-account panel is hidden (`data-state="signed-out"` marks the condition).
- Link hover: Power Red text; arrows move 2px. Button hover: Power Red Live.
- Focus: 2px Signal Blue outline on light grounds; Status Amber on the navy strip and footer.

## Interaction model

- "Start shopping" is a link (`<a class="btn btn-primary" href="/">`), as in the drop-in.
- Tools and company-account entries are plain links on live routes only.
- The placeholder frame has no interactive elements.
- Header behaviour is the shared script (menu toggle, search toggle, Escape).

## Data attributes

- `div[data-section="utility-strip"][data-intent="route B2B account tools"][data-layout="edge-to-edge"][data-items="4"]`
- `header[data-section="header"][data-intent="navigate and search"][data-layout="contained"][data-nav-collapse="hamburger"]`
- `main[data-template="unique"]`
- `section[data-section="page-title"][data-intent="name the page"][data-layout="contained"]`
- `section[data-section="empty-cart"][data-intent="empty cart status and next action"][data-layout="panel"][data-media="icon"][data-interactive="link"]`
- `nav[data-section="cart-tools"][data-intent="route B2B re-order tools"][data-layout="inline-row"][data-items="2"]`
- `section[data-section="company-account"][data-intent="route signed-out buyers to a company account"][data-layout="panel"][data-items="2"][data-state="signed-out"]`
- `section[data-section="filled-cart-placeholder"][data-intent="preview the unverified filled-cart anatomy"][data-layout="two-column"][data-placeholder="true"][data-placeholder-type="other"]`
- `footer[data-section="footer"][data-intent="legal navigation"][data-layout="contained"]`

## Unsourced content (placeholder list)

1. `filled-cart-placeholder`: type `other`, source "filled-cart and totals render from the Cart drop-in; never observed (empty cart)". Greyed shapes only; no figures or names.
