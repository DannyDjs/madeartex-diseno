import type { CategorySlug } from './categories';

/**
 * Galería de ambientes. Mientras no haya fotos reales de Madeartex Diseño,
 * todas son imágenes de referencia (ver `images.ts`): no son proyectos de la
 * empresa y no se asocian a clientes ni ubicaciones.
 */
export interface GalleryItem {
  image: string;
  category: CategorySlug;
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  { image: 'closet-vidrio', category: 'dormitorios', alt: 'Dormitorio con clóset de puertas de vidrio y cabecero en madera' },
  { image: 'cocina-isla', category: 'cocinas', alt: 'Cocina con módulos en madera, isla central y campana de acero' },
  { image: 'entretenimiento', category: 'salas-y-entretenimiento', alt: 'Sala con centro de entretenimiento empotrado y repisas iluminadas' },
  { image: 'comedor-madera', category: 'comedores', alt: 'Comedor con mesa de madera y sillas a juego' },
  { image: 'biblioteca', category: 'oficinas-y-estudios', alt: 'Biblioteca de piso a techo junto a una ventana' },
  { image: 'bano-flotante', category: 'banos', alt: 'Gabinete de baño suspendido con frentes en madera clara' },
  { image: 'vestier', category: 'dormitorios', alt: 'Vestier con estanterías abiertas en madera' },
  { image: 'cocina-barra', category: 'cocinas', alt: 'Cocina con barra iluminada y gabinetes en madera oscura' },
  { image: 'puertas-interiores', category: 'puertas-y-carpinteria', alt: 'Dos puertas interiores en madera con veta horizontal' },
  { image: 'estanteria-modular', category: 'almacenamiento', alt: 'Estantería modular con objetos decorativos' },
  { image: 'mueble-tv-2', category: 'salas-y-entretenimiento', alt: 'Mueble bajo para televisión con repisas de pared en madera clara' },
  { image: 'vestier-especial', category: 'personalizados', alt: 'Vestier a medida con módulos e iluminación integrada' },
];
