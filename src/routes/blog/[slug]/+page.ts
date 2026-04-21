import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	// Dynamic import of the mdsvex component
	const postModules = import.meta.glob('/src/content/*.md');
	const path = `/src/content/${data.slug}.md`;

	if (!postModules[path]) {
		throw new Error(`Post not found: ${data.slug}`);
	}

	const mod = await postModules[path]();
	return {
		...data,
		PostComponent: (mod as any).default,
	};
};
