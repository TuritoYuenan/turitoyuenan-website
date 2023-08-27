<script>
	/** @type {String} Platform name */
	export let name = 'Example';
	/** @type {String} Platform website */
	export let href = 'https://example.com';
	/** @type {String} Account's username */
	export let username = '@User';

	/** @type {String} Platform icon image source */
	let src = `/logos/${name.toLowerCase()}.svg`;
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
		}
	}
</style>
