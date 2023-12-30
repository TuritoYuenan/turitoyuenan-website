<script lang="ts">
	import Metadata from '$components/Metadata.svelte';
	import { flavors } from '@catppuccin/palette';
	import Header from '$components/Header.svelte';

	const title = 'Contents';
</script>

<Metadata {title} />
<Header {title} color={flavors.macchiato.colors.red.hex} />

<article></article>

<style>
	article {
		padding: 1rem;
	}
</style>
