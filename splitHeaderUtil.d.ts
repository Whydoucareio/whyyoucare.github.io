import { Headers } from 'fetch-headers';
/**
 *
 * Splits headers according to spec
 * @param headers
 * @returns Split headers
 */
export declare function splitHeaders(headers: Readonly<Headers>): Headers;
/**
 * Joins headers according to spec
 * @param headers
 * @returns Joined headers
 */
export declare function joinHeaders(headers: Readonly<Headers>): Headers;
