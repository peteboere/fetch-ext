import {Headers, Request, Response} from './api.native.js';

export {default as httpMethods} from './http-methods.js';
export * from './http-methods.js';
export * as httpCodes from './http-codes.js';
export * from './http-codes.js';
export * as mimeTypes from './mime-types.js';

export function isHeaders(it) {

    /** @type {any[]} */
    const candidates = [
        Headers,
    ];

    if (globalThis.Headers) {
        candidates.push(globalThis.Headers);
    }

    return isInstanceOf(it, ...candidates);
}

export function isRequest(it) {
    return it instanceof Request;
}

export function isResponse(it) {
    return it instanceof Response;
}

export function toHeaders(it) {
    return isHeaders(it)
        ? it
        : new Headers(it);
}

function isInstanceOf(object, ...constructors) {
    return constructors
        .some(it => object instanceof it);
}
