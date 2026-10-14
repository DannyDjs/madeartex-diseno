"""Genera versiones web provisionales del logotipo a partir del escaneo original.

El archivo original NO se modifica. Las salidas son provisionales hasta contar con
el logotipo oficial en formato vectorial o PNG de alta resolución.

Uso: python -I scripts/prepare-logo.py
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "src/assets/brand/original/logo-madeartex-original.webp"
OUT_DIR = ROOT / "src/assets/brand"
PUBLIC = ROOT / "public"

# Recortes medidos sobre el escaneo de 1536x567 px. Se excluyen la línea
# separadora vertical y el fragmento cortado del borde derecho, que pertenecen
# a la pieza impresa y no al logotipo.
LOCKUP_BOX = (120, 35, 1335, 530)
EMBLEM_BOX = (120, 35, 640, 530)
PAPER_LUMA = 238  # tono aproximado del papel escaneado
INK_LUMA = 150  # por debajo de este valor el píxel es totalmente opaco


def remove_paper(img: Image.Image) -> Image.Image:
    """Convierte el fondo de papel en transparencia con bordes suaves."""
    rgb = img.convert("RGB")
    luma = ImageOps.grayscale(rgb)
    alpha = luma.point(
        lambda v: 255 if v <= INK_LUMA else 0 if v >= PAPER_LUMA
        else round(255 * (PAPER_LUMA - v) / (PAPER_LUMA - INK_LUMA))
    )
    rgba = rgb.copy()
    rgba.putalpha(alpha)
    return rgba


def emblem_on_white_disc(img: Image.Image) -> Image.Image:
    """Emblema con su círculo relleno de blanco para usarlo sobre cualquier fondo."""
    emblem = remove_paper(img)
    size = max(emblem.size)
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    canvas.paste(emblem, ((size - emblem.width) // 2, (size - emblem.height) // 2), emblem)
    disc = Image.new("L", (size * 4, size * 4), 0)
    ImageDraw.Draw(disc).ellipse((8, 8, size * 4 - 8, size * 4 - 8), fill=255)
    disc = disc.resize((size, size), Image.LANCZOS)
    base = Image.new("RGBA", (size, size), (255, 255, 255, 0))
    base.putalpha(disc)
    base.alpha_composite(canvas)
    return base


def main() -> None:
    source = Image.open(SOURCE)

    lockup = remove_paper(source.crop(LOCKUP_BOX).filter(ImageFilter.SMOOTH_MORE))
    lockup.save(OUT_DIR / "logo-madeartex.png", optimize=True)

    emblem = emblem_on_white_disc(source.crop(EMBLEM_BOX).filter(ImageFilter.SMOOTH_MORE))
    emblem.save(OUT_DIR / "emblema-madeartex.png", optimize=True)

    emblem.resize((512, 512), Image.LANCZOS).save(PUBLIC / "icon-512.png", optimize=True)
    emblem.resize((180, 180), Image.LANCZOS).save(PUBLIC / "apple-touch-icon.png", optimize=True)
    emblem.resize((48, 48), Image.LANCZOS).save(PUBLIC / "favicon.png", optimize=True)

    # Imagen para compartir en redes (1200x630) con el logotipo centrado sobre blanco.
    og = Image.new("RGB", (1200, 630), (255, 255, 255))
    scale = 1000 / lockup.width
    resized = lockup.resize((1000, round(lockup.height * scale)), Image.LANCZOS)
    og.paste(resized, (100, (630 - resized.height) // 2), resized)
    og.save(PUBLIC / "og-madeartex.jpg", quality=88)

    print("Logotipos provisionales generados.")


if __name__ == "__main__":
    main()
