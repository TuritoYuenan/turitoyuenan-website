<script>
	import Header from '$components/Header.svelte';
	import Metadata from '$components/Metadata.svelte';
	import SocialCard from '$components/SocialCard.svelte';

	import { variants } from '@catppuccin/palette';
	import {
		workAccounts,
		casualAccounts,
		blogAccounts
	} from '$lib/socialAccounts';

	const title = 'Connect';
</script>

<Metadata {title} />
<Header {title} color={variants.macchiato.green.hex} />
<article>
	<h2>Work</h2>
	<section>
		{#each workAccounts as account}
			<SocialCard {account} />
		{/each}
	</section>
	<h2>Casual</h2>
	<section>
		{#each casualAccounts as account}
			<SocialCard {account} />
		{/each}
	</section>
	<h2>Blog</h2>
	<section>
		{#each blogAccounts as account}
			<SocialCard {account} />
		{/each}
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
