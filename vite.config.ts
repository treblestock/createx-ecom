// @ts-ignore
import path from 'node:path'


import { defineConfig } from 'vite'
import VueMacros from 'unplugin-vue-macros/vite'
import vue from '@vitejs/plugin-vue'


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
      'css': path.resolve(__dirname, 'src', 'assets', 'css'),
    }
  },
  plugins: [
    VueMacros({
      plugins: {
        vue: vue(),
      }
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
