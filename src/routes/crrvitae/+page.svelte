<script>
	import { variants } from '@catppuccin/palette';
	import Header from '../../lib/components/Header.svelte';
	import Metadata from '../../lib/components/Metadata.svelte';

	const title = 'My CV';
	const src = 'https://drive.google.com/file/d/1ZdrqAAYJ8mUP1uIBY4aJyyjxVVpSXprH/preview';
</script>

<Metadata {title} />

<Header {title} color={variants.macchiato.blue.hex} />
<section>
	<iframe {src} title="Triet's Curriculum Vitae" />
</section>

<style>
	section {
		height: 70vh;
		margin: 1rem 0;
		padding: 1rem;
		border-radius: 1rem;
		background: var(--ctp-macchiato-mantle);
	}

	iframe {
		width: 100%;
		height: 100%;
		border: none;
	}
</style>
