// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    {
      src: "~/plugins/element-plus.ts",
    },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/assets/css/_variables.scss";\n@import "~/assets/css/_extendable.scss";`,
        },
      },
    },
  },
});
