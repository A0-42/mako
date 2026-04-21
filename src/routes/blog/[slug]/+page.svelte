<script lang="ts">
	let { data } = $props();
</script>

<div class="mx-auto max-w-3xl px-6 py-20">
	<!-- Post header -->
	<header class="mb-10">
		<a href="/blog" class="text-sm text-surface-500 hover:text-surface-300 transition-colors mb-4 inline-block">← Blog</a>
		<h1 class="text-3xl sm:text-4xl font-semibold tracking-tight text-surface-50 mb-3" style="letter-spacing: -0.03em;">
			{data.meta.title}
		</h1>
		<div class="flex items-center gap-3">
			{#if data.meta.date}
				<time class="text-sm text-surface-500 font-code">{data.meta.date}</time>
			{/if}
			{#if data.meta.tags}
				{#each data.meta.tags.split(',').map((t: string) => t.trim()) as tag}
					<span class="text-[10px] px-2 py-0.5 rounded-full bg-surface-800 text-surface-400 font-code">{tag}</span>
				{/each}
			{/if}
		</div>
	</header>

	<!-- Post content (mdsvex rendered) -->
	<article class="prose">
		<data.PostComponent />
	</article>
</div>
