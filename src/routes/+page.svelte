<script lang="ts">
	import Metadata from '$components/Metadata.svelte';
	import Container from '$components/Container.svelte';
	import SocialCard from '$components/SocialCard.svelte';
	import profiles from '$lib/social-profiles';
	import strings from '$lib/strings';
</script>

<Metadata title="Homepage" desc={strings.bannerSubtitle} />

<header id="banner">
	<div>
		<h1>{strings.bannerTitle}</h1>
		<p>{strings.bannerSubtitle}</p>
	</div>
	<a class="cta" href="portfolio">View my Portfolio</a>
</header>

<Container name="projects">
	<h2 style:color="var(--ctp-macchiato-red)">Projects</h2>
</Container>

<Container name="contents">
	<h2 style:color="var(--ctp-macchiato-peach)">Contents</h2>
</Container>

<Container name="aboutme">
	<div>
		<h2 style:color="var(--ctp-macchiato-blue)">About Me</h2>
		{#each strings.introduction as text}
			<p>{text}</p>
		{/each}
	</div>
</Container>

<Container name="connect">
	<h2 style:color="var(--ctp-macchiato-green)">Connect</h2>
	<div id="profiles">
		{#each profiles as profile}
			<SocialCard {profile} />
		{/each}
	</div>
</Container>

<style>
	h2 {
		margin-block: 0.5rem 1rem;
	}

	header#banner {
		min-height: 40vh;
		padding: 1rem;
		gap: 1rem;

		grid-area: banner;
		text-align: center;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		--tint-color: #18192680;
		--tint: linear-gradient(0deg, var(--tint-color), var(--tint-color));

		background: var(--tint), url(/wallpaper.webp);
		background-size: cover;
		background-repeat: no-repeat;
		border-radius: 1rem;

		& h1 {
			font-size: clamp(3em, 50%, 6em);
		}
	}

	div#profiles {
		display: grid;
		gap: 1rem;
	}
</style>
