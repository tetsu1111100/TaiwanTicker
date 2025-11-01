import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
  
  server: {
    // 您的開發端口
    port: 5173,

    // 開發伺服器配置 (它只在您的開發模式下有效，不會影響最終的部署) 
    // 快速解決本地開發的 CORS 問題
    proxy: {
      // ----------------------------------------------------
      // 規則 A: 臺灣證券交易所 OpenAPI
      // ----------------------------------------------------
      '/api/twse': {
        target: 'https://openapi.twse.com.tw',  //目標 API 的基礎網址
        changeOrigin: true, // 必須設置，讓目標伺服器認為請求來自其自身

        // 重寫路徑 
        // e.g. /api/twse/v1/opendata/t187ap03_L 會被轉換成 /v1/opendata/t187ap03_L
        // e.g. 若設定為path.replace(/^\/api\/twse/, '/v1/opendata')，則/api/twse/xxx 轉發到 /v1/opendata/xxx
        rewrite: (path) => path.replace(/^\/api\/twse/, ''),  

        // 目標是 HTTPS，通常保持 true
        secure: true  
      },

      // ----------------------------------------------------
      // 規則 B: 將你的另一個 Open Source API設定在這
      // ----------------------------------------------------
      // 'api/other': { ... }
    }
  }
})
