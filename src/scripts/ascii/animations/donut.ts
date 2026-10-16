import type { AsciiAnimation } from "../types";
import { CELL_ASPECT } from "../glyphs";

// Luminance ramp, darkest to brightest. Based on donut.c's ".,-~:;=!*#$@" but
// starting a step heavier so the dim side still reads on a light background.
const SHADES = "-~:;=+!*#%$@";

// Radius of the tube and distance from the donut's center to the tube's center
const R1 = 1;
const R2 = 2;
// Distance from the viewer to the donut
const K2 = 5;
// Rotation speed around the X and Z axes, in radians per second
const SPIN_A = 1.0;
const SPIN_B = 0.5;
// Angle steps when sampling the surface; smaller fills the donut more densely
const THETA_STEP = 0.07;
const PHI_STEP = 0.02;

let zbuffer = new Float32Array(0);

/**
 * The spinning donut (after Andy Sloane's donut.c): points on a torus are
 * rotated in 3D, projected onto the grid, and shaded by how directly their
 * surface faces a light above and behind the viewer. A z-buffer keeps only
 * the point closest to the viewer in each cell.
 */
export const donut: AsciiAnimation = {
	id: "donut",
	name: "Donut",
	render(frame, t) {
		const { cols, rows, chars, intensity } = frame;
		const size = cols * rows;
		if (zbuffer.length !== size) zbuffer = new Float32Array(size);
		zbuffer.fill(0);
		chars.fill(" ");
		intensity.fill(0);

		// Scale so the donut's full height takes up about 85% of the rows
		const K1 = (rows * 0.42 * K2) / (R1 + R2);
		const cx = cols / 2;
		const cy = rows / 2;

		const A = t * SPIN_A;
		const B = t * SPIN_B;
		const cosA = Math.cos(A);
		const sinA = Math.sin(A);
		const cosB = Math.cos(B);
		const sinB = Math.sin(B);

		for (let theta = 0; theta < Math.PI * 2; theta += THETA_STEP) {
			const cosT = Math.cos(theta);
			const sinT = Math.sin(theta);
			// Point on the tube's circle before it is swept around the Y axis
			const circleX = R2 + R1 * cosT;
			const circleY = R1 * sinT;

			for (let phi = 0; phi < Math.PI * 2; phi += PHI_STEP) {
				const cosP = Math.cos(phi);
				const sinP = Math.sin(phi);

				const x = circleX * (cosB * cosP + sinA * sinB * sinP) - circleY * cosA * sinB;
				const y = circleX * (sinB * cosP - sinA * cosB * sinP) + circleY * cosA * cosB;
				const z = K2 + cosA * circleX * sinP + circleY * sinA;
				const ooz = 1 / z;

				const xp = Math.floor(cx + K1 * ooz * x * CELL_ASPECT);
				const yp = Math.floor(cy - K1 * ooz * y);
				if (xp < 0 || xp >= cols || yp < 0 || yp >= rows) continue;

				// Surface normal dotted with the light direction (0, 1, -1), range ±√2
				const L =
					cosP * cosT * sinB -
					cosA * cosT * sinP -
					sinA * sinT +
					cosB * (cosA * sinT - cosT * sinA * sinP);
				if (L <= 0) continue;

				const i = yp * cols + xp;
				if (ooz <= zbuffer[i]) continue;
				zbuffer[i] = ooz;

				const shade = Math.min(SHADES.length - 1, Math.floor(L * 8));
				chars[i] = SHADES[shade];
				intensity[i] = Math.min(1, L / Math.SQRT2);
			}
		}
	},
};
