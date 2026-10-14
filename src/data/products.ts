import type { CategorySlug } from './categories';

/**
 * Catálogo inicial. Los textos describen tipos de mueble de forma general y
 * son editables. No se incluyen precios, materiales ni acabados hasta que
 * Madeartex Diseño los confirme.
 *
 * Estructura pensada para migrar después a una API o panel de administración.
 */
export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  summary: string;
  description: string;
  features: string[];
  /** Aspectos que el cliente puede consultar para personalizar. */
  customization: string[];
  /** Solo materiales y acabados CONFIRMADOS por la empresa. Vacío = por confirmar. */
  materials: string[];
  /** Slugs de imágenes registrados en `images.ts`. La primera es la principal. */
  images: string[];
  featured?: boolean;
}

const DEFAULT_CUSTOMIZATION = ['Dimensiones', 'Colores y acabados', 'Estilo'];

export const products: Product[] = [
  // Dormitorios
  {
    slug: 'base-cama',
    name: 'Base cama',
    category: 'dormitorios',
    summary: 'Base cama de líneas limpias, diseñada según el tamaño de tu colchón y tu habitación.',
    description:
      'Una base cama pensada como pieza central del dormitorio. Su diseño puede ajustarse al tamaño del colchón, a la altura deseada y al estilo del resto del mobiliario.',
    features: ['Diseño acorde al tamaño del colchón', 'Opción de cabecero integrado', 'Combinable con mesas de noche'],
    customization: ['Dimensiones', 'Altura', 'Diseño del cabecero', 'Colores y acabados'],
    materials: [],
    images: ['cama-madera', 'cama-madera-2'],
    featured: true,
  },
  {
    slug: 'closet-a-medida',
    name: 'Clóset a medida',
    category: 'dormitorios',
    summary: 'Clóset diseñado para aprovechar el espacio disponible y organizar tu ropa a tu manera.',
    description:
      'Un clóset diseñado a partir de las medidas reales de tu pared. La distribución interior se define según lo que necesitas guardar: ropa colgada, doblada, calzado o accesorios.',
    features: ['Distribución interior según tus necesidades', 'Aprovechamiento de altura y fondo', 'Puertas batientes o corredizas a consultar'],
    customization: ['Dimensiones', 'Distribución de espacios', 'Número de puertas y cajones', 'Diseño interior', 'Colores y acabados'],
    materials: [],
    images: ['closet-vidrio', 'closet-blanco'],
    featured: true,
  },
  {
    slug: 'armario-vestier',
    name: 'Armario y vestier',
    category: 'dormitorios',
    summary: 'Armarios abiertos o cerrados para crear un vestier ordenado y funcional.',
    description:
      'Módulos de armario y estanterías que pueden convertir una habitación o un rincón en un vestier, con zonas para colgar, doblar y exhibir.',
    features: ['Módulos combinables', 'Zonas para colgar, doblar y calzado', 'Configuración abierta o con puertas'],
    customization: ['Dimensiones', 'Distribución de espacios', 'Organización y almacenamiento', 'Colores y acabados'],
    materials: [],
    images: ['vestier', 'vestier-2'],
  },
  {
    slug: 'tocador',
    name: 'Tocador',
    category: 'dormitorios',
    summary: 'Tocador con superficie de apoyo y almacenamiento para tu rutina diaria.',
    description:
      'Un tocador que combina superficie de trabajo, espacio de almacenamiento y la posibilidad de integrar espejo, adaptado al espacio disponible en tu dormitorio o vestier.',
    features: ['Superficie de apoyo', 'Cajones o compartimentos', 'Posibilidad de integrar espejo'],
    customization: ['Dimensiones', 'Número de cajones', 'Colores y acabados', 'Estilo'],
    materials: [],
    images: ['tocador'],
  },

  // Cocinas
  {
    slug: 'cocina-integral',
    name: 'Cocina integral',
    category: 'cocinas',
    summary: 'Cocina completa diseñada según la forma de tu espacio, con módulos altos y bajos.',
    description:
      'Una cocina integral se diseña a partir de la planta de tu espacio: lineal, en L, en U o con isla. Los módulos se distribuyen para que el trabajo diario sea cómodo y todo quede a mano.',
    features: ['Distribución lineal, en L, en U o con isla', 'Módulos altos y bajos', 'Espacios para electrodomésticos'],
    customization: ['Dimensiones', 'Distribución de espacios', 'Número de puertas y cajones', 'Colores y acabados', 'Estilo'],
    materials: [],
    images: ['cocina-isla', 'cocina-iluminada'],
    featured: true,
  },
  {
    slug: 'cocina-con-barra',
    name: 'Cocina con barra',
    category: 'cocinas',
    summary: 'Barra o península que integra la cocina con el comedor o la sala.',
    description:
      'Una barra amplía la superficie de trabajo y crea un punto de encuentro. Puede incluir almacenamiento en la parte inferior y adaptarse a la altura de los asientos que prefieras.',
    features: ['Superficie de trabajo adicional', 'Almacenamiento inferior', 'Zona para desayunar o compartir'],
    customization: ['Dimensiones', 'Altura', 'Diseño interior', 'Colores y acabados'],
    materials: [],
    images: ['cocina-barra'],
  },
  {
    slug: 'alacenas-y-gabinetes',
    name: 'Alacenas y gabinetes',
    category: 'cocinas',
    summary: 'Alacenas superiores y gabinetes inferiores para ordenar tu cocina.',
    description:
      'Alacenas y gabinetes diseñados para renovar o complementar tu cocina, aprovechando paredes y rincones con puertas, cajones y entrepaños.',
    features: ['Alacenas superiores', 'Gabinetes inferiores con cajones', 'Aprovechamiento de rincones'],
    customization: ['Dimensiones', 'Número de puertas y cajones', 'Organización y almacenamiento', 'Colores y acabados'],
    materials: [],
    images: ['alacenas', 'cocina-lineal'],
  },

  // Comedores
  {
    slug: 'comedor',
    name: 'Comedor',
    category: 'comedores',
    summary: 'Juego de comedor diseñado para el número de puestos y el espacio que necesitas.',
    description:
      'Un comedor pensado para reunir a tu familia. El tamaño de la mesa y el número de puestos se definen según las dimensiones de tu espacio y tu estilo de vida.',
    features: ['Número de puestos a elección', 'Mesa y sillas coordinadas', 'Formas rectangulares, cuadradas o redondas a consultar'],
    customization: ['Dimensiones', 'Número de puestos', 'Colores y acabados', 'Estilo'],
    materials: [],
    images: ['comedor-madera', 'comedor-rustico'],
    featured: true,
  },
  {
    slug: 'mesa-y-sillas',
    name: 'Mesa y sillas',
    category: 'comedores',
    summary: 'Mesas y sillas que también pueden fabricarse por separado.',
    description:
      'Si ya tienes parte del mobiliario, podemos conversar sobre una mesa o sillas que complementen tu espacio, en el formato y estilo que buscas.',
    features: ['Piezas independientes o en conjunto', 'Mesas de diferentes formatos', 'Diseño coordinado con tu espacio'],
    customization: ['Dimensiones', 'Forma de la mesa', 'Colores y acabados', 'Estilo'],
    materials: [],
    images: ['comedor-largo', 'comedor-sillas'],
  },

  // Oficinas y estudios
  {
    slug: 'escritorio',
    name: 'Escritorio',
    category: 'oficinas-y-estudios',
    summary: 'Escritorio para trabajar o estudiar con comodidad, en casa u oficina.',
    description:
      'Un escritorio diseñado según el espacio y el tipo de trabajo que realizas: superficie amplia, cajones, pasacables o repisas integradas.',
    features: ['Superficie de trabajo a medida', 'Cajones o repisas integradas', 'Organización de cables a consultar'],
    customization: ['Dimensiones', 'Número de cajones', 'Organización y almacenamiento', 'Colores y acabados'],
    materials: [],
    images: ['escritorio', 'estudio'],
    featured: true,
  },
  {
    slug: 'biblioteca',
    name: 'Biblioteca',
    category: 'oficinas-y-estudios',
    summary: 'Biblioteca de piso a techo o modular para libros, archivos y objetos.',
    description:
      'Una biblioteca que ordena y decora al mismo tiempo. Puede ocupar una pared completa o integrarse con un escritorio, con entrepaños y gabinetes según tus necesidades.',
    features: ['Entrepaños y gabinetes combinables', 'Aprovechamiento de paredes completas', 'Integración con escritorio'],
    customization: ['Dimensiones', 'Distribución de espacios', 'Número de puertas', 'Colores y acabados'],
    materials: [],
    images: ['biblioteca', 'biblioteca-2'],
  },

  // Salas y entretenimiento
  {
    slug: 'centro-de-entretenimiento',
    name: 'Centro de entretenimiento',
    category: 'salas-y-entretenimiento',
    summary: 'Mueble de pared que integra televisor, repisas y almacenamiento.',
    description:
      'Un centro de entretenimiento organiza el televisor, los equipos y los objetos decorativos en una sola composición, diseñada a partir de las medidas de tu pared.',
    features: ['Espacio para televisor y equipos', 'Repisas y gabinetes', 'Composición a la medida de tu pared'],
    customization: ['Dimensiones', 'Distribución de espacios', 'Número de puertas y cajones', 'Colores y acabados'],
    materials: [],
    images: ['entretenimiento', 'entretenimiento-2'],
    featured: true,
  },
  {
    slug: 'mueble-para-tv',
    name: 'Mueble para TV',
    category: 'salas-y-entretenimiento',
    summary: 'Mueble bajo para televisión con cajones o compartimentos.',
    description:
      'Un mueble para televisión de líneas sencillas que aporta almacenamiento y orden a la sala, diseñado según el tamaño de tu pantalla y tu espacio.',
    features: ['Compartimentos para equipos', 'Cajones o puertas', 'Diseño bajo y funcional'],
    customization: DEFAULT_CUSTOMIZATION,
    materials: [],
    images: ['mueble-tv', 'mueble-tv-2'],
  },

  // Puertas y carpintería
  {
    slug: 'puertas-interiores',
    name: 'Puertas interiores',
    category: 'puertas-y-carpinteria',
    summary: 'Puertas para habitaciones, baños y otros espacios interiores.',
    description:
      'Puertas para interiores que complementan el diseño de tu hogar u oficina, fabricadas según las medidas del vano.',
    features: ['Fabricación según medidas del vano', 'Diseño acorde a tu espacio', 'Opciones de herrajes a consultar'],
    customization: ['Dimensiones', 'Diseño', 'Colores y acabados'],
    materials: [],
    images: ['puertas-interiores', 'puerta-detalle'],
  },
  {
    slug: 'carpinteria-interior',
    name: 'Carpintería para interiores',
    category: 'puertas-y-carpinteria',
    summary: 'Trabajos de carpintería que integran puertas, paneles y detalles en madera.',
    description:
      'Proyectos de carpintería para interiores que dan continuidad al diseño de un espacio: puertas especiales, paneles y otros detalles a consultar.',
    features: ['Proyectos según el espacio', 'Integración con el mobiliario', 'Detalles a medida'],
    customization: ['Dimensiones', 'Diseño', 'Colores y acabados', 'Estilo'],
    materials: [],
    images: ['puerta-moderna', 'puerta-maciza'],
  },

  // Baños
  {
    slug: 'gabinete-de-bano',
    name: 'Gabinete de baño',
    category: 'banos',
    summary: 'Gabinete para lavamanos con cajones o puertas, suspendido o de piso.',
    description:
      'Un gabinete de baño que aprovecha el espacio bajo el lavamanos con cajones o puertas, diseñado según las medidas de tu baño.',
    features: ['Versión suspendida o de piso', 'Cajones o puertas', 'Diseño según medidas del baño'],
    customization: ['Dimensiones', 'Número de puertas y cajones', 'Colores y acabados'],
    materials: [],
    images: ['bano-flotante', 'bano-cajones'],
  },
  {
    slug: 'mueble-de-lavamanos-doble',
    name: 'Mueble de lavamanos doble',
    category: 'banos',
    summary: 'Mueble amplio para dos lavamanos con almacenamiento compartido.',
    description:
      'Un mueble de baño de mayor formato para dos lavamanos, con espacio de almacenamiento distribuido según tus necesidades.',
    features: ['Formato para dos lavamanos', 'Almacenamiento distribuido', 'Diseño según medidas del baño'],
    customization: ['Dimensiones', 'Distribución de espacios', 'Colores y acabados'],
    materials: [],
    images: ['bano-doble', 'bano-doble-2'],
  },

  // Almacenamiento
  {
    slug: 'estanteria',
    name: 'Estantería',
    category: 'almacenamiento',
    summary: 'Estantería abierta o modular para organizar y exhibir.',
    description:
      'Estanterías que ordenan libros, objetos decorativos o artículos del día a día, diseñadas para el espacio y la carga que necesitas.',
    features: ['Formato abierto o modular', 'Entrepaños a diferentes alturas', 'Puede funcionar como divisor de ambientes'],
    customization: ['Dimensiones', 'Distribución de espacios', 'Colores y acabados'],
    materials: [],
    images: ['estanteria-modular', 'estanteria-2'],
  },
  {
    slug: 'repisas',
    name: 'Repisas',
    category: 'almacenamiento',
    summary: 'Repisas de pared para aprovechar espacios pequeños.',
    description:
      'Repisas sencillas que suman almacenamiento y decoración en cocinas, salas, estudios o habitaciones, en las medidas que tu pared permita.',
    features: ['Instalación en pared', 'Formatos a medida', 'Ideales para espacios pequeños'],
    customization: DEFAULT_CUSTOMIZATION,
    materials: [],
    images: ['repisas', 'repisas-2'],
  },

  // Personalizados
  {
    slug: 'proyecto-a-medida',
    name: 'Proyecto de mobiliario a medida',
    category: 'personalizados',
    summary: 'Mobiliario integral diseñado desde cero para un espacio específico.',
    description:
      'Cuando un espacio necesita una solución completa, diseñamos el mobiliario en conjunto: distribución, almacenamiento y estilo pensados para ese lugar.',
    features: ['Diseño integral del espacio', 'Piezas coordinadas entre sí', 'Desarrollo según tu idea y medidas'],
    customization: ['Dimensiones', 'Distribución de espacios', 'Diseño interior', 'Colores y acabados', 'Estilo', 'Organización y almacenamiento'],
    materials: [],
    images: ['vestier-especial', 'closet-blanco'],
    featured: true,
  },
  {
    slug: 'vitrina-exhibidor',
    name: 'Vitrina o exhibidor',
    category: 'personalizados',
    summary: 'Vitrinas y muebles exhibidores para hogares o espacios comerciales.',
    description:
      'Muebles para exhibir objetos, colecciones o productos, diseñados según lo que quieras mostrar y el espacio disponible.',
    features: ['Diseño según lo que vas a exhibir', 'Para hogar o comercio', 'Combinación de zonas abiertas y cerradas'],
    customization: ['Dimensiones', 'Distribución de espacios', 'Colores y acabados', 'Estilo'],
    materials: [],
    images: ['vitrina'],
  },
];

export function getProductsByCategory(category: CategorySlug): Product[] {
  return products.filter((product) => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

/** Productos de la misma categoría primero, completando con destacados. */
export function getRelatedProducts(product: Product, limit = 3): Product[] {
  const sameCategory = products.filter((p) => p.category === product.category && p.slug !== product.slug);
  const others = getFeaturedProducts().filter((p) => p.category !== product.category);
  return [...sameCategory, ...others].slice(0, limit);
}

export const productUrl = (product: Product) => `/catalogo/${product.category}/${product.slug}/`;
