"use strict";
// generated with @7nohe/openapi-react-query-codegen@2.0.0-beta.3 
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.prefetchUseGetUsersByIdSubscriptions = exports.prefetchUseGetUsersByIdParticipations = exports.prefetchUseGetUsersByIdEvents = exports.prefetchUseGetUsersById = exports.prefetchUseGetUsers = exports.prefetchUseGetEventsById = exports.prefetchUseGetEvents = void 0;
const services_gen_1 = require("../requests/services.gen");
const Common = __importStar(require("./common"));
const prefetchUseGetEvents = (queryClient, clientOptions) => queryClient.prefetchQuery({ queryKey: Common.UseGetEventsKeyFn(clientOptions), queryFn: () => (0, services_gen_1.getEvents)(Object.assign({}, clientOptions)).then(response => response.data) });
exports.prefetchUseGetEvents = prefetchUseGetEvents;
const prefetchUseGetEventsById = (queryClient, clientOptions) => queryClient.prefetchQuery({ queryKey: Common.UseGetEventsByIdKeyFn(clientOptions), queryFn: () => (0, services_gen_1.getEventsById)(Object.assign({}, clientOptions)).then(response => response.data) });
exports.prefetchUseGetEventsById = prefetchUseGetEventsById;
const prefetchUseGetUsers = (queryClient, clientOptions = {}) => queryClient.prefetchQuery({ queryKey: Common.UseGetUsersKeyFn(clientOptions), queryFn: () => (0, services_gen_1.getUsers)(Object.assign({}, clientOptions)).then(response => response.data) });
exports.prefetchUseGetUsers = prefetchUseGetUsers;
const prefetchUseGetUsersById = (queryClient, clientOptions) => queryClient.prefetchQuery({ queryKey: Common.UseGetUsersByIdKeyFn(clientOptions), queryFn: () => (0, services_gen_1.getUsersById)(Object.assign({}, clientOptions)).then(response => response.data) });
exports.prefetchUseGetUsersById = prefetchUseGetUsersById;
const prefetchUseGetUsersByIdEvents = (queryClient, clientOptions) => queryClient.prefetchQuery({ queryKey: Common.UseGetUsersByIdEventsKeyFn(clientOptions), queryFn: () => (0, services_gen_1.getUsersByIdEvents)(Object.assign({}, clientOptions)).then(response => response.data) });
exports.prefetchUseGetUsersByIdEvents = prefetchUseGetUsersByIdEvents;
const prefetchUseGetUsersByIdParticipations = (queryClient, clientOptions) => queryClient.prefetchQuery({ queryKey: Common.UseGetUsersByIdParticipationsKeyFn(clientOptions), queryFn: () => (0, services_gen_1.getUsersByIdParticipations)(Object.assign({}, clientOptions)).then(response => response.data) });
exports.prefetchUseGetUsersByIdParticipations = prefetchUseGetUsersByIdParticipations;
const prefetchUseGetUsersByIdSubscriptions = (queryClient, clientOptions) => queryClient.prefetchQuery({ queryKey: Common.UseGetUsersByIdSubscriptionsKeyFn(clientOptions), queryFn: () => (0, services_gen_1.getUsersByIdSubscriptions)(Object.assign({}, clientOptions)).then(response => response.data) });
exports.prefetchUseGetUsersByIdSubscriptions = prefetchUseGetUsersByIdSubscriptions;
