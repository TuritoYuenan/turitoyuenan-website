<script>
	import Parallax from "$lib/components/Parallax.svelte";
</script>

<Parallax/>
<article>
	<h1>Introduction</h1>
	<p>
		I am Turito Yuenan, a curious university student from Vietnam with an interest in Computer
		Science, Fiction Worldbuilding and the Solarpunk movement
	</p>
	<div class="grid">
		<a href="/articles">Articles</a>
		<a href="/projects">Projects</a>
		<a href="/contacts">Contacts</a>
		<a href="/crrvitae">CV</a>
	</div>
</article>

<style lang="scss">
	@use '$lib/macchiato' as *;
	@use '$lib/variables' as *;

	article {
		text-align: center;

		h1 {
			font-size: 3em;
			font-variant: small-caps;
		}
	}

	div.grid {
		@include r-grid(200px, 1fr);
		gap: 1rem;

		margin: 1em;

		a {
			padding: 1rem;
			background: $mantle;
			border-radius: 1rem;
		}
	}
</style>
