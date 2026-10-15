/**
 * Prefija rutas internas con la ruta base del sitio (`base` en astro.config.mjs).
 * En GitHub Pages el sitio vive en una subcarpeta (p. ej. /madeartex-diseno/),
 * por eso ningún enlace interno debe escribirse directamente como "/ruta/".
 */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function withBase(path: string): string {
  if (/^([a-z]+:|\/\/)/i.test(path)) return path;
  return `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
}
