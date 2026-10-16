import type { AsciiAnimation, AsciiFrame } from "../types";
import { glyph } from "../glyphs";

// Simulation steps per second, independent of the display refresh rate
const STEP = 1 / 30;
// Fraction of the screen height the flames reach on average
const FLAME_HEIGHT = 0.9;

let heat = new Float32Array(0);
let cols = 0;
let rows = 0;
let pending = 0;

/**
 * Heat diffusion fire: the bottom row is fed with random heat, and every step
 * each cell takes the average of the cells below it minus a random cooling,
 * so the heat rises, spreads and flickers out.
 */
function step() {
	const cooling = 1 / (rows * FLAME_HEIGHT);

	// Fuel row, with the odd gap so the base doesn't look like a solid bar
	const base = (rows - 1) * cols;
	for (let x = 0; x < cols; x++) {
		heat[base + x] = Math.random() < 0.15 ? 0.3 : 0.75 + Math.random() * 0.25;
	}

	for (let y = 0; y < rows - 1; y++) {
		const below = (y + 1) * cols;
		const below2 = Math.min(y + 2, rows - 1) * cols;
		for (let x = 0; x < cols; x++) {
			// A one-cell sideways jitter makes the tongues of flame sway
			const sx = Math.max(1, Math.min(cols - 2, x + Math.round(Math.random() * 2 - 1)));
			const avg =
				(heat[below + sx - 1] + heat[below + sx] + heat[below + sx + 1] + heat[below2 + sx]) / 4;
			heat[y * cols + x] = Math.max(0, avg - Math.random() * cooling * 2);
		}
	}
}

export const fire: AsciiAnimation = {
	id: "fire",
	name: "Fire",
	reset(frame: AsciiFrame) {
		cols = frame.cols;
		rows = frame.rows;
		heat = new Float32Array(cols * rows);
		pending = 0;
		// Let the flames build up so the first (or only, with reduced motion) frame isn't empty
		for (let i = 0; i < rows * 2; i++) step();
	},
	render(frame, _t, dt) {
		if (frame.cols !== cols || frame.rows !== rows) this.reset!(frame);

		pending += dt;
		while (pending >= STEP) {
			step();
			pending -= STEP;
		}

		const { chars, intensity } = frame;
		for (let i = 0; i < heat.length; i++) {
			const h = Math.min(1, heat[i]);
			chars[i] = glyph(h);
			intensity[i] = h;
		}
	},
};
