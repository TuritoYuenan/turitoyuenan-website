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
		overflow: hidden;

		img {
			height: 3em;
			border-radius: 0.5em;
			&:hover { filter: drop-shadow(0 0 10px $peach); }
		}

		a {
			align-items: center;
			float: left;
		}
	}

	nav {
		float: right;
		a {
			padding: 1rem .5rem;
			&:nth-child(1) {color: $red;}
			&:nth-child(2) {color: $peach;}
			&:nth-child(3) {color: $green;}
			&:nth-child(4) {color: $blue;}
			&:hover {background: $mantle;}
		}
	}

	@media (max-width: 600px) {
		header a {float: none; display: block;}
		nav {float: none;}
	}
</style>
