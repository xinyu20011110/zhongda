export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  ssr: true,

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false
    }
  },

})