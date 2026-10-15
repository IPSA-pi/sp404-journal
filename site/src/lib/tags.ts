import { slugify } from './slug.ts';

/** URL slug for a tag (shared by the content loader and the client components). */
export function slugifyTag(tag: string): string {
	return slugify(tag.toLowerCase());
}
