<script lang="ts">
	import { flavors } from '@catppuccin/palette';
	import Header from '$components/Header.svelte';
	import Metadata from '$components/Metadata.svelte';
	import Container from '$components/Container.svelte';

	const title: string = 'Portfolio';
</script>

<Metadata {title} />
<Header title="Nguyen Ta Minh Triet" color={flavors.frappe.colors.blue.hex} />

<Container name="projects">
	<article></article>
</Container>

<style>
	article {
		height: 70vh;
	}
</style>
