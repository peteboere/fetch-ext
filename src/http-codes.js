/*
 * Status ranges:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */
const statusTest = (min, max) => {
    return status => {
        if (! Number.isInteger(status)) {
            throw new TypeError('Status must be an integer');
        }
        return status >= min && status <= max;
    };
};

export const isSuccessCode = statusTest(200, 299);
export const isRedirectionCode = statusTest(300, 399);
export const isClientErrorCode = statusTest(400, 499);
export const isServerErrorCode = statusTest(500, 599);

export const ACCEPTED = 202;
export const BAD_GATEWAY = 502;
export const BAD_REQUEST = 400;
export const CONFLICT = 409;
export const CONTINUE = 100;
export const CREATED = 201;
export const EXPECTATION_FAILED = 417;
export const FAILED_DEPENDENCY = 424;
export const FORBIDDEN = 403;
export const GATEWAY_TIMEOUT = 504;
export const GONE = 410;
export const HTTP_VERSION_NOT_SUPPORTED = 505;
export const IM_A_TEAPOT = 418;
export const INSUFFICIENT_SPACE_ON_RESOURCE = 419;
export const INSUFFICIENT_STORAGE = 507;
export const INTERNAL_SERVER_ERROR = 500;
export const LENGTH_REQUIRED = 411;
export const LOCKED = 423;
export const METHOD_FAILURE = 420;
export const METHOD_NOT_ALLOWED = 405;
export const MOVED_PERMANENTLY = 301;
export const MOVED_TEMPORARILY = 302;
export const MULTI_STATUS = 207;
export const MULTIPLE_CHOICES = 300;
export const NETWORK_AUTHENTICATION_REQUIRED = 511;
export const NO_CONTENT = 204;
export const NON_AUTHORITATIVE_INFORMATION = 203;
export const NOT_ACCEPTABLE = 406;
export const NOT_FOUND = 404;
export const NOT_IMPLEMENTED = 501;
export const NOT_MODIFIED = 304;
export const OK = 200;
export const PARTIAL_CONTENT = 206;
export const PAYMENT_REQUIRED = 402;
export const PERMANENT_REDIRECT = 308;
export const PRECONDITION_FAILED = 412;
export const PRECONDITION_REQUIRED = 428;
export const PROCESSING = 102;
export const PROXY_AUTHENTICATION_REQUIRED = 407;
export const REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
export const REQUEST_TIMEOUT = 408;
export const REQUEST_TOO_LONG = 413;
export const REQUEST_URI_TOO_LONG = 414;
export const REQUESTED_RANGE_NOT_SATISFIABLE = 416;
export const RESET_CONTENT = 205;
export const SEE_OTHER = 303;
export const SERVICE_UNAVAILABLE = 503;
export const SWITCHING_PROTOCOLS = 101;
export const TEMPORARY_REDIRECT = 307;
export const TOO_MANY_REQUESTS = 429;
export const UNAUTHORIZED = 401;
export const UNPROCESSABLE_ENTITY = 422;
export const UNSUPPORTED_MEDIA_TYPE = 415;
export const USE_PROXY = 305;
