import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex({ extension: '.md' })],
	kit: {
		adapter: adapter(),
		alias: {
			'$components': 'src/lib/components/',
			'$styles': 'src/lib/styles'
		}
	}
};

export default config;
