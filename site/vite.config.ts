import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, type Plugin } from 'vite';
import { loadContent, contentRoot } from './src/lib/content.ts';
import { loadShortcuts } from './src/lib/shortcuts.ts';

/**
 * Validates content/ once before the build starts, so a malformed entry fails
 * `npm run build` with the file name instead of a generic prerender error.
 */
let validated = false;

function validateContent(): Plugin {
	return {
		name: 'sp404-validate-content',
		apply: 'build',
		buildStart() {
			if (validated) return; // once per build, not once per Vite environment
			validated = true;
			const c = loadContent();
			const s = loadShortcuts();
			this.info?.(
				`content: ${c.entries.length} entries, ${c.topics.length} topics from ${contentRoot()}; ${s.rows.length} shortcuts`
			);
		}
	};
}

export default defineConfig({
	plugins: [validateContent(), tailwindcss(), sveltekit()]
});
