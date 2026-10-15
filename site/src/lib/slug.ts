/** URL/anchor slug: lowercase ASCII letters, digits and hyphens. */
export function slugify(s: string): string {
	return (
		s
			.toLowerCase()
			.normalize('NFKD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/<[^>]*>/g, '')
			.replace(/&[a-z0-9#]+;/g, '')
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-+|-+$/g, '') || 'section'
	);
}
