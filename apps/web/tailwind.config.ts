// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import uiConfig from "@fakestore/ui/tailwind.config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/**/*.tsx"],
  presets: [uiConfig],
};

export default config;
