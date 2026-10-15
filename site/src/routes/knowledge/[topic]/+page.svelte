<script lang="ts">
	import { base } from '$app/paths';
	import TopicBlocks from '$lib/components/TopicBlocks.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let topic = $derived(data.topic);
</script>

<svelte:head><title>{topic.title} · SP-404MKII notes</title></svelte:head>

<div class="mx-auto max-w-3xl" data-pagefind-body>
	<p class="text-sm text-zinc-500" data-pagefind-ignore>
		<a href="{base}/knowledge" class="hover:underline">Knowledge</a> &middot; {topic.factCount} fact{topic.factCount === 1 ? '' : 's'}
	</p>
	<h1 class="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">{topic.title}</h1>
	{#if topic.description}<p class="mt-2 text-zinc-600 dark:text-zinc-400">{topic.description}</p>{/if}

	{#if topic.sections.length > 1}
		<nav class="mt-4 flex flex-wrap gap-1.5 text-sm" aria-label="Sections" data-pagefind-ignore>
			{#each topic.sections as s (s.id)}
				<a href="#{s.id}" class="rounded-full bg-zinc-100 px-2.5 py-1 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800">{@html s.titleHtml}</a>
			{/each}
		</nav>
	{/if}

	<TopicBlocks blocks={topic.intro} />

	{#each topic.fullSections as s (s.id)}
		<section class="mt-8">
			<h2 id={s.id} class="text-lg font-semibold tracking-tight">
				<a href="#{s.id}" class="hover:underline">{@html s.titleHtml}</a>
			</h2>
			<TopicBlocks blocks={s.blocks} />
		</section>
	{/each}

	{#if topic.factCount === 0 && topic.intro.length === 0}
		<p class="mt-6 rounded-lg border border-dashed border-zinc-300 p-6 text-center text-zinc-500 dark:border-zinc-700">
			Nothing learned about this topic yet.
		</p>
	{/if}
</div>

<nav class="mx-auto mt-10 flex max-w-3xl justify-between gap-3 border-t border-zinc-200 pt-6 text-sm dark:border-zinc-800" aria-label="Topics">
	{#if data.prev}<a class="hover:underline" href="{base}/knowledge/{data.prev.key}">&larr; {data.prev.title}</a>{:else}<span></span>{/if}
	{#if data.next}<a class="text-right hover:underline" href="{base}/knowledge/{data.next.key}">{data.next.title} &rarr;</a>{/if}
</nav>
