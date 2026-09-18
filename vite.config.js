import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  // Served from the site root for local dev and root deploys (Netlify/Vercel/itch).
  // If you deploy to a GitHub Pages *project* site, change this to "/<repo-name>/".
  base: "/",
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
  ],
});
