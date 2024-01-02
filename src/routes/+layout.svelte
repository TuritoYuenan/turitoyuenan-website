<script lang="ts">
	import '../app.css';
	import Navbar from '$components/Navbar.svelte';
	import Footer from '$components/Footer.svelte';
	import Container from '$components/Container.svelte';
	import Wordmark from '$components/Wordmark.svelte';
	import entries from '$lib/menu';
</script>

<main>
	<Container name="wordmark" paddingRem={0.5}>
		<a href="/" id="wordmark-container">
			<Wordmark />
		</a>
	</Container>
	<Navbar {entries} />
	<slot />
	<Footer />
</main>

<style>
	main {
		padding: 1rem;
		display: grid;
		gap: 1rem;

		grid-template-columns: 1fr 1.5fr 1fr;
		grid-template-areas:
			'wordmark navbar navbar'
			'banner banner banner'
			'projects projects projects'
			'contents contents contents'
			'aboutme aboutme connect'
			'footer footer footer';

		@media (max-width: 800px) {
			display: flex;
			flex-direction: column;
		}
	}

	#wordmark-container {
		display: grid;
		place-items: center;
		transition: var(--default-transition);

		&:hover {
			scale: 1.1;
		}

		&:active {
			scale: 1;
		}
	}
</style>
