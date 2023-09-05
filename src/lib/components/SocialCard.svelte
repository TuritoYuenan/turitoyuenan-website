<script lang="ts">
	/** @type {string} Platform name */
	export let name: string = 'Example';
	/** @type {string} Platform website */
	export let href: string = 'https://example.com';
	/** @type {string} The account's username */
	export let username: string = '@User';

	/** @type {string} Platform icon image source */
	let src: string = `/logos/${name.toLowerCase()}.svg`;
</script>

<!-- @component Card for displaying an account on a specific website
To be used in the Connect page to showcase Social accounts -->

<a {href} rel="noreferrer noopener" target="_blank">
	<img {src} alt="{name} icon" data-sveltekit-preload-data/>
	<h4>{name}</h4>
	<p>{username}</p>
</a>

<style>
	img {
		height: 3em;
	}

	a {
		display: block;
		padding: 1rem;
		background: var(--ctp-macchiato-mantle);
		transition: var(--default-transition);
		border-radius: 0.5rem;
		color: inherit;

		&:hover {
			background-color: var(--ctp-macchiato-surface0);
			text-decoration: none;
		}
	}
</style>
