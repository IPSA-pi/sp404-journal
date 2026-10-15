<script lang="ts">
	import EntryList from '$lib/components/EntryList.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head><title>Journal, page {data.page} · SP-404MKII notes</title></svelte:head>

<EntryList {...data} />
