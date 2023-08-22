<script>
	import Metadata from '../lib/components/Metadata.svelte';
	import Entry from '../lib/components/Entry.svelte';
	import { entries } from '../lib/menu.js';
</script>

<Metadata title="Homepage" />

<section id="parallax">
	<h1>Turito Yuenan</h1>
	<p>Curious CS Student</p>
</section>
<article>
	<section id="introduction">
		<h2>👋 Salutations</h2>
		<p>
			I am a university student from Vietnam, currently studying
			Computer Science.
		</p>
		<p>I also have an interest in Natural science, Linguistics and Art.</p>
	</section>
	{#each entries as { accent, name, href, desc }, i}
		{@const flip = (i + 1) % 2 === 0}
		<Entry {href} {flip} title={name} color="var(--ctp-macchiato-{accent})">
			{desc}
		</Entry>
	{/each}
</article>

<style lang="scss">
	section#introduction {
		margin: 2rem 1rem 0 1rem;
		padding: 1rem;
		background: var(--ctp-macchiato-mantle);
		border-radius: 2rem;
		text-align: center;
	}

	section#parallax {
		--tint-color: rgba(var(--ctp-macchiato-base-raw), 0.5);
		--tint: linear-gradient(0deg, var(--tint-color), var(--tint-color));

		min-height: 60vh;
		padding: 1rem;
		color: var(--ctp-macchiato-yellow);
		text-align: center;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		background: {
			image: var(--tint), url(/wallpaper.jpg);
			attachment: fixed;
			position: center;
			repeat: no-repeat;
			size: cover;
		}

		h1 {
			font-size: clamp(4rem, 10vw, 7rem);
			font-variant: small-caps;
		}

		p {
			font-weight: bold;
			font-size: clamp(2rem, 3vw, 4rem);
		}
	}
</style>
