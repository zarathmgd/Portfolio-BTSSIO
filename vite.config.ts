import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://zarathmgd.github.io/Portfolio-BTSSIO/",
  plugins: [react()],
});
