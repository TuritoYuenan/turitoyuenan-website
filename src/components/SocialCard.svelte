<!-- @component Card for displaying an account on a specific website.
To be used in the Connect page to showcase Social accounts -->

<script lang="ts">
	import type { SocialProfile } from '$lib/social-profiles';

	export let profile: SocialProfile = {
		username: '@User6561',
		platform: 'Example',
		website: 'example.com'
	};

	/** Link to the account */
	const href: string = `https://${profile.website}/${profile.username}`;
	/** Platform icon image source */
	const src: string = `/logos/${profile.platform.toLowerCase()}.svg`;
</script>

<a {href} rel="noreferrer noopener" target="_blank">
	<img {src} alt="{profile.platform} icon" data-sveltekit-preload-data />
	<div>
		<p class="platform">{profile.platform}</p>
		<p class="username">{profile.username}</p>
	</div>
</a>

<style>
	a {
		padding: 0 1rem;
		border-radius: 0.5rem;
		background: var(--ctp-macchiato-base);
		transition: var(--default-transition);
		color: inherit;

		gap: 1rem;
		display: flex;
		align-items: center;

		&:hover {
			scale: 1.1;
		}

		&:active {
			scale: 1;
		}
	}

	img {
		width: auto;
		height: 3em;
		aspect-ratio: 1 / 1;
	}

	p.platform {
		margin-block: 1rem 0.5rem;
		font-weight: bold;
	}
</style>
