import { c as createComponent } from './astro-component_D_JohLxf.mjs';
import 'piccolore';
import { i as renderComponent, r as renderTemplate } from '../entry.mjs';
import { $ as $$BaseLayout, a as $$Hero } from './BaseLayout_C41C_81B.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Not Found", "description": "404 Error — this page was not found" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Page Not Found", "tagline": "Not found" })} ` })}`;
}, "/Users/rhea/personal_projects/portfolio/src/pages/404.astro", void 0);

const $$file = "/Users/rhea/personal_projects/portfolio/src/pages/404.astro";
const $$url = "/404/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
