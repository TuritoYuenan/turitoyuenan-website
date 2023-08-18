<script>
	import { variants } from '@catppuccin/palette';
	import Header from '../../lib/components/Header.svelte';
	import Metadata from '../../lib/components/Metadata.svelte';
</script>

<Metadata {title} />

<Header {title} color={variants.macchiato.blue.hex} />

<style>
	section {
		height: 70vh;
		margin: 1rem 0;
		padding: 1rem;
		border-radius: 1rem;
		background: $mantle;
	}

	iframe {
		width: 100%;
		height: 100%;
		border: none;
	}
</style>
