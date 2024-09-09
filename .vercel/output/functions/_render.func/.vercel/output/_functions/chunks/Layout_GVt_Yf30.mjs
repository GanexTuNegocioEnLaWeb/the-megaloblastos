import { c as createComponent, r as renderTemplate, a as addAttribute, d as renderComponent, m as maybeRenderHead, b as createAstro, u as unescapeHTML, F as Fragment, f as defineScriptVars, g as renderSlot, s as spreadAttributes, h as renderHead } from './astro/server_BEabGL2l.mjs';
import 'kleur/colors';
/* empty css                          */
import { $ as $$Image } from './_astro_assets_CPTHfJrI.mjs';
import { g as getSession, a as authConfig } from './server_Cn6Id60J.mjs';
import 'clsx';
import { $ as $$Background } from './Background_CID-yjav.mjs';

const megaloblastosPng = new Proxy({"src":"/_astro/megaloblastos.CK50DJKi.png","width":500,"height":492,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/ganex/megaloblastos/src/assets/megaloblastos.png";
							}
							
							return target[name];
						}
					});

const MENU = {
  accesoRapido: [
    {
      id: "1",
      title: "Auxiliares",
      href: "/auxiliares",
      icon: "ri-presentation-line text-2xl"
    }
  ],
  contactanos: [
    {
      id: "1",
      title: "Facebook",
      href: "https://www.facebook.com/share/GX4bUCNqrpC7seq9/?mibextid=qi2Omg",
      icon: "ri-facebook-circle-line text-2xl"
    },
    {
      id: "2",
      title: "TikTok",
      href: "https://www.tiktok.com/@megaloblastos1?_t=8pNCENCI3LJ&_r=1",
      icon: "ri-tiktok-fill text-xl"
    },
    {
      id: "3",
      title: "Instagram",
      href: "https://www.instagram.com/mega_loblastos?igsh=OGl4NWw3MjQ4Z2lo",
      icon: "ri-instagram-line text-xl"
    }
  ]
};

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$5 = createAstro();
const $$SideBarMobile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SideBarMobile;
  const currentPath = Astro2.url.pathname;
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<button id="sidebar-mobile-button" class="text-primary text-2xl font-bold lg:hidden" aria-label="Toggle Sidebar"> <i class="ri-menu-2-line"></i> </button> <aside id="sidebar-mobile" class="transition-all duration-500 z-20 bg-neutral-800 text-white fixed top-0 bottom-0 -left-64 w-64 lg:hidden" aria-hidden="true"> <header class="py-2 px-6 border-b border-b-neutral-500"> <a href="/" class="flex gap-2 items-center"> ', ' <h2 class="text-lg font-medium uppercase">Megaloblastos</h2> </a> </header> <main> <nav class="text-neutral-300 p-4"> <a href="/"', '> <i class="ri-home-3-line text-2xl"></i> <span class="leading-none">Inicio</span> </a> <ul> <li class="uppercase font-semibold px-6 py-1">Accesos R\xE1pidos</li> <ul class="space-y-1"> ', ' </ul> </ul> <ul> <li class="uppercase font-semibold px-6 py-1">Cont\xE1ctanos</li> <ul class="space-y-1"> ', ` </ul> </ul> <ul> <li class="uppercase font-semibold px-6 py-1">Desarrollado por</li> <li> <!-- <a href="/" aria-icon="icon" class={\`flex items-center gap-1 py-2 px-6 rounded-md transition-all duration-200 \${currentPath === '/ganex' ? 'bg-amber-600 text-neutral-50' : 'hover:text-neutral-50 hover:bg-neutral-600'}\`}>
                        <i class="ri-code-s-slash-line text-xl"></i>
                        <p aria-label="text-sidebar" class="leading-none">GANEX</p>
                    </a> --> <a href="https://ganextunegocioenlaweb.com" target="_blank" aria-icon="icon"`, `> <i class="ri-code-s-slash-line text-xl"></i> <p aria-label="text-sidebar" class="leading-none">GANEX</p> </a> </li> </ul> </nav> </main> </aside> <div id="sidebar-background" class="transition-all duration-500 z-10 hidden fixed inset-0 bg-neutral-950/50 lg:hidden" aria-hidden="true"></div> <script>
    const sidebarMobileButton = document.querySelector('#sidebar-mobile-button');
    const sidebarMobile = document.querySelector('#sidebar-mobile');
    const sidebarBackground = document.querySelector('#sidebar-background');

    function toggleSidebar() {
        sidebarMobile.classList.toggle('-left-64');
        sidebarMobile.classList.toggle('left-0');
        sidebarBackground.classList.toggle('hidden');
        
        const isOpen = sidebarMobile.classList.contains('left-0');
        sidebarMobile.setAttribute('aria-hidden', !isOpen);
        sidebarBackground.setAttribute('aria-hidden', !isOpen);
    }

    sidebarMobileButton.addEventListener('click', toggleSidebar);
    sidebarBackground.addEventListener('click', toggleSidebar);
<\/script>`], ["", '<button id="sidebar-mobile-button" class="text-primary text-2xl font-bold lg:hidden" aria-label="Toggle Sidebar"> <i class="ri-menu-2-line"></i> </button> <aside id="sidebar-mobile" class="transition-all duration-500 z-20 bg-neutral-800 text-white fixed top-0 bottom-0 -left-64 w-64 lg:hidden" aria-hidden="true"> <header class="py-2 px-6 border-b border-b-neutral-500"> <a href="/" class="flex gap-2 items-center"> ', ' <h2 class="text-lg font-medium uppercase">Megaloblastos</h2> </a> </header> <main> <nav class="text-neutral-300 p-4"> <a href="/"', '> <i class="ri-home-3-line text-2xl"></i> <span class="leading-none">Inicio</span> </a> <ul> <li class="uppercase font-semibold px-6 py-1">Accesos R\xE1pidos</li> <ul class="space-y-1"> ', ' </ul> </ul> <ul> <li class="uppercase font-semibold px-6 py-1">Cont\xE1ctanos</li> <ul class="space-y-1"> ', ` </ul> </ul> <ul> <li class="uppercase font-semibold px-6 py-1">Desarrollado por</li> <li> <!-- <a href="/" aria-icon="icon" class={\\\`flex items-center gap-1 py-2 px-6 rounded-md transition-all duration-200 \\\${currentPath === '/ganex' ? 'bg-amber-600 text-neutral-50' : 'hover:text-neutral-50 hover:bg-neutral-600'}\\\`}>
                        <i class="ri-code-s-slash-line text-xl"></i>
                        <p aria-label="text-sidebar" class="leading-none">GANEX</p>
                    </a> --> <a href="https://ganextunegocioenlaweb.com" target="_blank" aria-icon="icon"`, `> <i class="ri-code-s-slash-line text-xl"></i> <p aria-label="text-sidebar" class="leading-none">GANEX</p> </a> </li> </ul> </nav> </main> </aside> <div id="sidebar-background" class="transition-all duration-500 z-10 hidden fixed inset-0 bg-neutral-950/50 lg:hidden" aria-hidden="true"></div> <script>
    const sidebarMobileButton = document.querySelector('#sidebar-mobile-button');
    const sidebarMobile = document.querySelector('#sidebar-mobile');
    const sidebarBackground = document.querySelector('#sidebar-background');

    function toggleSidebar() {
        sidebarMobile.classList.toggle('-left-64');
        sidebarMobile.classList.toggle('left-0');
        sidebarBackground.classList.toggle('hidden');
        
        const isOpen = sidebarMobile.classList.contains('left-0');
        sidebarMobile.setAttribute('aria-hidden', !isOpen);
        sidebarBackground.setAttribute('aria-hidden', !isOpen);
    }

    sidebarMobileButton.addEventListener('click', toggleSidebar);
    sidebarBackground.addEventListener('click', toggleSidebar);
<\/script>`])), maybeRenderHead(), renderComponent($$result, "Image", $$Image, { "class": "w-10 h-10 rounded-full object-cover", "src": megaloblastosPng, "alt": "Icono megaloblastos", "width": 300, "height": 300 }), addAttribute(`flex items-center gap-1 py-2 px-6 rounded-md transition-all duration-200 ${currentPath === "/" ? "bg-amber-600 text-neutral-50" : "hover:text-neutral-50 hover:bg-neutral-600"}`, "class"), MENU.accesoRapido.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")}${addAttribute(`flex items-center gap-1 py-2 px-6 rounded-md transition-all duration-200 ${currentPath === item.href ? "bg-amber-600 text-neutral-50" : "hover:text-neutral-50 hover:bg-neutral-600"}`, "class")}> <i${addAttribute(item.icon, "class")}></i> <span class="leading-none">${item.title}</span> </a> </li>`), MENU.contactanos.map((item) => renderTemplate`<li> <a target="_blank"${addAttribute(item.href, "href")}${addAttribute(`flex items-center gap-1 py-2 px-6 rounded-md transition-all duration-200 ${currentPath === item.href ? "bg-amber-600 text-neutral-50" : "hover:text-neutral-50 hover:bg-neutral-600"}`, "class")}> <i${addAttribute(item.icon, "class")}></i> <span class="leading-none">${item.title}</span> </a> </li>`), addAttribute(`flex items-center gap-1 py-2 px-6 rounded-md transition-all duration-200 ${currentPath === "/ganex" ? "bg-amber-600 text-neutral-50" : "hover:text-neutral-50 hover:bg-neutral-600"}`, "class"));
}, "C:/ganex/megaloblastos/src/components/SideBarMobile.astro", void 0);

const $$Astro$4 = createAstro();
const $$Auth$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Auth$1;
  const { authConfig: authConfig$1 = authConfig } = Astro2.props;
  let session = await getSession(Astro2.request, authConfig$1);
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(Astro2.slots.render("default", [session]))}` })} </div>`;
}, "C:/ganex/megaloblastos/node_modules/auth-astro/src/components/Auth.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$3 = createAstro();
const $$SignIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SignIn;
  const key = Math.random().toString(36).slice(2, 11);
  const { provider, options, authParams, ...attrs } = Astro2.props;
  attrs.class = `signin-${key} ${attrs.class ?? ""}`;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "<button", "> ", " </button>  <script>(function(){", "\n	document\n		.querySelector(`.signin-${key}`)\n		?.addEventListener('click', () => signIn(provider, options, authParams))\n})();<\/script>"], ["", "<button", "> ", " </button>  <script>(function(){", "\n	document\n		.querySelector(\\`.signin-\\${key}\\`)\n		?.addEventListener('click', () => signIn(provider, options, authParams))\n})();<\/script>"])), maybeRenderHead(), spreadAttributes(attrs), renderSlot($$result, $$slots["default"]), defineScriptVars({ provider, options, authParams, key }));
}, "C:/ganex/megaloblastos/node_modules/auth-astro/src/components/SignIn.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro();
const $$SignOut = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SignOut;
  const key = Math.random().toString(36).slice(2, 11);
  const { params, ...attrs } = Astro2.props;
  attrs.class = `signout-${key} ${attrs.class ?? ""}`;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<button", "> ", " </button>  <script>(function(){", "\n	document.querySelector(`.signout-${key}`)?.addEventListener('click', () => signOut(params))\n})();<\/script>"], ["", "<button", "> ", " </button>  <script>(function(){", "\n	document.querySelector(\\`.signout-\\${key}\\`)?.addEventListener('click', () => signOut(params))\n})();<\/script>"])), maybeRenderHead(), spreadAttributes(attrs), renderSlot($$result, $$slots["default"]), defineScriptVars({ params, key }));
}, "C:/ganex/megaloblastos/node_modules/auth-astro/src/components/SignOut.astro", void 0);

const $$Astro$1 = createAstro();
const $$Auth = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Auth;
  const session = await getSession(Astro2.request);
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-4 text-neutral-500 dark:text-neutral-400"> ${!session?.user ? renderTemplate`${renderComponent($$result, "SignIn", $$SignIn, { "id": "sign-in", "provider": "google", "class": "hover:underline leading-none hover:text-neutral-800 dark:hover:text-neutral-300" }, { "default": ($$result2) => renderTemplate`Administrar` })}` : renderTemplate`<a href="/admin/perfil" class="hover:underline leading-none hover:text-neutral-800 dark:hover:text-neutral-300">Ver perfil <i class="ri-user-line"></i></a>`} <!-- { !session?.user ? <a href="/admin" id="sign-in" class="hover:underline leading-none hover:text-neutral-800 dark:hover:text-neutral-300">Administrar</a> : <a href="/admin/perfil" id="sign-in" class="hover:underline leading-none hover:text-neutral-800 dark:hover:text-neutral-300">Ver Perfil <i class="ri-user-line"></i></a>} --> </div>`;
}, "C:/ganex/megaloblastos/src/components/UI/Auth.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  return renderTemplate(_a || (_a = __template([`<html lang="es"> <head><script>
			(() => {
			  const savedTheme = localStorage.getItem('theme');
			  if (savedTheme) {
				document.documentElement.classList.toggle('dark', savedTheme === 'dark');
			  }
			})();
		 <\/script><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/megaloblastos.png"><title>`, '</title><link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css">', '</head> <body class="bg-neutral-50 dark:bg-neutral-800"> <div id="main" class="flex items-start min-h-screen relative"> <div class="absolute inset-0 z-0"> ', ' </div> <!-- Sidebar desktop --> <aside id="sidebar-desktop" class="relative overflow-hidden transition-all duration-500 ease-in-out z-20 bg-neutral-800 text-white w-80 min-h-screen hidden lg:block"> <header class="py-2 px-6 border-b border-b-neutral-500"> <a href="/" class="flex gap-2 justify-start items-center"> ', ' <h2 aria-label="text-sidebar" class="text-lg font-medium uppercase text-neutral-50">Megaloblastos</h2> </a> </header> <main> <nav class="text-neutral-300 py-4 px-2"> <a href="/" aria-icon="icon"', '> <i class="ri-home-3-line text-2xl"></i> <p aria-label="text-sidebar" class="leading-none">INICIO</p> </a> <ul class="block"> <li> <p class="uppercase font-semibold px-6 py-2" aria-label="text-sidebar">Accesos R\xE1pidos</p> </li> <ul class="space-y-1"> ', ' </ul> </ul> <ul class="block"> <li> <p class="uppercase font-semibold px-6 py-2" aria-label="text-sidebar">Cont\xE1ctanos</p> </li> <ul class="space-y-1"> ', ' </ul> </ul> <ul class="block"> <li> <p class="uppercase font-semibold px-6 py-2" aria-label="text-sidebar">Desarrollado por</p> </li> <li> <a href="https://ganextunegocioenlaweb.com" target="_blank" aria-icon="icon"', `> <i class="ri-code-s-slash-line text-xl"></i> <p aria-label="text-sidebar" class="leading-none">GANEX</p> </a> <!-- <a href="/" aria-icon="icon" class={\`flex items-center gap-1 py-2 px-6 rounded-md transition-all duration-200 \${currentPath === '/ganex' ? 'bg-amber-600 text-neutral-50' : 'hover:text-neutral-50 hover:bg-neutral-600'}\`}>
									<i class="ri-code-s-slash-line text-xl"></i>
									<p aria-label="text-sidebar" class="leading-none">GANEX</p>
								</a> --> </li> </ul> </nav> </main> </aside> <section class="relative z-20 w-full h-[100dvh] flex flex-col justify-between"> <header class="bg-neutral-50 dark:bg-neutral-800 pt-[11.130px] pb-[0.68rem] px-6 flex justify-between items-center border-b border-b-neutral-500"> `, ' <button id="sidebar-desktop-button" class="text-primary text-2xl font-bold hidden lg:block"> <i class="ri-menu-2-line"></i> </button> ', ' </header> <main class="h-[100dvh] overflow-y-auto"> ', ` </main> </section> </div> <script src="https://unpkg.com/aos@next/dist/aos.js"><\/script> <script>
		  AOS.init({
			duration: 500,
			easing: 'in-out',
			delay: 0,
		  });
		<\/script> </body> </html> <script>
    // script para el sidebar
	const sidebarDesktop = document.querySelector('#sidebar-desktop');
	const sidebarDesktopButton = document.querySelector('#sidebar-desktop-button');
	const sidebarTexts = document.querySelectorAll('[aria-label="text-sidebar"]');
	const sidebarIcons = document.querySelectorAll('[aria-icon="icon"]');

	sidebarDesktopButton.addEventListener('click', () => {
		sidebarDesktop.classList.toggle('w-80');
		sidebarDesktop.classList.toggle('w-24');
		sidebarTexts.forEach(text => {
			text.classList.toggle('hidden');
		});
		sidebarIcons.forEach(icon => {
			icon.classList.toggle('justify-center');
		});

	});	
<\/script>`], [`<html lang="es"> <head><script>
			(() => {
			  const savedTheme = localStorage.getItem('theme');
			  if (savedTheme) {
				document.documentElement.classList.toggle('dark', savedTheme === 'dark');
			  }
			})();
		 <\/script><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/megaloblastos.png"><title>`, '</title><link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css">', '</head> <body class="bg-neutral-50 dark:bg-neutral-800"> <div id="main" class="flex items-start min-h-screen relative"> <div class="absolute inset-0 z-0"> ', ' </div> <!-- Sidebar desktop --> <aside id="sidebar-desktop" class="relative overflow-hidden transition-all duration-500 ease-in-out z-20 bg-neutral-800 text-white w-80 min-h-screen hidden lg:block"> <header class="py-2 px-6 border-b border-b-neutral-500"> <a href="/" class="flex gap-2 justify-start items-center"> ', ' <h2 aria-label="text-sidebar" class="text-lg font-medium uppercase text-neutral-50">Megaloblastos</h2> </a> </header> <main> <nav class="text-neutral-300 py-4 px-2"> <a href="/" aria-icon="icon"', '> <i class="ri-home-3-line text-2xl"></i> <p aria-label="text-sidebar" class="leading-none">INICIO</p> </a> <ul class="block"> <li> <p class="uppercase font-semibold px-6 py-2" aria-label="text-sidebar">Accesos R\xE1pidos</p> </li> <ul class="space-y-1"> ', ' </ul> </ul> <ul class="block"> <li> <p class="uppercase font-semibold px-6 py-2" aria-label="text-sidebar">Cont\xE1ctanos</p> </li> <ul class="space-y-1"> ', ' </ul> </ul> <ul class="block"> <li> <p class="uppercase font-semibold px-6 py-2" aria-label="text-sidebar">Desarrollado por</p> </li> <li> <a href="https://ganextunegocioenlaweb.com" target="_blank" aria-icon="icon"', `> <i class="ri-code-s-slash-line text-xl"></i> <p aria-label="text-sidebar" class="leading-none">GANEX</p> </a> <!-- <a href="/" aria-icon="icon" class={\\\`flex items-center gap-1 py-2 px-6 rounded-md transition-all duration-200 \\\${currentPath === '/ganex' ? 'bg-amber-600 text-neutral-50' : 'hover:text-neutral-50 hover:bg-neutral-600'}\\\`}>
									<i class="ri-code-s-slash-line text-xl"></i>
									<p aria-label="text-sidebar" class="leading-none">GANEX</p>
								</a> --> </li> </ul> </nav> </main> </aside> <section class="relative z-20 w-full h-[100dvh] flex flex-col justify-between"> <header class="bg-neutral-50 dark:bg-neutral-800 pt-[11.130px] pb-[0.68rem] px-6 flex justify-between items-center border-b border-b-neutral-500"> `, ' <button id="sidebar-desktop-button" class="text-primary text-2xl font-bold hidden lg:block"> <i class="ri-menu-2-line"></i> </button> ', ' </header> <main class="h-[100dvh] overflow-y-auto"> ', ` </main> </section> </div> <script src="https://unpkg.com/aos@next/dist/aos.js"><\/script> <script>
		  AOS.init({
			duration: 500,
			easing: 'in-out',
			delay: 0,
		  });
		<\/script> </body> </html> <script>
    // script para el sidebar
	const sidebarDesktop = document.querySelector('#sidebar-desktop');
	const sidebarDesktopButton = document.querySelector('#sidebar-desktop-button');
	const sidebarTexts = document.querySelectorAll('[aria-label="text-sidebar"]');
	const sidebarIcons = document.querySelectorAll('[aria-icon="icon"]');

	sidebarDesktopButton.addEventListener('click', () => {
		sidebarDesktop.classList.toggle('w-80');
		sidebarDesktop.classList.toggle('w-24');
		sidebarTexts.forEach(text => {
			text.classList.toggle('hidden');
		});
		sidebarIcons.forEach(icon => {
			icon.classList.toggle('justify-center');
		});

	});	
<\/script>`])), title, renderHead(), renderComponent($$result, "Background", $$Background, {}), renderComponent($$result, "Image", $$Image, { "class": "w-10 h-10 rounded-full object-cover", "src": megaloblastosPng, "alt": "Icono megaloblastos", "width": 300, "height": 300, "loading": "lazy" }), addAttribute(`flex items-center gap-1 py-2 px-6 rounded-md transition-all duration-200 ${currentPath === "/" ? "bg-amber-600 text-neutral-50" : "hover:text-neutral-50 hover:bg-neutral-600"}`, "class"), MENU.accesoRapido.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")} aria-icon="icon"${addAttribute(`flex items-center gap-1 py-2 px-6 rounded-md transition-all duration-200 ${currentPath === item.href ? "bg-amber-600 text-neutral-50" : "hover:text-neutral-50 hover:bg-neutral-600"}`, "class")}> <i${addAttribute(item.icon, "class")}></i> <p aria-label="text-sidebar" class="leading-none">${item.title}</p> </a> </li>`), MENU.contactanos.map((item) => renderTemplate`<li> <a target="_blank"${addAttribute(item.href, "href")} aria-icon="icon" class="flex items-center gap-1 py-2 px-6 rounded-md transition-all duration-200 hover:text-neutral-50 hover:bg-neutral-600"> <i${addAttribute(item.icon, "class")}></i> <p aria-label="text-sidebar" class="leading-none">${item.title}</p> </a> </li>`), addAttribute(`flex items-center gap-1 py-2 px-6 rounded-md transition-all duration-200 ${currentPath === "/ganex" ? "bg-amber-600 text-neutral-50" : "hover:text-neutral-50 hover:bg-neutral-600"}`, "class"), renderComponent($$result, "SideBarMobile", $$SideBarMobile, {}), renderComponent($$result, "Auth", $$Auth, {}), renderSlot($$result, $$slots["default"]));
}, "C:/ganex/megaloblastos/src/layouts/Layout.astro", void 0);

export { $$Layout as $, MENU as M, $$SignOut as a, megaloblastosPng as m };
