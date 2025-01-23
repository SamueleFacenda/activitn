"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryKeyFn = void 0;
exports.useApiContext = useApiContext;
/**
 * Context injected into every react-query hook wrappers
 *
 * @param queryOptions options from the useQuery wrapper
 */
function useApiContext(_queryOptions) {
    return {
        fetcherOptions: {},
        queryOptions: {},
        queryKeyFn: exports.queryKeyFn,
    };
}
const queryKeyFn = (operation) => {
    const queryKey = hasPathParams(operation)
        ? operation.path
            .split("/")
            .filter(Boolean)
            .map((i) => resolvePathParam(i, operation.variables.pathParams))
        : operation.path.split("/").filter(Boolean);
    if (hasQueryParams(operation)) {
        queryKey.push(operation.variables.queryParams);
    }
    if (hasBody(operation)) {
        queryKey.push(operation.variables.body);
    }
    return queryKey;
};
exports.queryKeyFn = queryKeyFn;
// Helpers
const resolvePathParam = (key, pathParams) => {
    if (key.startsWith("{") && key.endsWith("}")) {
        return pathParams[key.slice(1, -1)];
    }
    return key;
};
const hasPathParams = (operation) => {
    return Boolean(operation.variables.pathParams);
};
const hasBody = (operation) => {
    return Boolean(operation.variables.body);
};
const hasQueryParams = (operation) => {
    return Boolean(operation.variables.queryParams);
};
