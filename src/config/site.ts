export type Lang = "en" | "es";

export const SITE_URL = "https://internetmonitor.app";
export const APP_NAME = "Internet Monitor: Uptime";
export const AUTHOR = { name: "Andres Carreno", url: "https://andrescarreno.co" };
export const CONTACT_EMAIL = "hello@andrescarreno.co";

// The one place the price lives: every page and llms.txt read it from here.
export const PRICE_USD = "4.99";
export const PRICE_LABEL = `US$${PRICE_USD}`;

export const APP_STORE_ID = "6818842901";
const PROVIDER_TOKEN = "127166683";

/** App Store link with an App Store Connect campaign token (ct). */
export function storeUrl(campaign: string): string {
  return `https://apps.apple.com/app/apple-store/id${APP_STORE_ID}?pt=${PROVIDER_TOKEN}&ct=${campaign}&mt=8`;
}

export const DEFAULT_OG_IMAGE = "/og/default.jpg";
