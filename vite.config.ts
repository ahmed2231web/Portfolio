import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Handle missing optimization plugins gracefully
let visualizer: any;
let compression: any;

try {
  // These plugins will be installed via npm/yarn after the package.json update
  visualizer = require("rollup-plugin-visualizer").visualizer;
  compression = require("vite-plugin-compression").default;
} catch (e) {
  console.log("Optimization plugins not found. Run 'npm run optimize' to install them.");
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Create the plugins array with required plugins
  const plugins: any[] = [
    react(),
    mode === 'development' && componentTagger(),
  ];
  
  // Only add optimization plugins if available
  if (mode === 'production') {
    if (visualizer) {
      plugins.push(
        visualizer({
          filename: 'stats.html',
          open: false,
          gzipSize: true,
        })
      );
    }
    
    if (compression) {
      plugins.push(
        compression({
          algorithm: 'gzip',
          ext: '.gz',
        })
      );
      
      plugins.push(
        compression({
          algorithm: 'brotliCompress',
          ext: '.br',
        })
      );
    }
  }
  
  return {
    server: {
      host: "::",
      port: 8080,
      // Improve HMR performance
      hmr: {
        overlay: true,
      },
    },
    plugins: plugins.filter(Boolean),
    
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    
    // Optimization settings for build
    build: {
      // Generate smaller chunks
      chunkSizeWarningLimit: 1000,
      cssCodeSplit: true,
      sourcemap: mode !== 'production',
      
      // Minification options
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: mode === 'production',
          drop_debugger: mode === 'production',
        },
      },
      
      // Output directory configuration
      outDir: 'dist',
      assetsDir: 'assets',
      
      // Improve build performance for large projects
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            animations: ['framer-motion'],
          },
        },
      },
    },
    
    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
      exclude: ['lovable-tagger'],
    },
  };
});
