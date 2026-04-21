<script lang="ts">
	let { data } = $props();
</script>

<div class="mx-auto max-w-3xl px-6 py-20">
	<h1 class="text-3xl font-semibold tracking-tight text-surface-50 mb-2" style="letter-spacing: -0.02em;">Blog</h1>
	<p class="text-surface-500 mb-10">Tous les articles</p>

	{#if data.posts.length === 0}
		<p class="text-surface-600 text-sm">Pas encore d'articles. Ça arrive.</p>
	{:else}
		<div class="space-y-4">
			{#each data.posts as post}
				<a href="/blog/{post.slug}" class="block group">
					<article class="border border-surface-700 rounded-lg p-5 hover:border-surface-600 transition-colors">
						<div class="flex items-start justify-between gap-4">
							<div>
								<h2 class="text-surface-100 font-medium group-hover:text-primary-400 transition-colors">{post.title}</h2>
								<p class="text-sm text-surface-500 mt-1">{post.description}</p>
							</div>
							{#if post.date}
								<time class="text-xs text-surface-600 whitespace-nowrap font-code">{post.date}</time>
							{/if}
						</div>
						{#if post.tags?.length}
							<div class="flex gap-2 mt-3">
								{#each post.tags as tag}
									<span class="text-[10px] px-2 py-0.5 rounded-full bg-surface-800 text-surface-400 font-code">{tag}</span>
								{/each}
							</div>
						{/if}
					</article>
				</a>
			{/each}
		</div>
	{/if}
</div>
