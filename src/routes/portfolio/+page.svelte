<script lang="ts">
	import { flavors } from '@catppuccin/palette';
	import Metadata from '$components/Metadata.svelte';
	import Header from '$components/Header.svelte';

	const title: string = 'My Portfolio';
</script>

<Metadata {title} />
<Header {title} color={flavors.frappe.colors.blue.hex} />

<article></article>

<style>
	article {
		height: 70vh;
	}
</style>
