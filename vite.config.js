import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@/fonts': path.resolve(__dirname, './assets/fonts'),
      '@bg': path.resolve(__dirname, './assets/images/bg.jpg')
    }
  }
})
