import '../../chunks/Background_CID-yjav.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent } from '../../chunks/astro/server_BEabGL2l.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_GVt_Yf30.mjs';
import { m as materias } from '../../chunks/db_SdHQPvij.mjs';
import { $ as $$HeaderCards } from '../../chunks/HeaderCards_C1n1xXTY.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$CardMateria = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardMateria;
  const { materia, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="py-6 px-8 bg-white dark:bg-neutral-800 shadow-md rounded-md" data-aos="fade-up"${addAttribute(index * 50, "data-aos-delay")}> <h3 class="text-xl font-bold uppercase text-neutral-700 dark:text-neutral-50 border-b pb-4">${materia.name}</h3> <p class="py-4 font-medium text-neutral-600 dark:text-neutral-300">Sigla: <span class="uppercase">${materia.sigla}</span></p> <div class="flex justify-between flex-wrap items-center"> <a class="text-primary underline"${addAttribute(`${materia.multigrupo ? `${materia.year}/parciales/${materia.name}` : `${materia.year}/materias/${materia.name}`}`, "href")}> ${materia.multigrupo ? `Parciales` : `Docentes`} </a> ${materia.semester ? renderTemplate`<p class="font-medium text-neutral-600 dark:text-neutral-300">Materia semestral</p>` : renderTemplate`<p class="font-medium text-neutral-600 dark:text-neutral-300">Materia anual</p>`} </div> </li>`;
}, "C:/ganex/megaloblastos/src/components/UI/CardMateria.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { year } = Astro2.params;
  const materiasByYear = materias.filter((materia) => materia.year.toString() === year);
  const reWrite = {
    1: "primer",
    2: "segundo",
    3: "tercer",
    4: "cuarto",
    5: "quinto"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${year} a\xF1o` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[80dvw] mx-auto max-w-2xl"> ${renderComponent($$result2, "HeaderCards", $$HeaderCards, { "text1": "Materias de", "text2": `${reWrite[year]} a\xF1o` })} <a href="/" data-aos="fade-up" class="text-primary underline inline-block">Volver a inicio</a> <ul class="space-y-4 pt-5 pb-10"> ${materiasByYear.map((materia, index) => renderTemplate`${renderComponent($$result2, "CardMateria", $$CardMateria, { "materia": materia, "index": index })}`)} </ul> </section> ` })}`;
}, "C:/ganex/megaloblastos/src/pages/years/[year]/index.astro", void 0);

const $$file = "C:/ganex/megaloblastos/src/pages/years/[year]/index.astro";
const $$url = "/years/[year]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
