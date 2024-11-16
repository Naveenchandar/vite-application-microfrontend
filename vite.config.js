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
        'FooterApp': 'https://naveen-vite-footer.netlify.app/assets/footerremoteentry.js',
        'HeaderApp': 'https://naveen-vite-applicationh.netlify.app/assets/headerremoteentry.js',
        'MainContentApp': 'https://naveen-vite-maincontent.netlify.app/assets/maincontentremoteentry.js',
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
