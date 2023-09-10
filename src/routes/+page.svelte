<script>
	import Metadata from '$components/Metadata.svelte';
	import Entry from '$components/Entry.svelte';
	import { entries } from '$lib/menu';
</script>

<Metadata title="Homepage" desc="Homepage" />

<section id="parallax">
	<h1>Turito Yuenan</h1>
	<p>Computer Science Freshman at Swinburne VN</p>
</section>
<article>
	<section id="introduction">
		<h2>👋 Salutations</h2>
		<p>
			I am a university student from Vietnam, currently studying Computer
			Science.
		</p>
		<p>I also have an interest in Natural science, Linguistics and Art.</p>
	</section>
	{#each entries as entry, i}
		{@const flip = (i + 1) % 2 === 0}
		<Entry data={entry} {flip} />
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
		min-height: 60vh;
		margin: 1rem;
		padding: 2rem;
		border-radius: 2rem;
		color: var(--ctp-macchiato-text);
		text-align: center;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		--tint-color: rgba(var(--ctp-macchiato-base-raw), 0.5);
		--tint: linear-gradient(0deg, var(--tint-color), var(--tint-color));

		background:
			var(--tint),
			url(/wallpaper.webp) no-repeat;
		background-size: cover;
		background-position-y: -60px;

		h1 {
			font-size: clamp(4rem, 10vw, 7rem);
		}

		p {
			margin: 0;
			font-size: 2rem;
		}
	}
</style>
