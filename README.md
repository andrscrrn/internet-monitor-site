# Internet Monitor for Mac: product site

Source of [internetmonitor.app](https://internetmonitor.app), the site for Internet Monitor: Uptime, a native macOS menu bar app that logs internet outages as evidence for ISP complaints.

## Stack

- [Astro 5](https://astro.build), fully static output, zero client JavaScript except a small inline reveal animation and Astro's viewport prefetch.
- Hosted on Cloudflare Pages: every push to `main` deploys; other branches get preview URLs on `internet-monitor-site.pages.dev`.
- DNS for internetmonitor.app lives in Cloudflare (registrar: Porkbun). A redirect rule sends `www` to the root domain.

## Layout

- `src/pages/`: one file per page. English at the root (`/support`), Spanish under `/es` (`/es/support`).
- `src/config/site.ts`: price, App Store campaign links and other shared constants.
- `src/config/pages.ts`: page registry that generates `sitemap.xml` and `llms.txt`.
- `public/`: files served as-is, including `_headers` (caching), `_redirects` (old Spanish URLs), the MCP extension bundle and `.well-known/mcp-registry-auth` (needed to publish to the MCP registry; do not remove).

## Develop

```
npm install
npm run dev      # local server
npm run build    # static output in dist/
npm run check    # type check
```

The `legacy-site` branch is only a redirect stub that GitHub Pages serves at andrscrrn.github.io/internet-monitor-site, so old links land on internetmonitor.app.
