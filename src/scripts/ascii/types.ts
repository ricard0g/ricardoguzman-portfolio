/**
 * Grid an animation writes into every frame.
 * `chars` holds one character per cell, `intensity` a 0–1 brightness
 * that the screen maps to opacity of the active color.
 */
export interface AsciiFrame {
	cols: number;
	rows: number;
	chars: string[];
	intensity: Float32Array;
}

export interface AsciiAnimation {
	id: string;
	name: string;
	/**
	 * Called when the animation becomes active and whenever the grid is
	 * resized. Simulations rebuild their state here.
	 */
	reset?(frame: AsciiFrame): void;
	/**
	 * Fill `frame` for time `t` (seconds since the animation started).
	 * `dt` is the time since the previous frame, 0 for redraws that
	 * shouldn't advance the animation (e.g. a color change while paused).
	 */
	render(frame: AsciiFrame, t: number, dt: number): void;
}
