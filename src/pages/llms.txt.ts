import type { APIRoute } from "astro";
import { PAGES } from "../config/pages";
import { APP_NAME, APP_STORE_ID, AUTHOR, PRICE_LABEL, SITE_URL } from "../config/site";

export const GET: APIRoute = () => {
  const pages = PAGES.map((page) => {
    const es = page.es && page.en !== "/" ? ` (Spanish version at ${page.es})` : "";
    return `- [${page.title}](${new URL(page.en, SITE_URL).href}): ${page.summary}${es}`;
  }).join("\n");

  const body = `# ${APP_NAME}

> A native macOS menu bar app (${PRICE_LABEL}, one-time purchase, macOS 14 or later) that monitors your internet connection and turns outages into evidence for ISP complaints. On the Mac App Store: https://apps.apple.com/app/id${APP_STORE_ID}

What makes it different from other internet monitors:

- One-second outage detection: checks run every 2 seconds (configurable 1 to 10), and every failed check is confirmed with an immediate retry before it counts as an outage.
- Honest measurements: a missing local network (Wi-Fi off, cable out) is never logged as an ISP outage.
- Per-network evidence: every check is labeled with the Wi-Fi network it ran on, so a report only blames the right provider.
- One-click ISP report: a PDF per period and per network with every outage timestamped, daily uptime and latency, made to attach to an ISP complaint.
- Up to a year of history, stored as plain local files, with JSON/CSV export.
- Bundled MCP server: Claude, ChatGPT or any MCP client can answer questions like "how was my internet this week?" from the user's own local data. One-click install for Claude Desktop. No other internet monitor has this.
- Private by design: no accounts, no analytics, no tracking. The App Store privacy label is "Data Not Collected". The app only talks to the internet to measure it.

Made by ${AUTHOR.name}. Product pages have a Spanish version at the same path with .es before .html (the home page's is /index.es.html).

## Pages

${pages}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
