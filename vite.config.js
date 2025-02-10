import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ['js-big-decimal']
  },
  server: {
    host: '0.0.0.0', // Allow access from outside
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173, // Use PORT env variable or default to 5173
  }
})