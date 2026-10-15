// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Dominio público del sitio. Se define con la variable de entorno SITE_URL.
 * Mientras no exista, no se generan sitemap ni URLs canónicas absolutas.
 *   SITE_URL=https://www.madeartexdiseno.com npm run build
 */
const site = process.env.SITE_URL || undefined;

/**
 * Subcarpeta donde se publica el sitio. En GitHub Pages de un repositorio de
 * proyecto es "/<nombre-del-repositorio>"; con dominio propio o en local, "/".
 *   BASE_PATH=/madeartex-diseno npm run build
 */
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: site ? [sitemap()] : [],
  image: {
    responsiveStyles: false,
  },
});
