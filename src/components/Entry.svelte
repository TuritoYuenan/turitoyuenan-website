<script lang="ts">
	import Dual from '$components/Dual.svelte';

	export let flip: boolean;
	export let data: import('$lib/menu').MenuEntry = {
		name: 'Entry',
		href: '/#',
		desc: 'Lorem ipsum dolor sit amet',
		color: 'inherit'
	};

	let { name, href, color, desc } = data;
	let img: string = `/icons/${name.toLowerCase()}.svg`;
</script>

<!-- @component Used to procedually introduce the website's menu entries -->
<Dual {flip}>
	<div slot="one">
		<h1><a {href} style:color>{name}</a></h1>
		<slot><p>{desc}</p></slot>
	</div>
	<div slot="two">
		<a {href}>
			<img src={img} alt="Icon for {name}" width="800" height="800" />
		</a>
	</div>
</Dual>

<style>
	img {
		width: 100%;
		height: auto;
		transition: var(--default-transition);
		&:hover {
			scale: 110%;
		}
	}
</style>
