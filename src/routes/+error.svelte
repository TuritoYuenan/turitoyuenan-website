<script lang="ts">
	import { page } from '$app/stores';
	import Metadata from '$components/Metadata.svelte';
	import Container from '$components/Container.svelte';
</script>

<Metadata title={$page.error.message} />
<Container name="banner">
	<div>
		<h1>{$page.status}</h1>
		<h3>{$page.error.message}</h3>
	</div>
</Container>

<style>
	div {
		min-height: 60vh;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
