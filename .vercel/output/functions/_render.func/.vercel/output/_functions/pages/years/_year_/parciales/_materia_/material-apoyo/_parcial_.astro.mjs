import '../../../../../../chunks/Background_CID-yjav.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../../../../../../chunks/astro/server_BEabGL2l.mjs';
import 'kleur/colors';
import { $ as $$BtnBack } from '../../../../../../chunks/BtnBack_v7yXnyK3.mjs';
import { $ as $$CardRecursos } from '../../../../../../chunks/CardRecursos_CUiPGkAH.mjs';
import { $ as $$Layout } from '../../../../../../chunks/Layout_GVt_Yf30.mjs';
import { d as db, S as SupportMaterials } from '../../../../../../chunks/_astro_db_B5E9kDNw.mjs';
import { and, eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../../../../../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { year, materia, parcial } = Astro2.params;
  const reWrite = {
    1: "Nro 1",
    2: "Nro 2",
    3: "Nro 3"
  };
  const materialSupports = await db.select().from(SupportMaterials).where(and(eq(SupportMaterials.year, Number(year)), eq(SupportMaterials.materia, materia), eq(SupportMaterials.parcial, Number(parcial)))).all();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "parciales" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[80dvw] mx-auto max-w-2xl"> <p data-aos="fade-down" data-aos-delay="50" class="font-bold text-neutral-600 dark:text-neutral-300 text-center leading-none mt-10">Bienvenidos al</p> <h2 data-aos="fade-up" data-aos-delay="50" class="text-2xl sm:text-3xl md:text-4xl uppercase font-black text-neutral-800 dark:text-neutral-50 text-center">material de apoyo</h2> <p data-aos="fade-up" data-aos-delay="100" class="text-center font-bold text-primary mb-5">#Megaloblastos</p> <section class="mb-5"> <p class="font-bold capitalize text-neutral-800 dark:text-neutral-200">
año: <span class="font-normal capitalize">${year}</span> </p> <p class="font-bold capitalize text-neutral-800 dark:text-neutral-200">
materia: <span class="font-normal capitalize">${materia}</span> </p> <p class="font-bold capitalize text-neutral-800 dark:text-neutral-200">
parcial: <span class="font-normal capitalize">${reWrite[parcial]}</span> </p> </section> ${renderComponent($$result2, "BtnBack", $$BtnBack, {})} <ul class="space-y-4 pt-5 pb-10"> ${materialSupports.length == 0 ? renderTemplate`<p data-aos="fade-up" data-aos-delay="50">No hay material de apoyo :(</p>` : materialSupports.map((material, index) => renderTemplate`${renderComponent($$result2, "CardRecursos", $$CardRecursos, { "index": index, "material": material })}`)} <!-- <CardRecursos
            index={1}
            material={materialPoyo}
        /> --> <!-- <p>No hay material de apoyo :(</p> --> </ul> </section> ` })}`;
}, "C:/ganex/megaloblastos/src/pages/years/[year]/parciales/[materia]/material-apoyo/[parcial]/index.astro", void 0);

const $$file = "C:/ganex/megaloblastos/src/pages/years/[year]/parciales/[materia]/material-apoyo/[parcial]/index.astro";
const $$url = "/years/[year]/parciales/[materia]/material-apoyo/[parcial]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
