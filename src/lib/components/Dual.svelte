<script>
	export let flip = false;
</script>

<!-- @component Two parallel contents, responsively collapse on small width -->
<section style:direction={flip ? 'rtl' : ''}>
	<slot name="one">
		<p>Lorem ipsum dolor sit amet</p>
	</slot>
	<slot name="two">
		<p>Lorem ipsum dolor sit amet</p>
	</slot>
</section>

<style lang="scss">
	section {
		padding: 1rem;
		display: grid;
		gap: 1rem;

		@media (min-width: 900px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
