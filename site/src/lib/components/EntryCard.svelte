<script lang="ts">
	import { base } from '$app/paths';
	import type { EntrySummary } from '$lib/content';
	import TopicChips from './TopicChips.svelte';
	import TagList from './TagList.svelte';
	import { formatDate } from '$lib/format';

	let { entry, showTakeaways = true }: { entry: EntrySummary; showTakeaways?: boolean } = $props();
</script>

<article class="border-b border-zinc-200 py-6 first:pt-0 last:border-b-0 dark:border-zinc-800">
	<div class="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-zinc-500 dark:text-zinc-400">
		<time datetime={entry.date}>{formatDate(entry.date)}</time>
		<TopicChips topics={entry.topics} />
	</div>
	<h2 class="mt-1.5 text-xl leading-snug font-semibold tracking-tight">
		<a href="{base}/journal/{entry.slug}" class="hover:underline">{entry.title}</a>
	</h2>
	{#if entry.summary}
		<p class="mt-1.5 text-zinc-700 dark:text-zinc-300">{entry.summary}</p>
	{/if}
	{#if showTakeaways && entry.takeawaysHtml}
		<div class="prose prose-sm prose-zinc mt-3 max-w-none dark:prose-invert prose-li:my-0.5">
			{@html entry.takeawaysHtml}
		</div>
	{/if}
	{#if entry.tags.length}
		<div class="mt-3 flex flex-wrap gap-x-2 gap-y-1"><TagList tags={entry.tags} /></div>
	{/if}
</article>
