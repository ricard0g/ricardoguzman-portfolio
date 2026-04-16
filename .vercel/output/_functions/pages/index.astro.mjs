import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bs5cAFeF.mjs';
import 'piccolore';
import { h as $$Layout, $ as $$FloatingBlogLink, t as translations, a as $$Header, b as $$Hero, c as $$About, d as $$Portfolio, e as $$BottomBackdrop, f as $$Contact, g as $$Footer } from '../chunks/FloatingBlogLink_DsL3mDmv.mjs';
import { a as actions } from '../chunks/virtual_Dg4C-qTe.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://ricardoguzdev.com");
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const result = Astro2.getActionResult(actions.send);
  if (result?.data) {
    return Astro2.redirect(`${Astro2.url.pathname}?sent=1#contact-section`);
  }
  const showSuccess = Astro2.url.searchParams.get("sent") === "1";
  const t = translations.es;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FloatingBlogLink", $$FloatingBlogLink, { "blogLink": t.header.blogLink })} ${renderComponent($$result2, "Header", $$Header, { "aboutLink": t.header.aboutLink, "portfolioLink": t.header.portfolioLink, "contactLink": t.header.contactLink })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "subheading": t.hero.subheading, "description": t.hero.description })} ${renderComponent($$result2, "About", $$About, { "badge": t.about.badge, "heading": t.about.heading, "headingAccent": t.about.headingAccent, "image": t.about.image, "p1": t.about.p1, "p2": t.about.p2, "p3": t.about.p3, "p4": t.about.p4, "p5": t.about.p5, "p6": t.about.p6 })} ${renderComponent($$result2, "Portfolio", $$Portfolio, { "badge": t.portfolio.badge, "heading": t.portfolio.heading, "headingAccent": t.portfolio.headingAccent, "buttons": t.portfolio.buttons, "projects": t.portfolio.projects })} </main> ${renderComponent($$result2, "BottomBackdrop", $$BottomBackdrop, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Contact", $$Contact, { "badge": t.contact.badge, "heading": t.contact.heading, "headingAccent": t.contact.headingAccent, "form": t.contact.form, "showSuccess": showSuccess })} ${renderComponent($$result3, "Footer", $$Footer, {})} ` })} ` })}`;
}, "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
