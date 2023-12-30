<script lang="ts">
	import type { SocialProfile } from '$lib/social-profiles';

	export let account: SocialProfile = {
		username: '@User6561',
		platform: 'Example',
		website: 'example.com'
	};

	/** Link to the account */
	const href: string = `https://${account.website}/${account.username}`;
	/** Platform icon image source */
	const src: string = `/logos/${account.platform.toLowerCase()}.svg`;
</script>

<!-- @component Card for displaying an account on a specific website
To be used in the Connect page to showcase Social accounts -->

<a {href} rel="noreferrer noopener" target="_blank">
	<img {src} alt="{account.platform} icon" data-sveltekit-preload-data />
	<div>
		<h4>{account.platform}</h4>
		<p>{account.username}</p>
	</div>
</a>

<style lang="scss">
	img {
		height: 3em;
	}

	a {
		padding: 1rem;
		background: var(--ctp-macchiato-mantle);
		transition: var(--default-transition);
		border-radius: 0.5rem;
		color: inherit;

		display: flex;
		align-items: center;
		gap: 1rem;

		&:hover {
			background: var(--ctp-macchiato-surface0);
			text-decoration: none;
		}
	}
</style>
