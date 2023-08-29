<script lang="ts">
	import { variants } from '@catppuccin/palette';
	import Header from '../../lib/components/Header.svelte';
	import Metadata from '../../lib/components/Metadata.svelte';

	const title = 'Articles';

	// /** @type {import('./$types').PageData} */
	// export let data;
</script>

<Metadata {title}/>

<Header {title} color={variants.macchiato.red.hex}/>
