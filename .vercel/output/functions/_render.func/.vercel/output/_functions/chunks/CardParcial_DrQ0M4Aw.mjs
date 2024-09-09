import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_BEabGL2l.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$CardParcial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardParcial;
  const { item, index, docente } = Astro2.props;
  const reWrite = {
    1: "primer",
    2: "segundo",
    3: "tercer"
  };
  return renderTemplate`${maybeRenderHead()}<li class="py-6 px-8 bg-white dark:bg-neutral-800 shadow-md rounded-md" data-aos="fade-up"${addAttribute(index * 50, "data-aos-delay")}> <h3 class="text-xl font-bold uppercase text-neutral-700 dark:text-neutral-200 border-b pb-2 mb-2">${reWrite[item]} parcial</h3> <nav class="flex gap-2 flex-wrap justify-between"> <a class="text-primary underline"${addAttribute(`${docente}/material-apoyo/${item}`, "href")}>Material de apoyo</a> </nav> </li>`;
}, "C:/ganex/megaloblastos/src/components/UI/CardParcial.astro", void 0);

export { $$CardParcial as $ };
