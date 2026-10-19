<!-- stardust:provenance
  writtenBy: stardust:direct
  writtenAt: 2026-10-19T18:40:00Z
  againstDirection: stardust/direction.md#active-direction
  readArtifacts:
    - stardust/state.json
    - stardust/current/PRODUCT.md
    - stardust/current/_brand-extraction.json
    - stardust/current/brand-review.html
    - stardust/canon-source/DESIGN.md
    - stardust/canon-source/_brand-extraction.json
  synthesizedInputs: [Positioning is inferred from donor copy; Product Principles derive from the resolved movements]
  mode: target (hands-off, design-donor Mode A)
  stardustVersion: 0.29.1
-->
# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two B2B audiences with equal priority, both arriving at work on a desktop browser, with a growing share on tablets and phones while on the data-center floor or in transit:

- **Technical evaluators and system architects** compare server, storage and component options against workload requirements. They scan for configuration and specification detail, read datasheets, and want the catalog structure to mirror how Supermicro organises its portfolio.
- **Procurement and operations buyers** re-order known parts, manage company accounts, request quotes and track orders. They need fast paths: search, quick order, order status, cart and account, available from every page.

## Product Purpose

The Supermicro storefront: a place to find, evaluate and buy Supermicro hardware through a company account. Scope for this redesign is visual only. It covers the home page, the category listing (Apparel today), search results, cart, sign-in and account. Commerce behaviour stays with the Adobe Commerce drop-ins.

## Positioning

<!-- _provenance: inferred — basis: donor copy "Industry's broadest selection of high quality hardware for fully application optimized server, storage, embedded/IoT, and workstation solutions" (stardust/canon-source/_brand-extraction.json § voice.firstParagraph) and the donor's portfolio navigation. -->

Supermicro's own storefront: the breadth of an engineering-led portfolio, organised the way the company organises it, with B2B account tools built in rather than bolted on.

## Capabilities and Constraints

- **Commerce and Search are preserved, not rebuilt.** The Product Discovery drop-in owns search (header overlay, autocomplete, "view all" to `/search?q=<phrase>`, the endpoint set in `scripts/initializers/search.js`). The Cart, Auth/Account, Wishlist and B2B drop-ins own their surfaces, events and data. The redesign changes tokens, block styling and section composition only.
- **Theming lever:** the drop-ins read `:root` tokens (`--color-brand-*`, `--color-neutral-*`, `--type-*`, `--shape-*`, `--spacing-*`, `--grid-*`). Target values are defined in `DESIGN.md` and are mapped onto those token names during implementation.
- **The catalog is empty today.** Listing and search return no results and the cart is empty. Every such state is designed as an intentional, honest state; the user will build the catalog after the redesign.
- **Unverified states.** PDP, signed-in account, order history and checkout could not be observed (`/customer/account` redirects to sign-in). Designs for them are marked unverified and must be validated against real data before shipping.
- **Platform:** Edge Delivery Services, vanilla JS/CSS, no build step, mobile-first CSS at 600/900/1200px, PageSpeed target 100.
- **Unavailable source:** store.supermicro.com returned 403 to every client and is not evidence.

## Brand Commitments

- **Register:** `product` for the shopping surfaces (listing, search, cart, sign-in, account), with the home page as the one `brand`-register surface. Basis: the captured storefront is tool-shaped on 5 of 6 pages; the home is a landing.
- **Design donor (binding):** https://www.supermicro.com/en/ supplies palette, typography, shape and imagery language (`stardust/canon-source/`). User-approved.
- **Personality:** engineering-precise, serious, specification-led, `transactional`, `modular-catalogue`. Confident without spectacle.
- **Voice:** short factual sentences, mixed-case headings, verbs that name the action ("Search", "Add to cart", "Sign in", "Quick Order"). Caption-style labels for metadata.
- **Assets:** the Supermicro logo SVG and data-hall photography captured from the donor (`stardust/canon-source/assets/`).
- **Anti-references:**
  - The Generic-2026-SaaS silhouette (oversized hero + solid/outline CTA pair + serial-marker footer).
  - Stat-callout trust bars with invented numbers.
  - Glassmorphism, gradient text, dark-mode-by-reflex.
  - The grey, unbranded Commerce boilerplate look the storefront has today.

## Evidence on Hand

- Storefront pages, DOM and computed styles: `stardust/current/pages/*`, `stardust/current/_computed-styles.json`.
- Commerce copy and labels (verbatim source for system strings): header controls (Wishlist, Cart, Search, Sign in, My Account, Create New Company Account, Quick Order, Search Order), "Your search returned no results.", "Shopping Cart", "Your cart is empty", "Start shopping", the sign-in form labels.
- Donor design system, logo, hero photography and public copy: `stardust/canon-source/*`.
- **Absent, and never to be fabricated:** products, SKUs (including the demo SKU `ADB150`), prices, specifications, ratings, stock or lead times, shipping or fulfilment promises, customer or company names, order data, totals, configuration UUIDs or keys, testimonials, and statistics.

## Product Principles

1. **Keep the buying tools within reach.** Search, cart, quick order and account stay in the persistent header on every page and every viewport.
2. **Organise like the portfolio.** Navigation and category structure follow Supermicro's own grouping, so evaluators recognise it at once.
3. **Show what is real, say what is missing.** Empty catalogs and carts read as designed states with a clear next action; nothing stands in for real data.
4. **One action colour.** Deep red means "do this"; blues organise and explain. The hierarchy never inverts.
5. **Specification over spectacle.** Density and clarity beat whitespace and motion. Motion only clarifies state changes.

## Accessibility & Inclusion

WCAG 2.1 AA (project requirement in AGENTS.md):
- Text contrast ≥ 4.5:1 (large ≥ 3:1). The palette pairs are validated in `DESIGN.md` § Colors.
- Visible focus on every control.
- Labelled form fields.
- Alt text on all imagery.
- A logical heading order.
- Full keyboard reach of the header search overlay, mini-cart and account menu.
- `prefers-reduced-motion` honoured.
