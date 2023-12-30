<script lang="ts">
	import { flavors } from '@catppuccin/palette';
	import Metadata from '$components/Metadata.svelte';
	import Header from '$components/Header.svelte';
	const title = 'Projects';
</script>

<Metadata {title} />
<Header {title} color={flavors.frappe.colors.peach.hex} />
