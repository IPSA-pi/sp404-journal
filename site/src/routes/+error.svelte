<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
</script>

<svelte:head><title>{page.status} · SP-404MKII notes</title></svelte:head>

<h1 class="text-2xl font-bold">{page.status}</h1>
<p class="mt-2 text-zinc-600 dark:text-zinc-400">{page.error?.message ?? 'Something went wrong.'}</p>
<p class="mt-4"><a class="underline" href="{base}/">Back to the journal</a></p>
