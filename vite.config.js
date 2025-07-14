import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react() ,tailwindcss(),svgr()
    
  ],
    server: {
    host: true,       // Allow access via local IP (0.0.0.0)
    port: 5173,       // Or any port you prefer
    open: false       // Optional: prevent auto-opening browser
  }
 

})

