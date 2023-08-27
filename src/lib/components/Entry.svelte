<script>
	import Dual from './Dual.svelte';

	export let title = 'Title';
	export let color = 'inherit';
	export let href = '#';
	export let img = `/icons/${href}.svg`;
	export let flip;
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
		transition: var(--default-transition);
		&:hover {
			scale: 110%;
		}
	}
</style>
