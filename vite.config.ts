// @ts-ignore
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import autoImport from 'unplugin-auto-import/vite'
import svgLoader from 'vite-svg-loader'




// postcss
import cssImport from 'postcss-import'
import cssNested from 'postcss-nested'
import cssSimpleVars from 'postcss-simple-vars'
import cssMixins from 'postcss-mixins'
import cssFunctionsPlugin from 'postcss-functions'
import * as cssCustomFunctions from './src/assets/css/functions'

/* 
  todo: 
  provide support scss inline comments in SFC
  (installed 'postcss-scss' parser and passed to parser options
  in postcss config. It works correct, but toggle comment creates 
  css block comment as before instead of many inline comments.)
*/  



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
    svgLoader(),
  ],

  css: {
    postcss: {
      plugins: [
        cssImport,
        cssNested,
        cssSimpleVars,
        cssFunctionsPlugin({
          functions: cssCustomFunctions,
        }),
        cssMixins,
      ],
    },
    modules: {
      localsConvention: 'camelCase'
    }
  },
})
