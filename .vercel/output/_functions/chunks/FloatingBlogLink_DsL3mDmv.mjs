import { e as createAstro, f as createComponent, h as addAttribute, l as renderHead, n as renderSlot, r as renderTemplate, m as maybeRenderHead, o as renderScript } from './astro/server_Bs5cAFeF.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */
import { a as actions } from './virtual_Dg4C-qTe.mjs';

const $$Astro$6 = createAstro("https://ricardoguzdev.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Portfolio Ricardo Guzman" } = Astro2.props;
  const currentLocale = Astro2.currentLocale || "es";
  return renderTemplate`<html${addAttribute(currentLocale, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="author" content="Ricardo Guzman"><meta http-equiv="x-ua-compatible" content="IE=edge"><meta name="description" content="Portfolio de Ricardo Guzman Desarrollador Web"><link rel="icon" href="/favicon.png"><link rel="dns-prefetch" href="//res.cloudinary.com"><link rel="preconnect" href="https://res.cloudinary.com" crossorigin><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Onest:wght@100..900&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$5 = createAstro("https://ricardoguzdev.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  const { aboutLink, portfolioLink, contactLink } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const currentLang = currentPath.startsWith("/en") ? "en" : "es";
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-center w-full" data-astro-cid-3ef6ksr2> <!-- Desktop Navbar --> <nav class="hidden min-[1151px]:block fixed top-[2.5vh] w-[40%] bg-accent pt-[1.25vh] pb-[1.25vh] px-[1.5vw] rounded-[50px] shadow-m z-10" data-astro-cid-3ef6ksr2> <ul class="relative flex flex-row flex-nowrap justify-between items-center list-none p-0" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a href="/" class="logo font-display no-underline text-text-dark-bg" data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2>RICARDO<sup data-astro-cid-3ef6ksr2>®</sup></span> </a> </li> <li class="nav__links-container" data-astro-cid-3ef6ksr2> <ul class="nav__inner-list absolute top-0 left-1/2 -translate-x-1/2 w-[70%] flex justify-center content-center list-none p-0" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a class="nav__inner-link" href="#about-section" data-astro-cid-3ef6ksr2>${aboutLink.text}</a> </li> <li data-astro-cid-3ef6ksr2> <a class="nav__inner-link" href="#portfolio-section" data-astro-cid-3ef6ksr2>${portfolioLink.text}</a> </li> <li data-astro-cid-3ef6ksr2> <a class="nav__inner-link" href="#contact-section" data-astro-cid-3ef6ksr2>${contactLink.text}</a> </li> </ul> </li> <li class="flex gap-0.25" data-astro-cid-3ef6ksr2> <a href="/"${addAttribute(`lang-btn ${currentLang === "es" ? "lang-btn-active" : ""}`, "class")} aria-label="Español" data-astro-cid-3ef6ksr2>
ES
</a> <a href="/en"${addAttribute(`lang-btn ${currentLang === "en" ? "lang-btn-active" : ""}`, "class")} aria-label="English" data-astro-cid-3ef6ksr2>
EN
</a> </li> </ul> </nav> <!-- Mobile Navbar --> <nav class="nav-mobile__container block min-[1151px]:hidden fixed top-[2vh] w-[60%] max-[768px]:w-[80%] max-[425px]:w-[95%] bg-accent py-[0.75rem] px-[1.5rem] rounded-[50px] shadow-m z-10" data-astro-cid-3ef6ksr2> <ul class="relative flex flex-row flex-nowrap justify-between items-center list-none p-0" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a href="/" class="logo font-display no-underline text-text-dark-bg" data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2>RICARDO<sup data-astro-cid-3ef6ksr2>®</sup></span> </a> </li> <li class="flex items-center justify-center" data-astro-cid-3ef6ksr2> <button id="burger-btn" type="button" class="cursor-pointer text-text-dark-bg bg-transparent border-none p-0" data-astro-cid-3ef6ksr2> <svg class="svg stroke-bg-main" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <path d="M4 5h16" data-astro-cid-3ef6ksr2></path> <path d="M4 12h16" data-astro-cid-3ef6ksr2></path> <path d="M4 19h16" data-astro-cid-3ef6ksr2></path> </svg> </button> <ul id="nav-mobile__menu" class="nav-mobile__menu hidden absolute top-[2.75rem] right-1/2 translate-x-1/2 w-[70%] bg-accent rounded-main p-[1.5vh] shadow-m list-none z-20" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a class="nav-mobile__inner-link" href="#about-section" data-astro-cid-3ef6ksr2>${aboutLink.text}</a> </li> <li data-astro-cid-3ef6ksr2> <a class="nav-mobile__inner-link" href="#portfolio-section" data-astro-cid-3ef6ksr2>${portfolioLink.text}</a> </li> <li data-astro-cid-3ef6ksr2> <a class="nav-mobile__inner-link" href="#contact-section" data-astro-cid-3ef6ksr2>${contactLink.text}</a> </li> <li class="flex gap-2 justify-center" data-astro-cid-3ef6ksr2> <a href="/"${addAttribute(`lang-btn ${currentLang === "es" ? "lang-btn-active" : ""}`, "class")} aria-label="Español" data-astro-cid-3ef6ksr2>
ES
</a> <a href="/en"${addAttribute(`lang-btn ${currentLang === "en" ? "lang-btn-active" : ""}`, "class")} aria-label="English" data-astro-cid-3ef6ksr2>
EN
</a> </li> </ul> </li> </ul> </nav> </header> ${renderScript($$result, "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/components/Header.astro", void 0);

const bgImage = new Proxy({"src":"/_astro/pexels-adrien-olichon-1257089-2387793.DKg5INpf.webp","width":1920,"height":1280,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/assets/pexels-adrien-olichon-1257089-2387793.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$4 = createAstro("https://ricardoguzdev.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hero;
  const { subheading, description } = Astro2.props;
  const heroVideoUrl = "https://res.cloudinary.com/dqahemzwr/video/upload/v1776377312/hero_video_saidnk.mp4";
  return renderTemplate`${maybeRenderHead()}<section class="hero relative w-full h-screen overflow-hidden bg-cover bg-center"${addAttribute(`background-image: url('${bgImage.src}');`, "style")} data-astro-cid-bbe6dxrz> <!-- Background video --> <video class="hero__video absolute inset-0 w-full h-full object-cover"${addAttribute(heroVideoUrl, "src")}${addAttribute(bgImage.src, "poster")} preload="auto" autoplay loop muted playsinline aria-hidden="true" data-astro-cid-bbe6dxrz></video> <!-- Subtle readability veil over the bright footage --> <div class="absolute inset-0 z-1 bg-black/5" aria-hidden="true" data-astro-cid-bbe6dxrz></div> <!-- Content layer — card anchored center-right --> <div class="hero__content relative z-2 flex items-center justify-end w-full h-full pt-[8vh] pr-[8vw] pl-[5vw] max-[1000px]:pr-[5vw] max-[768px]:justify-center max-[768px]:px-[4vw]" data-astro-cid-bbe6dxrz> <div class="hero__card rotate-3 max-[1000px]:rotate-[1.5deg] max-[640px]:rotate-0 backdrop-blur-lg bg-white/25 border border-white/40 rounded-main p-[clamp(1.5rem,4vh,3rem)] w-[min(520px,85vw)] max-[1400px]:w-[min(460px,80vw)] shadow-[0_8px_32px_rgba(0,0,0,0.12)]" data-astro-cid-bbe6dxrz> <!-- Blinking indicator --> <div class="hero__blinking-point w-2.5 h-2.5 bg-accent rounded-full opacity-0 mb-[2vh]" data-astro-cid-bbe6dxrz></div> <h1 class="text-[4.75rem] max-[1400px]:text-[4rem] max-[1000px]:text-[3.5rem] max-[640px]:text-[2.75rem] font-display font-medium uppercase text-accent leading-[0.9]" data-astro-cid-bbe6dxrz> <span class="block" data-astro-cid-bbe6dxrz>Ricardo</span> <span class="block" data-astro-cid-bbe6dxrz>Guzman</span> </h1> <h2 class="mt-[2vh] font-display font-normal text-[2.625rem] max-[1400px]:text-[2rem] max-[1000px]:text-[1.75rem] max-[640px]:text-[1.5rem] tracking-[2px] text-accent/80" data-astro-cid-bbe6dxrz> ${subheading} </h2> <p class="mt-[1vh] text-[1.125rem] max-[1400px]:text-[1rem] font-light text-accent/65" data-astro-cid-bbe6dxrz> ${description} </p> </div> </div> <!-- Bottom fade into the white page background --> <div class="absolute bottom-0 left-0 right-0 h-[30vh] z-3 pointer-events-none" style="background: linear-gradient(to bottom, transparent, var(--color-bg-main));" aria-hidden="true" data-astro-cid-bbe6dxrz></div> </section> `;
}, "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/components/Hero.astro", void 0);

const myPhoto = new Proxy({"src":"/_astro/foto-personal-modified.BN1AkV4Z.webp","width":3252,"height":3518,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/assets/foto-personal-modified.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro("https://ricardoguzdev.com");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$About;
  const { badge, heading, headingAccent, image, p1, p2, p3, p4, p5, p6 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="about-section" class="about__container flex justify-center items-center w-full scroll-mt-10 mt-[15vh] py-[5vh] px-0"> <div class="about__wrapper flex flex-col justify-center content-center gap-y-[1.5vh] w-[40%] max-[1250px]:w-[60%] max-[768px]:w-[80%] max-[425px]:w-[90%] text-center"> <span class="badge">${badge}</span> <h2 class="section-heading"> ${heading} <span class="accent-text">${headingAccent}</span> </h2> <div class="about__content-wrapper text-left float-end"> <div class="about__personal-image-container max-w-[35%] m-[1rem] float-end"> <img class="max-w-full block border-[3px] border-white rounded-main shadow-m"${addAttribute(myPhoto.src, "src")}${addAttribute(image.alt, "alt")}${addAttribute(image.title, "title")}> </div> <p class="mb-[1rem] text-[1.125rem] max-[768px]:text-[1rem] font-light"> ${p1} </p> <p class="mb-[1rem] text-[1.125rem] max-[768px]:text-[1rem] font-light"> ${p2} </p> <p class="mb-[1rem] text-[1.125rem] max-[768px]:text-[1rem] font-light"> ${p3} </p> <p class="mb-[1rem] text-[1.125rem] max-[768px]:text-[1rem] font-light"> ${p4} </p> <p class="mb-[1rem] text-[1.125rem] max-[768px]:text-[1rem] font-light"> ${p5} </p> <p class="mb-[1rem] text-[1.125rem] max-[768px]:text-[1rem] font-light"> ${p6} </p> </div> </div> </section>`;
}, "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/components/About.astro", void 0);

const abstrakctImg = new Proxy({"src":"/_astro/abstrakct_screenshot.DQ0sR_Tp.webp","width":3554,"height":2244,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/assets/abstrakct_screenshot.webp";
							}
							
							return target[name];
						}
					});

const coffetopiaImg = new Proxy({"src":"/_astro/coffetopia_screenshot.C9-pucLv.webp","width":3552,"height":2242,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/assets/coffetopia_screenshot.webp";
							}
							
							return target[name];
						}
					});

const portfolioImg = new Proxy({"src":"/_astro/portfolio-screenshot-modified.DMDeK_se.webp","width":1248,"height":1065,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/assets/portfolio-screenshot-modified.webp";
							}
							
							return target[name];
						}
					});

const sartorialImg = new Proxy({"src":"/_astro/sartorial_store_screenshot.C68W38u6.webp","width":3552,"height":2242,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/assets/sartorial_store_screenshot.webp";
							}
							
							return target[name];
						}
					});

const expensitrackImg = new Proxy({"src":"/_astro/expensitrack_screenshot.B5vXCHTO.webp","width":3584,"height":2262,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/assets/expensitrack_screenshot.webp";
							}
							
							return target[name];
						}
					});

const conviertloImg = new Proxy({"src":"/_astro/conviertlo-screenshot.Cz6PHmnZ.webp","width":1920,"height":1075,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/assets/conviertlo-screenshot.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://ricardoguzdev.com");
const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Portfolio;
  const { badge, heading, headingAccent, buttons, projects } = Astro2.props;
  const { conviertlo, expensitrack, abstrakct, coffetopia, blog, sartorial } = projects;
  return renderTemplate`${maybeRenderHead()}<section id="portfolio-section" class="portfolio__container flex justify-center items-center w-full h-auto mt-[10vh] scroll-mt-10 py-[5vh] px-0" data-astro-cid-uhrerali> <div class="portfolio__wrapper flex flex-col justify-center items-center gap-y-[1.5vh] w-[60%] max-[1250px]:w-[60%] max-[640px]:w-[95%] h-auto text-center" data-astro-cid-uhrerali> <span class="badge" data-astro-cid-uhrerali>${badge}</span> <h2 class="section-heading" data-astro-cid-uhrerali> ${heading} <span class="accent-text" data-astro-cid-uhrerali>${headingAccent}</span> </h2> <div class="portfolio__grid-container max-w-full gap-[1vh] max-[1150px]:gap-[5vh]" data-astro-cid-uhrerali> <!-- Conviertlo --> <article id="conviertlo-card" class="portfolio__proyect-card group w-full h-full bg-white rounded-main shadow-m" data-astro-cid-uhrerali> <figure class="relative max-w-full max-h-full rounded-main overflow-hidden" data-astro-cid-uhrerali> <img class="portfolio__big-card-img relative left-[5%] top-[2vh] min-w-[850px] max-[1150px]:left-0 max-[1150px]:min-w-[500px] max-[1150px]:max-w-[700px] rounded-md"${addAttribute(conviertloImg.src, "src")}${addAttribute(conviertlo.imageAlt, "alt")} data-astro-cid-uhrerali> <figcaption class="portfolio__card-caption group-hover:visible group-hover:opacity-100 max-[1150px]:translate-y-[15%] max-[1150px]:visible max-[1150px]:opacity-100" data-astro-cid-uhrerali> <h2 class="text-[1.5rem] max-[640px]:text-[1.25rem] font-display font-normal" data-astro-cid-uhrerali> ${conviertlo.title} </h2> <p class="text-[0.95rem] max-[640px]:text-[0.85rem] font-light" data-astro-cid-uhrerali> ${conviertlo.description} </p> <div class="flex justify-center items-center gap-x-[8px] gap-y-[6px] flex-wrap" data-astro-cid-uhrerali> <span class="px-3 py-1.5 text-xs font-medium bg-blue-600/80 border border-blue-700 rounded-full text-white transition-all duration-150 hover:bg-blue-700 hover:-translate-y-0.5" data-astro-cid-uhrerali>Python</span> <span class="px-3 py-1.5 text-xs font-medium bg-pink-600/80 border border-pink-700 rounded-full text-white transition-all duration-150 hover:bg-pink-700 hover:-translate-y-0.5" data-astro-cid-uhrerali>Textualize</span> <span class="px-3 py-1.5 text-xs font-medium bg-green-700/80 border border-green-800 rounded-full text-white transition-all duration-150 hover:bg-green-800 hover:-translate-y-0.5" data-astro-cid-uhrerali>FFMPEG</span> <span class="px-3 py-1.5 text-xs font-medium bg-purple-700/80 border border-purple-800 rounded-full text-white transition-all duration-150 hover:bg-purple-800 hover:-translate-y-0.5" data-astro-cid-uhrerali>GitHub Copilot SDK</span> </div> <div class="portfolio__links-container flex justify-center items-center gap-x-[10px] gap-y-[5px] flex-wrap" data-astro-cid-uhrerali> <a href="https://pypi.org/project/conviertlo/" target="_blank" class="inline bg-accent py-[0.5rem] max-[640px]:py-[0.75rem] px-[1rem] max-[640px]:px-[1.25rem] rounded-main shadow-m" data-astro-cid-uhrerali>${buttons.visit}</a> <a href="https://github.com/ricard0g/conviertlo" target="_blank" class="inline bg-accent py-[0.5rem] max-[640px]:py-[0.75rem] px-[1rem] max-[640px]:px-[1.25rem] rounded-main shadow-m" data-astro-cid-uhrerali>${buttons.github}</a> </div> </figcaption> </figure> </article> <!-- Expensitrack --> <article id="expensitrack-card" class="portfolio__proyect-card group w-full h-full bg-white rounded-main shadow-m" data-astro-cid-uhrerali> <figure class="relative max-w-full max-h-full rounded-main overflow-hidden" data-astro-cid-uhrerali> <img class="portfolio__big-card-img relative left-[5%] top-[2vh] min-w-[725px] max-[1150px]:left-0 max-[1150px]:min-w-[500px] max-[1150px]:max-w-[700px]"${addAttribute(expensitrackImg.src, "src")}${addAttribute(expensitrack.imageAlt, "alt")} data-astro-cid-uhrerali> <figcaption class="portfolio__card-caption group-hover:visible group-hover:opacity-100 max-[1150px]:visible max-[1150px]:opacity-100" data-astro-cid-uhrerali> <h2 class="text-[1.5rem] max-[640px]:text-[1.25rem] font-display font-normal" data-astro-cid-uhrerali> ${expensitrack.title} </h2> <p class="text-[0.95rem] max-[640px]:text-[0.85rem] font-light" data-astro-cid-uhrerali> ${expensitrack.description} </p> <div class="flex justify-center items-center gap-x-[8px] gap-y-[6px] flex-wrap max-[1500px]:max-h-[80px] overflow-scroll" data-astro-cid-uhrerali> <span class="px-3 py-1.5 text-xs font-medium bg-blue-800/80 border border-blue-900 rounded-full text-white transition-all duration-150 hover:bg-blue-900 hover:-translate-y-0.5" data-astro-cid-uhrerali>TypeScript</span> <span class="px-3 py-1.5 text-xs font-medium bg-red-600/80 border border-red-700 rounded-full text-white transition-all duration-150 hover:bg-red-700 hover:-translate-y-0.5" data-astro-cid-uhrerali>React Router</span> <span class="px-3 py-1.5 text-xs font-medium bg-cyan-700/80 border border-cyan-800 rounded-full text-white transition-all duration-150 hover:bg-cyan-800 hover:-translate-y-0.5" data-astro-cid-uhrerali>TailwindCSS</span> <span class="px-3 py-1.5 text-xs font-medium bg-orange-700/80 border border-orange-800 rounded-full text-white transition-all duration-150 hover:bg-orange-800 hover:-translate-y-0.5" data-astro-cid-uhrerali>Java</span> <span class="px-3 py-1.5 text-xs font-medium bg-green-600/80 border border-green-700 rounded-full text-white transition-all duration-150 hover:bg-green-700 hover:-translate-y-0.5" data-astro-cid-uhrerali>Spring Boot</span> <span class="px-3 py-1.5 text-xs font-medium bg-amber-600/80 border border-amber-700 rounded-full text-white transition-all duration-150 hover:bg-amber-700 hover:-translate-y-0.5" data-astro-cid-uhrerali>TanStack Table</span> <span class="px-3 py-1.5 text-xs font-medium bg-zinc-700/80 border border-zinc-800 rounded-full text-white transition-all duration-150 hover:bg-zinc-800 hover:-translate-y-0.5" data-astro-cid-uhrerali>shadcn/ui</span> <span class="px-3 py-1.5 text-xs font-medium bg-sky-600/80 border border-sky-700 rounded-full text-white transition-all duration-150 hover:bg-sky-700 hover:-translate-y-0.5" data-astro-cid-uhrerali>Docker</span> <span class="px-3 py-1.5 text-xs font-medium bg-slate-800/80 border border-slate-900 rounded-full text-white transition-all duration-150 hover:bg-slate-900 hover:-translate-y-0.5" data-astro-cid-uhrerali>Vercel</span> </div> <div class="portfolio__links-container flex justify-center items-center gap-x-[10px] gap-y-[5px] flex-wrap" data-astro-cid-uhrerali> <a href="https://expensitrack-web.vercel.app/" target="_blank" class="inline bg-accent py-[0.5rem] max-[640px]:py-[0.75rem] px-[1rem] max-[640px]:px-[1.25rem] rounded-main shadow-m" data-astro-cid-uhrerali>${buttons.visit}</a> <a href="https://github.com/ricard0g/expensitrack-web" target="_blank" class="inline bg-accent py-[0.5rem] max-[640px]:py-[0.75rem] px-[1rem] max-[640px]:px-[1.25rem] rounded-main shadow-m" data-astro-cid-uhrerali>${buttons.github}</a> </div> </figcaption> </figure> </article> <!-- Abstrakct --> <article id="abstrakct-card" class="portfolio__proyect-card group w-full h-full bg-white rounded-main shadow-m" data-astro-cid-uhrerali> <figure class="relative max-w-full max-h-full rounded-main overflow-hidden" data-astro-cid-uhrerali> <img class="portfolio__big-card-img relative left-[5%] top-[2vh] min-w-[600px] max-[1150px]:left-0 max-[1150px]:min-w-[500px] max-[1150px]:max-w-[700px]"${addAttribute(abstrakctImg.src, "src")}${addAttribute(abstrakct.imageAlt, "alt")} data-astro-cid-uhrerali> <figcaption class="portfolio__card-caption group-hover:visible group-hover:opacity-100 max-[1150px]:visible max-[1150px]:opacity-100" data-astro-cid-uhrerali> <h2 class="text-[1.5rem] max-[640px]:text-[1.25rem] font-display font-normal" data-astro-cid-uhrerali> ${abstrakct.title} </h2> <p class="text-[0.95rem] max-[640px]:text-[0.85rem] font-light" data-astro-cid-uhrerali> ${abstrakct.description} </p> <div class="flex justify-center items-center gap-x-[8px] gap-y-[6px] flex-wrap" data-astro-cid-uhrerali> <span class="px-3 py-1.5 text-xs font-medium bg-cyan-400/80 border border-cyan-700 rounded-full text-white transition-all duration-150 hover:bg-cyan-700 hover:-translate-y-0.5" data-astro-cid-uhrerali>Liquid</span> <span class="px-3 py-1.5 text-xs font-medium bg-blue-800/80 border border-blue-900 rounded-full text-white transition-all duration-150 hover:bg-blue-900 hover:-translate-y-0.5" data-astro-cid-uhrerali>TypeScript</span> <span class="px-3 py-1.5 text-xs font-medium bg-purple-800/80 border border-purple-900 rounded-full text-white transition-all duration-150 hover:bg-purple-900 hover:-translate-y-0.5" data-astro-cid-uhrerali>Hydrogen</span> <span class="px-3 py-1.5 text-xs font-medium bg-indigo-800/80 border border-indigo-900 rounded-full text-white transition-all duration-150 hover:bg-indigo-900 hover:-translate-y-0.5" data-astro-cid-uhrerali>Remix</span> <span class="px-3 py-1.5 text-xs font-medium bg-cyan-700/80 border border-cyan-800 rounded-full text-white transition-all duration-150 hover:bg-cyan-800 hover:-translate-y-0.5" data-astro-cid-uhrerali>TailwindCSS</span> </div> <div class="portfolio__links-container flex justify-center items-center gap-x-[10px] gap-y-[5px] flex-wrap" data-astro-cid-uhrerali> <a href="https://abstrakct.netlify.app/" target="_blank" class="inline bg-accent py-[0.5rem] max-[640px]:py-[0.75rem] px-[1rem] max-[640px]:px-[1.25rem] rounded-main shadow-m" data-astro-cid-uhrerali>${buttons.visit}</a> <a href="https://github.com/ricard0g/abstrakct" target="_blank" class="inline bg-accent py-[0.5rem] max-[640px]:py-[0.75rem] px-[1rem] max-[640px]:px-[1.25rem] rounded-main shadow-m" data-astro-cid-uhrerali>${buttons.github}</a> </div> </figcaption> </figure> </article> <!-- Coffetopia --> <article id="coffetopia-card" class="portfolio__proyect-card group w-full h-full bg-white rounded-main shadow-m" data-astro-cid-uhrerali> <figure class="relative max-w-full max-h-full rounded-main overflow-hidden" data-astro-cid-uhrerali> <img class="portfolio__small-card-img relative left-[2%] top-[2vh] min-w-[750px] rounded-[5px] max-[1150px]:left-0 max-[1150px]:min-w-[500px] max-[1150px]:max-w-[700px]"${addAttribute(coffetopiaImg.src, "src")}${addAttribute(coffetopia.imageAlt, "alt")} data-astro-cid-uhrerali> <figcaption class="portfolio__card-caption group-hover:visible group-hover:opacity-100 max-[1150px]:visible max-[1150px]:opacity-100" data-astro-cid-uhrerali> <h2 class="text-[1.5rem] max-[640px]:text-[1.25rem] font-display font-normal" data-astro-cid-uhrerali> ${coffetopia.title} </h2> <p class="text-[0.95rem] max-[640px]:text-[0.85rem] font-light" data-astro-cid-uhrerali> ${coffetopia.description} <strong data-astro-cid-uhrerali>${coffetopia.passwordNote}</strong> </p> <div class="flex justify-center items-center gap-x-[8px] gap-y-[6px] flex-wrap" data-astro-cid-uhrerali> <span class="px-3 py-1.5 text-xs font-medium bg-cyan-400/80 border border-cyan-700 rounded-full text-white transition-all duration-150 hover:bg-cyan-700 hover:-translate-y-0.5" data-astro-cid-uhrerali>Liquid</span> <span class="px-3 py-1.5 text-xs font-medium bg-blue-800/80 border border-blue-900 rounded-full text-white transition-all duration-150 hover:bg-blue-900 hover:-translate-y-0.5" data-astro-cid-uhrerali>TypeScript</span> <span class="px-3 py-1.5 text-xs font-medium bg-purple-800/80 border border-purple-900 rounded-full text-white transition-all duration-150 hover:bg-purple-900 hover:-translate-y-0.5" data-astro-cid-uhrerali>Preact</span> <span class="px-3 py-1.5 text-xs font-medium bg-green-800/80 border border-green-900 rounded-full text-white transition-all duration-150 hover:bg-green-900 hover:-translate-y-0.5" data-astro-cid-uhrerali>Shopify</span> </div> <div class="portfolio__links-container flex justify-center items-center gap-x-[10px] gap-y-[5px] flex-wrap" data-astro-cid-uhrerali> <a href="https://coffeee-topia.myshopify.com/password" target="_blank" class="inline bg-accent py-[0.5rem] max-[640px]:py-[0.75rem] px-[1rem] max-[640px]:px-[1.25rem] rounded-main shadow-m" data-astro-cid-uhrerali>${buttons.visit}</a> <a href="https://github.com/ricard0g/coffeetopia" target="_blank" class="inline bg-accent py-[0.5rem] max-[640px]:py-[0.75rem] px-[1rem] max-[640px]:px-[1.25rem] rounded-main shadow-m" data-astro-cid-uhrerali>${buttons.github}</a> </div> </figcaption> </figure> </article> <!-- Blog --> <article id="blog-card" class="portfolio__proyect-card group w-full h-full bg-white rounded-main shadow-m" data-astro-cid-uhrerali> <figure class="relative max-w-full max-h-full rounded-main overflow-hidden" data-astro-cid-uhrerali> <div class="portfolio__blog-img-container" data-astro-cid-uhrerali> <img class="portfolio__small-card-img relative left-[2%] top-[2vh] min-w-[550px] rounded-[5px] max-[1150px]:left-0 max-[1150px]:min-w-[500px] max-[1150px]:max-w-[700px]"${addAttribute(portfolioImg.src, "src")}${addAttribute(blog.imageAlt, "alt")} style="top: 3vh; left: 10%;" data-astro-cid-uhrerali> <!-- Note: inline style for slight adjustment overridden by media query logic partially, keeping inline as source had specific rule #blog-card img --> </div> <figcaption id="blog-caption" class="portfolio__card-caption group-hover:visible group-hover:opacity-100 max-[1150px]:visible max-[1150px]:opacity-100" data-astro-cid-uhrerali> <h2 class="text-[1.5rem] max-[640px]:text-[1.25rem] font-display font-normal" data-astro-cid-uhrerali> ${blog.title} </h2> <p class="text-[0.95rem] max-[640px]:text-[0.85rem] font-light" data-astro-cid-uhrerali> ${blog.description} </p> <div class="flex justify-center items-center gap-x-[8px] gap-y-[6px] flex-wrap" data-astro-cid-uhrerali> <span class="px-3 py-1.5 text-xs font-medium bg-orange-700/80 border border-orange-800 rounded-full text-white transition-all duration-150 hover:bg-orange-800 hover:-translate-y-0.5" data-astro-cid-uhrerali>Astro</span> </div> <div class="portfolio__links-container flex justify-center items-center gap-x-[10px] gap-y-[5px] flex-wrap" data-astro-cid-uhrerali> <a href="https://blog.ricardoguzdev.com/" target="_blank" class="inline bg-accent py-[0.5rem] max-[640px]:py-[0.75rem] px-[1rem] max-[640px]:px-[1.25rem] rounded-main shadow-m" data-astro-cid-uhrerali>${buttons.visit}</a> <a href="https://github.com/ricard0g/ricardoguzman-blog" target="_blank" class="inline bg-accent py-[0.5rem] max-[640px]:py-[0.75rem] px-[1rem] max-[640px]:px-[1.25rem] rounded-main shadow-m" data-astro-cid-uhrerali>${buttons.github}</a> </div> </figcaption> </figure> </article> <!-- Sartorial --> <article id="sartorial-card" class="portfolio__proyect-card group w-full h-full bg-white rounded-main shadow-m" data-astro-cid-uhrerali> <figure class="relative max-w-full max-h-full rounded-main overflow-hidden" data-astro-cid-uhrerali> <img class="portfolio__big-card-img relative left-[5%] top-[2vh] min-w-[600px] max-[1150px]:left-0 max-[1150px]:min-w-[500px] max-[1150px]:max-w-[700px]"${addAttribute(sartorialImg.src, "src")}${addAttribute(sartorial.imageAlt, "alt")} data-astro-cid-uhrerali> <figcaption class="portfolio__card-caption group-hover:visible group-hover:opacity-100 max-[1150px]:visible max-[1150px]:opacity-100" data-astro-cid-uhrerali> <h2 class="text-[1.5rem] max-[640px]:text-[1.25rem] font-display font-normal" data-astro-cid-uhrerali> ${sartorial.title} </h2> <p class="text-[0.95rem] max-[640px]:text-[0.85rem] font-light" data-astro-cid-uhrerali> ${sartorial.description} <strong data-astro-cid-uhrerali>${sartorial.passwordNote}</strong> </p> <div class="flex justify-center items-center gap-x-[8px] gap-y-[6px] flex-wrap" data-astro-cid-uhrerali> <span class="px-3 py-1.5 text-xs font-medium bg-cyan-400/80 border border-cyan-700 rounded-full text-white transition-all duration-150 hover:bg-cyan-700 hover:-translate-y-0.5" data-astro-cid-uhrerali>Liquid</span> <span class="px-3 py-1.5 text-xs font-medium bg-green-800/80 border border-green-900 rounded-full text-white transition-all duration-150 hover:bg-green-900 hover:-translate-y-0.5" data-astro-cid-uhrerali>Shopify</span> </div> <div class="portfolio__links-container flex justify-center items-center gap-x-[10px] gap-y-[5px] flex-wrap" data-astro-cid-uhrerali> <a href="https://sartorial-store.myshopify.com/password" target="_blank" class="inline bg-accent py-[0.5rem] max-[640px]:py-[0.75rem] px-[1rem] max-[640px]:px-[1.25rem] rounded-main shadow-m" data-astro-cid-uhrerali>${buttons.visit}</a> <a href="https://github.com/ricard0g/sartorial-store" target="_blank" class="inline bg-accent py-[0.5rem] max-[640px]:py-[0.75rem] px-[1rem] max-[640px]:px-[1.25rem] rounded-main shadow-m" data-astro-cid-uhrerali>${buttons.github}</a> </div> </figcaption> </figure> </article> </div> </div> </section> `;
}, "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/components/Portfolio.astro", void 0);

const $$Astro$1 = createAstro("https://ricardoguzdev.com");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contact;
  const result = Astro2.getActionResult(actions.send);
  const { badge, heading, headingAccent, form, showSuccess = false } = Astro2.props;
  const {
    nameLabel,
    namePlaceholder,
    emailLabel,
    emailPlaceholder,
    messageLabel,
    messagePlaceholder,
    submitButton
  } = form;
  return renderTemplate`${maybeRenderHead()}<section id="contact-section" class="contacto__container flex justify-center items-center w-full h-auto mt-[10vh] py-[10vh] px-0"> <div class="contacto__wrapper flex flex-col justify-top items-center gap-y-[1.5vh] w-[40%] max-[1250px]:w-[60%] max-[768px]:w-[90%] text-center"> <span class="badge">${badge}</span> <h2 class="section-heading"> ${heading} <span class="accent-text">${headingAccent}</span> </h2> <form${addAttribute(actions.send, "action")} method="POST" enctype="application/x-www-form-urlencoded" class="flex flex-col justify-center content-start gap-y-[2vh] w-[75%] max-[768px]:w-full h-full p-[5vh] bg-white rounded-main shadow-[inset_0_-4px_7px_#00000030,inset_0_4px_7px_#00000030]"> ${result?.error && renderTemplate`<p class="w-full text-left text-red-600 text-[0.9rem]" role="alert" aria-live="polite"> ${result.error.message} </p>`} ${showSuccess && renderTemplate`<p class="w-full text-left text-green-700 text-[0.9rem]" role="status" aria-live="polite">
Thanks! Your message was sent.
</p>`} <div class="contacto__top-input-groups flex flex-col lg:flex-row justify-center items-center gap-x-[1vw]"> <div class="contacto__input-group w-full lg:w-[50%] mb-3"> <label for="name" class="block text-left mb-[1vh]">${nameLabel}</label> <input type="text" name="name" id="name"${addAttribute(namePlaceholder, "placeholder")} required class="block text-left w-full p-[1rem] bg-bg-main border-none rounded-main text-[0.9rem] shadow-m focus:outline-none placeholder:text-[0.9rem]"> </div> <div class="contacto__input-group w-full lg:w-[50%] mb-3"> <label for="email" class="block text-left mb-[1vh]">${emailLabel}</label> <input type="email" name="email" id="email" required${addAttribute(emailPlaceholder, "placeholder")} class="block text-left w-full p-[1rem] bg-bg-main border-none rounded-main text-[0.9rem] shadow-m focus:outline-none placeholder:text-[0.9rem]"> </div> </div> <div class="contacto__input-group w-full"> <label for="message" class="block text-left mb-[1vh]">${messageLabel}</label> <textarea id="message" name="message" rows="5" cols="35" required${addAttribute(messagePlaceholder, "placeholder")} class="w-full resize-none p-[1rem] bg-bg-main border-none rounded-main text-[0.9rem] shadow-m-light focus:outline-none placeholder:text-[0.9rem]"></textarea> </div> <button type="submit" class="badge w-full py-[0.5rem] border-none cursor-pointer text-[1.1rem] transition-all duration-100 bg-accent hover:bg-accent-hover text-text-dark-bg rounded-main shadow-m"> ${submitButton} </button> </form> </div> </section>`;
}, "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/components/Contact.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="relative w-[80%] max-[640px]:w-[90%] mx-auto my-[5vh] p-[2vh_2.5vw] bg-white rounded-main shadow-[0_2px_2px_#00000030]"> <ul class="flex justify-between items-center list-none max-[640px]:flex-col max-[640px]:gap-y-[4vh]"> <li class="footer__rights-item max-[640px]:order-2"> <p class="footer__rights-reserved text-[0.85rem] font-light">
2025<sup>©</sup> All Rights Reserved
</p> </li> <li class="footer__logo-item md:absolute md:left-1/2 md:-translate-x-1/2 max-[640px]:order-0"> <span class="footer-logo text-[1.3rem] max-[640px]:text-[1.5rem] font-display">RICARDO<sup>®</sup></span> </li> <li class="footer__inner-list-item max-[640px]:-order-2"> <ul class="footer__inner-list flex justify-center items-center gap-x-[10px] max-[640px]:flex-row"> <li> <a aria-label="Visita mi canal de YouTube" target="_blank" href="https://www.youtube.com/@ricardoguzdev"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path> <path d="m10 15 5-3-5-3z"></path> </svg> </a> </li> <li> <a aria-label="Visita mi perfil en LinkedIn" href="https://www.linkedin.com/in/ricardo-guzman-duran-a09b62176" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path> <rect width="4" height="12" x="2" y="9"></rect> <circle cx="4" cy="4" r="2"></circle> </svg> </a> </li> <li> <a aria-label="Visita my perfil en X.com" href="https://x.com/ricardoguzdev" target="_blank" rel="noopener noreferrer"> <svg fill="#101418" width="20px" height="20px" viewBox="0 0 1200 1227"> <path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"></path> </svg> </a> </li> </ul> </li> </ul> </footer>`;
}, "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/components/Footer.astro", void 0);

const backdropImage = new Proxy({"src":"/_astro/contact-section-image.AvJoZNHE.webp","width":1536,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/assets/contact-section-image.webp";
							}
							
							return target[name];
						}
					});

const $$BottomBackdrop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="contact-footer__backdrop relative w-full overflow-hidden"> <div class="absolute inset-0 bg-cover bg-center"${addAttribute(`background-image: url('${backdropImage.src}');`, "style")} aria-hidden="true"></div> <div class="absolute inset-0 bg-bg-main/15" aria-hidden="true"></div> <div class="absolute top-0 left-0 right-0 h-[14vh] z-1 pointer-events-none" style="background: linear-gradient(to bottom, var(--color-bg-main), transparent);" aria-hidden="true"></div> <div class="absolute bottom-0 left-0 right-0 h-[14vh] z-1 pointer-events-none" style="background: linear-gradient(to bottom, transparent, var(--color-bg-main));" aria-hidden="true"></div> <div class="relative z-2"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/components/BottomBackdrop.astro", void 0);

const translations = {
  es: {
    header: {
      aboutLink: {
        text: "Sobre Mi"
      },
      portfolioLink: {
        text: "Portfolio"
      },
      contactLink: {
        text: "Contacto"
      },
      blogLink: {
        title: "Visitar Blog",
        ariaLabel: "Visitar el Blog de Ricardo"
      }
    },
    hero: {
      subheading: "Desarrollador Web",
      description: "Transformo diseños en experiencias digitales a través del código."
    },
    about: {
      badge: "Sobre Mí",
      heading: "Que Me",
      headingAccent: "Gusta?",
      image: {
        alt: "Ricardo Guzman sentado en una silla sonriendo",
        title: "Soy Yo! Ricardo Guzman"
      },
      p1: "Hola 👋",
      p2: "Me gusta mucho aprender 🧠 y leer de tecnología, pero lo que más disfruto es sentarme a crear y ver cómo una idea se convierte en algo real.",
      p3: "La mayoría del día me pilla delante del ordenador: investigando, probando cosas y programando variedad de cosas.",
      p4: "Cuando se trata de software soy como un niño: es abrir la terminal, neovim y de un momento a otro, pasaron horas 👨‍💻.",
      p5: "Sigo formándome en Prometeo mientras saco adelante proyectos personales y alguno lo documenta en vídeos largos para quien le sirva.",
      p6: "Viviendo en España 🇪🇸 desde los 13, Venezolano 🇻🇪 de nacimiento, con mezcla de arepas y tortilla de patata en el mismo menú."
    },
    portfolio: {
      badge: "Portfolio",
      heading: "Mis",
      headingAccent: "Proyectos",
      buttons: {
        visit: "Visitar",
        github: "GitHub"
      },
      projects: {
        conviertlo: {
          title: "Conviertlo TUI",
          description: "TUI para convertir y comprimir archivos multimedia usando lenguaje natural. Impulsado por FFMPEG y GitHub Copilot SDK para traducir peticiones como 'comprimir a 25MB' en comandos precisos. A Satya Nadella le gustó el post de lanzamiento en X.",
          imageAlt: "Conviertlo TUI pantalla principal"
        },
        expensitrack: {
          title: "Expensitrack",
          description: "App fullstack de gestión de gastos con gráficas para un usuario ficticio. Incluye registros CRUD y seguridad implementada vía impementacion de un Proxy Server.",
          imageAlt: "Proyecto Expensitrack pantalla inicial"
        },
        abstrakct: {
          title: "Absktrakct",
          description: "Ecommerce artístico que funciona como una galería construido con Liquid, TS, Hydrogen, Remix y TailwindCSS.",
          imageAlt: "Proyecto Abstrakct pantalla inicial tienda online"
        },
        coffetopia: {
          title: "Coffetopia",
          description: 'Tienda con sección "Cart Booster" para disparar conversiones y compras. Hecho con Liquid, TS y Preact.',
          passwordNote: "Contraseña: shorto",
          imageAlt: "Proyecto Coffetopia pantalla inicial tienda online"
        },
        blog: {
          title: "Blog Personal",
          description: "Blog personal donde escribo sobre distintas cosas. Creado con Astro.",
          imageAlt: "Blog Personal pagina web pantalla inicial"
        },
        sartorial: {
          title: "Sartorial Store",
          description: "Tienda Shopify construida completamente desde cero usando Liquid. Tambien se usaron todas las APIs de los Temas Shopify.",
          passwordNote: "Contraseña: shorto",
          imageAlt: "Proyecto Sartorial pantalla inicial tienda online"
        }
      }
    },
    contact: {
      badge: "Contacto",
      heading: "Ponte en Contacto",
      headingAccent: "Conmigo",
      form: {
        nameLabel: "Tu Nombre Completo",
        namePlaceholder: "Juan Ramos...",
        emailLabel: "Correo Electrónico",
        emailPlaceholder: "juan@gmail.com...",
        messageLabel: "Tu Mensaje",
        messagePlaceholder: "Escribe lo que quieras aqui...",
        submitButton: "Enviar"
      }
    }
  },
  en: {
    header: {
      aboutLink: {
        text: "About Me"
      },
      portfolioLink: {
        text: "Portfolio"
      },
      contactLink: {
        text: "Contact"
      },
      blogLink: {
        title: "Visit Blog",
        ariaLabel: "Visit Ricardo's Blog"
      }
    },
    hero: {
      subheading: "Web Developer",
      description: "Transforming design into Digital Experiences through code."
    },
    about: {
      badge: "About Me",
      heading: "What do I",
      headingAccent: "Enjoy?",
      image: {
        alt: "Ricardo Guzman sitting on a chair smiling",
        title: "That's me! Ricardo Guzman"
      },
      p1: "Hello 👋",
      p2: "I really enjoy learning 🧠 and reading about technology, but what I enjoy most is sitting down to create and seeing how an idea becomes something real.",
      p3: "Most of the day you'll find me in front of the computer: researching, testing things out, and programming a variety of projects.",
      p4: "When it comes to software I'm like a kid: I open the terminal, neovim, and suddenly hours have passed 👨‍💻.",
      p5: "I'm still training at Prometeo while working on personal projects and documenting some of them in long videos for whoever finds them useful.",
      p6: "Living in Spain 🇪🇸 since I was 13, Venezuelan 🇻🇪 by birth, with a mix of arepas and tortilla de patata on the same menu."
    },
    portfolio: {
      badge: "Portfolio",
      heading: "My",
      headingAccent: "Projects",
      buttons: {
        visit: "Visit",
        github: "GitHub"
      },
      projects: {
        conviertlo: {
          title: "Conviertlo TUI",
          description: "TUI for converting and compressing media files using natural language. Powered by FFMPEG and GitHub Copilot SDK to translate requests like 'compress to 25MB' into precise commands. Satya Nadella liked the announcement post on X.",
          imageAlt: "Initial screen of Conviertlo TUI"
        },
        expensitrack: {
          title: "Expensitrack",
          description: "Full-stack expense management app with charts for a fictional user. Includes CRUD records and security implemented via Proxy Server.",
          imageAlt: "Expensitrack project home screen"
        },
        abstrakct: {
          title: "Absktrakct",
          description: "Artistic ecommerce that works as a gallery built with Liquid, TS, Hydrogen, Remix and TailwindCSS.",
          imageAlt: "Abstrakct project online store home screen"
        },
        coffetopia: {
          title: "Coffetopia",
          description: 'Store with a "Cart Booster" section to boost conversions and purchases. Built with Liquid, TS and Preact.',
          passwordNote: "Password: shorto",
          imageAlt: "Coffetopia project online store home screen"
        },
        blog: {
          title: "Personal Blog",
          description: "Personal blog where I write about different things. Built with Astro.",
          imageAlt: "Personal blog website home screen"
        },
        sartorial: {
          title: "Sartorial Store",
          description: "Shopify store built completely from scratch using Liquid. All Shopify Theme APIs were also used.",
          passwordNote: "Password: shorto",
          imageAlt: "Sartorial project online store home screen"
        }
      }
    },
    contact: {
      badge: "Contact",
      heading: "Get in Touch",
      headingAccent: "With Me",
      form: {
        nameLabel: "Your Full Name",
        namePlaceholder: "John Smith...",
        emailLabel: "Email Address",
        emailPlaceholder: "john@gmail.com...",
        messageLabel: "Your Message",
        messagePlaceholder: "Write whatever you want here...",
        submitButton: "Send"
      }
    }
  }
};

const $$Astro = createAstro("https://ricardoguzdev.com");
const $$FloatingBlogLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FloatingBlogLink;
  const { blogLink } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a id="floating-blog-link" class="fixed right-4 bottom-4 lg:right-10 lg:bottom-10 p-5 bg-accent rounded-full z-10" href="https://blog.ricardoguzdev.com/"${addAttribute(blogLink.title, "title")}${addAttribute(blogLink.ariaLabel, "aria-label")} target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ddd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-icon lucide-book-open"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg> </a> ${renderScript($$result, "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/components/FloatingBlogLink.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/components/FloatingBlogLink.astro", void 0);

export { $$FloatingBlogLink as $, $$Header as a, $$Hero as b, $$About as c, $$Portfolio as d, $$BottomBackdrop as e, $$Contact as f, $$Footer as g, $$Layout as h, translations as t };
