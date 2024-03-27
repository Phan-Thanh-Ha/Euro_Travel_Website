import { z } from "zod";

const configSchema = z.object({
  NEXT_PUBLIC_API_ENDPOINT: z.string(),
  NEXT_PUBLIC_CDN: z.string(),
  NEXT_PUBLIC_GROUPID: z.string(),
  NEXT_PUBLIC_API_KEY: z.string(),
});

const configProject = configSchema.safeParse({
  NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  NEXT_PUBLIC_CDN: process.env.NEXT_PUBLIC_CDN,
  NEXT_PUBLIC_GROUPID: process.env.NEXT_PUBLIC_GROUPID,
  NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
});
if (!configProject.success) {
  console.error(configProject.error.issues);
  throw new Error(".env error");
}

const envConfig = configProject.data;
export default envConfig;
