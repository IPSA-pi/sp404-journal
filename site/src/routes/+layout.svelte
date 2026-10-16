<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
	import { page } from '$app/state';

	let { children } = $props();

	const nav = [
		{ href: '/', label: 'Journal', match: (p: string) => p === '/' || p.startsWith('/journal') || p.startsWith('/page') || p.startsWith('/tags') },
		{ href: '/knowledge', label: 'Knowledge', match: (p: string) => p.startsWith('/knowledge') }
	];
	const secondary = [
		{ href: '/shortcuts', label: 'Shortcuts' },
		{ href: '/search', label: 'Search' }
	];

	let pathname = $derived(page.url.pathname.slice(base.length) || '/');
</script>

<svelte:head>
	<title>SP-404MKII notes</title>
	<link rel="alternate" type="application/rss+xml" title="SP-404MKII notes" href="{base}/feed.xml" />
</svelte:head>

<header
	class="sticky top-0 z-30 border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90"
>
	<div class="mx-auto flex h-14 max-w-5xl items-center gap-3 px-4">
		<a href="{base}/" class="flex shrink-0 items-center gap-2 font-semibold tracking-tight">
			<img src="{base}/favicon.svg" alt="" class="h-6 w-6" />
			<span class="max-sm:sr-only">SP-404MKII notes</span>
		</a>
		<nav class="flex flex-1 items-center gap-1 text-sm" aria-label="Main">
			{#each nav as item (item.href)}
				<a
					href="{base}{item.href}"
					class="rounded-md px-2.5 py-1.5 font-medium {item.match(pathname)
						? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
						: 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'}"
					aria-current={item.match(pathname) ? 'page' : undefined}>{item.label}</a
				>
			{/each}
			<span class="flex-1"></span>
			{#each secondary as item (item.href)}
				<a
					href="{base}{item.href}"
					class="rounded-md px-2 py-1.5 {pathname.startsWith(item.href)
						? 'text-zinc-900 underline underline-offset-4 dark:text-white'
						: 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'}"
					aria-current={pathname.startsWith(item.href) ? 'page' : undefined}>{item.label}</a
				>
			{/each}
		</nav>
	</div>
</header>

<main class="mx-auto max-w-5xl px-4 pt-6 pb-16">
	{@render children()}
</main>

<footer class="border-t border-zinc-200 py-6 text-center text-xs text-zinc-500 dark:border-zinc-800">
	Notes from Claude Code sessions about the Roland SP-404MKII. Manual excerpts &copy; Roland.
	<a href="{base}/feed.xml" class="ml-1 underline hover:text-zinc-700 dark:hover:text-zinc-300">RSS feed</a>
</footer>
