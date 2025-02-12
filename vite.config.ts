import { build, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from 'vite-tsconfig-paths'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      viteTsconfigPaths(),
      eslint()
    ],
    build: {
      outDir: 'build',
    },
    server: {
      open: true,
      port: 3000
    },
  };
});