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
