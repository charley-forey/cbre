import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const input = path.join(root, "public", "cbre-logo.png");
const backup = path.join(root, "public", "cbre-logo-original.png");

const buf = fs.readFileSync(input);
const meta = await sharp(buf).metadata();

// Backup once (if not already)
if (!fs.existsSync(backup)) {
  fs.copyFileSync(input, backup);
}

// Trim "boring" edge pixels (matches top-left / background).
// Higher threshold crops tighter when the asset has extra canvas / letterboxing.
const trimmed = await sharp(buf)
  .trim({
    threshold: Number(process.env.CBRE_LOGO_TRIM_THRESHOLD ?? 22),
  })
  .png()
  .toBuffer();

const outMeta = await sharp(trimmed).metadata();
fs.writeFileSync(input, trimmed);

console.log("CBRE logo trimmed:", {
  before: { width: meta.width, height: meta.height },
  after: { width: outMeta.width, height: outMeta.height },
  backup: path.basename(backup),
});
