import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C_7ynwWq.mjs';
import { manifest } from './manifest_Cqrg6G1k.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/_---auth_.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/admin/perfil.astro.mjs');
const _page4 = () => import('./pages/api/supportmaterial/create.astro.mjs');
const _page5 = () => import('./pages/api/supportmaterial/update.astro.mjs');
const _page6 = () => import('./pages/auxiliares.astro.mjs');
const _page7 = () => import('./pages/docentes/_docente_.astro.mjs');
const _page8 = () => import('./pages/years/_year_/materias/_materia_/parciales/_docente_/material-apoyo/_parcial_.astro.mjs');
const _page9 = () => import('./pages/years/_year_/materias/_materia_/parciales/_docente_.astro.mjs');
const _page10 = () => import('./pages/years/_year_/materias/_materia_.astro.mjs');
const _page11 = () => import('./pages/years/_year_/parciales/_materia_/material-apoyo/_parcial_.astro.mjs');
const _page12 = () => import('./pages/years/_year_/parciales/_materia_.astro.mjs');
const _page13 = () => import('./pages/years/_year_.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/auth-astro/src/api/[...auth].ts", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/admin/perfil.astro", _page3],
    ["src/pages/api/supportMaterial/create/index.ts", _page4],
    ["src/pages/api/supportMaterial/update/index.ts", _page5],
    ["src/pages/auxiliares/index.astro", _page6],
    ["src/pages/docentes/[docente].astro", _page7],
    ["src/pages/years/[year]/materias/[materia]/parciales/[docente]/material-apoyo/[parcial]/index.astro", _page8],
    ["src/pages/years/[year]/materias/[materia]/parciales/[docente]/index.astro", _page9],
    ["src/pages/years/[year]/materias/[materia]/index.astro", _page10],
    ["src/pages/years/[year]/parciales/[materia]/material-apoyo/[parcial]/index.astro", _page11],
    ["src/pages/years/[year]/parciales/[materia]/index.astro", _page12],
    ["src/pages/years/[year]/index.astro", _page13],
    ["src/pages/index.astro", _page14]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "2a4e0d71-2d66-4290-a20d-ae57d6958b07",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
