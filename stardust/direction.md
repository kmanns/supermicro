<!-- stardust:provenance
  writtenBy: stardust:direct
  writtenAt: 2026-10-19T19:00:00Z
  readArtifacts:
    - stardust/state.json
    - stardust/current/_brand-extraction.json
    - stardust/current/PRODUCT.md
    - stardust/current/brand-review.html
    - stardust/canon-source/DESIGN.md
    - stardust/canon-source/_brand-extraction.json
  synthesizedInputs: [hands-off named assumptions listed under Movements]
  stardustVersion: 0.29.1
-->
---
title: "Redesign the Supermicro EDS storefront based on supermicro.com, preserving the Commerce drop-ins in the nav"
resolvedAt: 2026-10-19T19:00:00Z
toolkitVersion: "v1.0 (stardust v2)"
schemaVersion: 1
---

HANDS-OFF ACTIVATED 2026-10-19T17:50:00Z: the user chose hands-off in chat. Gates auto-resolve; every quality gate still runs.

# Active direction (2026-10-19T19:00:00Z)

## Phrase

> I want to initiate a redesign of my EDS storefront, https://main--supermicro--kmanns.aem.page/, based on my demo prospect's site — https://www.supermicro.com/en/, https://store.supermicro.com/us_en/. Since my demo site is ecommerce focused, I want to make sure the commerce drop-ins on the nav are preserved. I don't have a built out product catalog yet but I'll work on that after the redesign is complete.

## Restatement

Move the storefront from the unbranded grey Commerce boilerplate to Supermicro's own visual system. The donor's palette, type, square action shapes and data-hall imagery are pinned.

- **Register:** product-led, with the home page as the one brand-register surface.
- **Expressive axis:** restrained → committed.
- **Tone:** neutral → serious and technical.
- **Density:** balanced → packed.
- **Distinctiveness:** familiar → distinctive.
- **Shopping structure:** reimagined around search, portfolio categories and B2B account tools. The Commerce and Search drop-ins keep their behaviour, data and routes. Empty catalog states stay honest.

## Movements

- **register** — `product` for listing, search, cart, sign-in and account; `brand` for the home page. Hands-off assumption: the captured surface was `ambiguous`; 5 of 6 pages are tool surfaces.
- **expressive axis** — `restrained` → `committed`. Moved by the donor pin: a distinct palette and type with functional hierarchy intact.
- **tone** — `neutral` → `serious`. Donor voice is technical-precise; the boilerplate "Ready to go - B2B!" register is dropped.
- **density** — `packed`, with section padding 48 / 36 / 24px. Hands-off default for the product register; it also satisfies the commercial-conversion preference (48–56px) and the multi-audience floor (≤ 64px).
- **distinctiveness** — `familiar` → `distinctive` (brand-faithful to the donor).
- **audience** — technical evaluators / system architects, and procurement / operations buyers, with equal priority. They are B2B, at work on desktop, sometimes on tablet or phone on the data-center floor (user-approved).
- **ia-fidelity** — `reimagined` (user-approved: "reimagined shopping IA").
- **constraints** — `brand-faithful` (donor) · `commerce-behaviour-preserved` (drop-ins, Product Discovery Search, routes, events) · `no-fabricated-content` · `a11y-first` (WCAG 2.1 AA) · `perf-first` (EDS, PageSpeed 100).

Named assumptions (hands-off):
1. **Page scope:** index, apparel, search, cart, customer-login, customer-account (user choice). customer-account is `unverified`: a signed-out visit redirects to sign-in.
2. **Home copy:** the storefront's home copy is developer boilerplate, so it is not carried forward. Home merchandising text is sourced verbatim from the donor's public navigation and positioning (category labels and the "Industry's broadest selection…" line), each marked `data-source="donor"`, with no product names, specs or availability claims. Hero headline: "Supermicro" + the donor positioning line. System strings come verbatim from the storefront.
3. **Category tiles:** only `/apparel` exists in the storefront. The other portfolio tiles render with a "Catalog pending" caption badge and link nowhere.
4. **Hero image:** the donor data-hall photograph (`stardust/canon-source/assets/media/hero-vera-rubin-bg.webp`) replaces the boilerplate banner, behind a navy scrim of at least 0.55. Image-reuse exception: the boilerplate banner is not a Supermicro asset.
5. **Fonts:** Source Sans 3 (OFL successor of the donor's Source Sans Pro) and PT Sans Narrow (OFL), self-hosted at implementation.
6. **Donor sample:** /en/products/gpu was captured in place of /en/featured/xai-colossus (see `journal.md`).

## Gaps and questions

None asked (hands-off). Approvals carried from the user's earlier attempt (binding donor, audiences, reimagined IA, visual-only scope) and two in-chat answers (hands-off mode; six pages) resolved the gaps.

## Anchor references

- https://www.supermicro.com/en/ (design donor, binding; `stardust/canon-source/`).

## Anti-references

- The Generic-2026-SaaS silhouette (oversized hero + solid/outline CTA pair + sticky nav + serial footer).
- Stat-callout trust bars, especially with invented numbers.
- Glassmorphism, gradient text, dark-mode-by-reflex.
- The current grey Commerce boilerplate (thin 300-weight type, grey pills, no action colour).

## Divergence inputs

- **mode** — design-donor Mode A ("Design-donor mode — target system inherited from https://www.supermicro.com/en/"). Signal: `signal-strong`.
- **research** — tier 3: no refero MCP and no WebSearch tool, so the seed fallback ran.
- **seed** — `Supermicro|2026-10-19` MD5 `a98cf364…` → `2025-now × Neon bending × Broadcast captioning × dark`. `picked_by: deterministic (research unavailable)`.
  - ground_family override `brand-faithful`: Data Hall `#f1f1f1` ground; "dark" goes to the alt-section surface as Rack Navy bands.
  - Neon bending → 2px luminous blue rails (status-LED lines).
  - Broadcast captioning → caption-style metadata labels.
- **font deck** — `brand-inherited` (Source Sans 3 / PT Sans Narrow), `picked_by: user-constraint`.
- **palette** — inherited from the donor with brand-native role names (Data Hall, Chassis White, Schematic, Spec Grey, Rack Navy, Datasheet Blue, Signal Blue, Sky Rail, Power Red, Status Amber). Additions:
  - Field Edge `#8f8f8f`, from the storefront tokens (the donor's `#cccccc` fails 3:1 as a control boundary).
  - State colours, from the storefront drop-in tokens.
- **anti-toolbox audit** — 2 hits:
  - Sticky top navigation: inherited, and it carries search, mini-cart and account.
  - Condensed display face: home hero only, mixed case, as the donor uses it.
- **off-toolbox moves** — rack-elevation rails; the caption-label metadata system.
- **audit adjustment** — the donor's blue band gradient was removed in favour of flat navy bands with rails.
- **brand-faithful inversions** — hex retention · pure-white retention (cards and inputs only) · saturated Power Red retention · 0px control corners (scoped) · Status Amber reserved to navy grounds. Full text in `DESIGN.json § extensions.divergence`.

## Command sequence (proposed)

1. `$stardust direct` (this command): PRODUCT.md, DESIGN.md, DESIGN.json, the improvements lists.
2. `$stardust prototype <slug>` for each page, which delegates the build to impeccable:
   1. `$impeccable shape`: page-shape brief anchored on the improvements list and the IA priorities.
   2. `$impeccable craft`: render the proposed page against DESIGN.md / DESIGN.json.
   3. `$impeccable critique`: check that the move landed without slop.
   4. `$impeccable audit`: a11y, performance and responsive detectors.
   5. `$impeccable adapt`: mobile adapt and the mobile-nav collapse audit.
   6. `$impeccable polish`: final pass.
3. Three-viewport Playwright validation of each page, saved to `stardust/validation/<slug>/`.
4. Hands-off approval only after every gate passes.
5. Implement the approved design in the existing EDS blocks and the drop-in `:root` tokens, keeping the Commerce and Search integrations untouched. Then `npm run lint`, responsive QA, and a pull request.

## User confirmation

> Hands-off (chosen in chat 2026-10-19). The plan is recorded here instead of awaiting "go".

## Pages in scope

- `index`, `apparel`, `search`, `cart`, `customer-login`, `customer-account` (unverified): the 6 extracted pages.
