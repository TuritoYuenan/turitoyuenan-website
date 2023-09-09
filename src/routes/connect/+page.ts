import { workAccounts, casualAccounts, blogAccounts } from "$lib/social-accounts";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return { workAccounts, casualAccounts, blogAccounts };
}
