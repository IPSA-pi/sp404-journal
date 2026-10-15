<script lang="ts">
	import { base } from '$app/paths';
	import type { TopicRef } from '$lib/content';

	let { topics }: { topics: TopicRef[] } = $props();
</script>

{#each topics as t (t.key)}
	<a
		href="{base}/knowledge/{t.key}"
		class="inline-block rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-900 hover:bg-orange-200 dark:bg-orange-950 dark:text-orange-200 dark:hover:bg-orange-900"
		>{t.title}</a
	>
{/each}
