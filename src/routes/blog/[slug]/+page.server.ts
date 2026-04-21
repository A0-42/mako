import { getAllPosts, getPostMeta } from '$lib/utils/content';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const postData = getPostMeta(params.slug);
	if (!postData) throw error(404, 'Article non trouvé');

	return {
		slug: params.slug,
		meta: postData.meta,
	};
};

export const entries = async () => {
	return getAllPosts().map((post) => ({ slug: post.slug }));
};
