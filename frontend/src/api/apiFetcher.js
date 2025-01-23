"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiFetch = apiFetch;
const baseUrl = "http://localhost:8000/api/v1";
function apiFetch(_a) {
    return __awaiter(this, arguments, void 0, function* ({ url, method, body, headers, pathParams, queryParams, signal, }) {
        var _b;
        try {
            const requestHeaders = Object.assign({ "Content-Type": "application/json" }, headers);
            /**
             * As the fetch API is being used, when multipart/form-data is specified
             * the Content-Type header must be deleted so that the browser can set
             * the correct boundary.
             * https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects#sending_files_using_a_formdata_object
             */
            if (requestHeaders["Content-Type"]
                .toLowerCase()
                .includes("multipart/form-data")) {
                delete requestHeaders["Content-Type"];
            }
            const response = yield window.fetch(`${baseUrl}${resolveUrl(url, queryParams, pathParams)}`, {
                signal,
                method: method.toUpperCase(),
                body: body
                    ? body instanceof FormData
                        ? body
                        : JSON.stringify(body)
                    : undefined,
                headers: requestHeaders,
            });
            if (!response.ok) {
                let error;
                try {
                    error = yield response.json();
                }
                catch (e) {
                    error = {
                        status: "unknown",
                        payload: e instanceof Error
                            ? `Unexpected error (${e.message})`
                            : "Unexpected error",
                    };
                }
                throw error;
            }
            if ((_b = response.headers.get("content-type")) === null || _b === void 0 ? void 0 : _b.includes("json")) {
                return yield response.json();
            }
            else {
                // if it is not a json response, assume it is a blob and cast it to TData
                return (yield response.blob());
            }
        }
        catch (e) {
            let errorObject = {
                name: "unknown",
                message: e instanceof Error ? `Network error (${e.message})` : "Network error",
                stack: e,
            };
            throw errorObject;
        }
    });
}
const resolveUrl = (url, queryParams = {}, pathParams = {}) => {
    let query = new URLSearchParams(queryParams).toString();
    if (query)
        query = `?${query}`;
    return url.replace(/\{\w*\}/g, (key) => pathParams[key.slice(1, -1)]) + query;
};
