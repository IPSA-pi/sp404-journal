<script lang="ts">
	import { base } from '$app/paths';
	import TopicChips from '$lib/components/TopicChips.svelte';
	import TagList from '$lib/components/TagList.svelte';
	import { formatDate } from '$lib/format';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let entry = $derived(data.entry);
</script>

<svelte:head>
	<title>{entry.title} · SP-404MKII notes</title>
	{#if entry.summary}<meta name="description" content={entry.summary} />{/if}
</svelte:head>

<div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem]">
	<article data-pagefind-body data-pagefind-meta="date:{entry.date}">
		<p class="text-sm text-zinc-500 dark:text-zinc-400">
			<a href="{base}/" class="hover:underline" data-pagefind-ignore>Journal</a>
			<span data-pagefind-ignore>&middot;</span>
			<time datetime={entry.date}>{formatDate(entry.date)}</time>
		</p>
		<h1 class="mt-1 text-2xl leading-tight font-bold tracking-tight sm:text-3xl">{entry.title}</h1>
		{#if entry.summary}
			<p class="mt-2 text-lg text-zinc-600 dark:text-zinc-400">{entry.summary}</p>
		{/if}
		<div
			class="prose prose-zinc mt-6 max-w-none dark:prose-invert prose-headings:scroll-mt-20 prose-h2:mt-8 prose-h2:text-xl prose-a:text-orange-700 dark:prose-a:text-orange-400"
		>
			{@html entry.bodyHtml}
		</div>
	</article>

	<aside class="space-y-6 text-sm lg:sticky lg:top-20 lg:self-start">
		{#if entry.topics.length}
			<section>
				<h2 class="mb-2 text-xs font-semibold tracking-wider text-zinc-500 uppercase">Topics</h2>
				<div class="flex flex-wrap gap-1.5"><TopicChips topics={entry.topics} /></div>
			</section>
		{/if}
		{#if entry.tags.length}
			<section>
				<h2 class="mb-2 text-xs font-semibold tracking-wider text-zinc-500 uppercase">Tags</h2>
				<div class="flex flex-wrap gap-x-2 gap-y-1"><TagList tags={entry.tags} /></div>
			</section>
		{/if}
		{#if entry.manualRefs.length}
			<section>
				<h2 class="mb-2 text-xs font-semibold tracking-wider text-zinc-500 uppercase">Manual</h2>
				<ul class="space-y-1.5">
					{#each entry.manualRefs as ref (ref.url)}
						<li>
							<a href={ref.url} class="text-orange-700 hover:underline dark:text-orange-400" rel="external noopener"
								>{ref.title} &nearr;</a
							>
						</li>
					{/each}
				</ul>
			</section>
		{/if}
		{#if entry.firmware || entry.session}
			<section>
				<h2 class="mb-2 text-xs font-semibold tracking-wider text-zinc-500 uppercase">Context</h2>
				<dl class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
					{#if entry.firmware}<dt class="text-zinc-500">Firmware</dt><dd>Ver. {entry.firmware}</dd>{/if}
					{#if entry.session}<dt class="text-zinc-500">Session</dt><dd class="font-mono">{entry.session}</dd>{/if}
				</dl>
			</section>
		{/if}
		{#if data.related.length}
			<section>
				<h2 class="mb-2 text-xs font-semibold tracking-wider text-zinc-500 uppercase">Related entries</h2>
				<ul class="space-y-2">
					{#each data.related as r (r.slug)}
						<li>
							<a href="{base}/journal/{r.slug}" class="hover:underline">{r.title}</a>
							<span class="block text-xs text-zinc-500">{formatDate(r.date)}</span>
						</li>
					{/each}
				</ul>
			</section>
		{/if}
	</aside>
</div>

<nav class="mt-10 grid gap-3 border-t border-zinc-200 pt-6 text-sm sm:grid-cols-2 dark:border-zinc-800" aria-label="Entries">
	{#if data.older}
		<a href="{base}/journal/{data.older.slug}" class="rounded-lg border border-zinc-200 p-3 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">
			<span class="block text-xs text-zinc-500">&larr; Previous</span>{data.older.title}
		</a>
	{:else}<span class="max-sm:hidden"></span>{/if}
	{#if data.newer}
		<a href="{base}/journal/{data.newer.slug}" class="rounded-lg border border-zinc-200 p-3 text-right hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">
			<span class="block text-xs text-zinc-500">Next &rarr;</span>{data.newer.title}
		</a>
	{/if}
</nav>
