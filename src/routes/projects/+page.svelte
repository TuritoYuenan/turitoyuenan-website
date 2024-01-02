<script lang="ts">
	import { flavors } from '@catppuccin/palette';
	import Header from '$components/Header.svelte';
	import Metadata from '$components/Metadata.svelte';
	import Container from '$components/Container.svelte';
	const title = 'Projects';
</script>

<Metadata {title} />
<Header {title} color={flavors.frappe.colors.red.hex} />
<Container name="projects"></Container>
