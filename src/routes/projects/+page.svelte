<script>
	import { variants } from '@catppuccin/palette';
	import Metadata from '$components/Metadata.svelte';
	import Header from '$components/Header.svelte';
	const title = 'Projects';
</script>

<Metadata {title} />
<Header {title} color={variants.macchiato.peach.hex} />
