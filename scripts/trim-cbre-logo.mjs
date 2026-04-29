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

// Trim "boring" edge pixels (matches top-left / background)
const trimmed = await sharp(buf)
  .trim({
    // Slightly looser than default so near-black anti-aliased edge still crops
    threshold: 12,
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
