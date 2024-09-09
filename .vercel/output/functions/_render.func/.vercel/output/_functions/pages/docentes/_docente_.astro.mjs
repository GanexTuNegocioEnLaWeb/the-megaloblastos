import '../../chunks/Background_CID-yjav.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_BEabGL2l.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_GVt_Yf30.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$docente = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$docente;
  const { docente } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Docente" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>${docente}</p> <ul> <li><a href="/parciales/parcial-1">parcial 1</a></li> <li><a href="/parciales/parcial-2">parcial 2</a></li> </ul> ` })}`;
}, "C:/ganex/megaloblastos/src/pages/docentes/[docente].astro", void 0);

const $$file = "C:/ganex/megaloblastos/src/pages/docentes/[docente].astro";
const $$url = "/docentes/[docente]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$docente,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
