import '../../../../chunks/Background_CID-yjav.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../../../../chunks/astro/server_BEabGL2l.mjs';
import 'kleur/colors';
import { $ as $$CardParcial } from '../../../../chunks/CardParcial_DrQ0M4Aw.mjs';
import { $ as $$HeaderCards } from '../../../../chunks/HeaderCards_C1n1xXTY.mjs';
import { $ as $$Layout } from '../../../../chunks/Layout_GVt_Yf30.mjs';
import { $ as $$BtnBack } from '../../../../chunks/BtnBack_v7yXnyK3.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { materia, docente } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${materia}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[80dvw] mx-auto max-w-2xl"> ${renderComponent($$result2, "HeaderCards", $$HeaderCards, { "text1": "Parciales de", "text2": materia })} ${renderComponent($$result2, "BtnBack", $$BtnBack, {})} <ul class="space-y-4 pt-5 pb-10"> ${[1, 2, 3].map((item, index) => renderTemplate`${renderComponent($$result2, "CardParcial", $$CardParcial, { "item": item, "index": index, "docente": docente })}`)} <!-- Aqui falta componetizar --> ${materia === "Cirug\xEDa 2" && renderTemplate`<li class="py-6 px-8 bg-white dark:bg-neutral-800 shadow-md rounded-md"> <h3 class="text-xl font-bold uppercase text-neutral-700 dark:text-neutral-50 border-b pb-4">Viruez Soleto Erwin</h3> <p class="py-2 font-medium text-neutral-600 dark:text-neutral-300">N° 64</p> <a class="text-primary underline"${addAttribute(`/years/4/materias/Cirug\xEDa 2/parciales/Viruez Soleto Erwin`, "href")}>Parciales</a> </li>`} ${materia === "Cirug\xEDa 3" && renderTemplate`<li class="py-6 px-8 bg-white dark:bg-neutral-800 shadow-md rounded-md"> <h3 class="text-xl font-bold uppercase text-neutral-700 dark:text-neutral-50 border-b pb-4">Jorge Fernando Aparicio</h3> <p class="py-2 font-medium text-neutral-600 dark:text-neutral-300">N° 91</p> <a class="text-primary underline"${addAttribute(`/years/4/materias/Cirug\xEDa 2/parciales/Jorge Fernando Aparicio`, "href")}>Parciales</a> </li>`} </ul> </section> ` })}`;
}, "C:/ganex/megaloblastos/src/pages/years/[year]/parciales/[materia]/index.astro", void 0);

const $$file = "C:/ganex/megaloblastos/src/pages/years/[year]/parciales/[materia]/index.astro";
const $$url = "/years/[year]/parciales/[materia]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
