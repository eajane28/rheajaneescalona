import { c as createComponent } from './astro-component_D_JohLxf.mjs';
import 'piccolore';
import { m as maybeRenderHead, f as addAttribute, l as renderSlot, r as renderTemplate, i as renderComponent } from '../entry.mjs';
import 'clsx';
import { b as $$Icon } from './BaseLayout_C41C_81B.mjs';

const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-balv45lp>${renderSlot($$result, $$slots["default"])}</a>`;
}, "/Users/rhea/personal_projects/portfolio/src/components/CallToAction.astro", void 0);

const $$ContactCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside data-astro-cid-rcdzuq3a> <h2 data-astro-cid-rcdzuq3a>Interested in working together?</h2> ${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "mailto:rheajaneescalona@gmail.com", "data-astro-cid-rcdzuq3a": true }, { "default": ($$result2) => renderTemplate`
Send Me a Message
${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} ` })} </aside>`;
}, "/Users/rhea/personal_projects/portfolio/src/components/ContactCTA.astro", void 0);

export { $$ContactCTA as $ };
