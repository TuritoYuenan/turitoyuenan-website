<script>
	import { page } from '$app/stores';
	import { artStation } from '../../lib/websites';

	$: isHomepage = $page.url.pathname === '/';
</script>

<footer>
	<p>&COPY; 2023 Minh Triet</p>
	<p><a href="https://catppuccin.com">Catppuccin</a> color palette</p>
	{#if isHomepage}
		<p>
			<a href={artStation('artwork/9NJ28q')}>"Rooftop Farms"</a>
			by <a href={artStation('jessicawoulfe')}>Jessica Woulfe</a>
		</p>
	{/if}
</footer>

<style lang="scss">
	footer {
		padding: 1rem;
		background: var(--ctp-macchiato-mantle);
		text-align: center;
	}
</style>
