import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';

const db = await createRemoteDatabaseClient({
  dbType: "studio",
  remoteUrl: "https://db.services.astro.build",
  appToken: process.env.ASTRO_STUDIO_APP_TOKEN
});
const SupportMaterials = asDrizzleTable("SupportMaterials", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "SupportMaterials", "primaryKey": true } }, "type": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "type", "collection": "SupportMaterials", "primaryKey": false, "optional": false } }, "title": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "title", "collection": "SupportMaterials", "primaryKey": false, "optional": false } }, "desc": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "desc", "collection": "SupportMaterials", "primaryKey": false, "optional": false } }, "year": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "year", "collection": "SupportMaterials", "primaryKey": false, "optional": false } }, "materia": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "materia", "collection": "SupportMaterials", "primaryKey": false, "optional": false } }, "docente": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "docente", "collection": "SupportMaterials", "primaryKey": false, "optional": false } }, "url": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "url", "collection": "SupportMaterials", "primaryKey": false, "optional": false } }, "parcial": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "parcial", "collection": "SupportMaterials", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);
const Users = asDrizzleTable("Users", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Users", "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "Users", "primaryKey": false, "optional": false } }, "email": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "email", "collection": "Users", "primaryKey": false, "optional": false } }, "password": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "password", "collection": "Users", "primaryKey": false, "optional": false } }, "role": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "role", "collection": "Users", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);

export { SupportMaterials as S, Users as U, db as d };
