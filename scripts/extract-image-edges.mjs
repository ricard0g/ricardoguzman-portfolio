// Samples the bottom edge colour of every project screenshot in src/assets and writes it to
// src/data/image-edges.json. ProjectCard uses it on mobile so the caption
// background continues the screenshot through a gradient.
// Re-run with `npm run edges` whenever a screenshot is added or replaced.
import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ASSETS_DIR = "src/assets";
const OUTPUT = "src/data/image-edges.json";

// Must match the aspect-ratio of `.portfolio__card-media` on mobile: the image is
// cropped from the top to this ratio, so the edge we blend into is the bottom of
// that crop, not necessarily the bottom of the file.
const MEDIA_ASPECT = 16 / 9;
// Height of the sampled strip, as a fraction of the visible crop.
const STRIP = 0.04;

const toHex = (n) => Math.round(n).toString(16).padStart(2, "0");

async function edgeColor(file) {
	const image = sharp(file);
	const { width, height } = await image.metadata();
	const visibleHeight = Math.min(height, Math.round(width / MEDIA_ASPECT));
	const stripHeight = Math.max(1, Math.round(visibleHeight * STRIP));
	const { channels } = await image
		.extract({ left: 0, top: visibleHeight - stripHeight, width, height: stripHeight })
		.stats();
	return `#${channels.slice(0, 3).map((c) => toHex(c.mean)).join("")}`;
}

const files = (await readdir(ASSETS_DIR)).filter((f) => /(screenshot|hero-page).*\.(webp|png|jpe?g|avif)$/i.test(f)).sort();
const edges = {};
for (const f of files) edges[f] = await edgeColor(path.join(ASSETS_DIR, f));

await writeFile(OUTPUT, JSON.stringify(edges, null, "\t") + "\n");
console.log(`Wrote ${files.length} edge colours to ${OUTPUT}`);
