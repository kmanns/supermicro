<!-- stardust:provenance
  writtenBy: stardust:extract
  writtenAt: 2026-10-19T18:14:00Z
  againstInput: "$stardust extract https://main--supermicro--kmanns.aem.page/ --pages /,/apparel,/search,/cart,/customer/login,/customer/account --design-source https://www.supermicro.com/en/ --hands-off"
  readArtifacts:
    - stardust/current/pages/*.json (6, live Playwright renders)
    - stardust/current/_brand-extraction.json
    - stardust/current/_computed-styles.json
    - stardust/current/_crawl-log.json
  synthesizedInputs: [Users, Product Purpose, Positioning, Product Principles are inferred from captured copy and page structure]
  mode: descriptive (current state, not target)
  stardustVersion: 0.29.1
-->
# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

_provenance: inferred — basis: the header exposes B2B account entry points ("Create New Company Account", "Quick Order", "Search Order", "My Account") and the home headline reads "Ready to go - B2B!"._

Business buyers of a B2B Adobe Commerce storefront: people who sign in to a company account, browse a category (Apparel), search the catalog, build a cart, and reorder. The captured site is the unbranded storefront boilerplate, so no real audience copy exists yet.

## Product Purpose

_provenance: inferred — basis: home body copy ("The content you are looking at is served from da.live", "Launch faster with Boilerplates", fstab.yaml tutorial link)._

A working Edge Delivery Services + Adobe Commerce storefront built from the B2B boilerplate. Today it demonstrates the storefront mechanics (Product Discovery search, category listing, cart, authentication, company accounts) rather than selling a specific product line.

## Positioning

_provenance: inferred._ None authored. The home page is boilerplate onboarding copy; there is no brand claim to preserve.

## Capabilities and Constraints

- Commerce drop-ins render the shopping surfaces client-side: Product Discovery (search overlay with autocomplete in the header, results at `/search?q=`, category listing at `/apparel`), Cart (`/cart`, mini-cart in header), Auth (`/customer/login`, account pages), plus B2B company pages listed in the sitemap.
- The catalog returns no products: `/apparel` and `/search` both show "Your search returned no results."; the cart is empty ("Your cart is empty", "Start shopping").
- `/customer/account` redirects to `/customer/login` when signed out; no customer-facing account UI was observable.
- Header affordances captured on every page: Wishlist, Cart (mini-cart), Search, account menu; nav links All Categories, Apparel, Sign in / Log in, Registration, My Account, Create New Company Account, Quick Order, Combined Auth, Search Order.
- Footer is legal-only (Privacy, Terms of Use, Cookie preferences, Do not sell my personal information, AdChoices).
- The drop-ins read the site's `:root` design tokens (`--color-brand-*`, `--color-neutral-*`, `--type-*`, `--shape-*`, `--spacing-*`, `--grid-*`), so visual changes can be made through tokens without touching drop-in behavior.

## Brand Commitments

- Register: **ambiguous** — the home is a marketing-style landing; Apparel, Search, Cart and Sign in are tool surfaces (grid, filters/sort, cart, form).
- Observed personality: neutral, unbranded, grey-scale boilerplate; light-weight (300) adobe-clean type with wide 0.04em tracking; dark-grey pill buttons.
- Wordmark: the text "Boilerplate" (no image logo).
- Observed anti-references: none stated; the site carries no brand identity to protect.

## Evidence on Hand

- Page records + rendered DOM: `stardust/current/pages/{index,apparel,search,cart,customer-login,customer-account}.{json,html}`
- Screenshots: `stardust/current/assets/screenshots/*.png` (not tracked in git)
- Computed styles: `stardust/current/_computed-styles.json` (1440 + 390)
- Brand surface: `stardust/current/_brand-extraction.json`; favicon `stardust/current/assets/favicon.ico`
- Absent, and must not be fabricated downstream: products, SKUs, prices, specs, stock, ratings, customer names, orders, addresses, company data, checkout states. The demo SKU `ADB150` and any configuration UUIDs/keys are not content.

## Product Principles

_provenance: inferred._

1. Commerce behavior is owned by the drop-ins; presentation is owned by tokens, blocks and section styling.
2. Empty states are real states: an empty catalog or cart must read as intentional, never filled with stand-ins.
3. B2B entry points (company account, quick order, order search) are first-class navigation, not footer links.

## Accessibility & Inclusion

No product-specific requirement captured. Observed: images on the home page carry empty `alt` text; body copy is weight 300 at 16px on white.
