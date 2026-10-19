<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-10-19T20:10:00Z
  page:             search
  pageUrl:          https://main--supermicro--kmanns.aem.page/search
  againstDirection: stardust/direction.md (Active 2026-10-19T19:00:00Z)
  consumedBy:       impeccable:craft
  readArtifacts:
    - stardust/current/pages/search.json
    - stardust/current/pages/search.html (main text, header/footer map)
    - stardust/current/assets/screenshots/search-thumb.png
    - stardust/prototypes/search-improvements.md
    - stardust/prototypes/index-shape.md
    - stardust/prototypes/index-proposed.html (approved chrome and tokens)
    - DESIGN.md
    - DESIGN.json (components: Empty State, Caption Badge, Primary/Secondary Button, Text Input; extensions.iaPriorities)
    - PRODUCT.md
    - stardust/direction.md
  stardustVersion:  0.29.1
  _provenance:
    capturedSourceLineage:
      - { section: utility-strip, origin: "site-wide system-component, carried verbatim from the approved index-proposed.html (captured header Account group: Quick Order /quick-order, Search Order /order-status, Create New Company Account /customer/company/create, Sign in /customer/login)" }
      - { section: header, origin: "site-wide system-component, carried verbatim from index-proposed.html (Catalog → Apparel; header search → /search; Wishlist, Cart, My Account drop-in controls)" }
      - { section: results-head, origin: "direction-authorized new: improvements #1 (h1, the captured page has headings: []) and #2 (inline search field submitting to the same /search?q= route the header overlay's 'view all' uses, blocks/header/header.js)" }
      - { section: results, origin: "consolidates the captured Product Discovery empty result (pages/search.html main: 'Your search returned no results.' in an orange-bordered alert); restyled as the shared Empty State per improvements #3 (DESIGN.json components[Empty State])" }
      - { section: account-tools, origin: "site-wide pattern from approved home (index-proposed.html .tools band, copied verbatim; labels = captured header Account group links); appended per coordinator finish-review fix 5" }
      - { section: footer, origin: "site-wide system-component, carried verbatim from index-proposed.html (captured footer: Privacy, Terms of Use, Cookie preferences, Do not sell my personal information, AdChoices)" }
    antiTemplatePass:
      - pattern: results page header
        defaultReflex: "big title band with breadcrumb, a 'Showing N results for …' line and a sort/filter toolbar"
        alternatives: ["h1 + inline retry search field stacked directly under it, nothing else (operate-mode retry surface)", "split row: h1 left, search field right on ≥900px", "navy title band with the field inside it"]
        picked: "h1 + inline retry search field stacked directly under it"
        rationale: "No count or facets may be shown (the catalog is empty and counts are never fabricated). Stacking keeps the field in reading order right after the page title and in the first viewport on phones. A navy band would add a third substrate for no orientation gain."
      - pattern: empty result
        defaultReflex: "orange/yellow warning alert with a triangle icon (the captured boilerplate) or a centred illustration with a big 'Oops'"
        alternatives: ["status row: a white Chassis panel with a Signal Blue top rail, an outlined search glyph, the drop-in message as the heading, a caption badge line, and the actions in one row on ≥900px", "centred empty-state card with icon above, stacked text and actions", "inline text message under the field with links only"]
        picked: "status panel (white, Signal Blue top rail, left-aligned on the field's 880px measure, actions under the text column)"
        rationale: "Reads as a designed state, not an error (improvements #3). Left alignment and the shared measure keep it dense, one unit with the field, and inside the first viewport (finish-review fix 4 replaced the full-width single row, whose actions drifted away from the text). It is the shared DESIGN.json Empty State, so cart and listing will match."
      - pattern: recovery actions
        defaultReflex: "solid-plus-outline twin CTA ('Clear search' + 'Browse all')"
        alternatives: ["one secondary outline button (Clear search) + two text links (Browse Apparel, Quick Order)", "three equal outline buttons", "a 'Search tips' list"]
        picked: "one secondary outline button + two text links"
        rationale: "The Search submit is the region's one Power Red primary. Recovery stays a lower tier, so the One Red Rule holds. A tips list would be invented copy."
    substrateTransitions:
      default: "data-hall #f1f1f1"
      exceptions:
        - { section: account-tools, substrate: "rack-navy band", purpose: "closes the short page with the B2B tools moment, same as home (seed dark ground → alt surface)" }
    voiceClassification:
      - { section: utility-strip, classification: captured-verbatim, copy: "Quick Order · Search Order · Create New Company Account · Sign in", source: "index-proposed.html (approved) / pages/search.html header" }
      - { section: header, classification: captured-verbatim, copy: "Menu · Catalog · Apparel · Wishlist · Cart · My Account · Search · Registration · Sign in · Quick Order · Search Order · Create New Company Account", source: "index-proposed.html (approved) / pages/search.html header" }
      - { section: results-head, classification: direction-authorized rewrite, copy: "h1 'Search results'", source: "search-improvements.md #1" }
      - { section: results-head, classification: direction-authorized rewrite, copy: "sr-only label + placeholder 'Search the catalog', form name 'Results search', submit 'Search'", source: "search-improvements.md #2; DESIGN.md Inputs exception; storefront 'Search' control" }
      - { section: results, classification: captured-verbatim, copy: "'Your search returned no results.'", source: "pages/search.html main (Product Discovery drop-in string)" }
      - { section: results, classification: direction-authorized rewrite, copy: "'Clear search', 'Browse Apparel'", source: "search-improvements.md #3" }
      - { section: results, classification: captured-verbatim, copy: "'Quick Order'", source: "pages/search.html header Account group" }
      - { section: results, classification: "direction-authorized chrome (reused verbatim from approved home)", copy: "badge 'Catalog pending' + Spec Grey line 'Products are being added.'", source: "index-proposed.html portfolio section; direction.md named assumption 3" }
      - { section: account-tools, classification: captured-verbatim, copy: "Account tools (h2, approved home) · Quick Order · Search Order · Create New Company Account · My Account", source: "index-proposed.html account-tools band; pages/search.html header Account group" }
      - { section: footer, classification: captured-verbatim, copy: "Privacy · Terms of Use · Cookie preferences · Do not sell my personal information · AdChoices", source: "pages/search.html footer" }
    signatureElements: []
    signatureNote: "the captured search page has no signature medium (boilerplate alert only); the site motifs carried here are the 2px Signal Blue rail and the caption badge from the approved home"
-->
---
slug: search
url: https://main--supermicro--kmanns.aem.page/search
register: product
surprise: low
dominantDimension: density/operate-mode-retry
---

# Page shape: search (results)

## Sections (in render order)

1. **utility-strip** (role `utility-strip`): verbatim from the approved home. Rack Navy with a 2px Sky Rail bottom rule. Quick Order, Search Order, Create New Company Account and Sign in; only Quick Order and Search Order show below 900px.
2. **header** (role `header`): verbatim from the approved home. Logo, Catalog disclosure (Apparel), persistent search field (`/search`), Wishlist, Cart and My Account. Hamburger below 900px, with the 44px Search button revealing the field. `data-nav-collapse="hamburger"`.
3. **results-head** (h1 "Search results"): on the Data Hall ground. The Schematic h1 (700) sits at the h1 scale, clamped. Directly under it is an inline search form (`<form id="results-form" action="/search" method="get" role="search" aria-label="Results search">`) with:
   - an sr-only label "Search the catalog";
   - `<input name="q" type="search" placeholder="Search the catalog">`, empty in the prototype. In production it is prefilled from `q`.
   - a square Power Red "Search" submit with a glyph and a visible label at every width.

   The field and submit are 48px tall, visibly the page's primary control; the header field stays 44px. Max width is 880px, shared with the results panel. No caption above the h1; the improvements list's "Search" caption is dropped under the craft floor's eyebrow ban, as on home.
4. **results** (the empty state, h2 "Your search returned no results."): models the state the overlay's "view all" produces, where a query was run. It is a Chassis White panel, 6px radius, `card-rest` shadow, with a 2px Signal Blue top rail, capped to the same 880px measure as the field and left-aligned in the wrap. Contents:
   - a 32px outlined search glyph in Signal Blue (decorative);
   - the drop-in string verbatim as an h2 at the h3 scale (25px, Schematic);
   - a caption line: the "Catalog pending" badge (home `.badge--pending`) beside the Spec Grey sentence "Products are being added.";
   - actions, above a 1px Rail Rule divider: "Clear search" (secondary outline `<button type="reset" form="results-form">`), "Browse Apparel" (`/apparel`, text link with an arrow) and "Quick Order" (`/quick-order`, text link).

   On ≥600px the panel is a 2-track grid: the glyph, then a text column with the actions under it, so glyph, text and actions read as one unit. Below 600px the actions span the full panel width.
5. **account-tools** ("Account tools", h2, white on Rack Navy): the site-wide pattern from the approved home, copied verbatim (markup and CSS). A ruled ledger of Quick Order, Search Order, Create New Company Account and My Account with a Sky Rail top rail: 1 / 2 / 4 columns at <600 / ≥600 / ≥900px.
6. **footer** (role `footer`): verbatim from the approved home. Rack Navy, logo chip, the five legal links.

## Layout strategy

- Density: packed. Section padding is 24 / 36 / 48px (`--section-padding`). Both results-head and results sit inside one `.wrap`, separated by 24px, so the field and the empty state share the first viewport at 390×844 and 1440×900.
- Container: 1440px (`--max-width`), the same as home.
- Measure: the field and the empty panel share `max-width: 880px`, left-aligned in the wrap.
- Grid: results-head is a single column. The results panel is `auto 1fr` (glyph | text + actions) on ≥600px. Below 600px the actions span the panel, "Clear search" takes its own row, and the two text links share the next one.
- Page end: the Account tools navy band closes the page, as on home. The `html` canvas is Rack Navy, so on tall screens the footer's navy continues below the short page instead of a grey void.

## Key states

- **Empty result (rendered):** a query was run (the overlay's "view all" route, `/search?q=<phrase>`) and the drop-in reports no results, so the panel shows. `role="status"` marks it as the live message (in production the drop-in injects it after the query resolves).
- **Empty q (no query; documented, not rendered):** `/search` with no `q`, or after Clear search. The same panel without the "Your search returned no results." h2 shows only the badge line ("Catalog pending" + "Products are being added.") and the Browse Apparel / Quick Order links. There is no Clear search, because there is nothing to clear. It is not rendered as a second panel in the prototype.
- **Results (not rendered, production):** the Product Discovery product grid replaces the panel. It is not designed here, because no products exist and none may be fabricated.
- **Query echo (production):** the field value comes from `q`. The prototype leaves it empty: no faked query and no count. The captured result-count line is omitted.
- **Focus:** the field gets a 2px Signal Blue border plus outline. The buttons and links get a 2px Signal Blue outline with a 2px offset (light ground).

## Interaction model

- The results form is a GET to `/search` with `q`, the same contract as the header overlay's "view all" (`blocks/header/header.js`). No second search client.
- "Clear search" is `<button type="reset" form="results-form">`: it clears the field in place. In production the block must also clear a `q`-prefilled value (reset restores a server-set `value` attribute) and move focus to `#results-q`.
- No page script beyond the shared header script (hamburger, mobile search toggle, Escape).

## Data attributes

- `div[data-section="utility-strip"][data-intent="route B2B account tools"][data-layout="edge-to-edge"][data-items="4"]`
- `header[data-section="header"][data-intent="navigate and search"][data-layout="contained"][data-nav-collapse="hamburger"]`
- `section[data-section="results-head"][data-intent="name the page and retry the search"][data-layout="contained"][data-interactive="form"]`
- `section[data-section="results"][data-intent="honest empty result with next actions"][data-layout="contained"][data-items="3"]`
- `section[data-section="account-tools"][data-intent="route B2B account tools"][data-layout="grid"][data-items="4"]`
- `footer[data-section="footer"][data-intent="legal navigation"][data-layout="contained"]`
- `main[data-template="listing"]`

## Unsourced content (placeholder list)

(none). Every literal is captured, carried from the approved home, or a named improvements fix. The query echo lives in the field's own value at runtime, so it needs no placeholder slot. No result count, products or tips are shown.

## Open questions for craft

- Improvements #1 asks for a "Search" caption above the h1. The craft floor bans eyebrows above headings, so it is dropped, the same decision as on home.
- Improvements #4 (mobile header search) is satisfied by the shared chrome: the 44px Search button in the bar reveals the field.

## Revision (finish-review round 2)

- At 900px and up, the empty panel's actions sit in a second row under a Rail Rule divider, beside the text column. This keeps glyph, text and actions in one 880px unit.
- "Clear search" is a reset in the static prototype. In production the Product Discovery results page must empty the field (`results-q.value = ""`) and focus it, because a reset restores a server-set value. This is recorded as an implementation requirement, not a prototype behaviour.
