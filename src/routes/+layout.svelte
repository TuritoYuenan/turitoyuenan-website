<script lang="ts">
	import '$styles/global.scss';
	import Navbar from '$components/Navbar.svelte';
	import Footer from '$components/Footer.svelte';
	import { entries } from '$lib/menu';
</script>

<Navbar {entries} />
<main>
	<slot />
</main>
<Footer />
