import { migrate } from "drizzle-orm/libsql/migrator"
import { drizzle } from "drizzle-orm/libsql"
import { createClient } from "@libsql/client"

const db = drizzle(createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN,
}))

console.log("Running migrations")

await migrate(db, { migrationsFolder: "drizzle" })

console.log("Migrated successfully")

process.exit(0)
