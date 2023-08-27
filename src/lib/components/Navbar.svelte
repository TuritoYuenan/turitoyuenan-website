<script>
	import { page } from '$app/stores';
	/**
	 * Underline the active entry
	 */
	$: path = $page.url.pathname;

	const mac = (color) => `var(--ctp-macchiato-${color})`;
	export let menu = [];
</script>

<!-- @component The top navigation bar -->
<nav>
	<a href="/" id="wordmark">
		<img src="/wordmark.svg" alt="Turito Yuenan" />
	</a>
	<div>
		{#each menu as { color, name, href }}
			<a {href} style:color={mac(color)} class:active={path === href}>{name}</a>
		{/each}
	</div>
</nav>

<style lang="scss">
	nav {
		padding: 1rem;
		background: var(--ctp-macchiato-mantle);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		overflow: hidden;

		img {
			height: 3em;
			border-radius: 0.5em;
			&:hover {
				filter: drop-shadow(0 0 5px var(--ctp-macchiato-peach));
			}
		}
	}

	div {
		display: flex;
		flex-wrap: wrap;
		width: fit-content;
		a {
			padding: 0.5rem;
			border-bottom: 3pt solid transparent;
			transition: var(--default-transition);

			&:hover {
				background: var(--ctp-macchiato-surface0);
			}
			&.active {
				border-bottom-color: currentColor;
			}
		}
	}

	@media (max-width: 700px) {
		nav {
			flex-direction: column;
			gap: 0.5rem;
		}

		div {
			width: 100%;
			justify-content: space-between;
		}
	}
</style>
