// List of my social accounts

interface SocialAccount {
	username: string;
	platform: string;
	website: string;
}

const workAccounts: SocialAccount[] = [
	{
		platform: 'Github',
		website: 'www.github.com/',
		username: 'TuritoYuenan'
	},
	{
		platform: 'LinkedIn',
		website: 'www.linkedin.com/',
		username: 'in/trietntm-cs'
	},
	{
		platform: 'Replit',
		website: 'www.replit.com/',
		username: '@TuritoYuenan'
	}
];

const casualAccounts: SocialAccount[] = [
	{
		platform: 'Facebook',
		website: 'www.facebook.com/',
		username: 'TuritoYuenan'
	},
	{
		platform: 'Pinterest',
		website: 'www.pinterest.com/',
		username: 'TuritoYuenan'
	},
	{
		platform: 'Reddit',
		website: 'www.reddit.com/',
		username: 'u/LeaderTurito'
	},
	{
		platform: 'Twitter',
		website: 'www.twitter.com/',
		username: 'TuritoYuenan'
	}
];

const blogAccounts: SocialAccount[] = [
	{
		platform: 'Tumblr',
		website: 'tumblr.com',
		username: 'turitoyuenan'
	}
];

export { workAccounts, casualAccounts, blogAccounts, type SocialAccount };
