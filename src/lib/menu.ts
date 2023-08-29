import { variants } from '@catppuccin/palette';

export interface MenuEntry {
	name: string;
	href: string;
	desc: string;
	color: string;
}

/** List of menu entries */
export const entries: MenuEntry[] = [
	{
		name: 'Articles',
		href: '/articles',
		color: variants.macchiato.red.hex,
		desc: 'I sometimes write blogs and articles about various topics'
	},
	{
		name: 'Projects',
		href: '/projects',
		color: variants.macchiato.peach.hex,
		desc: 'Showcases of my projects'
	},
	{
		name: 'Connect',
		href: '/connect',
		color: variants.macchiato.green.hex,
		desc: 'You can find me on many social network platforms'
	},
	{
		name: 'CVitae',
		href: '/cvitae',
		color: variants.macchiato.blue.hex,
		desc: 'For possible work or internship recruiters, you can check out my Curriculum Vitae (CV) here'
	}
];
