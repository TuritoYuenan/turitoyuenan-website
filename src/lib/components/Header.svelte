<script>
	import { menu } from '$lib/index.js';
</script>

<header>
	<a href="/" id="wordmark">
		<img src="/wordmark.svg" alt="Turito Yuenan" />
	</a>
	<nav>
		{#each menu as { href, text }}<a {href}>{text}</a>{/each}
	</nav>
</header>

<style lang="scss">
	@use '$lib/styles/macchiato' as *;

	header {
		padding: 1rem;
		background: $mantle;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		overflow: hidden;

		img {
			height: 3em;
			border-radius: 0.5em;
			&:hover { filter: drop-shadow(0 0 10px $peach); }
		}
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		width: fit-content;
		a {
			padding: 1rem .5rem;
			&:nth-child(1) {color: $red;}
			&:nth-child(2) {color: $peach;}
			&:nth-child(3) {color: $green;}
			&:nth-child(4) {color: $blue;}
			&:hover {background: $base;}
		}
	}

	@media (max-width: 700px) {
		header {
			flex-direction: column;
			gap: 1rem;
		}

		nav {
			justify-content: space-around;
		}
	}
</style>
