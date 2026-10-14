import type { ImageMetadata } from 'astro';
import referenceManifest from './reference-images.json';

/**
 * Registro central de fotografías.
 *
 * Las imágenes de `src/assets/images/referencia/` son fotografías ILUSTRATIVAS
 * de Unsplash (licencia libre) usadas mientras Madeartex Diseño entrega su
 * catálogo real. No representan trabajos ejecutados por la empresa.
 *
 * Para usar fotos reales: guárdalas en `src/assets/images/propias/` con el
 * mismo nombre de archivo (slug) y tendrán prioridad automáticamente; el aviso
 * de "imagen de referencia" desaparece para esas fotos.
 */

export interface SiteImage {
  slug: string;
  src: ImageMetadata;
  isReference: boolean;
  credit?: { author: string; profileUrl: string; photoUrl: string };
}

type ImageModule = { default: ImageMetadata };

const ownImages = import.meta.glob<ImageModule>('../assets/images/propias/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});
const referenceImages = import.meta.glob<ImageModule>('../assets/images/referencia/*.jpg', {
  eager: true,
});

const slugFromPath = (path: string) => path.split('/').pop()!.replace(/\.[^.]+$/, '');

const ownBySlug = new Map(Object.entries(ownImages).map(([path, mod]) => [slugFromPath(path), mod.default]));
const referenceBySlug = new Map(
  Object.entries(referenceImages).map(([path, mod]) => [slugFromPath(path), mod.default]),
);
const creditsBySlug = new Map(referenceManifest.map((entry) => [entry.slug, entry]));

const UTM = '?utm_source=madeartex_diseno&utm_medium=referral';

export function getSiteImage(slug: string): SiteImage {
  const own = ownBySlug.get(slug);
  if (own) return { slug, src: own, isReference: false };

  const reference = referenceBySlug.get(slug);
  if (!reference) throw new Error(`Imagen no encontrada: "${slug}"`);

  const credit = creditsBySlug.get(slug);
  return {
    slug,
    src: reference,
    isReference: true,
    credit: credit && {
      author: credit.author,
      profileUrl: `https://unsplash.com/@${credit.username}${UTM}`,
      photoUrl: `https://unsplash.com/photos/${credit.unsplashId}${UTM}`,
    },
  };
}

/** Todas las imágenes de referencia en uso, para la página de créditos. */
export function getReferenceCredits(): SiteImage[] {
  return referenceManifest.map((entry) => getSiteImage(entry.slug)).filter((image) => image.isReference);
}
