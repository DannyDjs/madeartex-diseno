import { siteConfig } from '../config/site';
import { normalizeColombianNumber } from './whatsapp';
import { withBase } from './paths';
import type { Product } from '../data/products';

/**
 * Datos estructurados del negocio. Solo incluye información confirmada:
 * la dirección se limita a ciudad/región/país mientras no exista un local
 * visitable confirmado, y los contactos se agregan solo si están configurados.
 */
export function buildLocalBusinessSchema(site: URL | undefined): Record<string, unknown> {
  const { contact, location, social } = siteConfig;
  const phone = normalizeColombianNumber(contact.phone ?? contact.whatsapp);

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    name: siteConfig.name,
    slogan: siteConfig.slogan,
    description: `${siteConfig.activity} en ${location.city}, ${location.region}, ${location.country}.`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: location.region,
      addressCountry: location.countryCode,
      ...(contact.address ? { streetAddress: contact.address } : {}),
    },
    areaServed: { '@type': 'City', name: location.city },
  };

  if (site) {
    schema.url = new URL(withBase('/'), site).href;
    schema.logo = new URL(withBase('/icon-512.png'), site).href;
    schema.image = new URL(withBase('/og-madeartex.jpg'), site).href;
  }
  if (phone) schema.telephone = `+${phone}`;
  if (contact.email) schema.email = contact.email;
  if (social.length) schema.sameAs = social.map((item) => item.url);

  return schema;
}

type Schema = Record<string, unknown>;

export function buildProductSchema(
  product: Product,
  categoryName: string,
  imageUrl: string,
  site: URL | undefined,
): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    category: categoryName,
    image: site ? new URL(imageUrl, site).href : imageUrl,
    brand: { '@type': 'Brand', name: siteConfig.name },
  };
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[], site: URL | undefined): Schema | null {
  if (!site) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, site).href,
    })),
  };
}
