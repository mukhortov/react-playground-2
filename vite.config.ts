import { PluginOption, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSettingCssModule from 'vite-plugin-setting-css-module'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginSettingCssModule() as PluginOption],
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]_[local]',
    },
  },
})
