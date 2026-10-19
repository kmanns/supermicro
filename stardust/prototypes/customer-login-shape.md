<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-10-19T20:10:00Z
  page:             customer-login
  pageUrl:          https://main--supermicro--kmanns.aem.page/customer/login
  againstDirection: stardust/direction.md (Active 2026-10-19T19:00:00Z)
  consumedBy:       impeccable:craft
  readArtifacts:
    - stardust/current/pages/customer-login.json
    - stardust/current/pages/customer-login.html (Auth drop-in SignIn markup, header/footer map)
    - stardust/current/assets/screenshots/customer-login-thumb.png
    - stardust/prototypes/customer-login-improvements.md
    - stardust/prototypes/index-shape.md
    - stardust/prototypes/index-proposed.html (chrome + tokens)
    - DESIGN.md
    - DESIGN.json
    - PRODUCT.md
    - stardust/direction.md
  stardustVersion:  0.29.1
  _provenance:
    capturedSourceLineage:
      - { section: utility-strip, origin: "site-wide system-component (carried verbatim from index-proposed.html; Sign in marked aria-current=page on this route)" }
      - { section: header, origin: "site-wide system-component (carried verbatim from index-proposed.html; menu-panel Sign in marked aria-current=page)" }
      - { section: signin, origin: "captured Auth drop-in SignIn form (pages/customer-login.html main > .commerce-login: h1 'Sign in', input name=email label 'Email *', input name=password label 'Password *' aria-label 'Password', toggle 'Click to show password', 'Forgot password?', submit 'Sign in') — restyled per improvements #2, #3" }
      - { section: new-account, origin: "direction-authorized new — improvements #1, #2, #4; routes from captured header Account group (/customer/company/create 'Create New Company Account', /customer/create) and captured labels Quick Order, Search Order, My Account" }
      - { section: footer, origin: "site-wide system-component (carried verbatim from index-proposed.html: Privacy, Terms of Use, Cookie preferences, Do not sell my personal information, AdChoices)" }
    antiTemplatePass:
      - pattern: sign-in layout
        defaultReflex: "lone centred card on a blank ground with a rounded pill submit (the captured boilerplate)"
        alternatives: ["two-panel pair: white sign-in panel + Rack Navy 'New to Supermicro?' panel, left-anchored to the container edge", "single full-width white band with the form left and a ruled account-routes ledger right", "form inside a Rack Navy band with white inputs"]
        picked: "two-panel pair, left-anchored, form first"
        rationale: "improvements #2 pins the two-panel move; left-anchoring keeps the logo/footer edge and refuses the lone centred column; the navy panel is the page's one orienting band (DESIGN.json systemComponentRoles.cta-band) and carries no red."
      - pattern: password visibility control
        defaultReflex: "small eye glyph floating in the field with no hit area or focus state"
        alternatives: ["44×44 square icon button set inside the right end of the field with an inset Signal Blue focus ring and aria-pressed", "text button 'Show' under the field"]
        picked: "44×44 in-field icon button, aria-pressed"
        rationale: "improvements #3; keeps the captured accessible name 'Click to show password' verbatim without adding a visible string that was not captured."
      - pattern: registration routing
        defaultReflex: "solid + outline twin buttons ('Sign in' / 'Create account') stacked under the form"
        alternatives: ["separate navy panel with one inverse button + one text link (primary-then-text-link)", "a single 'Registration' text link under the submit"]
        picked: "navy panel, inverse button + text link"
        rationale: "DESIGN.json componentStyle.dualCTAPattern 'primary-then-text-link'; keeps one Power Red action per region (Sign in)."
      - pattern: account-benefit reassurance
        defaultReflex: "three icon + headline + sentence benefit cards ('Fast reorders', 'Track shipments'…)"
        alternatives: ["the home's ruled account-tool link rows on navy (Quick Order, Search Order, My Account) at panel scale", "one caption-scale line listing the same labels as plain text", "no reassurance at all"]
        picked: "ruled link rows: Quick Order · Search Order · My Account (finish review fix 2; first build used the caption line)"
        rationale: "improvements #4 asks for reassurance, the content rules forbid invented benefits; the captured labels are the only honest evidence of what an account unlocks, and as live routes they reuse the approved home .tools ledger. Craft floor bans same-size icon cards as structure."
    substrateTransitions:
      default: "data-hall #f1f1f1 (Chassis White panel inside)"
      exceptions:
        - { section: new-account, substrate: "rack-navy panel (≥900px beside the form, below it on mobile)", purpose: "routes new buyers to registration; the page's one orienting band" }
    voiceClassification:
      - { section: utility-strip, classification: captured-verbatim, copy: "Quick Order · Search Order · Create New Company Account · Sign in", source: "index-proposed.html strip (pages/customer-login.html header)" }
      - { section: header, classification: captured-verbatim, copy: "Menu · Catalog · Apparel · Wishlist · Account · Sign in · Registration · My Account · Create New Company Account · Quick Order · Search Order · Search the catalog · Search · Cart", source: "index-proposed.html header (pages/customer-login.html header)" }
      - { section: signin, classification: captured-verbatim, copy: "Sign in (h1) · Email * · placeholder Email · Password * · placeholder Password · aria-label Password · Click to show password · Forgot password? · Sign in (submit)", source: "pages/customer-login.html main .commerce-login" }
      - { section: new-account, classification: direction-authorized rewrite, copy: "New to Supermicro? (h2)", source: "improvements #2 ('a navy \"New to Supermicro?\" band')" }
      - { section: new-account, classification: captured-verbatim, copy: "Create New Company Account (button, /customer/company/create)", source: "pages/customer-login.html header Account group" }
      - { section: new-account, classification: captured-verbatim, copy: "Registration (text link, /customer/create; replaces improvements #2's 'Create an account' so the route keeps one name — finish review fix 7)", source: "pages/customer-login.html header Account group" }
      - { section: new-account, classification: captured-verbatim, copy: "Quick Order (/quick-order) · Search Order (/order-status) · My Account (/customer/account) — ruled link rows", source: "pages/customer-login.html header Account group + nav 'Search Order'; improvements #4" }
      - { section: new-account, classification: "direction-authorized rewrite (non-visible)", copy: "aria-label 'Account tools' on the link-row list", source: "index-shape.md account-tools h2" }
      - { section: footer, classification: captured-verbatim, copy: "Privacy · Terms of Use · Cookie preferences · Do not sell my personal information · AdChoices", source: "pages/customer-login.html footer" }
    signatureElements: []
    signatureNote: "captured page has no signature medium (boilerplate drop-in on white); the site-wide motifs carried from the approved home are the 2px Signal Blue / Sky Rail top rails on the panels and the ruled account-tools ledger"
-->
---
slug: customer-login
url: https://main--supermicro--kmanns.aem.page/customer/login
register: product
surprise: low
dominantDimension: composition/two-panel-auth-pair
---

# Page shape: customer-login (sign in)

## Sections (in render order)

1. **utility-strip** (role `utility-strip`): verbatim from the approved home. The "Sign in" link carries `aria-current="page"`.
2. **header** (role `header`): verbatim from the approved home (`data-nav-collapse="hamburger"`, search submits to `/search`). The menu-panel "Sign in" link carries `aria-current="page"`.
3. **signin** (Chassis White panel, `card-rest`, on the Data Hall ground; 2px Signal Blue top rail with square top corners, radius `0 0 6px 6px`, like the home racks). The first content in `main`; nothing above the form but the h1.
   - h1 "Sign in" (Schematic, h1 scale clamped down for the product register: 39px max, so the form stays in the first viewport).
   - `<form action="/customer/login" method="post" name="signIn_form">`:
     - Label "Email" + a visible "*" marker (caption style, above the field). `input name="email" type="email" placeholder="Email" autocomplete="email" required aria-required="true"`. Square, 44px, 1px Field Edge border.
     - Label "Password" + "*" marker. `input type="password" name="password" placeholder="Password" aria-label="Password" autocomplete="current-password" required aria-required="true"`, with 44px right padding.
     - Toggle: a 44×44 square icon button inside the right end of the password field, `aria-label="Click to show password"`, `title` the same, `aria-pressed="false"`, `aria-controls` the password input. Inset 2px Signal Blue focus ring.
     - "Forgot password?" text link to `/customer/forgotpassword` (Datasheet Blue, 600, 44px row), end-aligned under the password field.
     - "Sign in": full-width square Power Red submit, 44px+, the only red on the page.
4. **new-account** (Rack Navy panel, 2px Sky Rail top rail, radius `0 0 6px 6px`). Right of the form at ≥900px, below it on mobile. Content is top-aligned with no filler; the panel stretches to the form's height.
   - h2 "New to Supermicro?" (white).
   - Inverse button "Create New Company Account" → `/customer/company/create` (2px white border, hover fills Power Red Live, Status Amber focus).
   - White text link "Registration" → `/customer/create` (the captured label; underlined, Status Amber on hover/focus).
   - The home's ruled account-tool rows at panel scale, in a `<ul aria-label="Account tools">`: "Quick Order" → `/quick-order`, "Search Order" → `/order-status`, "My Account" → `/customer/account`. Rows are 48px, white 16px/600, with 1px white-28% rules and a trailing arrow; hover and focus go Status Amber.
5. **footer** (role `footer`): verbatim from the approved home.

## Layout strategy

- Density: packed. Section padding 24 / 36 / 48px.
- Container: the shared 1440px `.wrap`. The pair is left-anchored to the container edge, aligned with the logo and footer, never centred.
- Mobile (<600px): one column, form panel first, the navy panel second, 16px gap. Panel padding 20px (16px below 360px).
- 600–899px: still stacked, the pair capped at 624px (fields 560px). Panel padding 32px.
- 900–1199px: a two-column grid `7fr 5fr` with a 24px gap, capped at 1120px. Both panels stretch to equal height; navy content sits top-aligned.
- ≥1200px: the pair fills the wrap with `minmax(0, 640px) 1fr`. Panel padding 40px.
- Field column: the form is capped at 560px at every width.

## Key states

- Field focus: 2px Signal Blue border plus outline (DESIGN.md Inputs).
- Field error (drop-in owned): State Alert `#c35050` border with the drop-in's hint text below in the field's `role="status"` slot. Not rendered in the static prototype (no captured error copy).
- Toggle: `aria-pressed="false"` (password hidden) at rest; in production the drop-in swaps the input type and `aria-pressed`. Hover: Power Red icon. Focus: inset Signal Blue ring.
- Submit hover: Power Red Live; focus: 2px Signal Blue outline, 2px offset.
- Navy panel hover/focus: Status Amber on the text link; the inverse button fills Power Red Live with white text (5.55:1).
- Strip "Sign in" `aria-current="page"`: underlined.

## Interaction model

- In production the Auth drop-in (`blocks/commerce-login`) renders and submits the form; the prototype form posts to `/customer/login` and does nothing else.
- The prototype does not script the password toggle (static; no inline scripts beyond the shared one).
- "Forgot password?" is a link to `/customer/forgotpassword` (the captured control is a drop-in button that switches view; the route exists in the storefront).

## Data attributes

- `div[data-section="utility-strip"][data-intent="route B2B account tools"][data-layout="edge-to-edge"][data-items="4"]`
- `header[data-section="header"][data-intent="navigate and search"][data-layout="contained"]`
- `main[data-template="form"]`
- `section[data-section="signin"][data-intent="sign in to a company account"][data-layout="split"][data-items="2"][data-interactive="form"]` (the section holding both panels)
- `div[data-section="signin-form"][data-intent="authenticate"][data-layout="panel"][data-interactive="form"]`
- `aside[data-section="new-account"][data-intent="route new buyers to registration"][data-layout="panel"][data-items="5"]`
- `footer[data-section="footer"][data-intent="legal navigation"][data-layout="contained"]`

## Unsourced content (placeholder list)

(none). Every literal is captured from the storefront or is a direction-authorized rewrite named in the improvements list. No customer, company or order data appears, so nothing needs a placeholder.
