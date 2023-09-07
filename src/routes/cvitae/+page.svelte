<script lang="ts">
	import { variants } from '@catppuccin/palette';
	import Metadata from '$components/Metadata.svelte';
	import Header from '$components/Header.svelte';

	const title: string = 'My Curriculum Vitae';
	const src: string = 'https://drive.google.com/file/d/1ZdrqAAYJ8mUP1uIBY4aJyyjxVVpSXprH/preview';
</script>

<Metadata {title} />

<Header {title} color={variants.macchiato.blue.hex} />
<section>
	<iframe {src} title="Triet's Curriculum Vitae" />
</section>

<style>
	section {
		height: 70vh;
	}

	iframe {
		width: 100%;
		height: 100%;
		border: none;
	}
</style>
