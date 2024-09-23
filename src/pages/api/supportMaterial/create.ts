import { res } from "@/utils";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { db } from "@/db";
import type { APIRoute } from "astro";
import { supportMaterialsTable } from "@/db/schema";
import { uid } from "uid";

dotenv.config();

export const POST: APIRoute = async ({ request }) => {
  try {
    // Traer y desestructurar datos
    const { type, url, year, subject, teacher, partial, token } = await request.json();
    // Validar datos
    if (typeof type !== "string" || typeof url !== "string" || typeof year !== "string" || typeof subject !== "string" || typeof teacher !== "string" || typeof partial !== "string") {
      return res("error", 400, "Datos incorrectas");
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
    // Insertar datos en la base de datos
    console.log("antes de insertar a db")
    await db.insert(supportMaterialsTable).values({
      id: uid(16),
      type,
      url,
      year,
      subject,
      teacher,
      partial
    });

    return new Response(JSON.stringify({ message: "Éxito" }), { status: 200 });

  } catch (err) {
    // Manejo de errores más específico
    if (err instanceof jwt.JsonWebTokenError) {
      return res("error", 403, "Token no válido o expirado");
    }

    console.error("Error en el servidor: ", err);
    return res("error", 500, "Error interno del servidor");
  }
};
