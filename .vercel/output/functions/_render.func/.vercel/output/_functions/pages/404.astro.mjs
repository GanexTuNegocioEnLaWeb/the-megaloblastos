import { $ as $$Background } from '../chunks/Background_CID-yjav.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_BEabGL2l.mjs';
import 'kleur/colors';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Background", $$Background, {})}`;
}, "C:/ganex/megaloblastos/src/pages/404.astro", void 0);

const $$file = "C:/ganex/megaloblastos/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
