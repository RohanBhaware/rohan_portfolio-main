import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/rohan_portfolio-main",
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
