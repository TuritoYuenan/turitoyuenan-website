class MenuEntry {
	/**
	 * Create a menu entry, used in navigation bar
	 * @param {string} name Entry name
	 * @param {string} id Entry ID, used for navigation
	 * @param {string} description A description about the entry
	 * @param {string} color The entry's accent color
	 */
	constructor(name, id, color, description) {
		this.name = name;
		this.href = '/' + id;
		this.desc = description;
		this.color = color;
	}
}

/** List of menu entries */
export const entries = [
	new MenuEntry(
		'Articles',
		'articles',
		'red',
		'I sometimes write blogs and articles about various topics'
	),
	new MenuEntry('Projects', 'projects', 'peach', 'Showcases of my projects'),
	new MenuEntry(
		'Connect',
		'connect',
		'green',
		'You can find me on many social network platforms'
	),
	new MenuEntry(
		'CVitae',
		'cvitae',
		'blue',
		'For possible work or internship recruiters, you can check out my Curriculum Vitae (CV) here'
	)
];
