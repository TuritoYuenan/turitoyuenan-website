// Link shorthands

/**
 * Artstation artwork/artist
 * @param path Path
 * @returns An Artstation link
 */
export const artStation = (path: string) => `https://artstation.com/${path}`;

/**
 * Wikipedia Commons asset
 * @param path Path to the asset
 * @returns A Wikimedia Commons link to the asset
 */
export const wikiCommon = (path: string) =>
	`https://commons.wikimedia.org/wiki/${path}`;

/**
 * Internet Archive asset
 * @param timestamp The entry's timestamp
 * @param url The archived URL
 * @returns The Internet Archive entry
 */
export const webArchive = (timestamp: string, url: string) =>
	`https://web.archive.org/web/${timestamp.toString()}/${url}`;
