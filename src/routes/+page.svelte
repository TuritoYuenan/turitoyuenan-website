<script>
	import { variants } from '@catppuccin/palette';
	import { menu } from '$lib/index.js';
	import Entry from '$lib/components/Entry.svelte';

	const colors = [
		variants.macchiato.red,
		variants.macchiato.peach,
		variants.macchiato.green,
		variants.macchiato.blue
	];
</script>

<section id="parallax">
	<h1>Turito Yuenan</h1>
	<h2>Curious CS Student</h2>
</section>
<article>
	{#each menu as { text, href, desc }, i}
		{@const flip = (i + 1) % 2 === 0}
		<Entry {href} {flip} title={text} color={colors[i].hex}>{desc}</Entry>
	{/each}
	<section style="padding: 1rem; text-align: center;">
		<p>Hello. I am a curious university student from Vietnam.</p>
		<p>
			I study Computer Science, but also have an interest in Natural Science, Linguistics and Art.
		</p>
	</section>
</article>

<style lang="scss">
	@use '$lib/styles/macchiato' as *;
	$tint: transparentize($base, 0.5);
	$wallpaper: url(/wallpaper.jpg);

	section#parallax {
		min-height: 60vh;
		padding: 1rem;
		color: $yellow;
		text-align: center;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		background: {
			image: linear-gradient(0deg, $tint, $tint), $wallpaper;
			attachment: fixed;
			position: center;
			repeat: no-repeat;
			size: cover;
		}

		h1 {
			font-size: 10vh;
			font-variant: small-caps;
		}
	}
</style>
