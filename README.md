# Madeartex Diseño — Sitio web corporativo

Sitio web de **Madeartex Diseño** (Pasto, Nariño, Colombia): diseño, fabricación y personalización de muebles.
_"Diseñamos y creamos espacios que inspiran"._

Construido con [Astro](https://astro.build) + TypeScript. Genera HTML estático (rápido y óptimo para SEO), sin
backend, base de datos ni sistema de usuarios.

## Requisitos

- Node.js 20 o superior (probado con Node 24)
- npm

## Comandos

| Comando           | Acción                                                        |
| ----------------- | ------------------------------------------------------------- |
| `npm install`     | Instala las dependencias                                      |
| `npm run dev`     | Servidor de desarrollo en `http://localhost:4321`             |
| `npm run build`   | Verifica tipos (`astro check`) y genera el sitio en `dist/`   |
| `npm run preview` | Sirve localmente la versión compilada                         |
| `npm test`        | Ejecuta las pruebas unitarias (enlaces de WhatsApp)           |

Para publicar, sube el contenido de `dist/` a cualquier hosting estático (Netlify, Vercel, Cloudflare Pages,
hosting compartido, etc.).

## Despliegue en GitHub Pages

El flujo [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) compila y publica el sitio en cada push a
`main`, en `https://<usuario>.github.io/<repositorio>/`.

1. En el repositorio: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
2. Haz push a `main` (o ejecuta el flujo manualmente desde la pestaña **Actions**).

El sitio vive en una subcarpeta, por eso todos los enlaces internos pasan por `withBase()`
([`src/lib/paths.ts`](src/lib/paths.ts)); no escribas enlaces internos como `"/ruta/"` directamente.
Con un dominio propio, cambia en el flujo `SITE_URL` por el dominio y `BASE_PATH` por `/`.

> GitHub Pages con repositorio **privado** requiere un plan de pago (GitHub Pro, Team o Enterprise). Con el plan
> gratuito, el repositorio debe ser público. En cualquier caso, la página publicada es pública.

## Configuración pendiente (importante)

Todos los datos de la empresa se editan en **un solo archivo**: [`src/config/site.ts`](src/config/site.ts).
Un valor `null` significa "pendiente": la web lo oculta o muestra el canal como no disponible, nunca datos ficticios.

| Dato                   | Dónde                                | Estado actual |
| ---------------------- | ------------------------------------ | ------------- |
| WhatsApp comercial     | `contact.whatsapp`                   | Pendiente     |
| Teléfono               | `contact.phone`                      | Pendiente     |
| Correo electrónico     | `contact.email`                      | Pendiente     |
| Dirección física       | `contact.address`                    | Pendiente     |
| Horario de atención    | `contact.hours`                      | Pendiente     |
| Redes sociales         | `social`                             | Pendiente     |
| Dominio del sitio      | variable de entorno `SITE_URL`       | Pendiente     |
| Logotipo en alta resolución | `src/assets/brand/`             | Pendiente     |
| Fotografías reales     | `src/assets/images/propias/`         | Pendiente     |
| Historia, misión, visión, experiencia | `src/components/home/About.astro` | Pendiente |

### WhatsApp

Escribe el número en `contact.whatsapp`, en formato local (`3001234567`) o internacional (`573001234567`).
El enlace se genera automáticamente como `https://wa.me/57XXXXXXXXXX?text=...` con el mensaje codificado.
Al configurarlo se activan: los botones de WhatsApp, el botón flotante, el envío del formulario de cotización
y los botones "Solicitar cotización" de cada producto (que abren WhatsApp con el nombre del producto).

Los mensajes predeterminados están en `whatsappMessages` del mismo archivo.

### Dominio, sitemap y URLs canónicas

Cuando exista el dominio, compila con:

```bash
SITE_URL=https://www.tu-dominio.com npm run build
```

Esto activa el `sitemap-index.xml`, la referencia al sitemap en `robots.txt`, las URLs canónicas y las URLs
absolutas de Open Graph y datos estructurados. (En Windows PowerShell: `$env:SITE_URL="https://..."; npm run build`.)

## Imágenes

- **Imágenes de referencia** (`src/assets/images/referencia/`): fotografías ilustrativas de Unsplash con licencia
  libre. **No son trabajos de Madeartex Diseño**; la web lo indica junto a ellas y en `/creditos/`.
  El listado y los autores están en `src/data/reference-images.json`. Para volver a descargarlas:
  `node scripts/fetch-reference-images.mjs`.
- **Fotos reales**: guárdalas en `src/assets/images/propias/` con el **mismo nombre** de la imagen que reemplazan
  (por ejemplo `closet-vidrio.jpg`). Tienen prioridad automática y el aviso de referencia desaparece para ellas.
- Astro optimiza todas las imágenes al compilar (WebP/AVIF, varios tamaños, carga diferida).

## Logotipo

- Original intacto: `src/assets/brand/original/logo-madeartex-original.webp` (escaneo de 1536×567 px).
- Versiones web **provisionales** generadas con `python scripts/prepare-logo.py` (requiere Pillow):
  logotipo sin fondo, emblema circular, favicon, ícono de 512 px e imagen para redes sociales.
- Se recomienda reemplazarlas por el logotipo oficial en formato vectorial (SVG/AI/PDF) o PNG transparente de alta
  resolución.

## Paleta (aproximada, tomada del logotipo)

Definida como variables CSS en [`src/styles/global.css`](src/styles/global.css). **No son códigos oficiales**:
actualízalos allí cuando la empresa los confirme.

| Rol               | Valor aprox. |
| ----------------- | ------------ |
| Verde corporativo | `#2F7A22`    |
| Verde profundo    | `#1E4E16`    |
| Carbón            | `#141414`    |
| Madera            | `#CDA062`    |
| Gris secundario   | `#5D5A53`    |

## Estructura

```
src/
├── config/        site.ts (datos de la empresa), navigation.ts
├── data/          categories.ts, products.ts, gallery.ts, images.ts (catálogo local, migrable a API)
├── lib/           whatsapp.ts (+ pruebas), seo.ts (datos estructurados)
├── layouts/       BaseLayout.astro (SEO, fuentes, encabezado y pie)
├── components/
│   ├── layout/    Header, Footer, Logo, PageHeader, FloatingWhatsApp
│   ├── home/      Hero, CustomFurniture, QuoteProcess, Gallery, About, ContactSection
│   ├── catalog/   CategoryGrid, CatalogBrowser, ProductCard, ProductGallery, CtaBand
│   └── ui/        Icon, WhatsAppButton, SectionHeading, ReferenceNote
├── pages/         index, catalogo/, catalogo/[categoria]/, catalogo/[categoria]/[producto]/,
│                  privacidad, creditos, 404, robots.txt
└── styles/        global.css (tokens de diseño)
```

## Catálogo

Productos y categorías en `src/data/`. No se publican precios ("Cotización según diseño y medidas") ni
materiales: el campo `materials` de cada producto queda vacío hasta que la empresa confirme materiales y acabados.

## Aviso de privacidad

`src/pages/privacidad.astro` contiene un texto base informativo que debe ser revisado y aprobado por la empresa
antes de publicar el sitio.
