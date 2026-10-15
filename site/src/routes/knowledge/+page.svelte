<script lang="ts">
	import { base } from '$app/paths';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let total = $derived(data.topics.reduce((n, t) => n + t.factCount, 0));
</script>

<svelte:head><title>Knowledge · SP-404MKII notes</title></svelte:head>

<h1 class="text-2xl font-bold tracking-tight sm:text-3xl">Knowledge</h1>
<p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
	Everything learned so far, by topic &mdash; {total} fact{total === 1 ? '' : 's'} in {data.topics.length} topic{data.topics.length === 1 ? '' : 's'}.
</p>

{#if data.topics.length === 0}
	<p class="mt-6 rounded-lg border border-dashed border-zinc-300 p-6 text-center text-zinc-500 dark:border-zinc-700">
		No topics yet. Topics are listed in <code>content/knowledge/_topics.yaml</code>.
	</p>
{:else}
	<div class="mt-4 lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-10">
		<nav
			aria-label="Topics"
			class="sticky top-14 z-20 -mx-4 border-b border-zinc-200 bg-white/95 px-4 py-2 backdrop-blur lg:top-20 lg:mx-0 lg:self-start lg:border-0 lg:bg-transparent lg:p-0 dark:border-zinc-800 dark:bg-zinc-950/95 lg:dark:bg-transparent"
		>
			<h2 class="mb-2 text-xs font-semibold tracking-wider text-zinc-500 uppercase max-lg:sr-only">Contents</h2>
			<ul class="flex gap-1.5 overflow-x-auto text-sm whitespace-nowrap lg:flex-col lg:gap-0.5 lg:whitespace-normal">
				{#each data.topics as t (t.key)}
					<li>
						<a
							href="#topic-{t.key}"
							class="block rounded-full bg-zinc-100 px-2.5 py-1 hover:bg-zinc-200 lg:rounded-md lg:bg-transparent lg:px-2 dark:bg-zinc-900 dark:hover:bg-zinc-800 lg:dark:bg-transparent"
							>{t.title} <span class="text-xs text-zinc-400">{t.factCount}</span></a
						>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="mt-6 space-y-8 lg:mt-0">
			{#each data.topics as t (t.key)}
				<section id="topic-{t.key}" class="scroll-mt-28 lg:scroll-mt-20">
					<h2 class="text-xl font-semibold tracking-tight">
						<a href="{base}/knowledge/{t.key}" class="hover:underline">{t.title}</a>
						<span class="ml-1 text-sm font-normal text-zinc-400">{t.factCount} fact{t.factCount === 1 ? '' : 's'}</span>
					</h2>
					{#if t.description}<p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{t.description}</p>{/if}
					{#if t.sections.length}
						<ul class="mt-3 divide-y divide-zinc-100 rounded-lg border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
							{#each t.sections as s (s.id)}
								<li>
									<a href="{base}/knowledge/{t.key}#{s.id}" class="flex items-baseline justify-between gap-3 px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-900">
										<span>{@html s.titleHtml}</span>
										<span class="shrink-0 text-xs text-zinc-400">{s.factCount}</span>
									</a>
								</li>
							{/each}
						</ul>
					{:else}
						<p class="mt-2 text-sm text-zinc-400 italic">Nothing learned here yet.</p>
					{/if}
				</section>
			{/each}
		</div>
	</div>
{/if}
