import '../../chunks/Background_CID-yjav.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute, F as Fragment } from '../../chunks/astro/server_BEabGL2l.mjs';
import 'kleur/colors';
import { g as getSession } from '../../chunks/server_Cn6Id60J.mjs';
import { a as $$SignOut, $ as $$Layout } from '../../chunks/Layout_GVt_Yf30.mjs';
import { useSSRContext, defineComponent, reactive, computed, mergeProps } from 'vue';
import { m as materias } from '../../chunks/db_SdHQPvij.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from '../../chunks/_plugin-vue_export-helper_pcqpp-6-.mjs';
import { d as db, U as Users } from '../../chunks/_astro_db_B5E9kDNw.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../renderers.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormSupport",
  setup(__props, { expose: __expose }) {
    __expose();
    const theSupportMaterial = reactive({
      title: "",
      desc: "",
      year: 1,
      materia: "",
      docente: "",
      url: "",
      parcial: 1,
      type: ""
    });
    const materiasFiltradasByYear = computed(() => {
      return materias.filter((m) => m.year == theSupportMaterial.year);
    });
    const docentesFiltrados = computed(() => {
      const materiaSeleccionada = materias.find(
        (materia) => `${materia.name}` === theSupportMaterial.materia
      );
      return materiaSeleccionada ? materiaSeleccionada.docentes : [];
    });
    const reWrite = {
      1: "Primer",
      2: "Segundo",
      3: "Tercer",
      4: "Cuarto",
      5: "Quinto"
    };
    const createSupportMaterial = async (newSupportMaterial) => {
      if (!newSupportMaterial.title) return alert("T\xEDtulo es obligatorio");
      if (!newSupportMaterial.desc) return alert("Descripci\xF3n es obligatoria");
      if (!newSupportMaterial.materia) return alert("Materia es obligatoria");
      if (!newSupportMaterial.docente) return alert("Docente es obligatorio");
      if (!newSupportMaterial.url) return alert("Url es obligatorio");
      const response = await fetch("/api/supportMaterial/create", {
        method: "POST",
        body: JSON.stringify(newSupportMaterial)
      });
      if (!response.ok) {
        return alert("Error al crear el material de apoyo");
      }
      alert("Material de apoyo creado con exito");
      window.location.reload();
      return;
    };
    const __returned__ = { theSupportMaterial, materiasFiltradasByYear, docentesFiltrados, reWrite, createSupportMaterial };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 lg:grid-cols-2 lg:gap-8 place-items-start" }, _attrs))}><form class="w-full"><label class="block"><span class="block text-neutral-700 dark:text-neutral-50">T\xEDtulo</span><input${ssrRenderAttr("value", $setup.theSupportMaterial.title)} type="text" name="title" class="w-full border outline-none bg-white dark:bg-neutral-800 dark:text-white rounded-md p-2" required></label><label class="block"><span class="block text-neutral-700 dark:text-neutral-50">Descripci\xF3n</span><textarea name="desc" class="w-full border min-h-20 outline-none bg-white dark:bg-neutral-800 dark:text-white rounded-md p-2" required>${ssrInterpolate($setup.theSupportMaterial.desc)}</textarea></label><label class="block"><span class="block text-neutral-700 dark:text-neutral-50">Tipo de material de apoyo</span><select class="w-full border outline-none bg-white dark:bg-neutral-800 dark:text-white rounded-md p-2" name="type"><option value=""${ssrIncludeBooleanAttr(Array.isArray($setup.theSupportMaterial.type) ? ssrLooseContain($setup.theSupportMaterial.type, "") : ssrLooseEqual($setup.theSupportMaterial.type, "")) ? " selected" : ""}>Seleccione un tipo</option><option value="otro"${ssrIncludeBooleanAttr(Array.isArray($setup.theSupportMaterial.type) ? ssrLooseContain($setup.theSupportMaterial.type, "otro") : ssrLooseEqual($setup.theSupportMaterial.type, "otro")) ? " selected" : ""}>Otro</option><option value="Banco De Pregunta"${ssrIncludeBooleanAttr(Array.isArray($setup.theSupportMaterial.type) ? ssrLooseContain($setup.theSupportMaterial.type, "Banco De Pregunta") : ssrLooseEqual($setup.theSupportMaterial.type, "Banco De Pregunta")) ? " selected" : ""}>Banco De Pregunta</option></select></label><label class="block"><span class="block text-neutral-700 dark:text-neutral-50">Url</span><input${ssrRenderAttr("value", $setup.theSupportMaterial.url)} type="url" name="url" class="w-full border outline-none bg-white dark:bg-neutral-800 dark:text-white rounded-md p-2" required></label><label class="block"><span class="block text-neutral-700 dark:text-neutral-50">A\xF1o</span><select class="w-full border outline-none bg-white dark:bg-neutral-800 dark:text-white rounded-md p-2" name="year"><option value="1"${ssrIncludeBooleanAttr(Array.isArray($setup.theSupportMaterial.year) ? ssrLooseContain($setup.theSupportMaterial.year, "1") : ssrLooseEqual($setup.theSupportMaterial.year, "1")) ? " selected" : ""}>1</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray($setup.theSupportMaterial.year) ? ssrLooseContain($setup.theSupportMaterial.year, "2") : ssrLooseEqual($setup.theSupportMaterial.year, "2")) ? " selected" : ""}>2</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray($setup.theSupportMaterial.year) ? ssrLooseContain($setup.theSupportMaterial.year, "3") : ssrLooseEqual($setup.theSupportMaterial.year, "3")) ? " selected" : ""}>3</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray($setup.theSupportMaterial.year) ? ssrLooseContain($setup.theSupportMaterial.year, "4") : ssrLooseEqual($setup.theSupportMaterial.year, "4")) ? " selected" : ""}>4</option><option value="5"${ssrIncludeBooleanAttr(Array.isArray($setup.theSupportMaterial.year) ? ssrLooseContain($setup.theSupportMaterial.year, "5") : ssrLooseEqual($setup.theSupportMaterial.year, "5")) ? " selected" : ""}>5</option></select></label><label class="block"><span class="block text-neutral-700 dark:text-neutral-50">Materia</span><select class="w-full border outline-none bg-white dark:bg-neutral-800 dark:text-white rounded-md p-2" name="materia"><option value=""${ssrIncludeBooleanAttr(Array.isArray($setup.theSupportMaterial.materia) ? ssrLooseContain($setup.theSupportMaterial.materia, "") : ssrLooseEqual($setup.theSupportMaterial.materia, "")) ? " selected" : ""}>Seleccione una materia</option><!--[-->`);
  ssrRenderList($setup.materiasFiltradasByYear, (materia) => {
    _push(`<option${ssrRenderAttr("value", `${materia.name}`)}>${ssrInterpolate(materia.sigla)} - ${ssrInterpolate(materia.name)}</option>`);
  });
  _push(`<!--]--></select></label>`);
  if ($setup.theSupportMaterial.materia !== "" && $setup.theSupportMaterial.year) {
    _push(`<label class="block"><span class="block text-neutral-700 dark:text-neutral-50">Docente</span><select class="w-full border outline-none bg-white dark:bg-neutral-800 dark:text-white rounded-md p-2" name="docente"><option value=""${ssrIncludeBooleanAttr(Array.isArray($setup.theSupportMaterial.docente) ? ssrLooseContain($setup.theSupportMaterial.docente, "") : ssrLooseEqual($setup.theSupportMaterial.docente, "")) ? " selected" : ""}>Seleccione un docente</option><!--[-->`);
    ssrRenderList($setup.docentesFiltrados, (docente) => {
      _push(`<option${ssrRenderAttr("value", docente.name)}>${ssrInterpolate(docente.name)}</option>`);
    });
    _push(`<!--]--></select></label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<label class="block"><span class="block text-neutral-700 dark:text-neutral-50">Parcial</span><select class="w-full border outline-none bg-white dark:bg-neutral-800 dark:text-white rounded-md p-2" name="parcial"><option value="1"${ssrIncludeBooleanAttr(Array.isArray($setup.theSupportMaterial.parcial) ? ssrLooseContain($setup.theSupportMaterial.parcial, "1") : ssrLooseEqual($setup.theSupportMaterial.parcial, "1")) ? " selected" : ""}>1</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray($setup.theSupportMaterial.parcial) ? ssrLooseContain($setup.theSupportMaterial.parcial, "2") : ssrLooseEqual($setup.theSupportMaterial.parcial, "2")) ? " selected" : ""}>2</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray($setup.theSupportMaterial.parcial) ? ssrLooseContain($setup.theSupportMaterial.parcial, "3") : ssrLooseEqual($setup.theSupportMaterial.parcial, "3")) ? " selected" : ""}>3</option></select></label><button type="submit" class="mt-4 bg-blue-500 text-white rounded-md p-2"> Enviar </button></form><ul class="space-y-2 pt-4 w-full"><li class="py-6 px-8 bg-white dark:bg-neutral-800 shadow-md rounded-md"><h3 class="text-xl font-bold uppercase text-neutral-700 dark:text-neutral-50 border-b pb-4">${ssrInterpolate($setup.theSupportMaterial.title === "" ? "T\xEDtulo" : $setup.theSupportMaterial.title)}</h3><p class="py-2 font-medium text-neutral-600 dark:text-neutral-300">${ssrInterpolate($setup.theSupportMaterial.desc === "" ? "Descripci\xF3n" : $setup.theSupportMaterial.desc)}</p><a class="text-primary underline" target="_blank"${ssrRenderAttr("href", $setup.theSupportMaterial.url == "" ? "no-url" : $setup.theSupportMaterial.url)}>Ver</a></li><li class="block w-full bg-white shadow-md dark:border-neutral-800 rounded-md py-4 px-8 dark:bg-neutral-800"><h5 class="text-lg font-semibold text-neutral-800 dark:text-neutral-200 pb-1 border-b">Meta Datos</h5><p class="${ssrRenderClass($setup.theSupportMaterial.url === "" ? "text-red-500" : "text-green-500")}"><span class="font-medium text-neutral-800 dark:text-neutral-200">Url: </span> ${ssrInterpolate($setup.theSupportMaterial.url === "" ? "No seleccionado" : $setup.theSupportMaterial.url)}</p><p class="${ssrRenderClass($setup.theSupportMaterial.year === 0 ? "text-red-500" : "text-green-500")}"><span class="font-medium text-neutral-800 dark:text-neutral-200">A\xF1o: </span> ${ssrInterpolate($setup.theSupportMaterial.year === 0 ? "An\u0303o" : $setup.reWrite[$setup.theSupportMaterial.year])} A\xF1o </p><p class="${ssrRenderClass($setup.theSupportMaterial.materia === "" ? "text-red-500" : "text-green-500")}"><span class="font-medium text-neutral-800 dark:text-neutral-200">Materia: </span> ${ssrInterpolate($setup.theSupportMaterial.materia === "" ? "No seleccionado" : $setup.theSupportMaterial.materia)}</p><p class="${ssrRenderClass($setup.theSupportMaterial.docente === "" ? "text-red-500" : "text-green-500")}"><span class="font-medium text-neutral-800 dark:text-neutral-200">Docente: </span> ${ssrInterpolate($setup.theSupportMaterial.docente === "" ? "No seleccionado" : $setup.theSupportMaterial.docente)}</p><p class="${ssrRenderClass($setup.theSupportMaterial.parcial === 0 ? "text-red-500" : "text-green-500")}"><span class="font-medium text-neutral-800 dark:text-neutral-200">Parcial: </span> ${ssrInterpolate($setup.theSupportMaterial.parcial === 0 ? "No seleccionado" : $setup.reWrite[$setup.theSupportMaterial.parcial])} Parcial </p><p class="${ssrRenderClass($setup.theSupportMaterial.type === "" ? "text-red-500" : "text-green-500")}"><span class="font-medium text-neutral-800 dark:text-neutral-200">Tipo: </span> ${ssrInterpolate($setup.theSupportMaterial.type === "" ? "No seleccionado" : $setup.theSupportMaterial.type)}</p></li></ul></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/FormSupport.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FormSupport = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro();
const $$Perfil = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Perfil;
  const theUser = await getSession(Astro2.request);
  if (!theUser) return Astro2.redirect("/");
  const user = await db.select().from(Users).where(eq(Users.email, theUser.user.email)).all();
  console.log("user:", user);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Perfil" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[80dvw] mx-auto max-w-6xl px-8"> <article class="py-10 flex justify-center flex-col md:flex-row items-center gap-4"> <img${addAttribute(theUser.user.image, "src")}${addAttribute(`perfil de ${theUser.user.name}`, "alt")}> <div class="flex flex-col items-center md:items-start"> <h1 class="text-3xl font-bold text-neutral-800 dark:text-neutral-50 text-ellipsis overflow-hidden text-nowrap max-w-56 sm:max-w-80 md:max-w-96">${theUser.user.name}</h1> <p class="text-neutral-600 dark:text-neutral-300 text-center md:text-left">${theUser.user.email}</p> ${renderComponent($$result2, "SignOut", $$SignOut, { "class": "text-red-500 underline" }, { "default": ($$result3) => renderTemplate`Cerrar sesión` })} </div> </article> <a href="/" class="text-primary underline inline-block">Volver a inicio</a> ${user.length == 0 ? renderTemplate`<p class="text-neutral-600 dark:text-neutral-300 text-center">En construcción</p>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <article class="py-5"> <h2 class="text-3xl font-bold text-neutral-800 dark:text-neutral-50">Administrar</h2> <p class="text-neutral-600 dark:text-neutral-300">Panel de administración</p> </article> ${renderComponent($$result3, "FormSupport", FormSupport, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/FormSupport.vue", "client:component-export": "default" })} ` })}`} </section> ` })}`;
}, "C:/ganex/megaloblastos/src/pages/admin/perfil.astro", void 0);

const $$file = "C:/ganex/megaloblastos/src/pages/admin/perfil.astro";
const $$url = "/admin/perfil";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Perfil,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
