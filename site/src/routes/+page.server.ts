import { getPage } from '$lib/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => getPage(1);
