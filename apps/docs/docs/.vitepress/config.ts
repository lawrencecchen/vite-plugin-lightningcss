import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Vite Lightning CSS Plugin",
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/lawrencecchen/vite-plugin-lightningcss",
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Lawrence Chen",
    },
  },
});
