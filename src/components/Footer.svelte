<script>
	import strings from '$lib/strings';
	import Container from './Container.svelte';

	const href = 'https://catppuccin.com';
</script>

<Container name="footer">
	<footer>
		<p>{@html strings.copyright}</p>
	</footer>
</Container>

<style>
	footer {
		text-align: center;

		& p {
			margin: auto;
		}
	}
</style>
