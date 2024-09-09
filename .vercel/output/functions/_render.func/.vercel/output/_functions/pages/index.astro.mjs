import '../chunks/Background_CID-yjav.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as addAttribute } from '../chunks/astro/server_BEabGL2l.mjs';
import 'kleur/colors';
import { M as MENU, m as megaloblastosPng, $ as $$Layout } from '../chunks/Layout_GVt_Yf30.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CPTHfJrI.mjs';
import 'clsx';
/* empty css                                 */
import { useSSRContext, defineComponent, ref, onMounted } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../chunks/_plugin-vue_export-helper_pcqpp-6-.mjs';
export { renderers } from '../renderers.mjs';

const $$EffectWrite = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="py-4 text-xl font-semibold text-neutral-600 dark:text-neutral-300" data-astro-cid-hyjxrb6p> <span id="typing-text" class="typing-effect" data-astro-cid-hyjxrb6p></span> </div> `;
}, "C:/ganex/megaloblastos/src/components/EffectWrite.astro", void 0);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BtnTheme",
  setup(__props, { expose: __expose }) {
    __expose();
    const isDark = ref(false);
    const toggleTheme = () => {
      const html = document.documentElement;
      html.classList.toggle("dark");
      isDark.value = !isDark.value;
      localStorage.setItem("theme", isDark.value ? "dark" : "light");
    };
    onMounted(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
        isDark.value = true;
      } else {
        document.documentElement.classList.remove("dark");
        isDark.value = false;
      }
    });
    const __returned__ = { isDark, toggleTheme };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(_attrs)}>`);
  if (!$setup.isDark) {
    _push(`<i class="ri-sun-line text-2xl text-primary"></i>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.isDark) {
    _push(`<i class="ri-moon-line text-2xl text-primary"></i>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</button>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/BtnTheme.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BtnTheme = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex items-center justify-center pt-20 pb-10 px-4"> <div class="flex flex-wrap items-center justify-center gap-4 md:gap-10"> <nav class="flex gap-2 flex-col text-primary"> ${renderComponent($$result, "BtnTheme", BtnTheme, { "data-aos": "fade-down", "data-aos-delay": "50", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/ganex/megaloblastos/src/components/BtnTheme.vue", "client:component-export": "default" })} ${MENU.contactanos.map((contacto, index) => renderTemplate`<a data-aos="fade-down"${addAttribute((index + 1) * 50, "data-aos-delay")}${addAttribute(contacto.href, "href")} target="_blank"${addAttribute(contacto.icon, "class")}></a>`)} </nav> ${renderComponent($$result, "Image", $$Image, { "data-aos": "fade-down", "data-aos-delay": "150", "class": "w-60 sm:w-64 h-60 sm:h-64 object-cover md:order-2", "src": megaloblastosPng, "alt": "Icono megaloblastos", "width": 300, "height": 300 })} <article> <h1 data-aos="fade-down" data-aos-delay="50" class="text-3xl font-bold text-neutral-800 dark:text-neutral-50">MEDICINA</h1> <h2 data-aos="fade-down" data-aos-delay="100" class="text-3xl font-bold text-primary">F.C.S.H.</h2> ${renderComponent($$result, "EffectWrite", $$EffectWrite, {})} <p data-aos="fade-up" data-aos-delay="50" class="max-w-xs text-neutral-500 dark:text-neutral-400">La medicina es una ciencia de incertidumbre y un arte de probabilidad.</p> <p data-aos="fade-up" data-aos-delay="100" class="text-neutral-600 dark:text-neutral-300 font-bold mt-1">- William Osler</p> </article> </div> </section>`;
}, "C:/ganex/megaloblastos/src/sections/Hero.astro", void 0);

const $$Years = createComponent(($$result, $$props, $$slots) => {
  const years = ["primer", "segundo", "tercer", "cuarto", "quinto"];
  return renderTemplate`${maybeRenderHead()}<h3 data-aos="fade-up" data-aos-delay="50" class="text-2xl font-bold w-[80dvw] mx-auto max-w-3xl text-neutral-600 dark:text-neutral-300 pb-10 lg:px-10">Materias</h3> <section class="w-[80dvw] mx-auto max-w-3xl pb-10 place-items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:px-10"> ${years.map((name, index) => renderTemplate`<a data-aos="fade-up"${addAttribute((1 + index) * 50, "data-aos-delay")}${addAttribute(`/years/${index + 1}`, "href")} class="flex-auto min-w-52 w-full bg-white dark:bg-neutral-800 rounded-md shadow-lg pb-8 pt-24 px-10 hover:scale-105 transition-transform duration-500 group"> ${renderComponent($$result, "Image", $$Image, { "class": "w-[5.7rem] h-[5.7rem] object-cover mx-auto", "src": megaloblastosPng, "alt": `Icono ${name} a\xF1o`, "width": 300, "height": 300 })} <h3 class="text-neutral-600 dark:text-neutral-300 font-bold text-xl text-nowrap text-center pt-1 text-ellipsis overflow-hidden capitalize"> ${name} año
</h3> </a>`)} </section>`;
}, "C:/ganex/megaloblastos/src/sections/Years.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Megaloblastos" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Years", $$Years, {})} ` })}`;
}, "C:/ganex/megaloblastos/src/pages/index.astro", void 0);

const $$file = "C:/ganex/megaloblastos/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
