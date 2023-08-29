<script>
	import Navbar from '../lib/components/Navbar.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import { entries } from '../lib/menu';
	import '$styles/global.scss';
</script>

<Navbar {entries} />
<main>
	<slot />
</main>
<Footer />
