// Return URL links for popular websites

/** Returns an Artstation link */
export const artStation = (path: string) => `https://artstation.com/${path}`;

/** Returns a Wikimedia Common file */
export const wikiCommon = (path: string) =>
	`https://commons.wikimedia.org/wiki/${path}`;

/** Returns an Internet Archive entry */
export const webArchive = (timestamp: string, url: string) => {
	return `https://web.archive.org/web/${timestamp.toString()}/${url}`;
};
