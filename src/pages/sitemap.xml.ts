import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL("https://example.github.io");
  const pages = ["", "projects/", "about/"];
  const urls = pages
    .map((page) => `<url><loc>${new URL(page, baseUrl).toString()}</loc></url>`)
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml"
      }
    }
  );
};
