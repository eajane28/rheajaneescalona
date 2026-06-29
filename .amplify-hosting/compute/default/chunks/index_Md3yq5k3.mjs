import { c as createComponent } from './astro-component_D_JohLxf.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, i as renderComponent } from '../entry.mjs';
import { $ as $$BaseLayout, a as $$Hero } from './BaseLayout_C41C_81B.mjs';
import 'clsx';

const $$Vision = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="vision" data-astro-cid-jqueckjh> <p class="section-label reveal" data-astro-cid-jqueckjh>What drives me</p> <h2 class="section-title reveal" data-astro-cid-jqueckjh>A set of <em data-astro-cid-jqueckjh>convictions.</em></h2> <div class="vision-grid" data-astro-cid-jqueckjh> <div class="vision-card reveal" data-astro-cid-jqueckjh> <p class="card-index" data-astro-cid-jqueckjh>Conviction I</p> <h3 class="card-title" data-astro-cid-jqueckjh>The backlog is never the strategy</h3> <p class="card-body" data-astro-cid-jqueckjh>
Features don't create value — outcomes do. I keep teams focused on the
        problem worth solving, not just the next ticket in the queue.
</p> <p class="card-accent" data-astro-cid-jqueckjh>→ Outcome-driven roadmaps</p> </div> <div class="vision-card reveal" data-astro-cid-jqueckjh> <p class="card-index" data-astro-cid-jqueckjh>Conviction II</p> <h3 class="card-title" data-astro-cid-jqueckjh>Code is a product decision</h3> <p class="card-body" data-astro-cid-jqueckjh>
Writing code makes me a better Product Owner. I understand the real cost
        of technical debt, the weight of an edge case, and when to say no to
        scope creep.
</p> <p class="card-accent" data-astro-cid-jqueckjh>→ Technically grounded ownership</p> </div> <div class="vision-card reveal" data-astro-cid-jqueckjh> <p class="card-index" data-astro-cid-jqueckjh>Conviction III</p> <h3 class="card-title" data-astro-cid-jqueckjh>Clarity ships faster than cleverness</h3> <p class="card-body" data-astro-cid-jqueckjh>
A well-written user story beats a clever architecture every time. I
        write specs developers can act on the same day — no back-and-forth, no
        ambiguity.
</p> <p class="card-accent" data-astro-cid-jqueckjh>→ Precision over complexity</p> </div> </div> </section>`;
}, "/Users/rhea/personal_projects/portfolio/src/components/Vision.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20 lg:gap-48" style="padding-top: 15%;" data-astro-cid-j7pv25f6> <div class="wrapper stack gap-8 lg:gap-20" data-astro-cid-j7pv25f6> <header class="hero" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "intro": "Product Owner & Full-Stack Developer", "title": "Ship products that matter.", "tagline": "I bridge the gap between vision and execution through owning the roadmap,\n            writing the code, and keeping teams aligned on what ships next.", "align": "start", "data-astro-cid-j7pv25f6": true })} </header> <div class="hero-cta-row reveal" data-astro-cid-j7pv25f6> <a href="/work" class="btn-primary" data-astro-cid-j7pv25f6>View My Work</a> <a href="#contact" class="btn-ghost" data-astro-cid-j7pv25f6>Let's talk</a> </div> <div style="display: flex; gap: 16px; justify-content: end" data-astro-cid-j7pv25f6> <div class="stat-item reveal" data-astro-cid-j7pv25f6> <div class="stat-num" data-astro-cid-j7pv25f6>10<em data-astro-cid-j7pv25f6>+</em></div> <div class="stat-label" data-astro-cid-j7pv25f6>Features delivered</div> </div> <div class="stat-item reveal" data-astro-cid-j7pv25f6> <div class="stat-num" data-astro-cid-j7pv25f6>2<em data-astro-cid-j7pv25f6>yr</em></div> <div class="stat-label" data-astro-cid-j7pv25f6>In the field</div> </div> <div class="stat-item reveal" data-astro-cid-j7pv25f6> <div class="stat-num" data-astro-cid-j7pv25f6>25<em data-astro-cid-j7pv25f6>+</em></div> <div class="stat-label" data-astro-cid-j7pv25f6>Sprints led</div> </div> </div> <!-- <Skills /> --> </div> <!-- create new section --> ${renderComponent($$result2, "Vision", $$Vision, { "data-astro-cid-j7pv25f6": true })} <!-- <ContactCTA /> --> <!-- <main class="wrapper stack gap-20 lg:gap-48">
			<section class="section with-background with-cta">
				<header class="section-header stack gap-2 lg:gap-4">
					<h3>Selected Work</h3>
					<p>Take a look below at some of my featured work for clients from the past few years.</p>
				</header>

				<div class="gallery">
					<Grid variant="offset">
						{
							projects.map((project) => (
								<li>
									<PortfolioPreview project={project} />
								</li>
							))
						}
					</Grid>
				</div>

				<div class="cta">
					<CallToAction href="/work/">
						View All
						<Icon icon="arrow-right" size="1.2em" />
					</CallToAction>
				</div>
			</section>

			<section class="section with-background bg-variant">
				<header class="section-header stack gap-2 lg:gap-4">
					<h3>Mentions</h3>
					<p>
						I have been fortunate enough to receive praise for my work in several publications. Take
						a look below to learn more.
					</p>
				</header>

				<div class="gallery">
					<Grid variant="small">
						{
							['Medium', 'BuzzFeed', 'The Next Web', 'awwwards.', 'TechCrunch'].map((brand) => (
								<li class="mention-card">
									<p>{brand}</p>
								</li>
							))
						}
					</Grid>
				</div>
			</section>
		</main> --> </div> ` })}`;
}, "/Users/rhea/personal_projects/portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/rhea/personal_projects/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
