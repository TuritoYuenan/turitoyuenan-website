<script>
	import Navbar from '$components/Navbar.svelte';
	import Footer from '$components/Footer.svelte';
	import '$styles/global.scss';
</script>

<svelte:head>
	<title>Turito Yuenan</title>
</svelte:head>

<Navbar />
<main>
	<slot />
</main>
<Footer />
