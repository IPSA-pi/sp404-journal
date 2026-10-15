<script lang="ts">
	import { base } from '$app/paths';

	let { page, pages }: { page: number; pages: number } = $props();
	const href = (n: number) => (n === 1 ? `${base}/` : `${base}/page/${n}`);
</script>

{#if pages > 1}
	<nav class="mt-8 flex items-center justify-between text-sm" aria-label="Pagination">
		{#if page > 1}
			<a class="rounded-md border border-zinc-300 px-3 py-1.5 dark:border-zinc-700" href={href(page - 1)}>&larr; Newer</a>
		{:else}<span></span>{/if}
		<span class="text-zinc-500">Page {page} of {pages}</span>
		{#if page < pages}
			<a class="rounded-md border border-zinc-300 px-3 py-1.5 dark:border-zinc-700" href={href(page + 1)}>Older &rarr;</a>
		{:else}<span></span>{/if}
	</nav>
{/if}
