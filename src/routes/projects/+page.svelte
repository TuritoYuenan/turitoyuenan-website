<script lang="ts">
	import { flavors } from '@catppuccin/palette';
	import { displayDateObj } from '$lib/utilities';

	import Header from '$components/Header.svelte';
	import Metadata from '$components/Metadata.svelte';
	import Container from '$components/Container.svelte';
	import ProjectView from '$components/ProjectView.svelte';

	export let data;
	const title = 'Project Database';
	let current = data.projects[0];

	function selectProject(index: number) {
		return () => (current = data.projects[index]);
	}
</script>

<Metadata {title} />

<Header {title} color={flavors.macchiato.colors.red.hex} />

<Container name="connect">
	<div class="project-list">
		{#each data.projects as project, i}
			<button on:click={selectProject(i)}>
				<h3>{project.name}</h3>
				<p>{displayDateObj(project.starting_date)}</p>
			</button>
		{/each}
	</div>
</Container>

<Container name="aboutme">
	<ProjectView {current} />
</Container>

<Container name="contents">
	<h3>Gallery</h3>
	<p>(Under Construction)</p>
</Container>

<Container name="projects">
	<h3>Links</h3>
	<ul>
		<li>Repository: <a href={current.repository} target="_blank">{current.repository}</a></li>
	</ul>
</Container>

<style>
	div.project-list {
		max-height: 70vh;
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
