import '../../../../chunks/Background_CID-yjav.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent } from '../../../../chunks/astro/server_BEabGL2l.mjs';
import 'kleur/colors';
import { $ as $$HeaderCards } from '../../../../chunks/HeaderCards_C1n1xXTY.mjs';
import { $ as $$Layout } from '../../../../chunks/Layout_GVt_Yf30.mjs';
import { m as materias } from '../../../../chunks/db_SdHQPvij.mjs';
import 'clsx';
import { $ as $$BtnBack } from '../../../../chunks/BtnBack_v7yXnyK3.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$CardDocente = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardDocente;
  const { docente, nameMateria, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="py-6 px-8 bg-white dark:bg-neutral-800 shadow-md rounded-md" data-aos="fade-up"${addAttribute(index * 50, "data-aos-delay")}> <h3 class="text-xl font-bold uppercase text-neutral-700 dark:text-neutral-50 border-b pb-4">${docente.name}</h3> <p class="py-2 font-medium text-neutral-600 dark:text-neutral-300">N° ${docente.id}</p> <a class="text-primary underline"${addAttribute(`${nameMateria}/parciales/${docente.name}`, "href")}>Parciales</a> </li>`;
}, "C:/ganex/megaloblastos/src/components/UI/CardDocente.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { materia } = Astro2.params;
  const materiaFiltered = materias.filter((m) => m.name === materia);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${materia}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[80dvw] mx-auto max-w-2xl"> ${renderComponent($$result2, "HeaderCards", $$HeaderCards, { "text1": "Docentes de", "text2": materia })} ${renderComponent($$result2, "BtnBack", $$BtnBack, {})} <ul class="space-y-4 pt-5 pb-10"> ${materiaFiltered[0].docentes.map((docente, index) => renderTemplate`${renderComponent($$result2, "CardDocente", $$CardDocente, { "docente": docente, "nameMateria": materia, "index": index })}`)} </ul> </section> ` })}`;
}, "C:/ganex/megaloblastos/src/pages/years/[year]/materias/[materia]/index.astro", void 0);

const $$file = "C:/ganex/megaloblastos/src/pages/years/[year]/materias/[materia]/index.astro";
const $$url = "/years/[year]/materias/[materia]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
