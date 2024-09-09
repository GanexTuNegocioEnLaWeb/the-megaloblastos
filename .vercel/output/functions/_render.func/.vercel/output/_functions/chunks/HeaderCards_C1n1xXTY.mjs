import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro } from './astro/server_BEabGL2l.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$HeaderCards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderCards;
  const { text1, text2 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p data-aos="fade-down" data-aos-delay="50" class="font-bold text-neutral-600 dark:text-neutral-300 text-center leading-none mt-10">${text1}</p> <h2 data-aos="fade-up" data-aos-delay="50" class="text-2xl sm:text-3xl md:text-4xl uppercase font-black text-neutral-800 dark:text-neutral-50 text-center">${text2}</h2> <p data-aos="fade-up" data-aos-delay="100" class="text-center font-bold text-primary mb-5">#Megaloblastos</p>`;
}, "C:/ganex/megaloblastos/src/components/UI/HeaderCards.astro", void 0);

export { $$HeaderCards as $ };
