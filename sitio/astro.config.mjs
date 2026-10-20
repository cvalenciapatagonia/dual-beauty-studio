// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// La misma build sirve para la demo en GitHub Pages (BASE_PATH=/dual-beauty-studio)
// y para el dominio final en Cloudflare (sin BASE_PATH: raíz "/").
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://cvalenciapatagonia.github.io',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  image: { responsiveStyles: false },
  // Sin la 404 y sin la portada repetida sin barra final
  integrations: [sitemap({ filter: (page) => page.endsWith('/') && !page.includes('/404') })],
});
