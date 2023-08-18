<script>
    /**
     * Header title
     * @type {string}
     */
    export let title = 'Header';
    /**
     * Header title color
     * @type {string}
     */
    export let color = '';
</script>

<!-- @component Header for category pages -->
<header>
    <h1 style:color>{title}</h1>
</header>

<style lang="scss">
	header {
		min-height: 20vh;
		padding: 2rem;
		background: var(--ctp-macchiato-crust);

		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>