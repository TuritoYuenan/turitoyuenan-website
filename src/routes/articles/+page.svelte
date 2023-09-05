<script lang="ts">
	import Header from "$components/Header.svelte";
	import Metadata from "$components/Metadata.svelte";

	const title = 'Articles';
</script>

<Metadata {title}>
	<meta http-equiv="refresh" content="0; url=https://turitoyuenan.github.io/articles">
</Metadata>

<Header {title} color="#ed8796" />
<article>
	<p>Redirecting to Turito Yuenan's Hugo CMS</p>
</article>

<style>
	article {
		padding: 1rem;
	}
</style>
