<!--
_provenance:
  writtenBy: stardust:direct
  writtenAt: 2026-10-19T18:55:00Z
  readArtifacts:
    - stardust/current/pages/index.json
    - stardust/current/_brand-extraction.json
    - stardust/current/brand-review.html
    - stardust/canon-source/_brand-extraction.json
  stardustVersion: 0.29.1
-->

# Improvements — index (home)

1. **[missed-opportunity]** The home page carries developer onboarding copy, not a storefront. Its only headings are "Ready to go - B2B!", "Launch faster with Boilerplates" and "Why Boilerplates?", and the body explains the `fstab.yaml` tutorial. The only route into the catalog is the header "Apparel" link.
   *Fix:* Lead with the catalog. A persistent search field sits in the header. A portfolio band of category tiles uses the donor's public grouping and verbatim labels: "Servers & Storage" (Rackmount Servers, GPU Servers, Storage Servers, Twin Servers) and "Building Blocks" (Motherboards, Chassis, Networking, Accessories). Source: the `canon-source/pages/en.html` mega-menu `/en/products/*` link texts. Only `/apparel` is live; the other tiles carry a "Catalog pending" caption badge. Then comes a B2B tools band (Quick Order, Search Order, Create Company Account).

2. **[dated-pattern]** Every style is light: h1 60px at weight 300, body 16px at weight 300, all tracked +0.04em (`_computed-styles.json` aggregate.type: 40 of 52 measured elements are weight 300). This is the 2018 "thin-and-airy" boilerplate register, and it reads as faint at packed density.
   *Fix:* Source Sans 3 at 400 for body and 600/700 for headings with normal tracking. The PT Sans Narrow 700 display face is used only for the hero headline.

3. **[contrast]** 10 of 10 home images carry empty `alt` (tension `T-img-alt-empty`), and the hero is a 750×169 decorative banner `<img>`.
   *Fix:* Use the donor data-hall photograph as the hero background, behind a navy scrim of at least 0.55 (an image-reuse exception: the boilerplate banner is not a Supermicro asset). Give any content imagery real alt text, and mark decorative icons `aria-hidden`.

4. **[ia-clutter]** The header lists four auth labels ("Sign in", "Log in", "Registration", "Combined Auth"), tension `T-nav-conflict`, next to "My Account" and two B2B links. That is 11 items in one row.
   *Fix:* A Rack Navy utility strip holds the account tools (Quick Order, Search Order, Create Company Account, Sign in / My Account). The main header keeps logo, catalog, search and the Wishlist / Cart / Account controls. "Log in" and "Combined Auth" leave the visible nav; their routes stay unchanged.

5. **[cliché]** Grey `#454545` pill buttons (24px radius) are the only action treatment, so no action stands out (the palette has no saturated colour; `alsoRole: primary` on text grey).
   *Fix:* Square Power Red primary buttons (`#961919`, hover `#d30015`), with one primary action per band.
