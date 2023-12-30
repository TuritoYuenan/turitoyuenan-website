<script lang="ts">
	import Metadata from '$components/Metadata.svelte';
	import Entry from '$components/Entry.svelte';
	import strings from '$lib/strings';
	import { entries } from '$lib/menu';
</script>

<Metadata title="Homepage" desc="Homepage" />

<section id="banner">
	<h1>{strings.heroTitle}</h1>
	<p>{strings.heroSubtitle}</p>
</section>
<article>
	<section id="introduction">
		<h2>{strings.introTitle}</h2>
		{#each strings.introSubtitle as line}
			<p>{line}</p>
		{/each}
	</section>
	{#each entries as entry, i}
		{@const flip = (i + 1) % 2 === 0}
		<Entry data={entry} {flip} />
	{/each}
</article>

<style>
	section#introduction {
		margin: 1rem;
		padding: 1rem;
		background: var(--ctp-frappe-mantle);
		border-radius: 2rem;
		text-align: center;

		& p {
			margin-inline: auto;
		}
	}

	section#banner {
		min-height: 60vh;
		padding: 2rem;
		text-align: center;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		--tint-color: #24273a80;
		--tint: linear-gradient(0deg, var(--tint-color), var(--tint-color));

		background: var(--tint), url(/wallpaper.webp);
		background-size: cover;
		background-repeat: no-repeat;
		background-position-y: -60px;

		& h1 {
			font-size: clamp(4rem, 10vw, 7rem);
		}

		& p {
			margin: 0;
			font-size: 2rem;
		}
	}
</style>
