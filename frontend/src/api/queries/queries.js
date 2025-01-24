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
exports.useDeleteUsersById = exports.useDeleteEventsByEventIdByUserId = exports.useDeleteEventsById = exports.usePatchUsersById = exports.usePatchEventsById = exports.usePostEventsByEventIdByUserId = exports.usePostEvents = exports.usePostAuthLogin = exports.usePostAuthRegister = exports.useGetUsersByIdSubscriptions = exports.useGetUsersByIdParticipations = exports.useGetUsersByIdEvents = exports.useGetUsersById = exports.useGetUsers = exports.useGetEventsById = exports.useGetEvents = void 0;
const react_query_1 = require("@tanstack/react-query");
const services_gen_1 = require("../requests/services.gen");
const Common = __importStar(require("./common"));
const useGetEvents = (clientOptions = {}, queryKey, options) => (0, react_query_1.useQuery)(Object.assign({ queryKey: Common.UseGetEventsKeyFn(clientOptions, queryKey), queryFn: () => (0, services_gen_1.getEvents)(Object.assign({}, clientOptions)).then(response => response.data) }, options));
exports.useGetEvents = useGetEvents;
const useGetEventsById = (clientOptions, queryKey, options) => (0, react_query_1.useQuery)(Object.assign({ queryKey: Common.UseGetEventsByIdKeyFn(clientOptions, queryKey), queryFn: () => (0, services_gen_1.getEventsById)(Object.assign({}, clientOptions)).then(response => response.data) }, options));
exports.useGetEventsById = useGetEventsById;
const useGetUsers = (clientOptions = {}, queryKey, options) => (0, react_query_1.useQuery)(Object.assign({ queryKey: Common.UseGetUsersKeyFn(clientOptions, queryKey), queryFn: () => (0, services_gen_1.getUsers)(Object.assign({}, clientOptions)).then(response => response.data) }, options));
exports.useGetUsers = useGetUsers;
const useGetUsersById = (clientOptions, queryKey, options) => (0, react_query_1.useQuery)(Object.assign({ queryKey: Common.UseGetUsersByIdKeyFn(clientOptions, queryKey), queryFn: () => (0, services_gen_1.getUsersById)(Object.assign({}, clientOptions)).then(response => response.data) }, options));
exports.useGetUsersById = useGetUsersById;
const useGetUsersByIdEvents = (clientOptions, queryKey, options) => (0, react_query_1.useQuery)(Object.assign({ queryKey: Common.UseGetUsersByIdEventsKeyFn(clientOptions, queryKey), queryFn: () => (0, services_gen_1.getUsersByIdEvents)(Object.assign({}, clientOptions)).then(response => response.data) }, options));
exports.useGetUsersByIdEvents = useGetUsersByIdEvents;
const useGetUsersByIdParticipations = (clientOptions, queryKey, options) => (0, react_query_1.useQuery)(Object.assign({ queryKey: Common.UseGetUsersByIdParticipationsKeyFn(clientOptions, queryKey), queryFn: () => (0, services_gen_1.getUsersByIdParticipations)(Object.assign({}, clientOptions)).then(response => response.data) }, options));
exports.useGetUsersByIdParticipations = useGetUsersByIdParticipations;
const useGetUsersByIdSubscriptions = (clientOptions, queryKey, options) => (0, react_query_1.useQuery)(Object.assign({ queryKey: Common.UseGetUsersByIdSubscriptionsKeyFn(clientOptions, queryKey), queryFn: () => (0, services_gen_1.getUsersByIdSubscriptions)(Object.assign({}, clientOptions)).then(response => response.data) }, options));
exports.useGetUsersByIdSubscriptions = useGetUsersByIdSubscriptions;
const usePostAuthRegister = (mutationKey, options) => (0, react_query_1.useMutation)(Object.assign({ mutationKey: Common.UsePostAuthRegisterKeyFn(mutationKey), mutationFn: clientOptions => (0, services_gen_1.postAuthRegister)(clientOptions) }, options));
exports.usePostAuthRegister = usePostAuthRegister;
const usePostAuthLogin = (mutationKey, options) => (0, react_query_1.useMutation)(Object.assign({ mutationKey: Common.UsePostAuthLoginKeyFn(mutationKey), mutationFn: clientOptions => (0, services_gen_1.postAuthLogin)(clientOptions) }, options));
exports.usePostAuthLogin = usePostAuthLogin;
const usePostEvents = (mutationKey, options) => (0, react_query_1.useMutation)(Object.assign({ mutationKey: Common.UsePostEventsKeyFn(mutationKey), mutationFn: clientOptions => (0, services_gen_1.postEvents)(clientOptions) }, options));
exports.usePostEvents = usePostEvents;
const usePostEventsByEventIdByUserId = (mutationKey, options) => (0, react_query_1.useMutation)(Object.assign({ mutationKey: Common.UsePostEventsByEventIdByUserIdKeyFn(mutationKey), mutationFn: clientOptions => (0, services_gen_1.postEventsByEventIdByUserId)(clientOptions) }, options));
exports.usePostEventsByEventIdByUserId = usePostEventsByEventIdByUserId;
const usePatchEventsById = (mutationKey, options) => (0, react_query_1.useMutation)(Object.assign({ mutationKey: Common.UsePatchEventsByIdKeyFn(mutationKey), mutationFn: clientOptions => (0, services_gen_1.patchEventsById)(clientOptions) }, options));
exports.usePatchEventsById = usePatchEventsById;
const usePatchUsersById = (mutationKey, options) => (0, react_query_1.useMutation)(Object.assign({ mutationKey: Common.UsePatchUsersByIdKeyFn(mutationKey), mutationFn: clientOptions => (0, services_gen_1.patchUsersById)(clientOptions) }, options));
exports.usePatchUsersById = usePatchUsersById;
const useDeleteEventsById = (mutationKey, options) => (0, react_query_1.useMutation)(Object.assign({ mutationKey: Common.UseDeleteEventsByIdKeyFn(mutationKey), mutationFn: clientOptions => (0, services_gen_1.deleteEventsById)(clientOptions) }, options));
exports.useDeleteEventsById = useDeleteEventsById;
const useDeleteEventsByEventIdByUserId = (mutationKey, options) => (0, react_query_1.useMutation)(Object.assign({ mutationKey: Common.UseDeleteEventsByEventIdByUserIdKeyFn(mutationKey), mutationFn: clientOptions => (0, services_gen_1.deleteEventsByEventIdByUserId)(clientOptions) }, options));
exports.useDeleteEventsByEventIdByUserId = useDeleteEventsByEventIdByUserId;
const useDeleteUsersById = (mutationKey, options) => (0, react_query_1.useMutation)(Object.assign({ mutationKey: Common.UseDeleteUsersByIdKeyFn(mutationKey), mutationFn: clientOptions => (0, services_gen_1.deleteUsersById)(clientOptions) }, options));
exports.useDeleteUsersById = useDeleteUsersById;
