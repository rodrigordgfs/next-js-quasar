import { resolve } from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, './src')
  },
  css: ['~/assets/style.scss'],
  modules: ['nuxt-quasar-ui'],
  quasar: {
    plugins: [
      'Notify'
    ],
    extras: {
      font: 'roboto-font',
    },
    components: {},
  },
});
