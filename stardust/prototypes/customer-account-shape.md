<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-10-19T20:00:00Z
  page:             customer-account
  pageUrl:          https://main--supermicro--kmanns.aem.page/customer/account
  againstDirection: stardust/direction.md (Active 2026-10-19T19:00:00Z)
  consumedBy:       impeccable:craft
  verification:     UNVERIFIED (signed-out visit redirects to /customer/login; capture is a duplicate of customer-login)
  readArtifacts:
    - stardust/current/pages/customer-account.json (finalUrl /customer/login; _signals.duplicateOf customer-login)
    - stardust/current/pages/customer-account.html (header/footer map)
    - stardust/current/assets/screenshots/customer-account-thumb.png
    - stardust/prototypes/customer-account-improvements.md
    - stardust/prototypes/customer-login-improvements.md (label "Create an account", #2)
    - stardust/prototypes/index-shape.md
    - stardust/prototypes/index-proposed.html (chrome and tokens)
    - DESIGN.md
    - DESIGN.json
    - PRODUCT.md
    - stardust/direction.md
  stardustVersion:  0.29.1
  _provenance:
    capturedSourceLineage:
      - { section: utility-strip, origin: "site-wide system-component (carried verbatim from index-proposed.html; captured header Account group: Quick Order /quick-order, Search Order /order-status, Create New Company Account /customer/company/create, Sign in /customer/login)" }
      - { section: header, origin: "site-wide system-component (carried verbatim from index-proposed.html; Catalog → Apparel, Wishlist, Cart, Search, My Account — blocks/header/header.js drop-ins)" }
      - { section: unverified-notice, origin: "direction-authorized new — DESIGN.json extensions.systemComponentRoles.unverified-marker; PRODUCT.md § Unverified states; improvements preamble ('the prototype carries an Unverified caption badge')" }
      - { section: account-shell, origin: "derived from captured header Account group (pages/customer-account.html header: My Account, Create New Company Account, Quick Order, Search Order) — regrouped into an account rail per improvements #2/#3; existing block commerce-account-sidebar is context only" }
      - { section: account-placeholders, origin: "direction-authorized new — improvements #2 ('content area beside it is an outlined data-placeholder frame'); content never observed (signed-out redirect)" }
      - { section: sign-in-helper, placement: "first in the account-shell grid (finish review, STORY)", origin: "derived from captured redirect target /customer/login (pages/customer-account.json h1 'Sign in', CTA 'Sign in') + /customer/create route (captured link); label 'Create an account' from customer-login-improvements #2" }
      - { section: footer, origin: "site-wide system-component (carried verbatim: Privacy, Terms of Use, Cookie preferences, Do not sell my personal information, AdChoices)" }
    antiTemplatePass:
      - pattern: account navigation
        defaultReflex: "icon sidebar with a thick coloured left-border active state"
        alternatives: ["ruled rail ledger (one 52px row per route) with the active row marked by a 2px Signal Blue bottom rail and aria-current", "horizontal tab bar across the content top", "mobile <select> labelled 'Account section'"]
        picked: "ruled rail ledger on ≥900px that becomes a horizontally wrapping row of the same links below 900px"
        rationale: "same visual vocabulary as the home rack-elevation index; one DOM nav serves both widths; a wrapping list keeps real links working with no script (a static <select> cannot navigate without script or a submit button) and fits 320px because the longest label, 'Create New Company Account', is under 288px at 16px/600. Craft floor bans >1px coloured side stripes, so the active marker sits on the bottom edge."
      - pattern: account dashboard content
        defaultReflex: "grid of dashboard stat cards (order count, addresses, recent orders) with sample data"
        alternatives: ["two outlined PLACEHOLDER frames with shape-only blocks (overview, company/orders)", "a single empty-state panel with one action", "a skeleton table of recent orders with fake rows"]
        picked: "two outlined PLACEHOLDER frames with shape-only blocks"
        rationale: "no account data was ever observed; stat cards and sample rows would fabricate customer and order data (PRODUCT.md § Evidence on Hand: absent, never fabricated). Shape-only frames keep the layout testable without inventing a number."
      - pattern: signed-out prompt
        defaultReflex: "invented 'Signed out?' heading with a solid + outline twin CTA"
        alternatives: ["helper panel: one primary square 'Sign in' button + a 'Create an account' text link, no heading", "inline sentence link inside the notice row"]
        picked: "helper panel with primary + text link"
        rationale: "DESIGN.json componentStyle.dualCTAPattern 'primary-then-text-link'; no invented heading copy; one Power Red action in the region."
      - pattern: unverified marker
        defaultReflex: "yellow warning alert box with an icon"
        alternatives: ["page-wide notice row: navy 'Unverified' caption badge + one Spec Grey line", "diagonal watermark over the content"]
        picked: "page-wide notice row with caption badge"
        rationale: "DESIGN.json unverified-marker role is a caption badge; Status Amber is reserved to navy grounds and warning orange fails as text."
    substrateTransitions:
      default: "data-hall #f1f1f1"
      exceptions:
        - { section: unverified-notice, substrate: "chassis-white band with a 1px Rail Rule bottom rule", purpose: "page-wide honesty marker, reads as part of the chrome above the page title" }
    voiceClassification:
      - { section: utility-strip, classification: captured-verbatim, copy: "Quick Order · Search Order · Create New Company Account · Sign in", source: "pages/customer-account.html header; index-proposed.html" }
      - { section: header, classification: captured-verbatim, copy: "Catalog · Apparel · Wishlist · Cart · Search · My Account · Menu · Account · Registration", source: "pages/customer-account.html header; index-proposed.html" }
      - { section: unverified-notice, classification: "direction-authorized chrome (per friction #3)", copy: "badge 'Unverified'; line 'Signed-in account views were not observed; this layout is a shell to validate against real account data.'", source: "coordinator composition intent; DESIGN.json unverified-marker; PRODUCT.md § Unverified states" }
      - { section: account-shell, classification: captured-verbatim, copy: "h1 'My Account'; rail 'My Account', 'Create New Company Account', 'Quick Order', 'Search Order'", source: "pages/customer-account.html header Account group" }
      - { section: account-shell, classification: direction-authorized rewrite, copy: "nav accessible name 'Account'", source: "captured header group label 'Account'; DESIGN.json voice.do caption 'Account'" }
      - { section: account-placeholders, classification: "direction-authorized chrome (per friction #3)", copy: "frame titles 'Account overview (unverified)', 'Company / orders (unverified)'; label 'PLACEHOLDER · other'", source: "coordinator composition intent; builder-brief placeholder rule" }
      - { section: sign-in-helper, classification: captured-verbatim, copy: "button 'Sign in'", source: "pages/customer-account.json ctas[] 'Sign in'" }
      - { section: sign-in-helper, classification: direction-authorized rewrite, copy: "text link 'Create an account'", source: "customer-login-improvements.md #2; DESIGN.json components Secondary Button example" }
      - { section: footer, classification: captured-verbatim, copy: "Privacy · Terms of Use · Cookie preferences · Do not sell my personal information · AdChoices", source: "pages/customer-account.html footer" }
    signatureElements: []
    signatureNote: "captured page is the boilerplate sign-in form (duplicate of customer-login); no signature medium. The account rail reuses the home page's ruled-row and Signal Blue rail vocabulary."
    unsourcedContent:
      - { id: ph-account-overview, type: other, source: "account data renders from the Account/B2B drop-ins; never observed (signed-out redirect)" }
      - { id: ph-company-orders, type: other, source: "account data renders from the Account/B2B drop-ins; never observed (signed-out redirect)" }
-->
---
slug: customer-account
url: https://main--supermicro--kmanns.aem.page/customer/account
register: product
surprise: low
dominantDimension: composition/account-rail-shell
verification: unverified
---

# Page shape: customer-account (UNVERIFIED shell)

The signed-in account UI was never observed. A signed-out visit to `/customer/account` redirects to `/customer/login`, and the capture is identical to the sign-in page. This brief designs an account SHELL only: navigation, frame slots and a sign-in helper. It contains no customer, company, order, address or date data.

## Sections (in render order)

1. **utility-strip** (role `utility-strip`): carried verbatim from the home prototype. Rack Navy, ≥900px shows all four links; <900px keeps Quick Order and Search Order.
2. **header** (role `header`): carried verbatim from the home prototype (logo, Catalog → Apparel, search field to `/search`, Wishlist, Cart, My Account; hamburger below 900px).
3. **unverified-notice**: a Chassis White band at the top of `<main>`, contained. A navy caption badge "Unverified" followed by one Spec Grey line: "Signed-in account views were not observed; this layout is a shell to validate against real account data." 1px Rail Rule bottom rule.
4. **account-shell**: h1 "My Account" (Schematic, h1 scale), then a 12-column grid on ≥900px. DOM order inside the grid is sign-in-helper, rail, placeholders (reordered at finish review, citing the direction contract's STORY: the working action, Sign in, must be reachable early because it is the only action that works for a signed-out visitor):
   - **sign-in-helper** (columns 4–12, row 1, content-width, aligned to the content column start): see section 6.
   - **Rail** (columns 1–3, rows 1–2): `nav[aria-label="Account"]`, a Chassis White panel (square top corners, 6px bottom corners) with a 2px Signal Blue top rail and ruled 52px rows; non-active rows carry a trailing aria-hidden arrow:
     - My Account → `/customer/account` (`aria-current="page"`, Schematic 600, 2px Signal Blue rail on the row's BOTTOM edge)
     - Create New Company Account → `/customer/company/create`
     - Quick Order → `/quick-order`
     - Search Order → `/order-status`
     Non-active rows are Datasheet Blue links, hover Power Red with a Data Hall tint.
   - **Content** (columns 4–12, row 2): the account-placeholders.
   - Below 900px the same `<nav>` renders as a horizontally wrapping row of 44px link chips (1px Field Edge border, square), the active chip keeping the 2px Signal Blue bottom rail. Choice recorded: wrapping list, not `<select>` (see antiTemplatePass).
5. **account-placeholders** (inside the content column): two outlined PLACEHOLDER frames, stacked on mobile, side by side at ≥1200px:
   - "Account overview (unverified)" (h2): shape blocks only (a 2-line bar group and a 2×2 grid of grey blocks).
   - "Company / orders (unverified)" (h2): shape blocks only (four ruled bar rows).
   Each frame: `2px dashed var(--color-accent)` outline (the stardust honesty signature, sanctioned by the coordinator, ruling R1), a neutral Chassis White fill, the monospace label `PLACEHOLDER · other` in Spec Grey beside the title (never above it), `data-placeholder="true" data-placeholder-type="other" data-placeholder-source="account data renders from the Account/B2B drop-ins; never observed (signed-out redirect)"`. Shapes are `aria-hidden`.
6. **sign-in-helper** (rendered inside the account-shell grid, first): a content-width Chassis White 6px panel. On ≥900px it sits above the frames at the content column start; below 900px it sits directly under the h1, before the rail chips and frames. No heading. One primary square Power Red "Sign in" button → `/customer/login`, then a text link "Create an account" → `/customer/create`.
7. **footer** (role `footer`): carried verbatim.

## Layout strategy

- Density: packed; section padding 48 / 36 / 24px.
- Container 1440px with 16 / 24 / 32px gutters (shared tokens).
- Grid at ≥900px: 12 columns, rail spans 3 (two rows), content spans 9 (row 1 the helper, row 2 the frames). At ≥1200px the two frames sit 2-up and the notice line runs on one line.
- Below 900px: single column in this order: notice, h1, helper panel, wrapping rail row (no horizontal scroll), frames.
- Short page: body is a min-height 100dvh flex column with main flex 1, so the footer meets the viewport bottom.
- Fonts: Source Sans 3 400/600/700 only (PT Sans Narrow is not used on this page and is not imported).

## Key states

- Active rail item: `aria-current="page"`, Schematic 600, 2px Signal Blue bottom rail (no left stripe). The header My Account links (icon button and menu-panel row) also carry `aria-current="page"` on this page.
- Rail hover: Power Red text, Data Hall tint. Focus: 2px Signal Blue outline.
- Placeholder frames: static; never interactive.
- Signed-out state is the only observed state; the helper panel represents it.

## Interaction model

- Static prototype. All links are real routes from the live-route list. No page-specific script; only the shared header script.
- In production the rail maps onto the existing `commerce-account-sidebar` block (context only, not edited) and the frames are filled by the Account/B2B drop-ins after sign-in. The redirect to `/customer/login` is unchanged.

## Data attributes

- `div[data-section="utility-strip"][data-intent="route B2B account tools"][data-layout="edge-to-edge"][data-items="4"]`
- `header[data-section="header"][data-intent="navigate and search"][data-layout="contained"][data-nav-collapse="hamburger"]`
- `section[data-section="unverified-notice"][data-intent="mark unverified design"][data-layout="contained"]`
- `section[data-section="account-shell"][data-intent="route account sections"][data-layout="sidebar"][data-items="4"]`
- `div[data-section="account-placeholders"][data-intent="reserve account data slots"][data-layout="grid"][data-items="2"]`
- `section[data-section="sign-in-helper"][data-intent="sign in to see account"][data-layout="contained"][data-interactive="link"]` (nested in account-shell)
- `footer[data-section="footer"][data-intent="legal navigation"][data-layout="contained"]`
- `main[data-template="unique"]`

## Unsourced content (placeholder list)

1. `ph-account-overview` — "Account overview (unverified)" frame. type `other`. Source: account data renders from the Account/B2B drop-ins; never observed (signed-out redirect).
2. `ph-company-orders` — "Company / orders (unverified)" frame. type `other`. Same source.

The "Unverified" badge, notice line, frame titles and `PLACEHOLDER · other` labels are chrome (friction #3) and are not enumerated as content.

## Open questions for validation

- Which sections the Account/B2B drop-ins actually render after sign-in (addresses at `/customer/address` exists in the sitemap but is not in the live-route list, so it is omitted from the rail).
- Whether the sign-in helper should disappear once a session exists (expected: yes; the redirect makes it unreachable when signed out).
