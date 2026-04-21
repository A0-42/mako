<script lang="ts">
	import { Navbar, Footer } from '$lib/components/layout';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Mako — Dev Blog</title>
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Navbar />
	<main class="flex-1 pt-12">
		{@render children()}
	</main>
	<Footer />
</div>
