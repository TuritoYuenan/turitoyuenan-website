<script>
	const menu = [
		{ href: '/articles', text: 'Articles' },
		{ href: '/projects', text: 'Projects' },
		{ href: '/contacts', text: 'Contacts' },
		{ href: '/crrvitae', text: 'CV' }
	];
</script>

<header>
	<a href="/">
		<img src="/wordmark.svg" alt="Wordmark" />
		<span>Turito Yuenan</span>
	</a>
	<nav>
		{#each menu as { href, text }}<a {href}>{text}</a>{/each}
	</nav>
</header>

<style lang="scss">
	@use '$lib/macchiato' as *;

	header {
		padding: 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		img {
			height: 100%;
			border-radius: 0.5em;
		}

		img:hover {
			filter: drop-shadow(0 0 10px $peach);
		}

		span {
			opacity: 0;
			overflow: hidden;
		}
	}

	nav {
		display: flex;
		align-items: center;

		a {
			padding: 1rem;

			&:nth-child(1):hover {background: $red;}
			&:nth-child(2):hover {background: $peach;}
			&:nth-child(3):hover {background: $green;}
			&:nth-child(4):hover {background: $blue;}
		}

		a:hover {
			background: $green;
			color: $base;
		}
	}
</style>
