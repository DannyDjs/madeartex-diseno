/**
 * CONFIGURACIÓN CENTRAL DE MADEARTEX DISEÑO
 * ------------------------------------------------------------------
 * Todos los datos de contacto y de la empresa se editan aquí.
 * Un valor `null` significa "pendiente de confirmar": la interfaz lo oculta
 * o muestra el canal como no disponible. Nunca escribas datos de ejemplo.
 */

export interface SocialLink {
  label: string;
  url: string;
  icon: 'instagram' | 'facebook' | 'tiktok';
}

export interface SiteConfig {
  name: string;
  slogan: string;
  activity: string;
  location: { city: string; region: string; country: string; countryCode: string };
  contact: {
    /**
     * Número de WhatsApp comercial. Admite formato local (3001234567) o
     * internacional (573001234567). PENDIENTE DE CONFIGURAR.
     */
    whatsapp: string | null;
    phone: string | null;
    email: string | null;
    /** Solo si existe un local visitable confirmado. */
    address: string | null;
    hours: string | null;
  };
  social: SocialLink[];
  whatsappMessages: {
    general: string;
    /** `{producto}` se reemplaza por el nombre del producto. */
    product: string;
    custom: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Madeartex Diseño',
  slogan: 'Diseñamos y creamos espacios que inspiran',
  activity: 'Diseño, fabricación y personalización de muebles',
  location: { city: 'Pasto', region: 'Nariño', country: 'Colombia', countryCode: 'CO' },
  contact: {
    whatsapp: null,
    phone: null,
    email: null,
    address: null,
    hours: null,
  },
  social: [],
  whatsappMessages: {
    general:
      'Hola, Madeartex Diseño. Me gustaría recibir información sobre sus muebles y opciones de cotización.',
    product:
      'Hola, Madeartex Diseño. Estoy interesado en conocer más sobre {producto} y quisiera solicitar una cotización.',
    custom:
      'Hola, Madeartex Diseño. Tengo una idea para un mueble personalizado y me gustaría conversar sobre mi proyecto.',
  },
};

export const PRICE_NOTE = 'Cotización según diseño y medidas';
