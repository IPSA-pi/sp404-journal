import { error } from '@sveltejs/kit';
import { getEntriesByTag, getTags, toSummary } from '$lib/content';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => getTags().map((t) => ({ tag: t.slug }));

export const load: PageServerLoad = ({ params }) => {
	const info = getTags().find((t) => t.slug === params.tag);
	if (!info) error(404, 'No entries with that tag');
	return { tag: info.tag, entries: getEntriesByTag(info.slug).map(toSummary), tags: getTags() };
};
