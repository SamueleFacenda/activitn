"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAPI = exports.Interceptors = void 0;
class Interceptors {
    constructor() {
        this._fns = [];
    }
    eject(fn) {
        const index = this._fns.indexOf(fn);
        if (index !== -1) {
            this._fns = [...this._fns.slice(0, index), ...this._fns.slice(index + 1)];
        }
    }
    use(fn) {
        this._fns = [...this._fns, fn];
    }
}
exports.Interceptors = Interceptors;
exports.OpenAPI = {
    BASE: 'http://localhost:8000/api/v1',
    CREDENTIALS: 'include',
    ENCODE_PATH: undefined,
    HEADERS: undefined,
    PASSWORD: undefined,
    TOKEN: undefined,
    USERNAME: undefined,
    VERSION: '1',
    WITH_CREDENTIALS: false,
    interceptors: {
        request: new Interceptors(),
        response: new Interceptors(),
    },
};
