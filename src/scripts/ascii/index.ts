import type { AsciiAnimation } from "./types";
import { horizon } from "./animations/horizon";
import { plasma } from "./animations/plasma";
import { fire } from "./animations/fire";
import { tunnel } from "./animations/tunnel";
import { donut } from "./animations/donut";

/** Animations the screen cycles through, in order. */
export const animations: AsciiAnimation[] = [plasma, horizon, fire, tunnel, donut];

/**
 * Glyph colors that sit well on the site's light background.
 * The screen itself stays transparent; only the characters are tinted.
 */
export const palettes = [
	{ id: "ink", name: "Ink", color: "#101418" },
	{ id: "slate", name: "Slate", color: "#4A5568" },
	{ id: "steel", name: "Steel", color: "#3D5A80" },
	{ id: "moss", name: "Moss", color: "#4F6B52" },
	{ id: "clay", name: "Clay", color: "#A0593A" },
] as const;

export type Palette = (typeof palettes)[number];

export { AsciiScreen } from "./screen";
export type { AsciiAnimation, AsciiFrame } from "./types";
