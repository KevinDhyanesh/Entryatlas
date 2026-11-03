import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['3000-ik7w9jxmraugrllrzz7u5-e3759303.sg2.manus.computer'],
  },
})
