<script lang="ts">
    /** Header title */
    export let title: string = 'Header';
    /** Header title color */
    export let color: string = '';
</script>

<!-- @component Header for category pages -->
<header>
    <h1 style:color>{title}</h1>
</header>

<style>
	header {
		min-height: 20vh;
		padding: 2rem;
		background: var(--ctp-macchiato-crust);

		display: flex;
		flex-direction: column;
		justify-content: center;

        @media (max-width: 750px) {
            text-align: center;
        }
	}
</style>