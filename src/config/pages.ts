/**
 * Every indexable page, with its Spanish pair when one exists. The sitemap
 * and llms.txt are generated from this list, so a new page is added here.
 */
export interface SitePage {
  en: string;
  es?: string;
  title: string;
  /** One-line summary for llms.txt. */
  summary: string;
}

export const PAGES: SitePage[] = [
  {
    en: "/",
    es: "/index.es.html",
    title: "Home",
    summary: "product overview with real screenshots",
  },
  {
    en: "/ai.html",
    es: "/ai.es.html",
    title: "AI setup guide",
    summary: "how to connect Claude, ChatGPT or any MCP client to your connection data",
  },
  {
    en: "/support.html",
    es: "/support.es.html",
    title: "Support and FAQ",
    summary: "common questions, report export, troubleshooting",
  },
  {
    en: "/privacy.html",
    es: "/privacy.es.html",
    title: "Privacy policy",
    summary: "the complete list of network connections the app makes",
  },
  {
    en: "/prove-internet-outages.html",
    es: "/prove-internet-outages.es.html",
    title: "How to prove internet outages to your ISP",
    summary:
      "a practical guide to ruling out Wi-Fi problems, logging outages with timestamps for free, and getting outage credits from a provider",
  },
  {
    en: "/shipping-mcp-in-a-sandboxed-mac-app.html",
    title: "Shipping an MCP server inside a sandboxed Mac App Store app",
    summary:
      "field notes on bundling an MCP server in a Mac App Store app: the stdio design, a launcher bug and a Chinese AI rule that rejected an update",
  },
];
