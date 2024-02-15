import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";
// import { VitePWA } from "vite-plugin-pwa";

// const manifestForPlugIn = {
//   registerType: "prompt",
//   includeAssests: ["logo.svg", "logo.svg"],
//   manifest: {
//     name: "Todo App",
//     short_name: "Todo App",
//     description: "A Memos app",
//     theme_color: "#26265F",
//     background_color: "#CED7E9",
//     display: "standalone",
//     icons: [
//       {
//         src: "logo.svg",
//         sizes: "192x192",
//         type: "image/png/svg",
//         purpose: "favicon",
//       },
//       {
//         src: "logo.svg",
//         sizes: "144x144",
//         type: "image/png/svg",
//         purpose: "any",
//       },
//       {
//         src: "logo.svg",
//         sizes: "512x512",
//         type: "image/png/svg",
//         purpose: "favicon",
//       },
//       {
//         src: "/icons/apple-touch-icon.png",
//         sizes: "180x180",
//         type: "image/png/svg",
//         purpose: "apple touch icon",
//       },
//       {
//         src: "/icons/maskable_icon.png",
//         sizes: "512x512",
//         type: "image/png/svg",
//         purpose: "any maskable",
//       },
//     ],
//     scope: "/",
//     start_url: "/",
//     orientation: "portrait",
//   },
// };

export default defineConfig({
  // plugins: [react(), VitePWA(manifestForPlugIn)],
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //   },
  // },
  server: {
    host: true,
    strictPort: true,
    port: 8080,
  },
});
