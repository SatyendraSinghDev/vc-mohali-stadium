import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      styles: '/src/styles',
      components: '/src/components',
      hooks: '/src/hooks',
      services: '/src/services',
      app: '/src/app',
      features: '/src/features',
      routes: '/src/routes',
      views: '/src/views',
      constants: '/src/constants',
    },
  },
})
