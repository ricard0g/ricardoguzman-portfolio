import type { AsciiAnimation, AsciiFrame } from "./types";

interface ScreenOptions {
	/** Glyph size in CSS pixels. */
	fontSize?: number;
	fontFamily?: string;
	color?: string;
	/** Opacity for cells with intensity 0, so the dimmest glyphs stay visible. */
	minAlpha?: number;
}

// Intensity is quantized so each frame needs only a handful of globalAlpha changes
const ALPHA_STEPS = 10;
// Length of the TV static shown between channels, in milliseconds
const STATIC_MS = 280;
const STATIC_CHARS = "░▒▓#%&*+=-:. ";

/**
 * Draws an AsciiAnimation onto a transparent canvas.
 * Pauses itself while off-screen or when the tab is hidden, and renders a
 * single still frame when the user prefers reduced motion.
 */
export class AsciiScreen {
	private ctx: CanvasRenderingContext2D;
	private frame: AsciiFrame = { cols: 0, rows: 0, chars: [], intensity: new Float32Array() };
	private cellW = 0;
	private cellH = 0;
	private fontSize: number;
	private fontFamily: string;
	private color: string;
	private minAlpha: number;

	private animation: AsciiAnimation;
	private elapsed = 0;
	private staticUntil = 0;
	private lastTs = 0;
	private rafId = 0;
	private visible = false;
	private reducedMotion: MediaQueryList;
	private resizeObserver: ResizeObserver;
	private intersectionObserver: IntersectionObserver;

	constructor(
		private canvas: HTMLCanvasElement,
		animation: AsciiAnimation,
		options: ScreenOptions = {},
	) {
		const ctx = canvas.getContext("2d");
		if (!ctx) throw new Error("AsciiScreen: 2D canvas not supported");
		this.ctx = ctx;
		this.animation = animation;
		this.fontSize = options.fontSize ?? 14;
		this.fontFamily = options.fontFamily ?? "ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace";
		this.color = options.color ?? "#101418";
		this.minAlpha = options.minAlpha ?? 0.15;

		this.reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
		this.reducedMotion.addEventListener("change", this.sync);
		document.addEventListener("visibilitychange", this.sync);

		this.resizeObserver = new ResizeObserver(() => this.resize());
		this.resizeObserver.observe(canvas);

		this.intersectionObserver = new IntersectionObserver(([entry]) => {
			this.visible = entry.isIntersecting;
			this.sync();
		});
		this.intersectionObserver.observe(canvas);

		this.resize();
	}

	/** Switch channels, with a short burst of static when motion is allowed. */
	setAnimation(animation: AsciiAnimation) {
		this.animation = animation;
		this.elapsed = 0;
		this.animation.reset?.(this.frame);
		if (this.shouldRun) this.staticUntil = performance.now() + STATIC_MS;
		this.draw();
	}

	setColor(color: string) {
		this.color = color;
		this.draw();
	}

	destroy() {
		cancelAnimationFrame(this.rafId);
		this.resizeObserver.disconnect();
		this.intersectionObserver.disconnect();
		this.reducedMotion.removeEventListener("change", this.sync);
		document.removeEventListener("visibilitychange", this.sync);
	}

	private get shouldRun() {
		return this.visible && !document.hidden && !this.reducedMotion.matches;
	}

	/** Start or stop the loop depending on visibility and motion preference. */
	private sync = () => {
		cancelAnimationFrame(this.rafId);
		this.rafId = 0;
		if (this.shouldRun) {
			this.lastTs = 0;
			this.rafId = requestAnimationFrame(this.tick);
		} else {
			this.draw();
		}
	};

	private tick = (ts: number) => {
		// Clamp the delta so returning to the tab doesn't jump the animation forward
		const dt = this.lastTs ? Math.min((ts - this.lastTs) / 1000, 0.1) : 0;
		this.lastTs = ts;
		this.elapsed += dt;
		this.draw(dt);
		this.rafId = requestAnimationFrame(this.tick);
	};

	private resize() {
		const { width, height } = this.canvas.getBoundingClientRect();
		const dpr = window.devicePixelRatio || 1;
		this.canvas.width = Math.round(width * dpr);
		this.canvas.height = Math.round(height * dpr);

		const ctx = this.ctx;
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		ctx.font = `${this.fontSize}px ${this.fontFamily}`;
		ctx.textBaseline = "top";
		this.cellW = ctx.measureText("M").width;
		this.cellH = this.fontSize * 1.2;

		const cols = Math.max(1, Math.floor(width / this.cellW));
		const rows = Math.max(1, Math.floor(height / this.cellH));
		this.frame = {
			cols,
			rows,
			chars: new Array(cols * rows).fill(" "),
			intensity: new Float32Array(cols * rows),
		};
		this.animation.reset?.(this.frame);
		this.draw();
	}

	/** Advance the animation by `dt` seconds and paint the result. */
	private draw(dt = 0) {
		const { ctx, frame, cellW, cellH } = this;
		const { cols, rows, chars, intensity } = frame;
		if (!cols || !rows) return;

		if (performance.now() < this.staticUntil) this.renderStatic();
		else this.animation.render(frame, this.elapsed, dt);

		const dpr = window.devicePixelRatio || 1;
		ctx.clearRect(0, 0, this.canvas.width / dpr, this.canvas.height / dpr);
		ctx.fillStyle = this.color;

		// Center the grid inside the canvas
		const offsetX = (this.canvas.width / dpr - cols * cellW) / 2;
		const offsetY = (this.canvas.height / dpr - rows * cellH) / 2;

		for (let step = 0; step <= ALPHA_STEPS; step++) {
			ctx.globalAlpha = this.minAlpha + (1 - this.minAlpha) * (step / ALPHA_STEPS);
			for (let i = 0; i < chars.length; i++) {
				const ch = chars[i];
				if (ch === " " || Math.round(intensity[i] * ALPHA_STEPS) !== step) continue;
				const x = i % cols;
				const y = (i - x) / cols;
				ctx.fillText(ch, offsetX + x * cellW, offsetY + y * cellH);
			}
		}
		ctx.globalAlpha = 1;
	}

	private renderStatic() {
		const { chars, intensity } = this.frame;
		for (let i = 0; i < chars.length; i++) {
			chars[i] = STATIC_CHARS[Math.floor(Math.random() * STATIC_CHARS.length)];
			intensity[i] = Math.random();
		}
	}
}
