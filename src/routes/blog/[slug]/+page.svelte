<script lang="ts">
	let { data } = $props();
</script>

<div class="mx-auto max-w-xl px-6 pt-28 pb-16">
	<header class="mb-12">
		<a href="/blog" class="font-mono text-[10px] tracking-wider text-surface-500 hover:text-[#00e5ff] transition-colors duration-300">← RETOUR</a>
		<div class="mt-8">
			<time class="font-mono text-[11px] text-surface-500">
				{data.meta.date ? data.meta.date.slice(2).replace(/-/g, '.') : ''}
			</time>
			<h1 class="text-xl sm:text-2xl text-surface-50 mt-3 tracking-tight" style="letter-spacing: -0.03em; font-weight: 500;">
				{data.meta.title}
			</h1>
		</div>
	</header>
	<div class="border-t border-surface-700 mb-10"></div>
	<article class="prose">
		<data.PostComponent />
	</article>
</div>
