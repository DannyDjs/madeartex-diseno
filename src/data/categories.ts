export const CATEGORY_SLUGS = [
  'dormitorios',
  'cocinas',
  'comedores',
  'oficinas-y-estudios',
  'salas-y-entretenimiento',
  'puertas-y-carpinteria',
  'banos',
  'almacenamiento',
  'personalizados',
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export interface Category {
  slug: CategorySlug;
  name: string;
  /** Tipos de mueble que agrupa la categoría. */
  includes: string[];
  description: string;
  image: string;
  seo: { title: string; description: string };
}

export const categories: Category[] = [
  {
    slug: 'dormitorios',
    name: 'Dormitorios',
    includes: ['Bases cama', 'Clósets', 'Armarios', 'Tocadores'],
    description:
      'Muebles para el descanso y la organización: bases cama, clósets, armarios y tocadores pensados para tu habitación.',
    image: 'dormitorio-ambiente',
    seo: {
      title: 'Clósets a medida y muebles de dormitorio en Pasto',
      description:
        'Bases cama, clósets, armarios y tocadores diseñados según las medidas de tu habitación. Solicita tu cotización con Madeartex Diseño en Pasto.',
    },
  },
  {
    slug: 'cocinas',
    name: 'Cocinas',
    includes: ['Alacenas', 'Gabinetes', 'Muebles de cocina'],
    description:
      'Alacenas, gabinetes y muebles de cocina que aprovechan cada centímetro y se adaptan a tu forma de cocinar.',
    image: 'cocina-isla',
    seo: {
      title: 'Muebles de cocina personalizados en Pasto',
      description:
        'Alacenas, gabinetes y cocinas a medida en Pasto, Nariño. Diseño funcional y personalizado con Madeartex Diseño.',
    },
  },
  {
    slug: 'comedores',
    name: 'Comedores',
    includes: ['Comedores', 'Mesas', 'Sillas'],
    description: 'Comedores, mesas y sillas para compartir, diseñados en el tamaño y estilo que tu espacio necesita.',
    image: 'comedor-madera',
    seo: {
      title: 'Comedores, mesas y sillas en madera en Pasto',
      description:
        'Comedores y mesas diseñados a la medida de tu espacio. Consulta opciones de personalización con Madeartex Diseño.',
    },
  },
  {
    slug: 'oficinas-y-estudios',
    name: 'Oficinas y estudios',
    includes: ['Escritorios', 'Bibliotecas', 'Muebles de trabajo'],
    description: 'Escritorios, bibliotecas y muebles de trabajo que combinan orden, comodidad y buen diseño.',
    image: 'estudio',
    seo: {
      title: 'Escritorios y bibliotecas a medida en Pasto',
      description:
        'Escritorios, bibliotecas y muebles para oficina o estudio en casa, diseñados a medida por Madeartex Diseño.',
    },
  },
  {
    slug: 'salas-y-entretenimiento',
    name: 'Salas y entretenimiento',
    includes: ['Muebles para televisión', 'Centros de entretenimiento'],
    description: 'Muebles para televisión y centros de entretenimiento que integran almacenamiento y estilo en tu sala.',
    image: 'entretenimiento',
    seo: {
      title: 'Muebles para TV y centros de entretenimiento en Pasto',
      description:
        'Muebles para televisión y centros de entretenimiento personalizados para tu sala. Cotiza con Madeartex Diseño.',
    },
  },
  {
    slug: 'puertas-y-carpinteria',
    name: 'Puertas y carpintería interior',
    includes: ['Puertas', 'Carpintería para interiores'],
    description: 'Puertas y trabajos de carpintería para interiores que complementan el diseño de cada ambiente.',
    image: 'puertas-interiores',
    seo: {
      title: 'Puertas y carpintería para interiores en Pasto',
      description:
        'Puertas de madera y carpintería interior a medida en Pasto, Nariño. Consulta con Madeartex Diseño.',
    },
  },
  {
    slug: 'banos',
    name: 'Baños',
    includes: ['Gabinetes', 'Muebles auxiliares'],
    description: 'Gabinetes y muebles auxiliares para baño que suman orden y calidez a un espacio de uso diario.',
    image: 'bano-doble',
    seo: {
      title: 'Gabinetes y muebles para baño en Pasto',
      description:
        'Gabinetes de baño y muebles auxiliares diseñados según tus medidas. Solicita tu cotización con Madeartex Diseño.',
    },
  },
  {
    slug: 'almacenamiento',
    name: 'Almacenamiento',
    includes: ['Estanterías', 'Repisas', 'Armarios'],
    description: 'Estanterías, repisas y armarios para mantener cada cosa en su lugar sin renunciar al diseño.',
    image: 'estanteria-modular',
    seo: {
      title: 'Estanterías, repisas y armarios a medida en Pasto',
      description:
        'Soluciones de almacenamiento personalizadas: estanterías, repisas y armarios. Cotiza con Madeartex Diseño en Pasto.',
    },
  },
  {
    slug: 'personalizados',
    name: 'Personalizados y proyectos especiales',
    includes: ['Muebles personalizados', 'Proyectos especiales'],
    description:
      '¿Tienes una idea que no encaja en una categoría? Conversemos sobre muebles personalizados y proyectos especiales.',
    image: 'vestier-especial',
    seo: {
      title: 'Muebles personalizados y proyectos especiales en Pasto',
      description:
        'Diseño y fabricación de muebles personalizados para proyectos especiales en Pasto. Cuéntale tu idea a Madeartex Diseño.',
    },
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
