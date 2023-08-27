<script>
	import { variants } from '@catppuccin/palette';
	import Header from '../../lib/components/Header.svelte';
	import Metadata from '../../lib/components/Metadata.svelte';
	import SocialCard from '../../lib/components/SocialCard.svelte';

	const title = 'Connect';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Metadata {title} />
<Header {title} color={variants.macchiato.green.hex} />
<article>
	<h2>Work</h2>
	<section>
		{#each data.work as { href, name, username }}
			<SocialCard {href} {name} {username} />
		{/each}
	</section>
	<h2>Casual</h2>
	<section>
		{#each data.casual as { href, name, username }}
			<SocialCard {href} {name} {username} />
		{/each}
	</section>
	<h2>Blog</h2>
	<section>
		<SocialCard
			href={data.blog[0].href}
			name={data.blog[0].name}
			username="turitoyuenan.tumblr.com" />
	</section>
</article>

<style lang="scss">
	@use '$styles/grid' as *;

	article {
		padding: 1rem;
	}

	section {
		@include r-grid(300px);
		gap: 1rem;
	}

	h2 {
		margin-top: 1rem;
		margin-bottom: 1.5rem;
	}
</style>
