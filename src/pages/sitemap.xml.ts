import type { APIRoute } from "astro";
import { PAGES } from "../config/pages";
import { SITE_URL } from "../config/site";

const abs = (p: string) => new URL(p, SITE_URL).href;

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = PAGES.flatMap((page) => {
    const alternates = page.es
      ? [
          `    <xhtml:link rel="alternate" hreflang="en" href="${abs(page.en)}"/>`,
          `    <xhtml:link rel="alternate" hreflang="es" href="${abs(page.es)}"/>`,
        ].join("\n")
      : "";
    return [page.en, page.es]
      .filter((p): p is string => Boolean(p))
      .map((p) =>
        [`  <url>`, `    <loc>${abs(p)}</loc>`, `    <lastmod>${lastmod}</lastmod>`, alternates, `  </url>`]
          .filter(Boolean)
          .join("\n"),
      );
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
