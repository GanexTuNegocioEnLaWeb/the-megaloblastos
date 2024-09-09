import '../../../../../../chunks/Background_CID-yjav.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../../../../../../chunks/astro/server_BEabGL2l.mjs';
import 'kleur/colors';
import { $ as $$BtnBack } from '../../../../../../chunks/BtnBack_v7yXnyK3.mjs';
import { $ as $$CardParcial } from '../../../../../../chunks/CardParcial_DrQ0M4Aw.mjs';
import { $ as $$HeaderCards } from '../../../../../../chunks/HeaderCards_C1n1xXTY.mjs';
import { $ as $$Layout } from '../../../../../../chunks/Layout_GVt_Yf30.mjs';
export { renderers } from '../../../../../../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { docente } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${docente}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[80dvw] mx-auto max-w-2xl"> ${renderComponent($$result2, "HeaderCards", $$HeaderCards, { "text1": "Parciales del docente", "text2": docente })} ${renderComponent($$result2, "BtnBack", $$BtnBack, {})} <ul class="space-y-4 pt-5 pb-10"> ${[1, 2, 3].map((item, index) => renderTemplate`${renderComponent($$result2, "CardParcial", $$CardParcial, { "item": item, "index": index, ",": true, "docente": docente })}`)} </ul> </section> ` })}`;
}, "C:/ganex/megaloblastos/src/pages/years/[year]/materias/[materia]/parciales/[docente]/index.astro", void 0);

const $$file = "C:/ganex/megaloblastos/src/pages/years/[year]/materias/[materia]/parciales/[docente]/index.astro";
const $$url = "/years/[year]/materias/[materia]/parciales/[docente]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
