/* tslint:disable */
/* eslint-disable */
/**
* @param {string} base_compressed 
* @returns {string} 
*/
export function zlib_decode(base_compressed: string): string;
/**
* @param {string} base_raw 
* @returns {string} 
*/
export function zlib_encode(base_raw: string): string;
/**
* @param {string} base_compressed 
* @returns {string} 
*/
export function gzip_decode(base_compressed: string): string;
/**
* @param {string} base_raw 
* @returns {string} 
*/
export function gzip_encode(base_raw: string): string;
/**
* @param {string} base_compressed 
* @returns {string} 
*/
export function deflate_decode(base_compressed: string): string;
/**
* @param {string} base_raw 
* @returns {string} 
*/
export function deflate_encode(base_raw: string): string;
/**
* @param {Uint8Array} base_compressed 
* @returns {Uint8Array} 
*/
export function zlib_decode_raw(base_compressed: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} base_raw 
* @returns {Uint8Array} 
*/
export function zlib_encode_raw(base_raw: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} base_compressed 
* @returns {Uint8Array} 
*/
export function gzip_decode_raw(base_compressed: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} base_raw 
* @returns {Uint8Array} 
*/
export function gzip_encode_raw(base_raw: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} base_compressed 
* @returns {Uint8Array} 
*/
export function deflate_decode_raw(base_compressed: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} base_raw 
* @returns {Uint8Array} 
*/
export function deflate_encode_raw(base_raw: Uint8Array): Uint8Array;

/**
* If `module_or_path` is {RequestInfo}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {RequestInfo | BufferSource | WebAssembly.Module} module_or_path
*
* @returns {Promise<any>}
*/
export default function init (module_or_path?: RequestInfo | BufferSource | WebAssembly.Module): Promise<any>;
