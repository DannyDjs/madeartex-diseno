import type { APIRoute } from 'astro';
import { withBase } from '../lib/paths';

export const GET: APIRoute = ({ site }) => {
  const lines = ['User-agent: *', 'Allow: /'];
  // El sitemap solo existe cuando el dominio está configurado (SITE_URL).
  if (site) lines.push('', `Sitemap: ${new URL(withBase('/sitemap-index.xml'), site).href}`);
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
