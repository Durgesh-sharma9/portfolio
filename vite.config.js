import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react() ,tailwindcss(),svgr()
    
  ],
  server: {
    host: '0.0.0.0',
    port: 3000
  }

})

