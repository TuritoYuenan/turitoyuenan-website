<script>
	const title = `Triet's Curriculum Vitae`;
	const src = `https://drive.google.com/file/d/1ZdrqAAYJ8mUP1uIBY4aJyyjxVVpSXprH/preview`;
</script>

<article>
	<h1>My CV</h1>
	<section><iframe {src} {title} /></section>
</article>

<style lang="scss">
	@use '$styles/macchiato' as *;

	h1 {
		text-align: center;
	}

	section {
		height: 70vh;
		margin: 1rem 0;
		padding: 1rem;
		border-radius: 1rem;
		background: $mantle;
	}

	iframe {
		width: 100%;
		height: 100%;
		border: none;
	}
</style>
