// Utility functions

/**
 * Artstation artwork/artist
 * @param path Path
 * @returns An Artstation link
 */
export function artStation(path: string) {
	return `https://artstation.com/${path}`;
}

/**
 * Wikipedia Commons asset
 * @param path Path to the asset
 * @returns A Wikimedia Commons link to the asset
 */
export function wikiCommon(path: string) {
	return `https://commons.wikimedia.org/wiki/${path}`;
}

/**
 * Internet Archive asset
 * @param timestamp The entry's timestamp
 * @param url The archived URL
 * @returns The Internet Archive entry
 */
export function webArchive(timestamp: string | number, url: string): string {
	return `https://web.archive.org/web/${timestamp.toString()}/${url}`;
}

/**
 * Convert date object to string
 * @param date Date object
 * @returns Date in "DD MMM YYYY" format
 */
export function displayDateObj(date: Date): string {
	return new Intl.DateTimeFormat("en-AU", { dateStyle: "medium" }).format(date);
}
