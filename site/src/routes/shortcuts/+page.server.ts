import { loadShortcuts } from '$lib/shortcuts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const { sourceUrl, intro, groups, rows } = loadShortcuts();
	return { sourceUrl, intro, groups, rows };
};
