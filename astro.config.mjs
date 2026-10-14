// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Dominio público del sitio (pendiente de definir).
 * Configúralo con la variable de entorno SITE_URL, por ejemplo:
 *   SITE_URL=https://www.madeartexdiseno.com npm run build
 * Mientras no exista, no se generan sitemap ni URLs canónicas absolutas.
 */
const site = process.env.SITE_URL || undefined;

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: site ? [sitemap()] : [],
  image: {
    responsiveStyles: false,
  },
});
