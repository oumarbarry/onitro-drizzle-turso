import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const movies = sqliteTable("movies", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
})
