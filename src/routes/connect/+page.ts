import { workAccounts, casualAccounts, blogAccounts } from "$lib/socialAccounts";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return { workAccounts, casualAccounts, blogAccounts };
}
