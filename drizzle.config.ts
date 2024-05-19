import { defineConfig } from "drizzle-kit"

export default defineConfig({
  schema: "./server/db/schema.ts",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: { url: "file:./dev.db" },
  verbose: true,
  strict: true,
})
