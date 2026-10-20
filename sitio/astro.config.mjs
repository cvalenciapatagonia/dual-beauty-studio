// @ts-check
import { defineConfig } from 'astro/config';

// La misma build sirve para la demo en GitHub Pages (BASE_PATH=/dual-beauty-studio)
// y para el dominio final en Cloudflare (sin variables: raíz "/").
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://cvalenciapatagonia.github.io',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  image: { responsiveStyles: false },
});
