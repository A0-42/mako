<script lang="ts">
	import { Navbar, Footer } from '$lib/components/layout';
	import { page } from '$app/state';
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>{page.data.title ? `${page.data.title} — Mako` : 'Mako — Dev Blog'}</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Navbar />
	<main class="flex-1 pt-12">
		{@render children()}
	</main>
	<Footer />
</div>
