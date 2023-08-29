<script lang="ts">
	import type { MenuEntry } from '../menu';
	import Dual from './Dual.svelte';

	export let flip: boolean;
	export let data: MenuEntry = {
		name: 'Entry',
		href: '/#',
		desc: 'Lorem ipsum dolor sit amet',
		color: 'inherit'
	};

	let { name, href, color, desc } = data;
	let img: string = `/icons${href}.svg`;
</script>

<!-- @component Used to procedually introduce the website's menu entries -->
<Dual {flip}>
	<div slot="one">
		<h1><a {href} style:color>{name}</a></h1>
		<slot><p>{desc}</p></slot>
	</div>
	<div slot="two">
		<a {href}><img src={img} alt='Icon for {name}' class="locked" /></a>
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
