<script lang="ts">
	import { page } from '$app/stores';
	import { wikiCommon } from '$lib/websites';

	$: atHomepage = $page.url.pathname === '/';
	const href = wikiCommon('Institution:Imperial_City_of_Huế');
</script>

<footer>
	<div>
		<p>
			&COPY; 2023 Nguyen Ta Minh Triet | using <a
				target="_blank"
				rel="noreferrer noopener"
				href="https://catppuccin.com">Catppuccin</a> color palette
		</p>
		{#if atHomepage}
			<p>
				Photo manually taken at the
				<a target="_blank" rel="noreferrer noopener" {href}
					>Imperial city of Huế</a> (29-Jul-2022 15:25)
			</p>
		{/if}
	</div>
</footer>

<style>
	footer {
		padding: 1rem;
		text-align: center;
	}

	div {
		max-width: 75ch;
		margin: auto;
	}
</style>
