import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
// import { peerDependencies } from "./package.json";
import { defineConfig } from "vite";
import pkg from "glob";
const { glob } = pkg;
import { fileURLToPath } from "node:url";
import { extname, relative } from "path";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      insertTypesEntry: true,
      exclude: ["**/*.stories.ts", "**/*.test.tsx"],
    }),
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      // name: "blueprint",
      // fileName: (format) => `bp.${format}.js`,
      // formats: ["es", "cjs", "umd"],
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom"],

      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob
          .sync("src/**/*.{ts,tsx}", {
            ignore: ["src/**/*.d.ts"],
          })
          .map((file) => [
            // 1. The name of the entry point
            // lib/nested/foo.js becomes nested/foo
            relative("src", file.slice(0, file.length - extname(file).length)),
            // 2. The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),

      output: {
        globals: { react: "React", "react-dom": "ReactDOM" },
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
