import { describe, expect, it } from 'vitest';
import { buildWhatsAppLink, normalizeColombianNumber, productMessage } from './whatsapp';

describe('normalizeColombianNumber', () => {
  it('agrega el código 57 a un número local de 10 dígitos', () => {
    expect(normalizeColombianNumber('300 123 4567')).toBe('573001234567');
  });

  it('acepta el formato internacional con símbolos', () => {
    expect(normalizeColombianNumber('+57 (300) 123-4567')).toBe('573001234567');
  });

  it('rechaza valores vacíos o con longitud incorrecta', () => {
    expect(normalizeColombianNumber(null)).toBeNull();
    expect(normalizeColombianNumber('')).toBeNull();
    expect(normalizeColombianNumber('12345')).toBeNull();
    expect(normalizeColombianNumber('583001234567')).toBeNull();
  });
});

describe('buildWhatsAppLink', () => {
  it('devuelve null cuando no hay número configurado', () => {
    expect(buildWhatsAppLink('Hola', null)).toBeNull();
  });

  it('codifica el mensaje para la URL', () => {
    const link = buildWhatsAppLink('Hola, Madeartex Diseño. ¿Clósets & cocinas?', '3001234567');
    expect(link).toBe(
      'https://wa.me/573001234567?text=Hola%2C%20Madeartex%20Dise%C3%B1o.%20%C2%BFCl%C3%B3sets%20%26%20cocinas%3F',
    );
  });

  it('omite el parámetro text si el mensaje está vacío', () => {
    expect(buildWhatsAppLink('   ', '3001234567')).toBe('https://wa.me/573001234567');
  });
});

describe('productMessage', () => {
  it('incluye el nombre del producto', () => {
    expect(productMessage('Clóset a medida')).toContain('Clóset a medida');
  });
});
