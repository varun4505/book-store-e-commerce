import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5001,
    proxy: {
      '/api': {
        target: 'https://book-app-backend-tawny.vercel.app',
        changeOrigin: true,
        secure: false
      }
    }
  },
  assetsInclude: ['**/*.png'],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]'
      }
    }
  }
})
