import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const out = path.join(root, "public", "og-cbre-conversation.png");

const w = 1200;
const h = 630;
const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#09090b"/>
      <stop offset="100%" style="stop-color:#0c1914"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <rect x="0" y="0" width="10" height="100%" fill="#006A4D"/>
  <text x="72" y="220" font-family="system-ui, Segoe UI, sans-serif" font-size="46" font-weight="600" fill="#fafafa">Head Of AI Products</text>
  <text x="72" y="288" font-family="system-ui, Segoe UI, sans-serif" font-size="32" fill="#4ecf9a">Charley Forey</text>
  <text x="72" y="370" font-family="system-ui, Segoe UI, sans-serif" font-size="26" fill="#a1a1aa">Live Demos And Role Conversation</text>
  <text x="72" y="540" font-family="system-ui, Segoe UI, sans-serif" font-size="17" fill="#71717a">Independent candidate resource, not affiliated with CBRE</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("Wrote", out);
