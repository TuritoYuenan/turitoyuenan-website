<script>
	import Parallax from "$lib/components/Parallax.svelte";
</script>

<Parallax/>
<article>
	<div>
		<h1>Introduction</h1>
		<p>
			I am Turito Yuenan, a curious university student from Vietnam.
			I have an interest in Computer Science, Fiction Worldbuilding and the Solarpunk movement
		</p>
	</div>
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

		margin: 1em;
		font-weight: bold;
		font-size: x-large;

		a {
			padding: 1rem;
			color: $base;
			
			&:hover {background: $text;}

			&:nth-child(1) {background: $red;}
			&:nth-child(2) {background: $peach;}
			&:nth-child(3) {background: $green;}
			&:nth-child(4) {background: $blue;}
		}
	}
</style>
