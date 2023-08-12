<script>
	import Parallax from '$lib/components/Parallax.svelte';
	import TwoColumns from '$lib/components/TwoColumns.svelte';

	import { menu } from '$lib/index.js';
	const titles = Array.from(menu, (x) => x.text);
	const links = Array.from(menu, (x) => x.href);
</script>

<Parallax />
<article>
	<section style="text-align: center;">
		<h1>Introduction</h1>
		<p>
			I am a curious university student from Vietnam with an interest in Computer Science, Fiction
			Worldbuilding and the Solarpunk movement
		</p>
	</section>
	<TwoColumns --heading-color=#ed8796
		title={titles[0]}
		href={links[0]}
		image_src='/icons/articles.svg'>
		<p>I sometimes write blogs, articles about various topics</p>
	</TwoColumns>
	<TwoColumns --heading-color=#f5a97f
		reversed=true
		title={titles[1]}
		href={links[1]}
		image_src='/icons/projects.svg'>
		<p>Showcases of my projects</p>
	</TwoColumns>
	<TwoColumns --heading-color=#a6da95
		title={titles[2]}
		href={links[2]}
		image_src='/icons/contacts.svg'>
		<p>Let's keep in touch. I am available on many social media</p>
	</TwoColumns>
	<TwoColumns --heading-color=#8aadf4
		reversed=true
		title={titles[3]}
		href={links[3]}
		image_src='/icons/cv.svg'>
		<p>My Curriculum Vitae for job purposes</p>
	</TwoColumns>
</article>

<!--
<style lang="scss">
	@use '$lib/styles/macchiato' as *;
	@use '$lib/styles/grid' as *;

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
-->
