<script lang="ts">
	import type { EntrySummary } from '$lib/content';
	import EntryCard from './EntryCard.svelte';
	import Pagination from './Pagination.svelte';

	let { entries, page, pages, total }: { entries: EntrySummary[]; page: number; pages: number; total: number } =
		$props();
</script>

<div class="mx-auto max-w-3xl">
	<h1 class="sr-only">Journal</h1>
	<p class="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
		{total} subject{total === 1 ? '' : 's'} discussed, newest first.
	</p>
	{#if entries.length === 0}
		<p class="rounded-lg border border-dashed border-zinc-300 p-6 text-center text-zinc-500 dark:border-zinc-700">
			No journal entries yet. They appear here after a session is logged with <code>/log</code>.
		</p>
	{:else}
		{#each entries as entry (entry.slug)}
			<EntryCard {entry} />
		{/each}
	{/if}
	<Pagination {page} {pages} />
</div>
