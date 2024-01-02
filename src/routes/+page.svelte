<script lang="ts">
	import Container from '$components/Container.svelte';
	import Metadata from '$components/Metadata.svelte';
	import SocialCard from '$components/SocialCard.svelte';
	import profiles from '$lib/social-profiles';
	import strings from '$lib/strings';

	const portfolio = () => (window.location.href = '/portfolio');
</script>

<Metadata title="Homepage" desc={strings.bannerSubtitle} />

<Container name="banner" paddingRem={0}>
	<header id="banner">
		<div>
			<h1>{strings.bannerTitle}</h1>
			<p>{strings.bannerSubtitle}</p>
		</div>
		<button on:click={portfolio}>View my Portfolio</button>
	</header>
</Container>

<Container name="projects">
	<h2 style:color="var(--ctp-macchiato-red)">Projects</h2>
</Container>

<Container name="contents">
	<h2 style:color="var(--ctp-macchiato-peach)">Contents</h2>
</Container>

<Container name="aboutme">
	<div>
		<h2 style:color="var(--ctp-macchiato-blue)">About Me</h2>
		{#each strings.introSubtitle as text}
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;

		--tint-color: #18192680;
		--tint: linear-gradient(0deg, var(--tint-color), var(--tint-color));

		background: var(--tint), url(/wallpaper.webp);
		background-size: cover;
		background-repeat: no-repeat;
		border-radius: inherit;

		& h1 {
			font-size: clamp(3em, 50%, 6em);
		}
	}

	div#profiles {
		display: grid;
		gap: 1rem;
	}
</style>
