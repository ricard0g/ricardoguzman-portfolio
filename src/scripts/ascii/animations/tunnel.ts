import type { AsciiAnimation } from "../types";
import { CELL_ASPECT, glyph } from "../glyphs";

// Rings passed per second
const SPEED = 1.2;
// Full turns per second
const ROTATION = 0.03;
// Spacing between rings; larger values push them further apart
const DEPTH = 0.6;
// Number of lengthwise lines running down the tunnel
const SEGMENTS = 12;
const RING_WIDTH = 0.12;
const SEGMENT_WIDTH = 0.06;

/**
 * Flying down a round tunnel: every cell is mapped to a depth (from its
 * distance to the center) and an angle, then a wireframe of rings and
 * lengthwise lines is drawn on top of a shaded wall that fades into the dark.
 */
export const tunnel: AsciiAnimation = {
	id: "tunnel",
	name: "Tunnel",
	render(frame, t) {
		const { cols, rows, chars, intensity } = frame;
		const cx = cols / 2;
		const cy = rows / 2;

		for (let y = 0; y < rows; y++) {
			const dy = ((y - cy) * CELL_ASPECT) / cx;
			for (let x = 0; x < cols; x++) {
				const i = y * cols + x;
				const dx = (x - cx) / cx;
				const r = Math.sqrt(dx * dx + dy * dy);

				// The vanishing point itself stays empty
				if (r < 0.04) {
					chars[i] = " ";
					intensity[i] = 0;
					continue;
				}

				const z = DEPTH / r + t * SPEED;
				const ring = z - Math.floor(z);
				const turn = Math.atan2(dy, dx) / (Math.PI * 2) + t * ROTATION;
				const seg = (((turn * SEGMENTS) % 1) + 1) % 1;

				const onRing = ring < RING_WIDTH;
				const onSegment = seg < SEGMENT_WIDTH || seg > 1 - SEGMENT_WIDTH;
				// Walls closer to the viewer (larger r) are lit, the far end is dark
				const light = Math.min(1, r * 1.1);

				if (onRing && onSegment) chars[i] = "+";
				else if (onRing) chars[i] = "-";
				else if (onSegment) chars[i] = "|";
				// The far end is left empty so the wireframe stays readable there
				else chars[i] = light < 0.3 ? " " : glyph(light * 0.6);
				intensity[i] = onRing || onSegment ? Math.min(1, light + 0.2) : light * 0.7;
			}
		}
	},
};
