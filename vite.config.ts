/// <reference types="vite/client" />
/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./vitest.setup.ts'],
		css: true,
	},
	css: {
		transformer: 'lightningcss',
	},
	build: {
		cssMinify: 'lightningcss',
	},
});
