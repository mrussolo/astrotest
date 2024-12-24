import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Astro Blog de Testes',
    description: 'Testando o Astroblog',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>pt-br</language>`,
  });
}

import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://example.com"
});