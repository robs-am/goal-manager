import { env } from './src/env';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: './.migrations',

  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL, // Use env.DATABASE_URL para acessar a URL diretamente
  },
});
