/**
 * Calls `onChange(true)` once the page is scrolled past `threshold` pixels
 * and `onChange(false)` when it goes back above it. Fires once right away.
 */
export function onScrolledPast(threshold: number, onChange: (past: boolean) => void) {
	let ticking = false;
	let last: boolean | null = null;

	const update = () => {
		ticking = false;
		const past = window.scrollY > threshold;
		if (past !== last) {
			last = past;
			onChange(past);
		}
	};

	window.addEventListener(
		"scroll",
		() => {
			if (!ticking) {
				requestAnimationFrame(update);
				ticking = true;
			}
		},
		{ passive: true },
	);
	update();
}

/**
 * Calls `onChange` with the id of the section the visitor is reading,
 * i.e. the one crossing the upper-middle of the viewport.
 */
export function watchSections(ids: string[], onChange: (id: string) => void) {
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) onChange(entry.target.id);
			}
		},
		{ rootMargin: "-35% 0px -60% 0px" },
	);

	for (const id of ids) {
		const section = document.getElementById(id);
		if (section) observer.observe(section);
	}
}

/** Distance scrolled before the navigation shows up. */
export const NAV_SHOW_AFTER = 80;
