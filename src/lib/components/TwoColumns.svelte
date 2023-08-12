<script>
	export let title = 'Title';
	export let image_src = '/placeholder.svg';
	export let image_alt = 'placeholder';
	export let reversed = false;
	export let href;
</script>

<section class="{reversed ? 'rtl' : ''}">
	<div class="text-container">
		<h1>
			{#if href}<a {href}>{title}</a>
			{:else}{title}{/if}
		</h1>
		<slot />
	</div>
	<div class="image-container">
		<img src={image_src} alt={image_alt} />
	</div>
</section>

<style lang="scss">
	@use '$lib/styles/macchiato' as *;

	h1 {
		color: var(--heading-color);
	}

	img {
		width: 100%;
		height: auto;
	}

	section {
		padding: 1rem;
		display: grid;
		gap: 1rem;
		
		@media (min-width: 900px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	section.rtl {
		direction: rtl;
	}
</style>
