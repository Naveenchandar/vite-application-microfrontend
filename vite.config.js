import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'My-Application',
      remotes: {
        'FooterApp': 'http://localhost:4003/assets/footerRemoteEntry.js',
        'HeaderApp': 'http://localhost:4001/assets/headerRemoteEntry.js',
        'MainContentApp': 'http://localhost:4002/assets/mainContentRemoteEntry.js',
      },
      shared: {
        'react': {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        }
      }
    })
  ],
  build: {
    target: 'esnext' //browsers can handle the latest ES features
  },
  esbuild: {
    supported: {
      'top-level-await': true //browsers can handle top-level-await features
    }
  }
})
