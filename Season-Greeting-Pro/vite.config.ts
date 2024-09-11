// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Season-Greeting-Pro/', // The name of your GitHub repository
  plugins: [react()]
})
