// @ts-ignore
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import autoImport from 'unplugin-auto-import/vite'



// postcss
import cssImport from 'postcss-import'
import cssNested from 'postcss-nested'
import cssSimpleVars from 'postcss-simple-vars'
import cssMixins from 'postcss-mixins'



// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // @ts-ignore
      '~': path.resolve(__dirname, 'src'),
      // @ts-ignore
      '~css': path.resolve(__dirname, 'src', 'assets', 'css'),
    }
  },
  plugins: [
    autoImport({
      include: [
        /\.[jt]sx?$/,
        /\.vue$/,
      ],
      dts: './auto-imports.d.ts',
      injectAtEnd: true,
      imports: [
        "vue",
        "vue-router",
      ],
      dirs: [
        './src/composables',
        './src/stores',
        './src/utils',
      ],
    }),
    vue({
      script: {
        defineModel: true
      },
    }),
  ],

  css: {
    postcss: {
      plugins: [
        cssImport,
        cssNested,
        cssSimpleVars,
        cssMixins,
      ]
    },
  },
})
