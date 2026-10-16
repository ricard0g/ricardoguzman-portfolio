// Derives the mobile project card colours from the bottom edge colour of its
// screenshot (see scripts/extract-image-edges.mjs). The caption continues the
// image, and its neumorphic inner shadows are a darker and lighter shade of it.

type Hsl = { h: number; s: number; l: number };

function hexToHsl(hex: string): Hsl {
	const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const l = (max + min) / 2;
	const d = max - min;
	if (d === 0) return { h: 0, s: 0, l };
	const s = d / (1 - Math.abs(2 * l - 1));
	const h =
		max === r ? ((g - b) / d + (g < b ? 6 : 0)) * 60 : max === g ? ((b - r) / d + 2) * 60 : ((r - g) / d + 4) * 60;
	return { h, s, l };
}

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

const hsl = ({ h, s, l }: Hsl) =>
	`hsl(${h.toFixed(1)} ${(s * 100).toFixed(1)}% ${(clamp(l, 0, 1) * 100).toFixed(1)}%)`;

function luminance(hex: string) {
	const [r, g, b] = [1, 3, 5].map((i) => {
		const c = parseInt(hex.slice(i, i + 2), 16) / 255;
		return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
	});
	return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** CSS custom properties consumed by ProjectCard's mobile styles. */
export function cardPalette(edgeHex: string): Record<string, string> {
	const edge = hexToHsl(edgeHex);
	const isLight = luminance(edgeHex) > 0.35;

	if (isLight) {
		// Pure white leaves no room for the light shadow, so cap the lightness
		// and let the gradient darken the image slightly to sell the raised look.
		const bg = { ...edge, l: clamp(edge.l, 0.8, 0.94) };
		return {
			"--card-bg": hsl(bg),
			"--card-shadow-dark": hsl({ ...bg, l: bg.l - 0.14 }),
			"--card-shadow-light": hsl({ ...bg, l: bg.l + 0.12 }),
			"--card-title": "var(--color-text-main)",
			"--card-text": "#474e61",
			"--card-fade": `linear-gradient(to bottom, rgb(0 0 0 / 0.08), ${hsl(bg)})`,
		};
	}

	// Keep dark captions dark enough for the light text to stay readable.
	const bg = { ...edge, l: Math.min(edge.l, 0.25) };
	return {
		"--card-bg": hsl(bg),
		"--card-shadow-dark": hsl({ ...bg, l: bg.l * 0.55 }),
		"--card-shadow-light": hsl({ ...bg, l: bg.l + 0.1 }),
		"--card-title": "var(--color-text-dark-bg)",
		"--card-text": "#ababab",
		"--card-fade": `linear-gradient(to bottom, transparent 50%, ${hsl(bg)})`,
	};
}
