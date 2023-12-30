import cloudflare from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [vitePreprocess()],
	kit: {
		adapter: cloudflare(),
		alias: {
			'$components': 'src/components/',
			'$styles': 'src/styles'
		}
	}
};

export default config;
