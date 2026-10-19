<!--
_provenance:
  writtenBy: stardust:direct
  writtenAt: 2026-10-19T18:55:00Z
  readArtifacts:
    - stardust/current/pages/cart.json
    - stardust/current/_computed-styles.json
    - stardust/current/_crawl-log.json#visionCheck
  stardustVersion: 0.29.1
-->

# Improvements — cart

1. **[dated-pattern]** The empty cart is a centred card holding a line icon, "Your cart is empty" (h2) and a dark-grey 24px-radius pill "Start shopping" (`#454545`, `_computed-styles` hover → `#383838`). It is the boilerplate empty-cart silhouette, with no brand action colour.
   *Fix:* A left-aligned empty-state panel using the drop-in strings verbatim. "Start shopping" becomes a square Power Red primary button.

2. **[missed-opportunity]** Procurement buyers usually re-order known parts, but the empty cart offers only "Start shopping". Quick Order (`/quick-order`) and Search Order (`/order-status`) exist in the header but are not offered here.
   *Fix:* A B2B tools row under the empty state links Quick Order and Search Order as secondary text links, both on existing routes.

3. **[missed-opportunity]** There is no sign-in prompt, although a company account is what makes a B2B cart useful.
   *Fix:* For signed-out visitors, a caption-labelled "Company account" note with "Sign in" and "Create Company Account" links (existing routes).

4. **[ia-clutter]** The page title "Shopping Cart" (h1) and the card heading "Your cart is empty" (h2) say the same thing twice at two sizes.
   *Fix:* Keep the h1 "Shopping Cart" with a caption label "Cart", and the h2 as the empty-state heading at h3 visual size. The filled-cart layout (line items, totals, checkout) is designed as an unverified outline only, with no figures.
