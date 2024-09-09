import '../chunks/Background_CID-yjav.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BEabGL2l.mjs';
import 'kleur/colors';
import { $ as $$HeaderCards } from '../chunks/HeaderCards_C1n1xXTY.mjs';
import { $ as $$Layout } from '../chunks/Layout_GVt_Yf30.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Auxiliares" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderCards", $$HeaderCards, { "text1": "Lista de", "text2": "Auxiliares" })} ${maybeRenderHead()}<section class="w-[80dvw] mx-auto max-w-2xl"> <h2 data-aos="fade-up" data-aos-delay="50" class="text-center text-xl font-medium text-neutral-800 dark:text-neutral-200 uppercase">En construcción</h2> </section> ` })}`;
}, "C:/ganex/megaloblastos/src/pages/auxiliares/index.astro", void 0);

const $$file = "C:/ganex/megaloblastos/src/pages/auxiliares/index.astro";
const $$url = "/auxiliares";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
