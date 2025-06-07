import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/fonts': path.resolve(__dirname, './assets/fonts'),
      '@bg': path.resolve(__dirname, './assets/images/bg.jpg')
    }
  }
})
