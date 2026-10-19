# Journal — supermicro redesign

Chronological log of every prompt execution. Most recent at the bottom.
See `skills/stardust/reference/journal-format.md` for entry format.

---

## 2026-10-19T18:17:00Z — extract — storefront (6 pages) and Supermicro design donor captured

**Prompt:** Redesign the EDS Commerce storefront (main--supermicro--kmanns.aem.page) informed by the prospect's sites supermicro.com/en and store.supermicro.com, preserving the Commerce drop-ins in the nav and the Product Discovery search; a handoff from another platform described an earlier attempt, but none of its artifacts exist in this repository, so the project restarts from scratch.

**Decisions:**
- Start over: the handoff's PRODUCT.md, DESIGN.md/json and stardust/ files are absent locally and on every remote branch. Its approvals are carried forward as inputs (binding visual donor supermicro.com/en; equal-priority audiences of technical evaluators and procurement/operations; reimagined shopping IA with Commerce/Search behaviour preserved; visual-only, no invented catalog/customer/checkout facts).
- Mode: hands-off (user choice in chat). Scope: six pages (user choice): index, apparel, search, cart, customer/login, customer/account.
- Flow: redesign only (the site already runs on EDS; no migration flow keys).
- Design donor: https://www.supermicro.com/en/ via `--design-source`. Plain curl gets 403; Playwright headless with a desktop Chrome UA gets 200.
- store.supermicro.com/us_en returns 403 "Access Denied" even in a real browser: recorded as unavailable, not used.
- Named assumption (hands-off): donor sample swapped `/en/featured/xai-colossus` (editorial story) for `/en/products/gpu` (product-family hub) within the 5-page cap, so shopping-surface evidence exists.

**Artifacts touched:**
- stardust/current/{pages/*, _crawl-log.json, _computed-styles.json, _brand-extraction.json, PRODUCT.md, DESIGN.md, DESIGN.json, brand-review.html} — created
- stardust/canon-source/{pages/*, _crawl-log.json, _computed-styles.json, _brand-extraction.json, DESIGN.md, DESIGN.json, assets/logo.svg, assets/media/*} — created
- stardust/state.json, stardust/status.jsonl — created
- .gitignore (stardust .env block), .hlxignore (stardust/) — updated

**Findings worth flagging:**
- The storefront's drop-ins style from `:root` tokens (`--color-brand-*`, `--type-*`, `--shape-*`, `--spacing-*`, `--grid-*`). Re-theming tokens changes the drop-in look without touching behaviour.
- Every shopping surface is empty: Apparel and Search return "no results", the cart is empty, and /customer/account redirects to sign-in while logged out (account UI unverified).
- Donor system: Source Sans Pro (600 headings / 400 text), PT Sans Narrow 700 hero display, engineering blues (#1d7bb6, #0c82c4), navy #003a70, square deep-red CTAs #961919 (hover #d30015), ground #f1f1f1, 6px cards.
- Donor assets 403 to curl and to Playwright's request API; they were saved from the browser's own render responses.

**Open questions:**
- none (hands-off; gaps go into direction.md as named assumptions)

**Next:** `$stardust direct` — pin the donor system (Mode A) and author the target PRODUCT.md, DESIGN.md, DESIGN.json and page-shape briefs.

---

## 2026-10-19T19:00:00Z — direct (intent) — Supermicro design-donor direction resolved

**Prompt:** Continue hands-off: resolve the redesign direction with supermicro.com/en as the binding donor, preserving the Commerce drop-ins and Product Discovery Search, visual-only, six pages.

**Decisions:**
- Design-donor Mode A: palette, type families, square control shapes and data-hall imagery are pinned to supermicro.com. Content and IA evidence stay with the storefront.
- Register `product` (home page `brand`). Expressive axis `committed`, tone `serious`, density `packed` (48 / 36 / 24px sections), ia-fidelity `reimagined`.
- Research tier 3 (no refero or WebSearch tool), so the seed `2025-now × Neon bending × Broadcast captioning × dark` was used. The dark ground was overridden to Data Hall `#f1f1f1` and moved to the Rack Navy bands.
- Brand-native palette roles. Power Red `#961919` is the only action colour. Contrast pairs checked; usage limits recorded (Signal Blue large-only, Rail Rule decorative-only, warning icons-only).
- Type: Source Sans 3 + PT Sans Narrow, major-third scale. Container 1440px (resolves `T-container-cap`).
- Home copy: the boilerplate copy is dropped; donor public category labels and the positioning line are used verbatim, marked `data-source="donor"`. Non-existent categories show "Catalog pending".
- Motion register `kinetic-grid` (selected only; not applied without `--cinematic`).

**Artifacts touched:**
- PRODUCT.md, DESIGN.md, DESIGN.json: created (target)
- stardust/direction.md: created
- stardust/prototypes/{index,apparel,search,cart,customer-login,customer-account}-improvements.md: created
- stardust/state.json: direction stamped; 6 pages → directed
- .hlxignore: DESIGN.json added (root JSON would otherwise be served)

**Findings worth flagging:**
- The donor's `#cccccc` rule grey fails 3:1 as a control boundary, so input borders use the storefront's `#8f8f8f`.
- The donor's blues fail AA for body text in places: Datasheet Blue is body-safe on white only; Signal Blue is large-text only.

**Open questions:**
- none

**Next:** `$stardust prototype index` (then apparel, search, cart, customer-login, customer-account).

---

## 2026-10-19T19:45:00Z — prototype index — plan, render, critique, audit, adapt, approval (hands-off)

**Prompt:** Continue hands-off: prototype the home page through impeccable craft and every stardust gate.

**Decisions:**
- plan: `index-shape.md` passes the brief validator (lineage 6/6, anti-template pass 4 patterns, surprise low, 2 substrate transitions, voice 6/6). The form is a rack-elevation category index. The brief pins the structure, so impeccable's concept roll was skipped.
- render: `$impeccable craft` (new-work, established world). The craft floor banned eyebrows above headings, so captions moved beside/below headings and the DESIGN.md Caption Rule was amended. Account tools render as a ruled ledger, not icon cards.
- render: the finish reviewer found 8 material fixes; all 8 were resolved over 2 verdict rounds. These included an availability claim: "Available now" + "Live" became "In the storefront". A requested 2px left rail was replaced by right-end status LEDs, because the craft floor bans coloured side stripes.
- critique: run 1 scored 25/36 with one P1 (dead-end pending rows), fixed with next-action lines. Run 2 scored 26/36 with no P0/P1.
- audit: run 1 scored 16/20 with one P0 (no-JS mobile menu hidden), fixed. Run 2 found one P1 regression (no-JS search overlapped Registration), fixed and verified. Acknowledged for the prototype: no hero srcset, unminified logo SVG, Google Fonts @import.
- adapt: the mobile-adapt audit passes from 320 to 1920. Below 900px: hamburger, search button, Wishlist moved into the menu, and a strip with Quick Order and Search Order.
- approval: `approvedBy: hands-off` after all gates cleared. Motion gate n/a (static).

**Artifacts touched:**
- stardust/prototypes/index-shape.md, index-proposed.html, assets/ (favicon, logo, hero): created
- DESIGN.md, DESIGN.json: amended (Caption Rule, mobile header, Status Amber scope, search-field label exception)
- stardust/state.json: index → prototyped → approved

**Findings worth flagging:**
- Running the impeccable critique and audit as parallel subagents worked. Each found issues the other missed: critique found the dead ends, audit found the no-JS P0.

**Open questions:**
- none

**Next:** `$stardust prototype apparel`, reusing the approved header/footer chrome.

---

## 2026-10-19T21:30:00Z — prototype (plan, render, critique, audit, adapt, approval) — apparel, search, cart, customer-login, customer-account

**Prompt:** Continue hands-off: prototype the remaining five pages through impeccable craft and every stardust gate.

**Decisions:**
- plan / render: five parallel builder subagents shared one brief (`stardust/.work/stardust/builder-brief.md`). Each authored `<slug>-shape.md`, ran `$impeccable craft`, and copied the approved home chrome verbatim.
- Coordinator rulings applied to every page:
  - The placeholder frame keeps the stardust-mandated dashed Power Red outline, recorded in DESIGN.md as the one sanctioned exception to the One Red Rule. Its label is Spec Grey and its tint neutral.
  - The direction contract FORM says "no concept roll: brief-pinned".
  - Non-home pages load Source Sans 3 400/600/700 and drop PT Sans Narrow.
- System change: the Field Edge token moved from #8f8f8f to #7a7a7a (donor grey), because #8f8f8f failed 3:1 against Data Hall.
- Finish review: 5 reviewers in two verdict rounds. Truth fixes:
  - Apparel's heading is now "No apparel is listed yet."; the misleading "search returned no results" line was removed.
  - Search's "Clear search" is now a reset, not a self-link.
- critique / audit: 10 subagents. There were no P0s and no page-level P1s. Three audits found the same shared-chrome P1 on two header problems (no-JS sticky header covering the screen; open menu unreachable on short viewports). Both were fixed on all six pages (noscript `position: static`; menu panel max-height plus scroll) and verified.
- adapt: mobile-adapt audit passes, with 0 overflow from 320 to 1920 on all six pages.
- approval: all six are `approvedBy: hands-off`.

**Artifacts touched:**
- stardust/prototypes/{apparel,search,cart,customer-login,customer-account}-{shape.md,proposed.html}: created
- stardust/prototypes/index-proposed.html: shared chrome fixes
- DESIGN.md, DESIGN.json: Field Edge token, placeholder exception, empty-state sentence optional, search-field label exception
- stardust/state.json: 6/6 approved

**Findings worth flagging:**
- Shared chrome needs its no-JS and short-viewport behaviour tested once, centrally. Copying it across six files spread the same P1 to all of them.
- Open, user-level: the dashed red placeholder outline breaks the strict "red only for actions" reading. It is a prototype-only honesty marker, flagged for the user.

**Open questions:**
- The user should review the six prototypes before the redesign lands in the EDS code (the handoff asked for explicit user approval).

**Next:** implement the approved design in the existing EDS blocks and the drop-in `:root` tokens, keeping the Commerce and Search integrations.

---
