<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let query = $state('');
	let group = $state<number | null>(null);

	onMount(() => {
		const q = new URLSearchParams(location.search).get('q');
		if (q) query = q;
	});

	let terms = $derived(
		query
			.toLowerCase()
			.replace(/[[\]]/g, ' ')
			.split(/\s+/)
			.filter(Boolean)
	);
	let visible = $derived(
		data.rows.filter((r) => (group === null || r.group === group) && terms.every((t) => r.search.includes(t)))
	);
	let byGroup = $derived(
		data.groups
			.map((g, i) => ({ ...g, index: i, rows: visible.filter((r) => r.group === i) }))
			.filter((g) => g.rows.length > 0)
	);
</script>

<svelte:head><title>Shortcuts · SP-404MKII notes</title></svelte:head>

<h1 class="text-2xl font-bold tracking-tight sm:text-3xl">Shortcuts</h1>
<p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
	{data.intro}
	From the reference manual (Ver. 5.50){#if data.sourceUrl}, <a class="text-orange-700 underline dark:text-orange-400" href={data.sourceUrl} rel="external noopener">List of shortcut keys &nearr;</a>{/if}.
</p>

{#if data.rows.length === 0}
	<p class="mt-6 rounded-lg border border-dashed border-zinc-300 p-6 text-center text-zinc-500 dark:border-zinc-700">
		The shortcut list could not be read from the manual mirror (<code>docs/reference-manual-v5.50.md</code>).
	</p>
{:else}
	<div class="sticky top-14 z-20 -mx-4 mt-4 space-y-2 border-b border-zinc-200 bg-white/95 px-4 py-3 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95">
		<input
			type="search"
			bind:value={query}
			placeholder="Filter, e.g. shift 14, roll, mute, bpm"
			aria-label="Filter shortcuts"
			class="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-base outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 dark:border-zinc-700 dark:bg-zinc-900"
		/>
		<div class="flex gap-1.5 overflow-x-auto pb-0.5 text-xs whitespace-nowrap">
			<button
				type="button"
				class="rounded-full px-2.5 py-1 {group === null ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900' : 'bg-zinc-100 dark:bg-zinc-900'}"
				onclick={() => (group = null)}>All</button
			>
			{#each data.groups as g, i (i)}
				<button
					type="button"
					class="rounded-full px-2.5 py-1 {group === i ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900' : 'bg-zinc-100 dark:bg-zinc-900'}"
					onclick={() => (group = group === i ? null : i)}>{g.title}</button
				>
			{/each}
		</div>
		<p class="text-xs text-zinc-500" aria-live="polite">{visible.length} of {data.rows.length} shortcuts</p>
	</div>

	{#if visible.length === 0}
		<p class="mt-6 text-center text-zinc-500">No shortcut matches &ldquo;{query}&rdquo;.</p>
	{/if}

	<table class="mt-2 w-full border-collapse text-sm max-sm:block">
		<thead class="max-sm:hidden">
			<tr class="text-left text-xs tracking-wider text-zinc-500 uppercase">
				<th class="w-[34%] py-2 pr-3 font-semibold">Keys</th>
				<th class="w-[18%] py-2 pr-3 font-semibold">Function</th>
				<th class="py-2 font-semibold">What it does</th>
			</tr>
		</thead>
		{#each byGroup as g (g.index)}
			<tbody class="max-sm:block">
				<tr class="max-sm:block">
					<th colspan="3" class="bg-zinc-50 px-2 py-2 text-left text-sm font-semibold max-sm:block dark:bg-zinc-900">
						{g.title}
						{#if g.url}<a href={g.url} rel="external noopener" class="ml-1 text-xs font-normal text-orange-700 hover:underline dark:text-orange-400">manual &nearr;</a>{/if}
					</th>
				</tr>
				{#each g.rows as r, j (j)}
					<tr class="border-b border-zinc-100 align-top max-sm:block max-sm:py-2.5 dark:border-zinc-800">
						<td class="py-2 pr-3 leading-7 max-sm:block max-sm:py-0">
							{#if r.holdHtml}{@html r.holdHtml} <span class="text-zinc-400">+</span>{/if}
							{@html r.operationHtml}
						</td>
						<td class="py-2 pr-3 font-medium max-sm:block max-sm:py-0.5 max-sm:text-orange-800 sm:text-xs dark:max-sm:text-orange-300">{r.functionName}</td>
						<td class="py-2 text-zinc-700 max-sm:block max-sm:py-0 dark:text-zinc-300">{@html r.explanationHtml}</td>
					</tr>
				{/each}
			</tbody>
		{/each}
	</table>
{/if}
