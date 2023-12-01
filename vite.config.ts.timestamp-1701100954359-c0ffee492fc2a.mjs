// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///C:/Users/Alex/Desktop/front-projects/createx-ecom/app/node_modules/.pnpm/vite@4.3.8/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/Alex/Desktop/front-projects/createx-ecom/app/node_modules/.pnpm/@vitejs+plugin-vue@4.2.3_vite@4.3.8+vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import autoImport from "file:///C:/Users/Alex/Desktop/front-projects/createx-ecom/app/node_modules/.pnpm/unplugin-auto-import@0.16.1/node_modules/unplugin-auto-import/dist/vite.js";
import svgLoader from "file:///C:/Users/Alex/Desktop/front-projects/createx-ecom/app/node_modules/.pnpm/vite-svg-loader@4.0.0/node_modules/vite-svg-loader/index.js";
import cssImport from "file:///C:/Users/Alex/Desktop/front-projects/createx-ecom/app/node_modules/.pnpm/postcss-import@15.1.0_postcss@8.4.23/node_modules/postcss-import/index.js";
import cssNested from "file:///C:/Users/Alex/Desktop/front-projects/createx-ecom/app/node_modules/.pnpm/postcss-nested@6.0.1_postcss@8.4.23/node_modules/postcss-nested/index.js";
import cssSimpleVars from "file:///C:/Users/Alex/Desktop/front-projects/createx-ecom/app/node_modules/.pnpm/postcss-simple-vars@7.0.1_postcss@8.4.23/node_modules/postcss-simple-vars/index.js";
import cssMixins from "file:///C:/Users/Alex/Desktop/front-projects/createx-ecom/app/node_modules/.pnpm/postcss-mixins@9.0.4_postcss@8.4.23/node_modules/postcss-mixins/index.js";
var __vite_injected_original_dirname = "C:\\Users\\Alex\\Desktop\\front-projects\\createx-ecom\\app";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      // @ts-ignore
      "~": path.resolve(__vite_injected_original_dirname, "src"),
      // @ts-ignore
      "~css": path.resolve(__vite_injected_original_dirname, "src", "assets", "css")
    }
  },
  plugins: [
    autoImport({
      include: [
        /\.[jt]sx?$/,
        /\.vue$/
      ],
      dts: "./auto-imports.d.ts",
      injectAtEnd: true,
      imports: [
        "vue",
        "vue-router"
      ],
      dirs: [
        "./src/composables",
        "./src/stores",
        "./src/utils"
      ]
    }),
    vue({
      script: {
        defineModel: true
      }
    }),
    svgLoader()
  ],
  css: {
    postcss: {
      plugins: [
        cssImport,
        cssNested,
        cssSimpleVars,
        cssMixins
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBbGV4XFxcXERlc2t0b3BcXFxcZnJvbnQtcHJvamVjdHNcXFxcY3JlYXRleC1lY29tXFxcXGFwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQWxleFxcXFxEZXNrdG9wXFxcXGZyb250LXByb2plY3RzXFxcXGNyZWF0ZXgtZWNvbVxcXFxhcHBcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0FsZXgvRGVza3RvcC9mcm9udC1wcm9qZWN0cy9jcmVhdGV4LWVjb20vYXBwL3ZpdGUuY29uZmlnLnRzXCI7Ly8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5cclxuaW1wb3J0IGF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcclxuaW1wb3J0IHN2Z0xvYWRlciBmcm9tICd2aXRlLXN2Zy1sb2FkZXInXHJcblxyXG5cclxuXHJcbi8vIHBvc3Rjc3NcclxuaW1wb3J0IGNzc0ltcG9ydCBmcm9tICdwb3N0Y3NzLWltcG9ydCdcclxuaW1wb3J0IGNzc05lc3RlZCBmcm9tICdwb3N0Y3NzLW5lc3RlZCdcclxuaW1wb3J0IGNzc1NpbXBsZVZhcnMgZnJvbSAncG9zdGNzcy1zaW1wbGUtdmFycydcclxuaW1wb3J0IGNzc01peGlucyBmcm9tICdwb3N0Y3NzLW1peGlucydcclxuXHJcblxyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICd+JzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICd+Y3NzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycsICdhc3NldHMnLCAnY3NzJyksXHJcbiAgICB9XHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICBhdXRvSW1wb3J0KHtcclxuICAgICAgaW5jbHVkZTogW1xyXG4gICAgICAgIC9cXC5banRdc3g/JC8sXHJcbiAgICAgICAgL1xcLnZ1ZSQvLFxyXG4gICAgICBdLFxyXG4gICAgICBkdHM6ICcuL2F1dG8taW1wb3J0cy5kLnRzJyxcclxuICAgICAgaW5qZWN0QXRFbmQ6IHRydWUsXHJcbiAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICBcInZ1ZVwiLFxyXG4gICAgICAgIFwidnVlLXJvdXRlclwiLFxyXG4gICAgICBdLFxyXG4gICAgICBkaXJzOiBbXHJcbiAgICAgICAgJy4vc3JjL2NvbXBvc2FibGVzJyxcclxuICAgICAgICAnLi9zcmMvc3RvcmVzJyxcclxuICAgICAgICAnLi9zcmMvdXRpbHMnLFxyXG4gICAgICBdLFxyXG4gICAgfSksXHJcbiAgICB2dWUoe1xyXG4gICAgICBzY3JpcHQ6IHtcclxuICAgICAgICBkZWZpbmVNb2RlbDogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBzdmdMb2FkZXIoKSxcclxuICBdLFxyXG5cclxuICBjc3M6IHtcclxuICAgIHBvc3Rjc3M6IHtcclxuICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgIGNzc0ltcG9ydCxcclxuICAgICAgICBjc3NOZXN0ZWQsXHJcbiAgICAgICAgY3NzU2ltcGxlVmFycyxcclxuICAgICAgICBjc3NNaXhpbnMsXHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLE9BQU8sVUFBVTtBQUNqQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFFaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxlQUFlO0FBS3RCLE9BQU8sZUFBZTtBQUN0QixPQUFPLGVBQWU7QUFDdEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxlQUFlO0FBZHRCLElBQU0sbUNBQW1DO0FBbUJ6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUE7QUFBQSxNQUVMLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQTtBQUFBLE1BRWxDLFFBQVEsS0FBSyxRQUFRLGtDQUFXLE9BQU8sVUFBVSxLQUFLO0FBQUEsSUFDeEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxXQUFXO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsTUFDTCxhQUFhO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLE1BQ0YsUUFBUTtBQUFBLFFBQ04sYUFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFVBQVU7QUFBQSxFQUNaO0FBQUEsRUFFQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
