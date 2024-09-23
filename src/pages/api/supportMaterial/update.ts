import { res } from "@/utils";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { db } from "@/db";
import type { APIRoute } from "astro";
import { supportMaterialsTable } from "@/db/schema";
import { eq } from "drizzle-orm";

dotenv.config();

export const PUT: APIRoute = async ({ request }) => {
  try {
    // Traer y desestructurar datos
    const { id, type, url, year, subject, teacher, partial, token } = await request.json();

    // Validar datos
    if (!id || typeof id !== "string") {
      return res("error", 400, "ID no proporcionado o inválido");
    }
    if (typeof type !== "string" || typeof url !== "string" || typeof year !== "string" || typeof subject !== "string" || typeof teacher !== "string" || typeof partial !== "string") {
      return res("error", 400, "Datos incorrectos");
    }

    // Validar token
    if (!token) {
      return res("error", 401, "Token no proporcionado");
    }

    // Verificar token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res("error", 403, "Token no válido");
    }

    // Actualizar datos en la base de datos
    const updated = await db
      .update(supportMaterialsTable)
      .set({ type, url, year, subject, teacher, partial })
      .where(eq(supportMaterialsTable.id, id));

    if (!updated) {
      return res("error", 404, "Material de apoyo no encontrado");
    }

    return new Response(JSON.stringify({ message: "Actualización exitosa" }), { status: 200 });

  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return res("error", 403, "Token no válido o expirado");
    }

    console.error("Error en el servidor: ", err);
    return res("error", 500, "Error interno del servidor");
  }
};
