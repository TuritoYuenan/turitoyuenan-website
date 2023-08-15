<script>
	import Dual from './Dual.svelte';

	export let title = 'Title';
	export let color = 'inherit';
	export let href = '#';
	export let img = `/icons/${href}.svg`;
	export let flip;
</script>

<Dual {flip}>
	<div slot="one">
		<h1 style="color: {color};"><a {href}>{title}</a></h1>
		<p><slot /></p>
	</div>
	<div slot="two">
		<img src={img} alt="" class="locked" />
	</div>
</Dual>
