import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_BEabGL2l.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BtnBack = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<button data-aos="fade-up" id="back" class="text-primary underline">Volver</button> <script>\n    const back = document.getElementById("back");\n    back.addEventListener("click", () => {\n        window.history.back();\n    });\n<\/script>'])), maybeRenderHead());
}, "C:/ganex/megaloblastos/src/components/BtnBack.astro", void 0);

export { $$BtnBack as $ };
