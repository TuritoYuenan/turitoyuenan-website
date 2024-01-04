enum ProjectStatus { Idea, Working, Completed, Cancelled };
type ProjectCategory = 'App' | 'Design' | 'Device' | 'Fiction' | 'Game' | 'Robot' | 'Website';

export interface Project {
	name: string;
	description: string;
	tools: string[];
	tags: string[];
	status: ProjectStatus;
	category: ProjectCategory;
	date: { year: number; month: number; day: number; }
}

const projects: Project[] = [
	{
		name: 'ZimmerWetter',
		tools: ['VSCode', 'Wokwi', 'Blynk', 'Figma', 'C++'],
		tags: ['IoT', 'Arduino', 'ESP32', 'Weather'],
		status: ProjectStatus.Completed,
		category: 'Device',
		date: { year: 2023, month: 11, day: 21 },
		description: `An IoT device for monitoring weather (temperature and humidity) of your room,
					  allowing reliable weather reporting without the need of a provider`,
	},
	{
		name: 'Personal Website',
		tools: ['VSCode', 'SvelteKit', 'Vite', 'Node.js', 'Figma', 'JS/TS'],
		tags: ['Website', 'Front-end', 'Portfolio'],
		status: ProjectStatus.Working,
		category: 'Website',
		date: { year: 2022, month: 5, day: 30 },
		description: `A website about me and my stuffs - which you are looking at right now!`,
	},
	{
		name: 'OMORI Animatics',
		tools: ['VSCode', 'Svelte', 'Vite', 'Deno', 'JS/TS'],
		tags: ['Website', 'Front-end', 'OMORI', 'Game'],
		status: ProjectStatus.Completed,
		category: 'Website',
		date: { year: 2023, month: 4, day: 10 },
		description: `A website that displays a collection of OMORI animatic videos from YouTube`,
	},
	{
		name: 'Bibman',
		tools: ['VSCode', 'TTY::Prompt', 'Ruby'],
		tags: ['Bibliography', 'CLI', 'University'],
		status: ProjectStatus.Completed,
		category: 'App',
		date: { year: 2023, month: 11, day: 25 },
		description: `A bibliography manager program used in the command line.
					  Made as a Custom program for Swinburne University COS10009 unit`,
	},
	{
		name: 'Knabino Magia',
		tools: ['VSCode', 'Hugo', 'Svelte', 'JS/TS', 'Figma', 'Inkscape'],
		tags: ['Worldbuilding', 'Fantasy', 'Fiction', 'CMS'],
		status: ProjectStatus.Completed,
		category: 'Fiction',
		date: { year: 2023, month: 11, day: 25 },
		description: `A fantasy fiction that features magical girls around the world,
					  from many different backgrounds and cultures living and working`,
	},
	{
		name: 'Planet KEARTH',
		tools: ['VSCode', 'Adobe Illustrator', 'Inkscape'],
		tags: ['Worldbuilding', 'Fantasy', 'Fan-Fiction'],
		status: ProjectStatus.Cancelled,
		category: 'Fiction',
		date: { year: 2019, month: 10, day: 4 },
		description: `A scrapped fan-fiction of Undertale featuring an original fictional
					  planet named KEARTH`,
	}
]

export default projects;