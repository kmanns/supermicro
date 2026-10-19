<!--
_provenance:
  writtenBy: stardust:direct
  writtenAt: 2026-10-19T18:55:00Z
  readArtifacts:
    - stardust/current/pages/search.json
    - stardust/current/_crawl-log.json#visionCheck
    - blocks/header/header.js (search overlay → /search?q=)
  stardustVersion: 0.29.1
-->

# Improvements — search (results)

1. **[contrast]** The results page has no heading at all (`headings: []`). Screen-reader users land on a lone alert with no page title, and the heading outline is empty.
   *Fix:* An h1 "Search results" with a caption label "Search" above it. The query echo is read from the `q` URL parameter at render time, and the empty state appears when the drop-in reports no results.

2. **[missed-opportunity]** The results page offers no way to refine or retry: the query lives only in the header overlay.
   *Fix:* An inline search field on the results page, prefilled from `q`. It submits to the same `/search?q=` route the overlay's "view all" uses, so there is no second search client.

3. **[contrast]** The same 2.2:1 orange-bordered warning alert as the listing page frames "no results" as an error.
   *Fix:* The shared empty-state panel (Signal Blue rail, drop-in string verbatim, actions "Clear search" and "Browse Apparel").

4. **[ia-clutter]** On mobile, search sits behind an icon in a crowded header.
   *Fix:* Search stays visible in the mobile bar as a field-shaped control that opens the Product Discovery overlay.
