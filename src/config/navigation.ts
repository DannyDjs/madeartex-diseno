export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Catálogo', href: '/catalogo/' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Galería', href: '/#galeria' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Contacto', href: '/#contacto' },
];

export const quoteHref = '/#cotizar';

export const quoteHrefFor = (productSlug: string) => `/?producto=${encodeURIComponent(productSlug)}#cotizar`;
