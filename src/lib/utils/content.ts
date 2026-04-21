import { slugify } from './slugify';

export interface PostMeta {
	title: string;
	slug: string;
	description: string;
	date: string;
	tags?: string[];
}

/** Parse simple YAML frontmatter from raw markdown */
function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
	const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
	if (!match) return { meta: {}, body: raw };

	const meta: Record<string, string> = {};
	for (const line of match[1].split('\n')) {
		const idx = line.indexOf(':');
		if (idx > 0) {
			const key = line.slice(0, idx).trim();
			let val = line.slice(idx + 1).trim();
			if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
				val = val.slice(1, -1);
			}
			meta[key] = val;
		}
	}

	return { meta, body: match[2] };
}

function slugFromPath(path: string): string {
	return (path.split('/').pop() || '').replace(/\.md$/, '');
}

// Eagerly load raw content for metadata (listing pages)
const rawModules = import.meta.glob('/src/content/*.md', {
	eager: true,
	query: '?raw',
	import: 'default',
}) as Record<string, string>;

export function getAllPosts(): PostMeta[] {
	const posts: PostMeta[] = [];

	for (const [path, raw] of Object.entries(rawModules)) {
		const { meta } = parseFrontmatter(raw);

		if (meta.published === 'false') continue;

		posts.push({
			title: meta.title || slugFromPath(path),
			slug: slugFromPath(path),
			description: meta.description || '',
			date: meta.date || '',
			tags: meta.tags ? meta.tags.split(',').map((t) => t.trim()) : [],
		});
	}

	return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostMeta(slug: string): { meta: Record<string, string>; body: string } | null {
	const path = `/src/content/${slug}.md`;
	const raw = rawModules[path];
	if (!raw) return null;
	return parseFrontmatter(raw);
}

// Lazy-load mdsvex components for full rendering
const mdComponents = import.meta.glob('/src/content/*.md');

export async function getPostComponent(slug: string) {
	const path = `/src/content/${slug}.md`;
	const mod = await mdComponents[path]();
	return (mod as any).default;
}
