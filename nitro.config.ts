export default defineNitroConfig({
  compatibilityDate: "latest",
  srcDir: "server",

  routeRules: {
    "/api/**": { cors: true },
  },

  imports: {
    dirs: ["./server/db/**"],

    imports: [
      { from: "zod", name: "z" },
    ],
  },
})
