<script lang="ts">
	import { flavors } from '@catppuccin/palette';
	import Header from '$components/Header.svelte';
	import Metadata from '$components/Metadata.svelte';
	import Container from '$components/Container.svelte';

	const title: string = 'Portfolio';
</script>

<Metadata {title} />
<Header title={strings.portfolioTitle} color={flavors.macchiato.colors.blue.hex}>

<Container name="aboutme">
	<h2>(Under Construction)</h2>
</Container>

<Container name="connect">
	<h2>(Under Construction)</h2>
</Container>

<Container name="projects">
	<h2>(Under Construction)</h2>
</Container>

<Container name="contents">
	<h2>(Under Construction)</h2>
</Container>

<style></style>
