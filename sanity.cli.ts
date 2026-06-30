import { defineCliConfig } from "sanity/cli";
import type { UserConfig } from "vite";

export default defineCliConfig({
  api: {
    projectId: "ouxg4bbm",
    dataset: "production",
  },
  vite: (config): UserConfig => ({
    ...config,
    build: {
      ...config.build,
      minify: false,
    },
  }),
});
