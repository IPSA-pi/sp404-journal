import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({ pages: 'build', assets: 'build', fallback: undefined, strict: true }),
		paths: { base: process.env.BASE_PATH ?? '' },
		prerender: {
			handleHttpError: 'fail',
			handleMissingId: 'fail',
			// With little or no content some dynamic routes (e.g. /page/[n]) have no pages yet.
			handleUnseenRoutes: 'ignore'
		}
	}
};

export default config;
