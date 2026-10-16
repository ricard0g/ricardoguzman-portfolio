/**
 * Characters ordered from lightest to densest. Skips the thinnest marks
 * (like ".") so the dim end still reads on the site's light background.
 */
export const RAMP = " -:;=+*#%@";

/** Pick a character from RAMP for a 0–1 brightness value. */
export function glyph(value: number): string {
	const i = Math.floor(value * RAMP.length);
	return RAMP[Math.max(0, Math.min(RAMP.length - 1, i))];
}

/**
 * Character cells are roughly twice as tall as they are wide, so vertical
 * distances get stretched by this factor to keep circles round.
 */
export const CELL_ASPECT = 2;
