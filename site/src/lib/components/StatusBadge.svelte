<script lang="ts">
	import type { FactStatus } from '$lib/content';

	let { status }: { status: FactStatus | null } = $props();

	const styles: Record<string, string> = {
		manual: 'bg-sky-100 text-sky-800 ring-sky-200 dark:bg-sky-950 dark:text-sky-300 dark:ring-sky-900',
		verified: 'bg-emerald-100 text-emerald-800 ring-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:ring-emerald-900',
		unverified: 'bg-amber-100 text-amber-800 ring-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:ring-amber-900',
		none: 'bg-zinc-100 text-zinc-600 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:ring-zinc-800'
	};
	const titles: Record<string, string> = {
		manual: 'Quoted from the Roland manual',
		verified: 'Confirmed on my unit',
		unverified: "Claude's inference, not yet checked",
		none: 'No provenance recorded'
	};
	let key = $derived(status ?? 'none');
</script>

<span
	class="inline-flex items-center rounded px-1.5 py-px text-[0.7rem] font-semibold tracking-wide uppercase ring-1 ring-inset {styles[key]}"
	title={titles[key]}>{status ?? 'no source'}</span
>
