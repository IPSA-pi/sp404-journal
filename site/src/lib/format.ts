/** "2026-10-13" -> "13 Oct 2026" (timezone-independent). */
export function formatDate(iso: string): string {
	const [y, m, d] = iso.split('-').map(Number);
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	if (!y || !m || !d) return iso;
	return `${d} ${months[m - 1]} ${y}`;
}
