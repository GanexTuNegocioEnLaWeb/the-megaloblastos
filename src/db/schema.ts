// import { sql } from 'drizzle-orm';
import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

// admins
export const usersTable = sqliteTable('users', {
  id: text('id').primaryKey(),
  username: text('name').notNull(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
});

// support materials
export const supportMaterialsTable = sqliteTable('supportMaterials', {
  id: text('id').primaryKey(),
  type: text('type').notNull(),
  year: text('year').notNull(),
  subject: text('submit').notNull(),
  teacher: text('teacher').notNull(),
  partial: text('partial').notNull(),
  url: text('url').notNull(),
});

// news
// export const newsTable = sqliteTable('news', {
//   id: text('id').primaryKey().default(uid(16)),
//   imgUrl: text('img_url').notNull(),
//   title: text('title').notNull(),
//   description: text('description').notNull(),
//   date: text('date').notNull(),
//   url: text('url').notNull(),
// })

// library
// export const libraryTable = sqliteTable('library', {
//   id: text('id').primaryKey().default(uid(16)),
//   imgUrl: text('img_url').notNull(),
//   title: text('title').notNull(),
//   description: text('description').notNull(),
//   url: text('url').notNull(),
// })

// entrepreneurs
// export const entrepreneursTable = sqliteTable('entrepreneurs', {
//   id: text('id').primaryKey().default(uid(16)),
//   imgUrl: text('img_url').notNull(),
//   title: text('title').notNull(),
//   description: text('description').notNull(),
//   url: text('url').notNull(),
// })