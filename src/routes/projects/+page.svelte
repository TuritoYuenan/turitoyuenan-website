<script>
	import { variants } from '@catppuccin/palette';
	import Header from '../../lib/components/Header.svelte';
	import Metadata from '../../lib/components/Metadata.svelte';
	const title = 'Projects';
</script>

<Metadata {title} />
<Header {title} color={variants.macchiato.peach.hex} />
