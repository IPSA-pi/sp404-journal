import { error } from '@sveltejs/kit';
import { getEntries, getEntry, getEntryContext } from '$lib/content';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => getEntries().map((e) => ({ slug: e.slug }));

export const load: PageServerLoad = ({ params }) => {
	const entry = getEntry(params.slug);
	if (!entry) error(404, 'No such journal entry');
	return { entry, ...getEntryContext(entry.slug) };
};
