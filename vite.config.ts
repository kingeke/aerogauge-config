import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import config from './src/config.ts'

/** Publishes src/config.ts as /config.json (dev server and build). */
function configJson(): Plugin {
  const json = () => JSON.stringify(config, null, 2) + '\n'
  return {
    name: 'aerogauge-config-json',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.split('?')[0].endsWith('/config.json')) {
          res.setHeader('Content-Type', 'application/json')
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.end(json())
          return
        }
        next()
      })
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'config.json', source: json() })
    },
  }
}

// Served from https://kingeke.github.io/aerogauge-config/
export default defineConfig({
  base: '/aerogauge-config/',
  plugins: [react(), configJson()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        privacy: resolve(import.meta.dirname, 'privacy/index.html'),
      },
    },
  },
})
