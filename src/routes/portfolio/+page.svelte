<script lang="ts">
	import { flavors } from '@catppuccin/palette';
	import Header from '$components/Header.svelte';
	import Metadata from '$components/Metadata.svelte';
	import Container from '$components/Container.svelte';
	import strings from '$lib/strings';

	const title: string = 'Portfolio';
</script>

<Metadata {title}>
	<link rel="preconnect" href="https://cdn.jsdelivr.net">
</Metadata>

<Header title={strings.portfolio.title} color={flavors.macchiato.colors.blue.hex}>
	<p slot="subtitle">{strings.portfolio.subtitle}</p>
	<ul slot="content">
		<li><i class="bi-envelope"></i> {strings.portfolio.email}</li>
		<li><i class="bi-globe"></i> turitoyuenan.pages.dev</li>
		<li>
			<i class="bi-linkedin"></i>
			<a target="_blank" href="https://linkedin.com/in/trietntm-cs">
				linkedin.com/in/trietntm-cs
			</a>
		</li>
		<li>
			<i class="bi-github"></i>
			<a target="_blank" href="https://github.com/TuritoYuenan">
				github.com/TuritoYuenan
			</a>
		</li>
	</ul>
</Header>

<Container name="aboutme">
	<h2>About Me</h2>
</Container>

<Container name="connect">
	<h2>Skills</h2>
</Container>

<Container name="projects">
	<h2>Education</h2>
</Container>

<Container name="contents">
	<h2>Projects</h2>
</Container>

<style>
	@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css');

	p[slot='subtitle'] {
		font-size: larger;
	}

	ul[slot='content'] {
		padding-left: 0;
		column-count: 2;
		list-style: none;

		@media (max-width: 800px) {
			column-count: 1;
		}
	}

	i {
		margin-right: 0.2rem;
	}
</style>
