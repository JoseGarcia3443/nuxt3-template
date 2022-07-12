import { defineNuxtConfig } from 'nuxt'
import { IntlifyModuleOptions } from '@intlify/nuxt3'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions
  }
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // app
  app: {
    head: {
      title: 'Nuxt 3',
      titleTemplate: '%s - Nuxt 3',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt 3',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // css
  css: ['@/assets/scss/tailwind.css'],

  // plugins
  plugins: [],

  // build
  build: {
    transpile: ['@headlessui/vue'],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  // build modules
  buildModules: [
    '@nuxtjs/eslint-module',
    'unplugin-icons/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/svg',
    '@intlify/nuxt3',
    '@vueuse/nuxt'
  ],
  // experimental features
  experimental: {
    reactivityTransform: true,
  },

  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL
  },
  
  // auto import components
  components: [
    '~/components',
    '~/components/loader',
    '~/components/pages',
    '~/components/lists',
    '~/components/card',
    '~/components/navbar',
  ],
  // vite plugins
  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'es',
      fallbackLocale: 'en',
      availableLocales: ['en', 'es'],
    },
  },
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
})
