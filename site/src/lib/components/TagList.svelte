<script lang="ts">
	import { base } from '$app/paths';
	import { slugifyTag } from '$lib/tags';

	let { tags }: { tags: string[] } = $props();
</script>

{#each tags as tag (tag)}
	<a
		href="{base}/tags/{slugifyTag(tag)}"
		class="inline-block font-mono text-xs text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
		>#{tag}</a
	>
{/each}
