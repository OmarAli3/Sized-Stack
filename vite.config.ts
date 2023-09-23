/// <reference types="vitest" />

import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/SizedStack.ts"),
      name: "sized-stack",
      fileName: "sized-stack",
    },
  },
  plugins: [dts({ rollupTypes: true })],
  test: {},
});
