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
        // 'FooterApp': 'https://naveen-vite-footer.netlify.app/assets/footerremoteentry.js',
        'HeaderApp': 'https://vite-application-header-1icoy0lvz-naveenchandars-projects.vercel.app/assets/headerRemoteEntry.js',
        // 'MainContentApp': 'https://naveen-vite-maincontent.netlify.app/assets/maincontentremoteentry.js',
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
  },
  server: {
    proxy: {
      'https://vite-application-header-1icoy0lvz-naveenchandars-projects.vercel.app/assets': {
        target: 'production', // choose your way of using environment variables.
        secure: false,
        changeOrigin: true,
      },
      // '^/your-second-remote-provider/assets': {
      //   target: process.env.YOUR_SECOND_REMOTE_PROVIDER,
      //   secure: false,
      //   changeOrigin: true,
      // },
    },
  },
  preview: {
    cors: true
  }
})
