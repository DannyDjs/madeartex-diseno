// Descarga las fotografías de referencia (Unsplash, licencia libre) listadas en
// src/data/reference-images.json hacia src/assets/images/referencia/.
// Son imágenes PROVISIONALES: deben sustituirse por fotos reales de Madeartex Diseño.
//
// Uso: node scripts/fetch-reference-images.mjs
import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'src/assets/images/referencia');
const manifest = JSON.parse(await readFile(join(root, 'src/data/reference-images.json'), 'utf8'));
const DEFAULT_WIDTH = 1600;

await mkdir(outDir, { recursive: true });

for (const image of manifest) {
  const target = join(outDir, `${image.slug}.jpg`);
  const exists = await access(target).then(() => true, () => false);
  if (exists) continue;

  const width = image.width ?? DEFAULT_WIDTH;
  const url = `https://images.unsplash.com/${image.path}?w=${width}&q=80&fm=jpg&fit=max`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`No se pudo descargar ${image.slug}: HTTP ${response.status}`);
  await writeFile(target, Buffer.from(await response.arrayBuffer()));
  console.log(`✓ ${image.slug}`);
}

console.log(`${manifest.length} imágenes de referencia disponibles en ${outDir}`);
