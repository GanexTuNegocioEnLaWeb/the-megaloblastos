// db\seed.ts
import { db, Users } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  try {
    await db.insert(Users).values([
      {
        id: "1",
        name: "Admin",
        email: "megaloblastosweb@gmail.com",
        password: "",
        role: "admin",
      },
    ]);
    console.log("admin inserted");
  } catch (error) {
    console.log("error: ", error);
  }
}
