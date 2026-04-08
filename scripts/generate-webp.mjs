/**
 * Generates .webp next to each .png/.jpg in public/, and width variants for key hero assets.
 * Run: node scripts/generate-webp.mjs
 */
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

/** Large “hero” assets get responsive -480w / -960w / -1440w WebP variants. */
const RESPONSIVE_BASES = new Set([
  "hero-delivery",
  "ride-hero",
  "homepage-pov",
  "homepage-woman",
  "business-flow",
]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      await walk(full);
    } else if (/\.(png|jpe?g)$/i.test(e.name)) {
      const rel = path.relative(publicDir, full);
      const base = full.replace(/\.(png|jpe?g)$/i, "");
      const webpOut = `${base}.webp`;

      await sharp(full)
        .webp({ quality: 82, effort: 4 })
        .toFile(webpOut);

      console.log("webp:", path.relative(publicDir, webpOut));

      const baseName = path.basename(base);
      if (RESPONSIVE_BASES.has(baseName)) {
        for (const w of [480, 960, 1440]) {
          const out = `${base}-${w}w.webp`;
          await sharp(full)
            .resize({ width: w, withoutEnlargement: true })
            .webp({ quality: 82, effort: 4 })
            .toFile(out);
          console.log("  +", path.relative(publicDir, out));
        }
      }
    }
  }
}

await walk(publicDir);
console.log("Done.");
