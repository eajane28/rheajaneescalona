import { c as createComponent } from './astro-component_D_JohLxf.mjs';
import 'piccolore';
import { i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../entry.mjs';
import { $ as $$ContactCTA } from './ContactCTA_BfyXXtkR.mjs';
import { $ as $$BaseLayout, a as $$Hero } from './BaseLayout_C41C_81B.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | Rhea Jane Escalona", "description": "About Rhea Jane Escalona Lorem Ipsum", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" style="padding-top: 10%;" data-astro-cid-kh7btl4r> <main class="wrapper about" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Hero", $$Hero, { "title": "About", "tagline": "Thanks for stopping by. Read below to learn more about myself and my background.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <img alt="Rhea Jane Escalona smiling" width="auto" height="620" src="/assets/portrait.jpg" data-astro-cid-kh7btl4r> ` })} <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Background</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
I am Rhea, a product owner based in Bohol, Philippines. I have a
            background in frontend development and product management, and I am
            passionate about creating user-centered digital experiences. With
            over 2 years of experience in the tech industry, I have work towards
            delivering successful products that meet user needs and business
            goals. I am always eager to learn and grow, and I am excited to
            continue my journey in the world of product management and
            development.
</p> <p data-astro-cid-kh7btl4r>
Given that I am a product owner that has a developer background, I
            aspire to be a product owner that can effectively bridge the gap
            between technical and non-technical teams, ensuring that everyone is
            aligned and working towards the same goals. I am also intending to
            continue learning and growing to become a technical product manager,
            where I can leverage my technical expertise to drive product
            development and innovation.
</p> <p data-astro-cid-kh7btl4r>
On weekends, I involve myself towards community activities for over
            3 years now, specifically volunteering in Sprout up Bohol, a
            non-profit organization that aims to empower and support the growth
            of the tech community in the Bohol.
</p> </div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Education</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Bachelor of Science in Computer Engineering in Bohol Island State
            University
</p> </div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Skills</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Strategic Thinking, Product Management, Frontend Development, Team
            Leadership, AWS, Agile Methodologies
</p> </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-kh7btl4r": true })} </div> ` })}`;
}, "/Users/rhea/personal_projects/portfolio/src/pages/about.astro", void 0);

const $$file = "/Users/rhea/personal_projects/portfolio/src/pages/about.astro";
const $$url = "/about/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
