import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
  ],
  server: {
    proxy: {
      '^/api': {
        target: 'https://mobile.xiyou.edu.cn/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
})
