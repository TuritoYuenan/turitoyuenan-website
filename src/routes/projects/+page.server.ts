import type { PageServerLoad } from './$types';
import { XataClient } from '$lib/xata';

const xata = new XataClient({
	apiKey: import.meta.env.VITE_XATA_API_KEY,
	branch: import.meta.env.VITE_XATA_BRANCH
});

export const load: PageServerLoad = async () => {
	const projects = await xata.db.projects.getAll();
	return { projects };
};
