import { getTopics } from '$lib/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
	topics: getTopics().map(({ key, title, description, factCount, sections, file }) => ({
		key,
		title,
		description,
		factCount,
		sections,
		hasFile: file !== null
	}))
});
