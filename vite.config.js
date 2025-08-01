import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1600, 
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], 
        },
      },
    },
  },
  base: "/", 
  server: {
    mimeTypes: {
      "text/javascript": ["js", "jsx"], 
    },
  },
});