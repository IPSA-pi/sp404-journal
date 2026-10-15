<script lang="ts">
	import { base } from '$app/paths';
	import EntryCard from '$lib/components/EntryCard.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head><title>#{data.tag} · SP-404MKII notes</title></svelte:head>

<div class="mx-auto max-w-3xl">
	<h1 class="text-2xl font-bold tracking-tight"><span class="font-mono text-zinc-400">#</span>{data.tag}</h1>
	<p class="mt-1 mb-6 text-sm text-zinc-500">
		{data.entries.length} entr{data.entries.length === 1 ? 'y' : 'ies'}
	</p>
	{#each data.entries as entry (entry.slug)}
		<EntryCard {entry} showTakeaways={false} />
	{/each}

	<h2 class="mt-10 mb-2 text-xs font-semibold tracking-wider text-zinc-500 uppercase">All tags</h2>
	<div class="flex flex-wrap gap-x-3 gap-y-1 font-mono text-sm">
		{#each data.tags as t (t.slug)}
			<a
				href="{base}/tags/{t.slug}"
				class={t.tag === data.tag ? 'font-semibold' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'}
				>#{t.tag}<sup class="ml-0.5 text-zinc-400">{t.count}</sup></a
			>
		{/each}
	</div>
</div>
