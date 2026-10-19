<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-10-19T20:10:00Z
  revisedAt:        2026-10-19T21:00:00Z (finish-review fixes 1–7, coordinator rulings R1–R3)
  page:             apparel
  pageUrl:          https://main--supermicro--kmanns.aem.page/apparel
  againstDirection: stardust/direction.md (Active 2026-10-19T19:00:00Z)
  consumedBy:       impeccable:craft
  readArtifacts:
    - stardust/current/pages/apparel.json
    - stardust/current/pages/apparel.html (main: h1, Product Discovery sort picker, NoResults slot, pagination; header/footer map)
    - stardust/current/assets/screenshots/apparel-thumb.png
    - stardust/prototypes/apparel-improvements.md
    - stardust/prototypes/index-shape.md
    - stardust/prototypes/index-proposed.html (approved chrome and tokens)
    - DESIGN.md
    - DESIGN.json (components: Empty State, Chassis Card, Caption Badge, Text Input, Primary Button; extensions.systemComponentRoles, voice, iaPriorities)
    - PRODUCT.md
    - stardust/direction.md
  stardustVersion:  0.29.1
  _provenance:
    capturedSourceLineage:
      - { section: utility-strip, origin: "site-wide system-component (carried verbatim from index-proposed.html; captured header Account group: Quick Order /quick-order, Search Order /order-status, Create New Company Account /customer/company/create, Log in /customer/login)" }
      - { section: header, origin: "site-wide system-component (carried verbatim from index-proposed.html; Catalog → Apparel marked aria-current on this page)" }
      - { section: page-head, origin: "captured h1 'Apparel' (pages/apparel.json headings[0]) + direction-authorized new breadcrumb and 'Category' caption (improvements #2)" }
      - { section: listing-toolbar, origin: "captured Product Discovery sort picker (pages/apparel.html .search__product-sort select[aria-label='Sort by']) rendered as its disabled slot; note per improvements #2" }
      - { section: results, origin: "captured NoResults slot (pages/apparel.html .product-discovery-search-alert-message 'Your search returned no results.') redesigned as the DESIGN.json Empty State (improvements #1) + placeholder tile frame (improvements #3); status vocabulary (Catalog pending badge, unlit LED) from the approved home" }
      - { section: account-tools, origin: "derived from captured header Account group links (Quick Order, My Account, Create New Company Account) and the top-level Search Order link; the approved home account-tools band, unchanged" }
      - { section: footer, origin: "site-wide system-component (captured footer legal links, carried verbatim from index-proposed.html)" }
    antiTemplatePass:
      - pattern: empty result
        defaultReflex: "centred warning alert box (the captured orange in-line alert) floating in white space"
        alternatives: ["full-row, top-aligned Chassis White empty-state panel with a 2px Signal Blue top rail, outlined icon, a truthful category heading with the home's pending badge and unlit LED, the drop-in string as its status line, and primary-then-text-link actions", "empty state stretched across 3 of 4 tile slots beside the placeholder (built first; the finish review found it read as a blank field)", "full-width navy band announcing the empty catalog", "centred illustration + headline + twin buttons"]
        picked: "full-row, top-aligned empty-state panel above the listing grid"
        rationale: "DESIGN.md Empty and status states + DESIGN.json Empty State. A natural-height panel with a capped measure has no dead field. One primary action (dualCTAPattern primary-then-text-link)."
      - pattern: future product grid
        defaultReflex: "4-up grid of skeleton or sample product cards"
        alternatives: ["one outlined PLACEHOLDER frame showing the chassis-card anatomy as greyed shapes, in the first tile slot of the 2/3/4 grid under the empty state", "no grid hint at all", "a row of four skeleton cards"]
        picked: "one outlined placeholder frame in the first tile slot"
        rationale: "improvements #3 asks for the card anatomy without sample products. A row of skeletons reads as loading and implies a count; one frame at true tile width states 'this is the tile' and nothing more."
      - pattern: sort / filter controls
        defaultReflex: "full sort select with every option plus a filter sidebar, enabled over nothing"
        alternatives: ["a single toolbar row: Spec Grey status note left, disabled 'Sort by' select right, ruled top and bottom (select box hidden below 600px)", "hide the toolbar entirely until the drop-in has results", "a facet sidebar left of the grid"]
        picked: "single ruled toolbar row with the disabled select"
        rationale: "keeps the drop-in slot visible so the layout does not jump when the catalog fills. The select is disabled with only its label, so no captured boilerplate sort options are rendered; no facets were captured. On phones the empty box is noise, so only the label and note stay."
      - pattern: account tools at page end
        defaultReflex: "three same-size icon cards"
        alternatives: ["Rack Navy band with ruled text links (the approved home .tools ledger, verbatim)", "inline text links under the empty state only"]
        picked: "the home Rack Navy ledger band, verbatim"
        rationale: "reuses the approved home pattern and CSS exactly (finish-review fix 4); the craft floor bans same-size icon cards as structure."
    substrateTransitions:
      default: "data-hall #f1f1f1"
      exceptions:
        - { section: account-tools, substrate: "rack-navy band", purpose: "marks the B2B tools moment at the end of the page (same as home)" }
    voiceClassification:
      - { section: utility-strip, classification: captured-verbatim, copy: "Quick Order · Search Order · Create New Company Account · Sign in", source: "pages/apparel.html header (Sign in per the approved home resolution)" }
      - { section: header, classification: captured-verbatim, copy: "Catalog · Apparel · Wishlist · Cart · Search · My Account · Menu · Account · Registration", source: "pages/apparel.html header; index-proposed.html" }
      - { section: header, classification: direction-authorized rewrite, copy: "search placeholder/label 'Search the catalog'", source: "DESIGN.md Inputs exception; index-proposed.html" }
      - { section: page-head, classification: captured-verbatim, copy: "h1 'Apparel'", source: "pages/apparel.json headings[0]" }
      - { section: page-head, classification: direction-authorized rewrite, copy: "breadcrumb 'Home' / 'Apparel'; caption badge 'Category'", source: "improvements #2; DESIGN.json voice.do (caption 'Category')" }
      - { section: listing-toolbar, classification: captured-verbatim, copy: "'Sort by' (select label)", source: "pages/apparel.html select[aria-label='Sort by'] + floating label" }
      - { section: listing-toolbar, classification: direction-authorized rewrite, copy: "'Sorting and filters appear when products are listed'", source: "improvements #2 ('sort/filter slots ... render only when it supplies them')" }
      - { section: results, classification: direction-authorized rewrite, copy: "h2 'No apparel is listed yet.'", source: "improvements #1 (empty catalog is not an error) + PRODUCT.md 'The catalog is empty today'; finish-review fix 5" }
      - { section: results, classification: captured-verbatim, copy: "'Your search returned no results.' (role=status line, data-production-message)", source: "pages/apparel.html NoResults slot; DESIGN.json voice.do" }
      - { section: results, classification: "direction-authorized chrome (home status vocabulary)", copy: "'Catalog pending' badge", source: "index-proposed.html pending rows" }
      - { section: results, classification: direction-authorized rewrite, copy: "primary 'Search the catalog'; text link 'Quick Order'", source: "improvements #1 (named action + Quick Order beside it)" }
      - { section: results, classification: "required placeholder chrome", copy: "'PLACEHOLDER · other'; 'Product tile (catalog pending)'", source: "builder brief placeholder rule; improvements #3 label" }
      - { section: account-tools, classification: captured-verbatim, copy: "'Account tools' (h2, approved home) · Quick Order · Search Order · Create New Company Account · My Account", source: "pages/apparel.html header; index-proposed.html" }
      - { section: footer, classification: captured-verbatim, copy: "Privacy · Terms of Use · Cookie preferences · Do not sell my personal information · AdChoices", source: "pages/apparel.html footer" }
    signatureElements: []
    signatureNote: "captured listing has no signature medium (boilerplate); the site-wide signature is the approved home's navy bands with 2px rails and the status-LED vocabulary, carried here as the Signal Blue empty-state rail, the unlit LED with its pending badge, and the navy tools band"
-->
---
slug: apparel
url: https://main--supermicro--kmanns.aem.page/apparel
register: product
surprise: low
dominantDimension: state-design/honest-empty-listing
---

# Page shape: apparel (category listing)

## Sections (in render order)

1. **utility-strip** (role `utility-strip`): verbatim from the approved home. Rack Navy, with the caption links Quick Order, Search Order, Create New Company Account and Sign in. Only Quick Order and Search Order show below 900px.
2. **header** (role `header`): verbatim from the approved home. The Catalog disclosure and the mobile menu mark "Apparel" with `aria-current="page"`.
3. **page-head**: on the Data Hall ground, in the container.
   - A breadcrumb `nav[aria-label="Breadcrumb"] > ol`: "Home" (`/`), then "Apparel" as `aria-current="page"` text. The separator is a CSS "/" hidden from assistive tech. Links are Rack Navy and underlined, because Datasheet Blue on Data Hall is 4.1:1 and fails for small text.
   - The h1 "Apparel" (Source Sans 3 700, Schematic, h1 clamp), with a navy "Category" Caption Badge beside it on the baseline. This is improvements #2, set beside the heading per the Caption Rule; it is not an eyebrow.
4. **listing-toolbar**: one row with a 1px Rail Rule above and below.
   - Left: the Spec Grey note "Sorting and filters appear when products are listed".
   - Right: a visible caption label "Sort by" above a disabled square select (Field Edge border, Data Hall fill, no options), with `aria-describedby` pointing at the note.
   - Below 600px the empty select box is hidden. The label "Sort by" and the note stay, stacked.
   - The result count ("0 results found.") and the pagination "1" are captured, but neither is rendered: no counts.
5. **results**: a full-row empty-state panel, then the listing grid (2 / 3 / 4 tile slots per row).
   - **Empty State panel**: spans the full row and is top-aligned. It is Chassis White, 6px radius, `card-rest`, with a 2px Signal Blue top rail. It holds:
     - a 40px outlined search icon (48px at ≥900; Signal Blue stroke; decorative)
     - a heading row: h2 "No apparel is listed yet." (25px Datasheet Blue, section-heading role), the home's grey "Catalog pending" badge, and an unlit 8px Rail Rule LED square at the far end of the row
     - the drop-in's own message, "Your search returned no results.", as a Spec Grey `p[role="status"][data-production-message="product-discovery NoResults"]`, capped at 60ch
     - the actions: a Power Red primary `a.btn-primary[href="/search"]` "Search the catalog", plus one Datasheet Blue text link, "Quick Order" (`/quick-order`)
   - **Placeholder tile frame**: the first tile slot of the grid under the panel (full width below 600px). It is a `figure` with:
     - a `2px dashed var(--color-accent)` outline, kept as the stardust honesty signature and the one sanctioned exception to the One Red Rule (R1)
     - a Chassis White fill on the grey ground
     - the Spec Grey monospace label "PLACEHOLDER · other" and the Spec Grey figcaption "Product tile (catalog pending)"
     - inside, a greyed chassis-card silhouette: a 6px card with a 1px Rail Rule edge, a Data Hall image block (2/1 on mobile, 4/3 on tablet, 3/2 on desktop), a title bar, a caption-line bar and a 44px add-to-cart block. These are shapes only, with no text, and are `aria-hidden`.
6. **account-tools** ("Account tools", h2 with the home clamp, white on Rack Navy): the home `.tools` ledger, unchanged. Four ruled links: Quick Order, Search Order, Create New Company Account, My Account. They are 1-up on mobile, 2-up at ≥600 and 4-up at ≥900, with a Sky Rail top rail.
7. **footer** (role `footer`): verbatim from the approved home.

## Layout strategy

- Density: packed, with section padding 48 / 36 / 24px. The page-head uses reduced top padding (4px mobile, 8px at ≥600) so the h1 and the empty state land in the first 390×844 viewport below the header.
- Container: 1440px, with gutters of 16 / 24 / 32px (shared tokens).
- Results grid: 1 column on mobile, 3 at ≥600 and 4 at ≥900 (DESIGN.md listing grid 2 / 3 / 4). The empty panel spans `1 / -1` at every width. The placeholder sits in slot 1, at true tile width from 600px up. On mobile it is full-width rather than half-width so its label stays readable at 320px.
- Empty panel at ≥600: two columns (icon | body). The status line is capped at 60ch, while the heading row runs the full panel width so the LED ends the row.
- Fonts: Source Sans 3 400/600/700 only. PT Sans Narrow is not loaded on this page (R3).

## Key states

- Empty catalog (the only observed state): the panel (pending badge, unlit LED) plus the placeholder frame. The toolbar select is disabled, and hidden on phones.
- Populated (unverified, production only): the Product Discovery drop-in replaces the panel and the frame with chassis-card tiles following the frame's anatomy. It also enables the sort select and renders facets, count and pagination.
- Focus: a 2px Signal Blue outline on light grounds and Status Amber on navy (shared rules).
- Primary hover: Power Red Live.

## Interaction model

- Static prototype; the only script is the shared header script.
- "Search the catalog" is a link to `/search`. In production it focuses the header search, which opens the Product Discovery overlay.
- The drop-in message line carries `role="status"` in the prototype, as the drop-in renders it in production (`aria-live="polite"`).
- The disabled select is not focusable. Its label and note stay readable.

## Data attributes

- `div[data-section="utility-strip"][data-intent="route B2B account tools"][data-layout="edge-to-edge"][data-items="4"]`
- `header[data-section="header"][data-intent="navigate and search"][data-layout="contained"][data-nav-collapse="hamburger"]`
- `div[data-section="page-head"][data-intent="orient the buyer in the catalog"][data-layout="contained"][data-items="2"]`
- `div[data-section="listing-toolbar"][data-intent="sort and filter slot (Product Discovery drop-in)"][data-layout="contained"][data-interactive="form"]`
- `section[data-section="results"][data-intent="honest empty catalog with a next action"][data-layout="grid"][data-items="2"][data-interactive="links"]`
- `section[data-section="account-tools"][data-intent="route B2B account tools"][data-layout="grid"][data-items="4"]`
- `footer[data-section="footer"][data-intent="legal navigation"][data-layout="contained"]`
- `main#main[data-template="listing"]`

## Unsourced content (placeholder list)

1. `figure.ph-tile[data-placeholder="true"][data-placeholder-type="other"][data-placeholder-source="product tiles render from the Product Discovery drop-in once the catalog exists"]`, labelled "PLACEHOLDER · other" with the caption "Product tile (catalog pending)". It shows card anatomy only, with no product, SKU, price or count.

Never rendered: `recId`, the recommendations UUID, `currentSku` / `ADB150`, the captured sort option labels, "0 results found." and the pagination "1".

## Open questions for craft

- None blocking. The empty product-recommendations block is omitted: it rendered nothing and holds config only.

## Revision (finish-review round 2)

- The visible drop-in string "Your search returned no results." was removed from the prototype panel, because it is untrue for a visitor browsing a category. In production, the Product Discovery drop-in's own status region carries its message.
- Below 600px the empty Sort by field, label included, is hidden until the drop-in supplies options.
- The status LED sits directly after the "Catalog pending" badge.
- The full-row empty panel with a single placeholder tile beneath it is kept: the stretched 3-slot panel read as a blank field (finish review round 1).
