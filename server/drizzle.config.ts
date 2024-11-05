import { env } from './server/src/env.ts';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: "./src/db/schema.ts",
  out:'./.migrations',

  dialect: "postgresql",
  dbCredentials: {
    url: env,
  },
});


