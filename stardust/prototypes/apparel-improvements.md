<!--
_provenance:
  writtenBy: stardust:direct
  writtenAt: 2026-10-19T18:55:00Z
  readArtifacts:
    - stardust/current/pages/apparel.json
    - stardust/current/_computed-styles.json
    - stardust/current/_crawl-log.json#visionCheck
  stardustVersion: 0.29.1
-->

# Improvements — apparel (category listing)

1. **[contrast]** The empty result renders as a warning alert ("Your search returned no results.") with a `#e79f5c` border that measures 2.2:1 on white. That fails the 3:1 boundary minimum, and it frames an empty catalog as an error.
   *Fix:* A designed empty-state panel: white chassis panel with a 2px Signal Blue top rail, the drop-in string verbatim as the message, and one primary action ("Search the catalog", which focuses the header search). Quick Order sits beside it as a text link.

2. **[missed-opportunity]** The page has a single h1, "Apparel", and nothing else (headings = 1, body text = 0). There is no context for where the buyer is or how to widen the search.
   *Fix:* A caption label "Category" above the h1 and a breadcrumb (Home / Apparel). The result-count and sort/filter slots come from the Product Discovery drop-in and render only when it supplies them. No count is fabricated.

3. **[dated-pattern]** The listing grid has no designed card. When the catalog fills, cards inherit grey-boilerplate defaults (4px radius, `#3d3d3d` text, no action colour).
   *Fix:* Define the chassis card for the drop-in product tile: 6px radius, image on white, Schematic title, a caption line for SKU/attributes from data, and a Power Red add-to-cart. Show it in the prototype only as an outlined `data-placeholder` frame labelled "Product tile (catalog pending)". No sample products.

4. **[ia-clutter]** On a 390px viewport the header's 11 nav items and 4 icon controls compete with the page title for the first screen.
   *Fix:* The mobile header keeps the logo, search and cart in the bar, with account tools at the top of the menu panel, so the title and empty state sit in the first viewport.
