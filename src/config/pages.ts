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
    es: "/es",
    title: "Home",
    summary: "product overview with real screenshots",
  },
  {
    en: "/ai",
    es: "/es/ai",
    title: "AI setup guide",
    summary: "how to connect Claude, ChatGPT or any MCP client to your connection data",
  },
  {
    en: "/support",
    es: "/es/support",
    title: "Support and FAQ",
    summary: "common questions, report export, troubleshooting",
  },
  {
    en: "/privacy",
    es: "/es/privacy",
    title: "Privacy policy",
    summary: "the complete list of network connections the app makes",
  },
  {
    en: "/prove-internet-outages",
    es: "/es/prove-internet-outages",
    title: "How to prove internet outages to your ISP",
    summary:
      "a practical guide to ruling out Wi-Fi problems, logging outages with timestamps for free, and getting outage credits from a provider",
  },
  {
    en: "/shipping-mcp-in-a-sandboxed-mac-app",
    title: "Shipping an MCP server inside a sandboxed Mac App Store app",
    summary:
      "field notes on bundling an MCP server in a Mac App Store app: the stdio design, a launcher bug and a Chinese AI rule that rejected an update",
  },
];
