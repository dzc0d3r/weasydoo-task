import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    coverage: {
       include: ['src/componens/**/*']
    },
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname, 
      '~/': new URL('./', import.meta.url).pathname
    }
  },

})