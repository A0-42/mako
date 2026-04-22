<script lang="ts">
	let { data } = $props();
</script>

<div class="mx-auto max-w-xl px-6 pt-28 pb-16">
	<p class="font-mono text-[10px] tracking-[0.2em] text-surface-400-600 mb-2">/blog</p>
	<h1 class="text-lg text-surface-100-900 tracking-tight mb-10" style="letter-spacing: -0.02em; font-weight: 400;">
		Tous les articles
	</h1>
	<div class="border-t border-surface-700 mb-10"></div>
	{#if data.posts.length === 0}
		<p class="font-mono text-xs text-surface-400-600">Pas encore d'articles.</p>
{:else}
		<div class="space-y-8">
			{#each data.posts as post}
				<a href="/blog/{post.slug}" class="group block">
					<div class="flex items-baseline gap-4">
						<time class="font-mono text-[11px] text-surface-500-500 whitespace-nowrap shrink-0 group-hover:text-primary-400 transition-colors duration-300">
							{post.date ? post.date.slice(2).replace(/-/g, '.') : '—'}
						</time>
						<div class="min-w-0">
							<h2 class="text-sm font-medium text-surface-200-800 group-hover:text-surface-50 transition-colors duration-300 tracking-tight">
								{post.title}
							</h2>
							<p class="text-xs text-surface-500-500 mt-0.5">{post.description}</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</div>
