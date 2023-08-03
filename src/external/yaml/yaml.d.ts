/* tslint:disable */
export function ensure(): Promise<void>;

/**
* @param {string} yml_str
* @param {any} options
* @returns {any}
*/
export function load(yml_str: string, options: any): any;
/**
* @param {string} yml_str
* @param {any} options
* @returns {any}
*/
export function safeLoad(yml_str: string, options: any): any;
/**
* @param {string} yml_str
* @param {any} options
* @returns {any}
*/
export function loadAll(yml_str: string, options: any): any;
/**
* @param {any} object
* @param {any} options
* @returns {string}
*/
export function dump(object: any, options: any): string;
/**
* @param {any} object
* @param {any} options
* @returns {string}
*/
export function safeDump(object: any, options: any): string;
