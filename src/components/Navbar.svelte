<!-- @component The top navigation bar -->

<script lang="ts">
	import { page } from '$app/stores';
	import Container from './Container.svelte';

	/** List of menu entries to be displayed on navbar */
	export let entries: import('$lib/menu').MenuEntry[] = [];

	/** Current path, used to underline active entry */
	$: path = $page.url.pathname;
</script>

<Container name="navbar">
	<nav>
		{#each entries as { color, name, href }}
			<a {href} style:color class:active={path === href}>{name}</a>
		{/each}
	</nav>
</Container>

<style>
	nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;

		overflow: hidden;
	}

	nav a {
		padding: 0.5rem;
		border-top: 3pt solid transparent;
		border-bottom: 3pt solid transparent;
		transition: var(--default-transition);

		&:hover {
			background: var(--ctp-macchiato-surface0);
		}

		&.active {
			border-bottom-color: currentColor;
		}
	}
</style>
