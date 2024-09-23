import { type APIRoute } from "astro";
import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import { res } from "@/utils";
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, password } = await request.json();

    // Validar que email y password sean cadenas no vacías
    if (typeof email !== 'string' || typeof password !== 'string' || !email.trim() || !password.trim()) {
      return res('error', 400, 'Correo o contraseña incorrectos');
    }

    // Buscar al usuario por correo electrónico
    const [user] = await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1);
    // Verificar si el usuario existe
    if (!user) {
      return res('error', 400, 'Correo o contraseña incorrectos');
    }

    // Verificar si la contraseña es correcta
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res('error', 400, 'Correo o contraseña incorrectos');
    }

    // crear jwt
    const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });

    // Respuesta exitosa
    return new Response(JSON.stringify({ user: { email: user.email, username: user.username }, token }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })

  } catch (error) {
    // Manejo de errores inesperados
    return res('error', 500, 'Error al iniciar sesión');
  }
};
