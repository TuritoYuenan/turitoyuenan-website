// List of menu entries

import { flavors } from '@catppuccin/palette';
const colors = flavors.macchiato.colors;

export interface MenuEntry {
	name: string;
	href: string;
	desc: string;
	color: string;
}

/** List of menu entries */
const entries: MenuEntry[] = [
	{
		name: 'Projects',
		href: '/projects',
		color: colors.red.hex,
		desc: `Showcases of my projects`
	},
	{
		name: 'Contents',
		href: '/contents',
		color: colors.peach.hex,
		desc: `I sometimes write blogs and articles about various topics`
	},
	{
		name: 'Connect',
		href: '/connect',
		color: colors.green.hex,
		desc: `You can find me on many social network platforms`
	},
	{
		name: 'Portfolio',
		href: 'https://turitoyuenan.github.io/TuritoYuenan',
		color: colors.blue.hex,
		desc: `Possible recruiters can check out my Portfolio
		to walk through my academic skills, education, and projects`
	}
];

export default entries;
