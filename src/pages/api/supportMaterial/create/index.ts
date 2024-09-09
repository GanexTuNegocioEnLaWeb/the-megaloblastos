import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";
import { generateId } from "@/utils"
import { db, SupportMaterials } from "astro:db"


export const POST: APIRoute = async ({ request }) => {
    // ver si el ususario existe
    const session = await getSession(request);
    if (!session || session.user == null) return new Response("Unauthorized", { status: 401 });
    // ver si es admin
    if (session.user.email !== "megaloblastosweb@gmail.com") return new Response("Unauthorized", { status: 401 });
    // traer el request
    const support = await request.json();
    support.id = generateId();
    await db.insert(SupportMaterials).values(support);
    return new Response("Success", { status: 200 });
}