import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd()) 

  return defineConfig({
    plugins: [react()],
    optimizeDeps: {
      include: ['swiper'], // Explicitly include Swiper
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, '/api'), // Optional: remove or adjust "/api"
        },
      },
    },
  })
}
