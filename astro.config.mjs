import { defineConfig } from "astro/config";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const defaultBase = repoName ? `/${repoName}/` : "/";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://example.github.io",
  base: process.env.BASE_PATH ?? defaultBase,
  output: "static"
});
