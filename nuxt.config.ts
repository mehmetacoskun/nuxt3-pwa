// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@vite-pwa/nuxt",
    "@nuxtjs/ionic",
    "@nuxt/ui",
    '@vueuse/nuxt',
    "@nuxtjs/supabase",
  ],
  supabase: {
   redirect: false,
  },
  ionic: {
    css: {
      utilities: true,
    },
  },
  extends: [],
  runtimeConfig: {
   public: {
    }
  },

  pwa: {
    manifest: {
      id: "ID",
      name: "Nuxt3 PWA",
      short_name: "Nuxt3 PWA",
      lang: 'en',
      display: 'standalone',
      start_url: '/',
      description: "Testing Nuxt3 PWA",
      icons: [
        {
          src: "icons/icon_64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "icons/icon_144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "icons/icon_192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/icon_512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },

  compatibilityDate: "2024-09-11",
});