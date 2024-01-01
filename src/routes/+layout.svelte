<script lang="ts">
	import '../app.css';
	import Navbar from '$components/Navbar.svelte';
	import Footer from '$components/Footer.svelte';
	import entries from '$lib/menu';
</script>

<Navbar {entries} />
<main>
	<slot />
</main>
<Footer />
