import { g as getSession } from '../../../chunks/server_Cn6Id60J.mjs';
import { d as db, S as SupportMaterials } from '../../../chunks/_astro_db_B5E9kDNw.mjs';
export { renderers } from '../../../renderers.mjs';

const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const POST = async ({ request }) => {
  const session = await getSession(request);
  if (!session || session.user == null) return new Response("Unauthorized", { status: 401 });
  if (session.user.email !== "megaloblastosweb@gmail.com") return new Response("Unauthorized", { status: 401 });
  const support = await request.json();
  support.id = generateId();
  await db.insert(SupportMaterials).values(support);
  return new Response("Success", { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
