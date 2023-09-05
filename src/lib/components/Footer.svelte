<script>
	import { page } from '$app/stores';
	import { artStation, webArchive, wikiCommon } from '../websites';

	$: atHomepage = $page.url.pathname === '/';

	// Homepage banner image's source and author
	const href = wikiCommon('File:Earthship_Community_home_2_-_panoramio.jpg');
	const author = webArchive(
		20161025094921,
		'http://www.panoramio.com/user/3187235?with_photo_id=70613336'
	);
</script>

<footer>
	<div>
		<p>&COPY; 2023 Minh Triet</p>
		<p><a href="https://catppuccin.com">Catppuccin</a> color palette</p>
		{#if atHomepage}
			<p>
				<a {href}>"Earthship Community home 2"</a> by
				<a href={author}>Dameon Hudson</a><br />is licensed under the
				Creative Commons Attribution 3.0 Unported license.
			</p>
		{/if}
	</div>
</footer>

<style>
	footer {
		padding: 1rem;
		background: var(--ctp-macchiato-mantle);
		text-align: center;
	}

	div {
		max-width: 75ch;
		margin: auto;
	}
</style>
