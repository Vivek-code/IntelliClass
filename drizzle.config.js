import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./config/schema.js",
  dbCredentials: {
    url: "postgresql://revision_owner:2R4rtxiHNGJg@ep-wandering-grass-a5f6lf64.us-east-2.aws.neon.tech/revision?sslmode=require",
  },
});