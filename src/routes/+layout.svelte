<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/global.scss';
</script>

<svelte:head>
	<title>Turito Yuenan</title>
</svelte:head>

<Header />
<main>
	<slot />
</main>
<Footer />
