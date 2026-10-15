import { error } from '@sveltejs/kit';
import { getTopic, getTopics } from '$lib/content';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => getTopics().map((t) => ({ topic: t.key }));

export const load: PageServerLoad = ({ params }) => {
	const topic = getTopic(params.topic);
	if (!topic) error(404, 'No such topic');
	const all = getTopics();
	const i = all.indexOf(topic);
	const link = (t: (typeof all)[number] | undefined) => (t ? { key: t.key, title: t.title } : null);
	return { topic, prev: link(all[i - 1]), next: link(all[i + 1]) };
};
