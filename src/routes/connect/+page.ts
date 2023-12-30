import { workProfiles, casualProfiles, blogSites } from '$lib/social-profiles';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return { workProfiles, casualProfiles, blogSites };
}
