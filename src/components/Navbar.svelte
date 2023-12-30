<script lang="ts">
	import { page } from '$app/stores';
	import Wordmark from './Wordmark.svelte';

	/** List of menu entries to be displayed on navbar */
	export let entries: import('$lib/menu').MenuEntry[] = [];

	/** Underline the active entry */
	$: path = $page.url.pathname;
</script>

<!-- @component The top navigation bar -->
<nav>
	<a href="/" id="icon">
		<Wordmark />
	</a>
	<div>
		{#each entries as { color, name, href }}
			<a {href} style:color class:active={path === href}>{name}</a>
		{/each}
	</div>
</nav>

<style>
	nav {
		padding: 1rem;
		overflow: hidden;

		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}

	div {
		width: fit-content;
		display: flex;
		flex-wrap: wrap;
	}

	div a {
		padding: 0.5rem;
		border-top: 3pt solid transparent;
		border-bottom: 3pt solid transparent;
		transition: var(--default-transition);

		&:hover {
			background: var(--ctp-frappe-surface0);
		}

		&.active {
			border-bottom-color: currentColor;
		}
	}

	@media (max-width: 700px) {
		nav {
			flex-direction: column;
			gap: 0.5rem;
		}

		div {
			width: 100%;
			justify-content: space-between;
		}
	}
</style>
