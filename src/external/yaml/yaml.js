// dessert_yaml_core
import init from "./yaml.wasm?init";

let wasm = undefined;

let WASM_VECTOR_LEN = 0;

let passStringToWasm;

let addHeapObject, getStringFromWasm;
let getObject, takeObject, dropObject;

let globalArgumentPtr;
let getUint32Memory;

export function ensure () {
	if (wasm) return Promise.resolve();

	const __wbindgen_string_new = (p, l) => addHeapObject(getStringFromWasm(p, l));
	const __wbindgen_json_parse = (ptr, len) => addHeapObject(JSON.parse(getStringFromWasm(ptr, len)));
	function __wbindgen_json_serialize (idx, ptrptr) {
		const ptr = passStringToWasm(JSON.stringify(getObject(idx)));
		getUint32Memory()[ptrptr / 4] = ptr;
		return WASM_VECTOR_LEN;
	}
	function __wbindgen_rethrow (idx) { throw takeObject(idx); }
	const __wbindgen_object_drop_ref = (i) => dropObject(i);

	return new Promise(resolve => {
		init({
			"./yaml": {
				__wbindgen_json_parse,
				__wbindgen_json_serialize,
				__wbindgen_object_drop_ref,
				__wbindgen_string_new,
				__wbindgen_rethrow,
			}
		}).then(r => {
			wasm = r.exports;

			let cachedTextEncoder = new TextEncoder("utf-8");
			if (typeof cachedTextEncoder.encodeInto === "function") {
				passStringToWasm = function (arg) {
					let size = arg.length;
					let ptr = wasm.__wbindgen_malloc(size);
					let writeOffset = 0;
					while (true) {
						const view = getUint8Memory().subarray(ptr + writeOffset, ptr + size);
						const { read, written } = cachedTextEncoder.encodeInto(arg, view);
						writeOffset += written;
						if (read === arg.length) break;
						arg = arg.substring(read);
						ptr = wasm.__wbindgen_realloc(ptr, size, size += arg.length * 3);
					}
					WASM_VECTOR_LEN = writeOffset;
					return ptr;
				};
			} else {
				passStringToWasm = function (arg) {
					const buf = cachedTextEncoder.encode(arg);
					const ptr = wasm.__wbindgen_malloc(buf.length);
					getUint8Memory().set(buf, ptr);
					WASM_VECTOR_LEN = buf.length;
					return ptr;
				};
			}

			let cachegetUint8Memory = null;
			function getUint8Memory () {
				if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer)
					cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
				return cachegetUint8Memory;
			}

			const heap = new Array(32);
			heap.fill(undefined);
			heap.push(undefined, null, true, false);

			let heap_next = heap.length;
			addHeapObject = (obj) => {
				if (heap_next === heap.length) heap.push(heap.length + 1);
				const idx = heap_next;
				heap_next = heap[idx];

				heap[idx] = obj;
				return idx;
			};
			getObject = (idx) => heap[idx];
			dropObject = (idx) => {
				if (idx < 36) return;
				heap[idx] = heap_next;
				heap_next = idx;
			};
			takeObject = (idx) => {
				const ret = getObject(idx);
				dropObject(idx);
				return ret;
			};

			let cachedTextDecoder = new TextDecoder("utf-8");
			getStringFromWasm = (ptr, len) => cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));

			let cachedGlobalArgumentPtr = null;
			globalArgumentPtr = () => {
				if (cachedGlobalArgumentPtr === null)
					cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
				return cachedGlobalArgumentPtr;
			};

			let cachegetUint32Memory = null;
			getUint32Memory = () => {
				if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer)
					cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
				return cachegetUint32Memory;
			};

			resolve();
		});
	});
}

/**
* @param {string} yml_str
* @param {any} options
* @returns {any}
*/
export function load (yml_str, options) {
	const ptr0 = passStringToWasm(yml_str);
	const len0 = WASM_VECTOR_LEN;
	try {
		return takeObject(wasm.load(ptr0, len0, addHeapObject(options)));
	} finally {
		wasm.__wbindgen_free(ptr0, len0 * 1);
	}
}

/**
* @param {string} yml_str
* @param {any} options
* @returns {any}
*/
export function safeLoad (yml_str, options) {
	const ptr0 = passStringToWasm(yml_str);
	const len0 = WASM_VECTOR_LEN;
	try {
		return takeObject(wasm.safeLoad(ptr0, len0, addHeapObject(options)));
	} finally {
		wasm.__wbindgen_free(ptr0, len0 * 1);
	}
}

/**
* @param {string} yml_str
* @param {any} options
* @returns {any}
*/
export function loadAll (yml_str, options) {
	const ptr0 = passStringToWasm(yml_str);
	const len0 = WASM_VECTOR_LEN;
	try {
		return takeObject(wasm.loadAll(ptr0, len0, addHeapObject(options)));
	} finally {
		wasm.__wbindgen_free(ptr0, len0 * 1);
	}
}

/**
* @param {any} object
* @param {any} options
* @returns {string}
*/
export function dump (object, options) {
	const retptr = globalArgumentPtr();
	wasm.dump(retptr, addHeapObject(object), addHeapObject(options));
	const mem = getUint32Memory();
	const rustptr = mem[retptr / 4];
	const rustlen = mem[retptr / 4 + 1];

	const realRet = getStringFromWasm(rustptr, rustlen).slice();
	wasm.__wbindgen_free(rustptr, rustlen * 1);
	return realRet;

}

/**
* @param {any} object
* @param {any} options
* @returns {string}
*/
export function safeDump (object, options) {
	const retptr = globalArgumentPtr();
	wasm.safeDump(retptr, addHeapObject(object), addHeapObject(options));
	const mem = getUint32Memory();
	const rustptr = mem[retptr / 4];
	const rustlen = mem[retptr / 4 + 1];

	const realRet = getStringFromWasm(rustptr, rustlen).slice();
	wasm.__wbindgen_free(rustptr, rustlen * 1);
	return realRet;
}
