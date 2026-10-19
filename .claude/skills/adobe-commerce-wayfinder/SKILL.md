---
name: adobe-commerce-wayfinder
description: Routes Adobe Commerce and Edge Delivery Services questions to the authoritative documentation source before answering. Use for Commerce storefront work (drop-ins such as cart, checkout, auth, account, product list, PDP; commerce-* blocks; scripts/__dropins__/, scripts/initializers/, build.mjs; Storefront Configuration / config.json; API Mesh; storefront GraphQL; $0 prices, 418 errors, CORS, drop-ins not loading), plus AEM/EDS delivery-layer topics, Document Authoring (da.live), Experience League Commerce (Admin, B2B, ACO/ACCS, Live Search, Catalog Service), and the Commerce developer platform (App Builder, webhooks, extensibility).
---

# Adobe Commerce Wayfinder

Vendored from https://github.com/adobe-commerce/wayfinder (`skills/`, Apache-2.0, see `LICENSE`).

1. Read [AGENTS.md](./AGENTS.md) in this directory. It holds the operating principles, the documentation routing table, disambiguation examples, and terminology.
2. Choose every documentation source that applies to the question, then read the matching per-source guide in [docs/](./docs/) from local disk. Do not fetch these guides remotely.
   - `docs/storefront.md`: Commerce storefront on EDS (drop-ins, commerce blocks, Storefront Configuration)
   - `docs/aem-eds.md`: AEM / EDS delivery layer (blocks, CLI, Code Sync, CDN, Sidekick, spreadsheets)
   - `docs/document-authoring.md`: da.live authoring, orgs/sites, permissions
   - `docs/experience-league.md`: Admin, catalog, B2B, cloud, ACO, Live Search
   - `docs/commerce-developer.md`: App Builder, API Mesh, webhooks, GraphQL schema reference
3. Follow the guide's fetch-first instructions and cite the URLs you used. Code in this repository comes before general docs.

To update, replace `AGENTS.md` and `docs/` with the latest `skills/` folder from the upstream repository.
