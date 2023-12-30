// List of my social accounts

interface SocialProfile {
	username: string;
	platform: string;
	website: string;
}

const workProfiles: SocialProfile[] = [
	{
		platform: 'Github',
		website: 'github.com',
		username: 'TuritoYuenan'
	},
	{
		platform: 'LinkedIn',
		website: 'linkedin.com',
		username: 'in/trietntm-cs'
	},
	{
		platform: 'LeetCode',
		website: 'leetcode.com',
		username: 'TuritoYuenan'
	},
	{
		platform: 'Replit',
		website: 'replit.com',
		username: '@TuritoYuenan'
	}
];

const casualProfiles: SocialProfile[] = [
	{
		platform: 'Facebook',
		website: 'facebook.com',
		username: 'TuritoYuenan'
	},
	{
		platform: 'Pinterest',
		website: 'pinterest.com',
		username: 'TuritoYuenan'
	},
	{
		platform: 'Reddit',
		website: 'reddit.com',
		username: 'u/LeaderTurito'
	},
	{
		platform: 'Twitter',
		website: 'twitter.com',
		username: 'TuritoYuenan'
	}
];

const blogSites: SocialProfile[] = [
	{
		platform: 'Tumblr',
		website: 'tumblr.com',
		username: 'turitoyuenan'
	}
];

export { workProfiles, casualProfiles, blogSites, type SocialProfile };
