<script lang="ts">
	import { base } from '$app/paths';
	import type { TopicBlock } from '$lib/content';
	import StatusBadge from './StatusBadge.svelte';
	import { formatDate } from '$lib/format';

	let { blocks }: { blocks: TopicBlock[] } = $props();
	const prose = 'prose prose-zinc max-w-none dark:prose-invert prose-a:text-orange-700 dark:prose-a:text-orange-400';
</script>

{#each blocks as block, i (i)}
	{#if block.kind === 'html'}
		<div class="{prose} my-3">{@html block.html}</div>
	{:else}
		<ul class="my-3 space-y-3">
			{#each block.facts as fact, j (j)}
				{@const pv = fact.provenance}
				<li class="rounded-lg border border-zinc-200 px-3.5 py-2.5 dark:border-zinc-800">
					<div class="{prose} prose-p:my-1 prose-ul:my-1">{@html fact.html}</div>
					<p class="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400" data-pagefind-ignore>
						<StatusBadge status={pv?.status ?? null} />
						{#if pv?.learned}<span>learned <time datetime={pv.learned}>{formatDate(pv.learned)}</time></span>{/if}
						{#if pv?.entry}
							<span
								>from {#if pv.entryTitle}<a class="underline decoration-zinc-300 underline-offset-2 hover:text-zinc-900 dark:decoration-zinc-600 dark:hover:text-white" href="{base}/journal/{pv.entry}"
										>{pv.entryTitle}</a
									>{:else}<span class="font-mono">{pv.entry}</span>{/if}</span
							>
						{/if}
						{#if pv?.manual}
							<a href={pv.manual} rel="external noopener" class="text-orange-700 hover:underline dark:text-orange-400">manual &nearr;</a>
						{/if}
					</p>
				</li>
			{/each}
		</ul>
	{/if}
{/each}
