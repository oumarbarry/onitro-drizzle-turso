import { defineConfig } from "drizzle-kit"

export default defineConfig({
  schema: "./server/db/schema.ts",
  dialect: "turso",
  dbCredentials: { url: "file:./dev.db" },
  verbose: true,
  strict: true,
})
