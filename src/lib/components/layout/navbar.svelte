<script lang="ts">
	import { page } from '$app/state';
</script>

<nav class="fixed top-0 left-0 right-0 z-50 border-b border-surface-700" style="background: oklch(0.18 0 0 / 0.85); backdrop-filter: blur(16px);">
	<div class="mx-auto max-w-xl px-6 flex items-center justify-between h-12">
		<a href="/" class="font-mono text-xs tracking-wider text-surface-300-700 hover:text-primary-400 transition-colors duration-300">
			マコ
		</a>
		<div class="flex items-center gap-5">
			<a href="/blog" class="font-mono text-[11px] tracking-wide transition-colors duration-300 {page.url.pathname.startsWith('/blog') ? 'text-surface-100-900' : 'text-surface-400-600 hover:text-surface-200-800'}">
				BLOG
			</a>
			<a href="/about" class="font-mono text-[11px] tracking-wide transition-colors duration-300 {page.url.pathname === '/about' ? 'text-surface-100-900' : 'text-surface-400-600 hover:text-surface-200-800'}">
				ABOUT
			</a>
		</div>
	</div>
</nav>
