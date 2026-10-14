import { siteConfig } from '../config/site';

const COLOMBIA_CODE = '57';

/**
 * Normaliza un número colombiano al formato que exige wa.me: 57 + 10 dígitos,
 * sin espacios ni símbolos. Devuelve `null` si el número no es válido.
 */
export function normalizeColombianNumber(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) return `${COLOMBIA_CODE}${digits}`;
  if (digits.length === 12 && digits.startsWith(COLOMBIA_CODE)) return digits;
  return null;
}

/** Construye un enlace de WhatsApp con el mensaje codificado, o `null` si no hay número válido. */
export function buildWhatsAppLink(
  message: string,
  number: string | null | undefined = siteConfig.contact.whatsapp,
): string | null {
  const normalized = normalizeColombianNumber(number);
  if (!normalized) return null;
  const text = message.trim();
  return text
    ? `https://wa.me/${normalized}?text=${encodeURIComponent(text)}`
    : `https://wa.me/${normalized}`;
}

export function productMessage(productName: string): string {
  return siteConfig.whatsappMessages.product.replace('{producto}', productName);
}

export const isWhatsAppConfigured = (): boolean =>
  normalizeColombianNumber(siteConfig.contact.whatsapp) !== null;
