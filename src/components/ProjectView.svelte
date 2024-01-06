<script lang="ts">
	import { flavors } from '@catppuccin/palette';
	import { type Project } from '$lib/projects';
	import { displayDate } from '$lib/utilities';

	export let current: Project;

	const colors = flavors.macchiato.colors;
	const projectStatus = [
		{ name: 'Idea', color: colors.yellow.hex },
		{ name: 'Working', color: colors.blue.hex },
		{ name: 'Completed', color: colors.green.hex },
		{ name: 'Cancelled', color: colors.red.hex }
	];

	$: currentStatus = projectStatus[current.status];
</script>

<div class="project-view">
	<div style:grid-area="title">
		<h2>{current.name}</h2>
	</div>

	<div style:grid-area="date">
		<h3>Starting day</h3>
		<p>{displayDate(current.date)}</p>
	</div>

	<div style:grid-area="status">
		<h3>Status</h3>
		<p style:color={currentStatus.color}>{currentStatus.name}</p>
	</div>

	<div style:grid-area="category">
		<h3>Category</h3>
		<p>{current.category}</p>
	</div>

	<div style:grid-area="desc">
		<h3>Description</h3>
		<p class="description">{current.description}</p>
	</div>

	<div style:grid-area="tags">
		<h3>Tags</h3>
		<p class="tags">
			{#each current.tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		</p>
	</div>

	<div style:grid-area="tools">
		<h3>Tools</h3>
		<p class="tags">
			{#each current.tools as tool}
				<span class="tag">{tool}</span>
			{/each}
		</p>
	</div>
</div>

<style>
	div.project-view {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-areas:
			'title title title'
			'date status category'
			'desc desc desc'
			'tools tools tools'
			'tags tags tags';
	}

	p.tags {
		gap: 0.5rem;
		display: flex;
		flex-wrap: wrap;
	}

	p.description {
		min-height: 2.5em;
	}

	span.tag {
		padding: 0.2rem 0.4rem;
		border-radius: 0.4rem;
		color: var(--ctp-macchiato-crust);
		background: var(--ctp-macchiato-text);
	}
</style>
