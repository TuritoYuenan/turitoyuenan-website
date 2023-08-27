class SocialAccount {
	constructor(name, site, username) {
		this.name = name;
		this.href = 'https://' + site + username;
		this.username = username;
	}
}

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		work: [
			new SocialAccount('Github', 'github.com/', 'TuritoYuenan'),
			new SocialAccount('LinkedIn', 'linkedin.com/', 'in/trietntm-cs'),
			new SocialAccount('Replit', 'replit.com/', '@TuritoYuenan')
		],
		casual: [
			new SocialAccount('Facebook', 'facebook.com/', 'TuritoYuenan'),
			new SocialAccount('Pinterest', 'pinterest.com/', 'TuritoYuenan'),
			new SocialAccount('Reddit', 'reddit.com/', 'u/LeaderTurito'),
			new SocialAccount('Twitter', 'twitter.com/', 'TuritoYuenan')
		],
		blog: [new SocialAccount('Tumblr', 'turitoyuenan.tumblr.com/', '')]
	};
}
