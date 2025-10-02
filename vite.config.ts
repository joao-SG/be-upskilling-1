import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: {
        cli: './src/cli.ts',
        server: './src/index.ts'
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`
    },
    rollupOptions: {
      external: ['fs', 'path', 'process', 'express']
    }
  }
});
