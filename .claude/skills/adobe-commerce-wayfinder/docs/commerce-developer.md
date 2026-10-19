# Adobe Commerce Developer Documentation — Agent Reference

> Load this file when the question involves the developer.adobe.com scope: API-first development, App Builder, event-driven integrations and webhooks, Commerce web APIs (REST/GraphQL), API Mesh, Admin UI SDK, extensibility overview, integration starter kit, Merchandising Services APIs, Product Recommendations APIs, Storefront Events SDK, code samples, or the developer playground.

## Entry points

- [Adobe Commerce for developers](https://developer.adobe.com/commerce)
- [Docs hub](https://developer.adobe.com/commerce/docs/)

## Navigate deeper

After loading this guide, your next tool call must be a `WebFetch` to a page on `developer.adobe.com/commerce` — start with `https://developer.adobe.com/commerce/docs/` if no specific page from the *Known starting points* table below clearly matches the question. Do not answer from training data, do not ask the user for permission, and do not claim fetching is blocked without attempting it. Follow the site IA: Extensibility, Web API, Services, and linked reference pages. When Experience League or Storefront pages link here for APIs, prefer the developer site for request/response details and samples.

**Schema reference questions:** fetch the schema overview or module-level page (e.g. the B2B schema page) rather than following every individual query/mutation/type link. The overview captures the structural picture — types, key operations, and how they relate — without requiring exhaustive page-by-page traversal of the full reference.

## Known starting points

Verify via the docs hub if any fail:

| Topic | URL |
| --- | --- |
| Extensibility overview | `https://developer.adobe.com/commerce/extensibility/` |
| App Builder | `https://developer.adobe.com/app-builder/docs/intro_and_overview/` |
| API Mesh | `https://developer.adobe.com/graphql-mesh-gateway/` |
| Commerce REST APIs | `https://developer.adobe.com/commerce/webapi/rest/` |
| Commerce GraphQL API | `https://developer.adobe.com/commerce/webapi/graphql/` |
| B2B GraphQL schema (Company, NegotiableQuote, PurchaseOrder, RequisitionList) | `https://developer.adobe.com/commerce/webapi/graphql/b2b/` |
| Event-driven integrations (I/O Events) | `https://developer.adobe.com/commerce/extensibility/events/` |
| Webhooks | `https://developer.adobe.com/commerce/extensibility/webhooks/` |
| Admin UI SDK | `https://developer.adobe.com/commerce/extensibility/admin-ui-sdk/` |
| Integration starter kit | `https://developer.adobe.com/commerce/extensibility/starter-kit/integration/` |
| Storefront Events SDK | `https://developer.adobe.com/commerce/services/shared-services/storefront-events/sdk/` |

## Site-scoped fallback search

```
site:developer.adobe.com/commerce <topic>
```

## Also check

- **[Adobe Commerce Storefront](./storefront.md)** for drop-in SDK usage and storefront-side integration patterns.
- **[Experience League](./experience-league.md)** for operational context and Admin configuration that backs the APIs (e.g., enabling features in Admin before calling the API).
