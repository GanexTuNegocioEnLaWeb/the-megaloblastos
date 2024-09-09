import { defineDb, defineTable, column } from 'astro:db';

// Tabla para docentes
const SupportMaterials = defineTable({
  columns: {
    id: column.text({ primaryKey: true }), // Clave primaria
    type: column.text(), // Tipo de material
    title: column.text(), // Nombre del material de apoyo
    desc: column.text(), // Descripción del material de apoyo
    year: column.number(), // Año del material de apoyo
    materia: column.text(), // Materia del material de apoyo
    docente: column.text(), // Docente del material de apoyo
    url: column.text(), // Url del material de apoyo
    parcial: column.number(), // Parcial del material de apoyo
  }
});

const Users = defineTable({
  columns: {
    id: column.text({ primaryKey: true }), // Clave primaria
    name: column.text(), // Nombre del usuario
    email: column.text(), // Email del usuario
    password: column.text(), // Password del usuario
    role: column.text(), // Rol del usuario
  }
});

// const Books = defineTable({
//   columns: {
//     id: column.text({ primaryKey: true }), // Clave primaria
//     title: column.text(), // Nombre del libro
//     desc: column.text(), // Descripción del libro
//     url: column.text(), // Url del libro
//     year: column.text(), // Año del libro
//     materia: column.text(), // Materia del libro
//     parcial: column.text(), // Parcial del libro
//     docente: column.text(), // Docente del libro
//   }
// });

export default defineDb({
  tables: {
    SupportMaterials,
    Users
    // Books,
  }
});
