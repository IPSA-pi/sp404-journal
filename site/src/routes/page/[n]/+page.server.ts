import { error } from '@sveltejs/kit';
import { getPage, pageCount } from '$lib/content';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () =>
	Array.from({ length: Math.max(0, pageCount() - 1) }, (_, i) => ({ n: String(i + 2) }));

export const load: PageServerLoad = ({ params }) => {
	const n = Number(params.n);
	if (!Number.isInteger(n) || n < 2 || n > pageCount()) error(404, 'No such page');
	return getPage(n);
};
