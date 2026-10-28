// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://internetmonitor.app",
  // Every public URL ends in .html (support.html, index.es.html, ...) and is
  // referenced from App Store Connect, the .mcpb manifest, the MCP registry
  // and Search Console, so the output must keep those exact file names.
  build: {
    format: "file",
    // Each stylesheet is a few KB gzipped, so inlining removes the only
    // render-blocking request at almost no HTML cost.
    inlineStylesheets: "always",
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
