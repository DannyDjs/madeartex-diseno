import { withBase } from '../lib/paths';

export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: 'Inicio', href: withBase('/') },
  { label: 'Catálogo', href: withBase('/catalogo/') },
  { label: 'Servicios', href: withBase('/#servicios') },
  { label: 'Galería', href: withBase('/#galeria') },
  { label: 'Nosotros', href: withBase('/#nosotros') },
  { label: 'Contacto', href: withBase('/#contacto') },
];

export const quoteHref = withBase('/#cotizar');

export const quoteHrefFor = (productSlug: string) => withBase(`/?producto=${encodeURIComponent(productSlug)}#cotizar`);
