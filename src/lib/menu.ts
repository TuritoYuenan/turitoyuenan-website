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
export const entries: MenuEntry[] = [
	{
		name: 'Contents',
		href: '/contents',
		color: colors.red.hex,
		desc: `I sometimes write blogs and articles about various topics`
	},
	{
		name: 'Projects',
		href: '/projects',
		color: colors.peach.hex,
		desc: `Showcases of my projects`
	},
	{
		name: 'Connect',
		href: '/connect',
		color: colors.green.hex,
		desc: `You can find me on many social network platforms`
	},
	{
		name: 'Portfolio',
		href: '/portfolio',
		color: colors.blue.hex,
		desc: `Possible recruiters can check out my Portfolio
		to walk through my academic skills, education, and projects`
	}
];
