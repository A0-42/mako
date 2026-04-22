import { getAllPosts } from '$lib/utils/content';

export async function load() {
	return {
		posts: getAllPosts(),
		title: null,
	};
}
