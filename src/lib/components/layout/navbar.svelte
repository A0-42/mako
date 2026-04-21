<script lang="ts">
	import { page } from '$app/state';
</script>

<nav class="fixed top-0 left-0 right-0 z-50 border-b frost" style="background: rgba(0,0,0,0.8); backdrop-filter: blur(16px);">
	<div class="mx-auto max-w-xl px-6 flex items-center justify-between h-12">
		<a href="/" class="font-mono text-xs tracking-wider text-white/50 hover:text-[#00e5ff] transition-colors duration-300">
			マコ
		</a>

		<div class="flex items-center gap-5">
			<a href="/blog" class="font-mono text-[11px] tracking-wide transition-colors duration-300 {page.url.pathname.startsWith('/blog') ? 'text-white/70' : 'text-white/30 hover:text-white/60'}">
				BLOG
			</a>
			<a href="/about" class="font-mono text-[11px] tracking-wide transition-colors duration-300 {page.url.pathname === '/about' ? 'text-white/70' : 'text-white/30 hover:text-white/60'}">
				ABOUT
			</a>
		</div>
	</div>
</nav>
