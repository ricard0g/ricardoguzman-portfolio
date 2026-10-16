import type { AsciiAnimation } from "../types";

const CHARSET =
	" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

// Characters travelled per second at the reference row (one row away from the horizon)
const SPEED = 6;
// Higher values flatten the plane, lower values exaggerate the depth
const PERSPECTIVE = 1;
// Vertical position of the horizon, 0 = top, 1 = bottom
const HORIZON_Y = 0.5;
// Number of blank rows that form the horizon line
const HORIZON_GAP = 1;

/**
 * Fake 3D plane: each row is a slice of an infinite strip of characters,
 * scaled by its distance to the horizon so everything converges on a
 * vanishing point in the middle of the screen.
 */
export const horizon: AsciiAnimation = {
	id: "horizon",
	name: "Horizon",
	render(frame, t) {
		const { cols, rows, chars, intensity } = frame;
		const len = CHARSET.length;
		const vanishX = cols / 2;
		const horizonY = rows * HORIZON_Y;
		const gapTop = Math.floor(horizonY - HORIZON_GAP / 2);
		const gapBottom = gapTop + HORIZON_GAP;
		const maxDepth = Math.max(horizonY, rows - horizonY);
		const offset = t * SPEED;

		for (let y = 0; y < rows; y++) {
			const inGap = y >= gapTop && y < gapBottom;
			// Signed distance to the horizon: negative above (sky), positive below (ground)
			const depth = y < gapTop ? y - gapTop : y - gapBottom + 1;
			const glow = 1 - Math.min(1, Math.abs(depth) / maxDepth);

			for (let x = 0; x < cols; x++) {
				const i = y * cols + x;
				if (inGap) {
					chars[i] = " ";
					intensity[i] = 0;
					continue;
				}
				const u = (x - vanishX) / (depth * PERSPECTIVE);
				const idx = Math.floor(u + vanishX + offset);
				chars[i] = CHARSET[((idx % len) + len) % len];
				intensity[i] = glow;
			}
		}
	},
};
