const floatingBlogLink = document.getElementById(
	"floating-blog-link",
) as HTMLElement;

let lastScrollY = window.scrollY;
let rotation = 0;
let ticking = false;

function updateRotation() {
	const currentScrollY = window.scrollY;
	const scrollDelta = currentScrollY - lastScrollY;
	
	// Adjust rotation based on scroll delta
	// Positive delta = scrolling down, negative = scrolling up
	rotation += scrollDelta * 0.2; // Factor controls rotation speed
	
	floatingBlogLink.style.transform = `rotate(${rotation}deg)`;
	
	lastScrollY = currentScrollY;
	ticking = false;
}

function handleScroll() {
	if (!ticking) {
		requestAnimationFrame(updateRotation);
		ticking = true;
	}
}

window.addEventListener("scroll", handleScroll, { passive: true });
