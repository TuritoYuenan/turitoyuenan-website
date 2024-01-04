<script lang="ts">
	import { flavors } from '@catppuccin/palette';
	import projects from '$lib/projects';

	import Header from '$components/Header.svelte';
	import Metadata from '$components/Metadata.svelte';
	import Container from '$components/Container.svelte';
	import ProjectView from '$components/ProjectView.svelte';

	const title = 'Projects';
	let current = projects[0];

	function displayDate({ year, month, day }) {
		return `${year}-${month}-${day}`;
	}

	function selectProject(index: number) {
		return () => (current = projects[index]);
	}
</script>

<Metadata {title} />

<Header {title} color={flavors.macchiato.colors.red.hex} />

<Container name="connect">
	<div class="project-list">
		{#each projects as project, i}
			<button on:click={selectProject(i)}>
				<h3>{project.name}</h3>
				<p>{displayDate(project.date)}</p>
			</button>
		{/each}
	</div>
</Container>

<Container name="aboutme">
	<ProjectView {current} />
</Container>

<Container name="projects">
	<h3>Gallery</h3>
	<p>(Under Construction)</p>
</Container>

<Container name="contents">
	<h3>Links</h3>
	<p>(Under Construction)</p>
</Container>

<style>
	div.project-list {
		overflow-x: hidden;
		overflow-y: scroll;
	}

	button {
		width: 100%;
		padding: 0;
		display: block;

		font: inherit;
		color: inherit;
		text-align: inherit;
		background: inherit;

		& h3 {
			margin-block-start: 0;
		}

		&:hover {
			translate: 1rem;
			scale: 1;
		}
	}
</style>
