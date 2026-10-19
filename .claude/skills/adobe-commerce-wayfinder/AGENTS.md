# AGENTS.md

> **Remote base URL:** `https://cdn.jsdelivr.net/gh/adobe-commerce/wayfinder@main/skills/`
> Sub-doc paths in this file (e.g. `./docs/storefront.md`) are relative to that base. If you fetched this file remotely, construct absolute URLs by replacing `./docs/` with `https://cdn.jsdelivr.net/gh/adobe-commerce/wayfinder@main/skills/docs/`. If you loaded this file from a local filesystem path, the sub-docs are already available at the same relative path on disk — use them directly without fetching.

Guidance for AI agents working in Adobe Commerce repositories. Use this file to route to the right documentation source, then read the per-source guide for that source before answering.

## Operating principles

1. **Fetch first, name names second.** Do not guess specific names — container names, slot names, config keys, header names, CLI commands, GraphQL fields, Admin paths, URLs, module names, block names, or DA URL patterns. If your answer names any of these, you must have fetched it from the official docs, read it from the user's repo, or read it from a boilerplate reference repo in this session. **WebFetch is available** — always attempt to fetch the relevant documentation. Do not refuse, ask permission, or claim fetching is blocked without first trying. Only if an actual WebFetch call returns an error or empty result should you fall back: in that case, say so explicitly, name the failed URL, and direct the user to the **Human docs** URL from the routing table for the relevant source — never to `llms.txt`, agent markdown indexes (e.g. `commerce.md`), or wayfinder guide files (`AGENTS.md`, `./docs/*.md`, `cdn.jsdelivr.net/.../wayfinder/...`).
2. **Read local code first.** If filesystem access is available, read relevant files before answering. Local code reflects current state and takes precedence over docs — but confirm it's up to date before treating it as authoritative. For storefront layout/DOM questions with no local code, fall back to the boilerplate reference repos.
3. **Public sources only, no invented URLs.** Only cite URLs you retrieved in this session or that appear in this file or the per-source guide you loaded.
4. **Cite sources.** Attribute claims to the doc URL used. If the answer isn't in the docs, say so and direct to official Adobe support — do not speculate.
5. **Confirm before citing.** After fetching a documentation page, scan it for the specific strings that answer the question before writing your response. If the page does not contain a direct answer, say so and try the next source — do not infer or extrapolate from adjacent content.

## Reading the user's code

When filesystem access is available, read relevant files before answering. The user's code reflects their actual current state and takes precedence over general documentation. If filesystem access is not available, ask the user to share relevant files.

## Documentation routing

Use this table to pick the right source(s), then read the linked per-source guide before fetching docs.

| User or repo context | Documentation | Entry point (agents) | Human docs (users) | Per-source guide |
| --- | --- | --- | --- | --- |
| EDS / AEM Sites — use this source for anything about the *delivery layer*, regardless of whether the repo is a Commerce storefront: EDS Configuration Service, AEM Code Sync (GitHub App), local dev (`aem up`, AEM CLI), block authoring pattern, Sidekick install/publish, CDN/caching, spreadsheets (metadata, nav, redirects, placeholders, fragments), section metadata, generic CSS/JS patterns | **AEM / EDS (aem.live)** | [llms.txt](https://www.aem.live/llms.txt) | [www.aem.live/docs/](https://www.aem.live/docs/) | [aem-eds.md](./docs/aem-eds.md) |
| Commerce storefront — the commerce layer on top of EDS: drop-in components (cart, checkout, auth, product list, PDP), commerce-specific blocks, `scripts/__dropins__/`, `scripts/initializers/`, `build.mjs`, Storefront Configuration (endpoints, feature flags), drop-in containers/slots API, ACO/ACCS wiring from the front end, storefront use-case tutorials | **Adobe Commerce Storefront** | [llms.txt](https://experienceleague.adobe.com/developer/commerce/storefront/llms.txt) | [experienceleague.adobe.com/developer/commerce/storefront/](https://experienceleague.adobe.com/developer/commerce/storefront/) | [storefront.md](./docs/storefront.md) |
| Product, merchant, and operations docs: Admin, catalog, orders, B2B, cloud (PaaS/SaaS), upgrades, Live Search/Catalog Service, ACO catalog views and price books, knowledge base | **Experience League (Commerce)** | [commerce.md](https://experienceleague.adobe.com/en/docs/commerce.md) | [experienceleague.adobe.com/en/docs/commerce](https://experienceleague.adobe.com/en/docs/commerce) | [experience-league.md](./docs/experience-league.md) |
| Document Authoring (DA) — the authoring tool and its setup: DA org/site creation, DA permissions and access control, authoring workflow inside da.live, DA-specific features (variables, reusable content, DA library), Universal Editor with Document Authoring | **Document Authoring** | [docs.da.live](https://docs.da.live/) | [docs.da.live](https://docs.da.live/) | [document-authoring.md](./docs/document-authoring.md) |
| Developer platform: extensibility, App Builder, web APIs, API Mesh, integration patterns | **Adobe Commerce Developer** | [developer.adobe.com/commerce](https://developer.adobe.com/commerce) | [developer.adobe.com/commerce](https://developer.adobe.com/commerce) | [commerce-developer.md](./docs/commerce-developer.md) |

Many questions span multiple sources. Identify every relevant source first, load each per-source guide, then fetch docs.

**Deriving a human URL without the table:** for `llms.txt` sites (aem.live, storefront), use the human docs homepage from the table — never link human users to `llms.txt`. For Experience League `*.md` indexes (e.g. `commerce.md`), strip the `.md` suffix. `developer.adobe.com` and `docs.da.live` URLs are already human-readable.

---

## Disambiguation examples

| If the user asks about… | Start here |
| --- | --- |
| content scheduling | [AEM / EDS](./docs/aem-eds.md) — content scheduling is an AEM feature, not a storefront feature, though historically it was managed by PaaS |
| Code change pushed to repo but not showing on aem.live / hlx.live URL | [AEM / EDS](./docs/aem-eds.md) — this is an AEM Code Sync / CDN question, not a storefront question |
| CDN/Fastly/VCL on a Commerce Storefront project | [AEM / EDS](./docs/aem-eds.md) **and** [Storefront](./docs/storefront.md) — storefront has its own Fastly backend routing/VCL beyond generic EDS CDN |
| Local dev setup: npm install, how to start the dev server, AEM CLI, `aem up` | [AEM / EDS](./docs/aem-eds.md) — AEM CLI applies to all EDS sites including storefront |
| Page edited in DA or repo not appearing on live site after publish | [AEM / EDS](./docs/aem-eds.md) — the publish/sync pipeline is EDS infrastructure; DA covers only DA-specific authoring steps |
| Navigation, header, or footer in an EDS or storefront site | [AEM / EDS](./docs/aem-eds.md) — nav/header/footer are document-driven EDS patterns; [Document Authoring](./docs/document-authoring.md) if the question is specifically about editing the nav document in DA |
| Add a non-commerce block or spreadsheet-driven content in a storefront repo | [AEM / EDS](./docs/aem-eds.md) — block authoring pattern is EDS, not storefront-specific |
| Placeholders, fragments, metadata sheets, section metadata, redirects — including "reuse a single value (phone number, promo message, global string) across multiple pages in one place"; this is the EDS placeholders spreadsheet feature (`/placeholders.json`), not DA variables | [AEM / EDS](./docs/aem-eds.md) — core EDS content patterns documented at aem.live regardless of whether the site uses DA for authoring |
| Customize checkout drop-in or slot | [Storefront](./docs/storefront.md) |
| Configure Live Search in Admin or sync issues | [Experience League](./docs/experience-league.md) |
| "Not permitted" in da.live or DA site ACL | [Document Authoring](./docs/document-authoring.md) |
| Create a new DA org, DA site, or connect DA to an EDS repo | [Document Authoring](./docs/document-authoring.md) for DA org/site setup + [AEM / EDS](./docs/aem-eds.md) for fstab.yaml / EDS Configuration Service wiring |
| EDS Configuration Service, `admin.hlx.page/config/`, site configuration JSON | [AEM / EDS](./docs/aem-eds.md) — Configuration Service is the EDS replacement for `fstab.yaml` |
| GraphQL mesh or App Builder webhook | [Commerce Developer docs](./docs/commerce-developer.md) for the mesh/webhook itself; add [Storefront](./docs/storefront.md) if the question involves wiring API Mesh as the data source for an EDS storefront (setting `commerce-endpoint` or Storefront Configuration to point at the mesh) |
| B2B company accounts in Admin | [Experience League](./docs/experience-league.md) |
| GraphQL schema/types for B2B (Company, NegotiableQuote, PurchaseOrder, RequisitionList) or any GraphQL schema reference question | [Commerce Developer docs](./docs/commerce-developer.md) — schema reference lives on developer.adobe.com; use [Experience League](./docs/experience-league.md) only for configuring the B2B *feature* in Admin, not the schema itself |
| `scripts/__dropins__/` or `commerce.js` in repo | [Storefront](./docs/storefront.md) |
| $0 prices, 418 Configuration Error, drop-ins not loading | [Storefront](./docs/storefront.md) + check repo / boilerplate |
| ACO catalog views, price books, tenant IDs | [Experience League](./docs/experience-league.md) |
| Connecting an EDS storefront to an ACO backend — Storefront Configuration keys (`commerce-endpoint`, catalog view ID, analytics tenant/environment ID), initial wiring of the storefront to ACO | [Storefront](./docs/storefront.md) for the Storefront Configuration mechanism and config key names + [Experience League](./docs/experience-league.md) for ACO-side setup (catalog views, price books, tenant IDs) |
| Sidekick install or publish workflow | [AEM / EDS](./docs/aem-eds.md) |
| CORS errors on storefront requests to backend | [Storefront](./docs/storefront.md) for front-end symptoms + [Experience League](./docs/experience-league.md) for backend CORS config |
| CORS errors on storefront requests to the ACO (Commerce Optimizer) GraphQL endpoint | [Experience League](./docs/experience-league.md) — ACO CORS is managed through the ACO tenant configuration, not via `.htaccess` or Nginx; contact Adobe support if the endpoint is not returning the correct CORS headers |
| Custom product attribute on PDP (e.g. `warranty_info`) | [Storefront](./docs/storefront.md) for `overrideGQLOperations` in `build.mjs` + [Experience League](./docs/experience-league.md) for enabling "Use in GraphQL" on the attribute in Admin |

When the repository itself indicates the stack (e.g. `blocks/commerce-*`, drop-in imports, `da.live` links in README), treat that as a strong signal for the matching row above.

---

## Terminology

Use the column on the left consistently; avoid the column on the right.

| Use | Not |
| --- | --- |
| Adobe Commerce | Magento (except when referring specifically to the legacy PaaS PHP codebase) |
| Adobe Commerce Optimizer (ACO) | just "ACO" on first mention |
| Adobe Commerce Cloud Service (ACCS) | just "ACCS" on first mention |
| Adobe Commerce on Cloud | "PaaS" or "Magento Commerce Cloud" |
| Storefront Configuration | "config.json" as the primary term (the file is the *artifact*, the configuration is the concept) |
| Document Authoring (DA) | just "DA" on first mention without expansion |
| Edge Delivery Services (EDS) | just "EDS" on first mention; not "Helix" or "Franklin" |
