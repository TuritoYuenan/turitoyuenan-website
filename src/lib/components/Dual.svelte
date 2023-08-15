<script>
	export let flip = false;
</script>

<section style="{flip ? 'direction: rtl' : ''};">
	<slot name="one">
		<p>Lorem ipsum dolor sit amet</p>
	</slot>
	<slot name="two">
		<p>Lorem ipsum dolor sit amet</p>
	</slot>
</section>

<style lang="scss">
	@use '$lib/styles/macchiato' as *;

	section {
		padding: 1rem;
		display: grid;
		gap: 1rem;

		@media (min-width: 900px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
