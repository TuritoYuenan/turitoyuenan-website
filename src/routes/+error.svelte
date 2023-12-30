<script lang="ts">
	import { page } from '$app/stores';
	import Metadata from '$components/Metadata.svelte';
</script>

<Metadata title="{$page.status} {$page.error.message}" />
<header>
	<h1>{$page.status}</h1>
	<h3>{$page.error.message}</h3>
</header>

<style>
	header {
		min-height: 60vh;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
