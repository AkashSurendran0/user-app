import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'userApp',
      filename:'remoteEntry.js',
      exposes:{
        './User':'./src/components/userPage.jsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
})
