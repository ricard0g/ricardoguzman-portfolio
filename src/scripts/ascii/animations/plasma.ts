import type { AsciiAnimation } from "../types";
import { CELL_ASPECT, glyph } from "../glyphs";

/**
 * Classic demoscene plasma: four sine fields (horizontal, vertical, diagonal
 * and radial) drifting at different speeds and summed into one value.
 */
export const plasma: AsciiAnimation = {
	id: "plasma",
	name: "Plasma",
	render(frame, t) {
		const { cols, rows, chars, intensity } = frame;
		const cx = cols / 2;
		const cy = rows / 2;

		for (let y = 0; y < rows; y++) {
			const py = y * CELL_ASPECT;
			const dy = (y - cy) * CELL_ASPECT;
			for (let x = 0; x < cols; x++) {
				const dx = x - cx;
				const v =
					Math.sin(x * 0.09 + t * 0.9) +
					Math.sin(py * 0.07 - t * 1.1) +
					Math.sin((x + py) * 0.05 + t * 0.7) +
					Math.sin(Math.sqrt(dx * dx + dy * dy) * 0.08 - t * 1.3);
				// Fold the -4..4 sum through a sine to get crisp, repeating bands
				const n = (Math.sin(v * Math.PI * 0.5) + 1) / 2;
				const i = y * cols + x;
				chars[i] = glyph(n);
				intensity[i] = n;
			}
		}
	},
};
