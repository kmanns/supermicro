# AEM / Edge Delivery Services (EDS) — Agent Reference

> Load this file when the question involves general Edge Delivery Services or AEM Sites documentation: developer tutorial, anatomy of a project, block collection, spreadsheets, indexing, performance ("keeping it 100"), sections/markup, placeholders, bulk metadata, sitemap, redirects, CDN setup (Fastly, Cloudflare, Akamai, etc.), go-live checklist, push invalidation, Sidekick (install, security, library), Admin API for AEM, aem CLI, staging/environments, security overview — not specific to the Commerce storefront product line.

## Entry points

- Human-readable: [AEM Documentation](https://www.aem.live/docs/)
- Agent index: [llms.txt](https://www.aem.live/llms.txt)

## Navigate deeper

After loading this guide, your next tool call must be a `WebFetch` to a page on `aem.live` — start with `https://www.aem.live/llms.txt` if no specific page from the *Known starting points* table below clearly matches the question. Do not answer from training data, do not ask the user for permission, and do not claim fetching is blocked without attempting it. Then fetch every section relevant to the question.

## Known starting points

Verify current URL via the index if any fail:

| Topic | URL |
| --- | --- |
| EDS project structure, Code Sync, CDN | `https://www.aem.live/developer/anatomy-of-a-project.md` |
| EDS Configuration Service | `https://www.aem.live/docs/config-service-setup` |
| Block markup, sections, and block patterns | `https://www.aem.live/developer/markup-sections-blocks.md` |
| Content scheduling | `https://www.aem.live/developer/content-scheduling.md` |
| Admin API — authentication, force resync (POST to re-pull code/content), sync status | `https://www.aem.live/docs/admin.html` |
| CDN behavior, case-sensitivity, caching TTLs, push invalidation setup | `https://www.aem.live/docs/caching.md` |
| Custom headers | `https://www.aem.live/docs/custom-headers.md` |
| Sidekick (preview/publish browser extension) | `https://www.aem.live/docs/sidekick.md` |
| Go-live checklist, CDN setup | `https://www.aem.live/docs/go-live-checklist.md` |
| AI coding agents guide | `https://www.aem.live/developer/ai-coding-agents.md` |

## Site-scoped fallback search

```
site:www.aem.live <topic>
```

## Also check

- **[Adobe Commerce Storefront](./storefront.md)** for Commerce-specific drop-ins, commerce blocks, storefront boilerplate, or storefront-specific CDN/Fastly/VCL — do not use AEM/EDS as the only source for these.
- **[Document Authoring](./document-authoring.md)** for da.live-specific authoring, DA permissions, and DA org/site setup.
