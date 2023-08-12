import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const scssGlobal = `@use '$lib/styles/macchiato' as *;`;

export default defineConfig({
	plugins: [sveltekit()],
	css: { preprocessorOptions: { scss: { additionalData: scssGlobal } } }
});
