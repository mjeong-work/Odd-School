import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/feat/react-migration/',
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    strictPort: true
    // allowedHosts는 미리보기에는 필요 없음. dev 쓸 때만 다시 넣자.
  },
})
