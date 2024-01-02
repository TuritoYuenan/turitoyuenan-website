<script lang="ts">
	export let name: string;
	export let paddingRem: number = 1;
</script>

<section
	style:grid-area={name}
	style:padding={paddingRem + 'rem'}
	class={name + '-container'}>
	<slot />
</section>

<style>
	section {
		background-color: var(--ctp-macchiato-crust);
		border-radius: 1rem;
	}
</style>
