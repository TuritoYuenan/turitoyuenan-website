<script lang="ts">
	import Header from '$components/Header.svelte';
	import Metadata from '$components/Metadata.svelte';
	import SocialCard from '$components/SocialCard.svelte';

	import { flavors } from '@catppuccin/palette';
	import {
		workProfiles,
		casualProfiles,
		blogSites
	} from '$lib/social-profiles';

	const title = 'Connect';
</script>

<Metadata {title} />
<Header {title} color={flavors.frappe.colors.green.hex} />
<article>
	<h2>Work</h2>
	<section>
		{#each workProfiles as account}
			<SocialCard {account} />
		{/each}
	</section>
	<h2>Casual</h2>
	<section>
		{#each casualProfiles as account}
			<SocialCard {account} />
		{/each}
	</section>
	<h2>Blog</h2>
	<section>
		{#each blogSites as account}
			<SocialCard {account} />
		{/each}
	</section>
</article>

<style>
	article {
		padding: 1rem;
	}

	section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
	}

	h2 {
		margin-top: 1rem;
		margin-bottom: 1.5rem;
	}
</style>
