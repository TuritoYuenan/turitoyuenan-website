<script lang="ts">
	import Dual from './Dual.svelte';

	export let title: string = 'Title';
	export let color: string = 'inherit';
	export let href: string = '#';
	export let img: string = `/icons${href}.svg`;
	export let flip: boolean;
</script>

<!-- @component Used to procedually introduce the website's menu entries -->
<Dual {flip}>
	<div slot="one">
		<h1><a {href} style:color>{title}</a></h1>
		<p><slot /></p>
	</div>
	<div slot="two">
		<a {href}><img src={img} alt="" class="locked" /></a>
	</div>
</Dual>

<style>
	img {
		height: 100%;
		transition: var(--default-transition);
		&:hover {
			scale: 110%;
		}
	}
</style>
