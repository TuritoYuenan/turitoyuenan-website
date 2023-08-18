<script>
	import { page } from '$app/stores';
	export let menu = ['Entry', 'Entry', 'Entry', 'Entry'];

	$: path = $page.url.pathname;
	const mac = (color) => `var(--ctp-macchiato-${color})`;
</script>

<!-- @component The top navigation bar -->
<nav>
	<a href="/" id="wordmark">
		<img src="/wordmark.svg" alt="Turito Yuenan" />
	</a>
	<div>
		{#each menu as { accent, name, href }}
			<a {href} style:color={mac(accent)} class:active={path === href}>{name}</a>
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

			&:hover {
				background: var(--ctp-macchiato-base);
			}
			&.active {
				border-bottom: 3pt solid currentColor;
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
