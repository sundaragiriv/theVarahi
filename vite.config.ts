import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Module-scoped so we can read PORT without pulling in @types/node.
declare const process: { env: Record<string, string | undefined> };

// Claude Code and most CI runners hand the dev server a free port via PORT.
// Locally there is no PORT, so Vite keeps its own default (5173).
const devPort = Number(process.env.PORT) || undefined;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Optimize bundle size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react'],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Only enable source maps in development (security: don't expose code structure in production)
    sourcemap: mode !== 'production',
  },
  // Optimize dev server
  server: {
    port: devPort,
    hmr: {
      overlay: false,
    },
  },
}));
