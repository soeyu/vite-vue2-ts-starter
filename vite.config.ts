import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'

import Unocss from 'unocss/vite'
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
//import htmlParser from '@soeyu/dev-template-parser'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    //htmlParser(),
    Components({
      extensions: ['vue'],
      dts: true, // enabled by default if `typescript` is installed
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: true,
      dirs: ['./src/composables'],
      vueTemplate: true,
    }),
    Unocss({
      presets: [presetAttributify(), presetUno(), presetIcons()],
      transformers: [transformerDirectives(), transformerVariantGroup()],
    }),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
