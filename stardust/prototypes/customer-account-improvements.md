<!--
_provenance:
  writtenBy: stardust:direct
  writtenAt: 2026-10-19T18:55:00Z
  readArtifacts:
    - stardust/current/pages/customer-account.json (finalUrl /customer/login; duplicateOf customer-login)
    - stardust/current/_crawl-log.json#visionCheck
  stardustVersion: 0.29.1
-->

# Improvements — customer-account (UNVERIFIED)

The signed-in account UI was never observed: a signed-out visit to `/customer/account` redirects to `/customer/login`, and the capture is pixel-identical to the sign-in page. Every item below designs a shell only, and the prototype carries an "Unverified" caption badge.

1. **[missed-opportunity]** The redirect lands on a generic "Sign in" page with no sign that the visitor asked for their account.
   *Fix:* When the redirect came from `/customer/account`, the sign-in page shows the caption label "Account" above the title. This is a presentation-only change and does not alter the redirect.

2. **[ia-clutter]** Account destinations are spread across the header (My Account, Create New Company Account, Quick Order, Search Order) with no grouping.
   *Fix:* An account shell. On ≥900px a left rail of sections (account, company, orders, quick order) uses only the routes that exist in the sitemap (`/customer/account`, `/customer/company/*`, `/customer/address`, `/order-status`, `/quick-order`), and the content area beside it is an outlined `data-placeholder` frame. On mobile the rail collapses into a select.

3. **[contrast]** The existing `commerce-account-sidebar` block styling is unverified against the target tokens.
   *Fix:* The rail uses the target link and active-state rules (Datasheet Blue links, a 2px Signal Blue active rail, Schematic text). No customer name, company, order or address data is shown.
