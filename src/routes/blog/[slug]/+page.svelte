<script lang="ts">
	let { data } = $props();
</script>

<div class="mx-auto max-w-xl px-6 pt-28 pb-16">
	<!-- Back + meta -->
	<header class="mb-12">
		<a href="/blog" class="font-mono text-[10px] tracking-wider text-white/20 hover:text-[#00e5ff]/40 transition-colors duration-300">← RETOUR</a>
		
		<div class="mt-8">
			<time class="font-mono text-[11px] text-white/20">
				{data.meta.date ? data.meta.date.slice(2).replace(/-/g, '.') : ''}
			</time>
			<h1 class="text-xl sm:text-2xl font-light text-white/90 mt-3 tracking-tight" style="letter-spacing: -0.03em; font-weight: 400;">
				{data.meta.title}
			</h1>
		</div>
	</header>

	<div class="border-t frost mb-10"></div>

	<!-- Content -->
	<article class="prose">
		<data.PostComponent />
	</article>
</div>
