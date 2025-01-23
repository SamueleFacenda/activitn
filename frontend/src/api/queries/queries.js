"use strict";
// generated with @7nohe/openapi-react-query-codegen@1.6.2 
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
exports.useDefaultServiceDeleteUsersById = exports.useDefaultServiceDeleteEventsByEventIdByUserId = exports.useDefaultServiceDeleteEventsById = exports.useDefaultServicePatchUsersById = exports.useDefaultServicePatchEventsById = exports.useDefaultServicePostEventsByEventIdByUserId = exports.useDefaultServicePostEvents = exports.useDefaultServicePostAuthLogin = exports.useDefaultServicePostAuthRegister = exports.useDefaultServiceGetUsersByIdSubscriptions = exports.useDefaultServiceGetUsersByIdParticipations = exports.useDefaultServiceGetUsersByIdEvents = exports.useDefaultServiceGetUsersById = exports.useDefaultServiceGetUsers = exports.useDefaultServiceGetEventsById = exports.useDefaultServiceGetEvents = void 0;
const react_query_1 = require("@tanstack/react-query");
const services_gen_1 = require("../requests/services.gen");
const Common = __importStar(require("./common"));
const useDefaultServiceGetEvents = (queryKey, options) => (0, react_query_1.useQuery)(Object.assign({ queryKey: Common.UseDefaultServiceGetEventsKeyFn(queryKey), queryFn: () => services_gen_1.DefaultService.getEvents() }, options));
exports.useDefaultServiceGetEvents = useDefaultServiceGetEvents;
const useDefaultServiceGetEventsById = ({ id }, queryKey, options) => (0, react_query_1.useQuery)(Object.assign({ queryKey: Common.UseDefaultServiceGetEventsByIdKeyFn({ id }, queryKey), queryFn: () => services_gen_1.DefaultService.getEventsById({ id }) }, options));
exports.useDefaultServiceGetEventsById = useDefaultServiceGetEventsById;
const useDefaultServiceGetUsers = (queryKey, options) => (0, react_query_1.useQuery)(Object.assign({ queryKey: Common.UseDefaultServiceGetUsersKeyFn(queryKey), queryFn: () => services_gen_1.DefaultService.getUsers() }, options));
exports.useDefaultServiceGetUsers = useDefaultServiceGetUsers;
const useDefaultServiceGetUsersById = ({ id }, queryKey, options) => (0, react_query_1.useQuery)(Object.assign({ queryKey: Common.UseDefaultServiceGetUsersByIdKeyFn({ id }, queryKey), queryFn: () => services_gen_1.DefaultService.getUsersById({ id }) }, options));
exports.useDefaultServiceGetUsersById = useDefaultServiceGetUsersById;
const useDefaultServiceGetUsersByIdEvents = ({ id }, queryKey, options) => (0, react_query_1.useQuery)(Object.assign({ queryKey: Common.UseDefaultServiceGetUsersByIdEventsKeyFn({ id }, queryKey), queryFn: () => services_gen_1.DefaultService.getUsersByIdEvents({ id }) }, options));
exports.useDefaultServiceGetUsersByIdEvents = useDefaultServiceGetUsersByIdEvents;
const useDefaultServiceGetUsersByIdParticipations = ({ id }, queryKey, options) => (0, react_query_1.useQuery)(Object.assign({ queryKey: Common.UseDefaultServiceGetUsersByIdParticipationsKeyFn({ id }, queryKey), queryFn: () => services_gen_1.DefaultService.getUsersByIdParticipations({ id }) }, options));
exports.useDefaultServiceGetUsersByIdParticipations = useDefaultServiceGetUsersByIdParticipations;
const useDefaultServiceGetUsersByIdSubscriptions = ({ id }, queryKey, options) => (0, react_query_1.useQuery)(Object.assign({ queryKey: Common.UseDefaultServiceGetUsersByIdSubscriptionsKeyFn({ id }, queryKey), queryFn: () => services_gen_1.DefaultService.getUsersByIdSubscriptions({ id }) }, options));
exports.useDefaultServiceGetUsersByIdSubscriptions = useDefaultServiceGetUsersByIdSubscriptions;
const useDefaultServicePostAuthRegister = (options) => (0, react_query_1.useMutation)(Object.assign({ mutationFn: ({ requestBody }) => services_gen_1.DefaultService.postAuthRegister({ requestBody }) }, options));
exports.useDefaultServicePostAuthRegister = useDefaultServicePostAuthRegister;
const useDefaultServicePostAuthLogin = (options) => (0, react_query_1.useMutation)(Object.assign({ mutationFn: ({ requestBody }) => services_gen_1.DefaultService.postAuthLogin({ requestBody }) }, options));
exports.useDefaultServicePostAuthLogin = useDefaultServicePostAuthLogin;
const useDefaultServicePostEvents = (options) => (0, react_query_1.useMutation)(Object.assign({ mutationFn: ({ requestBody }) => services_gen_1.DefaultService.postEvents({ requestBody }) }, options));
exports.useDefaultServicePostEvents = useDefaultServicePostEvents;
const useDefaultServicePostEventsByEventIdByUserId = (options) => (0, react_query_1.useMutation)(Object.assign({ mutationFn: ({ eventId, userId }) => services_gen_1.DefaultService.postEventsByEventIdByUserId({ eventId, userId }) }, options));
exports.useDefaultServicePostEventsByEventIdByUserId = useDefaultServicePostEventsByEventIdByUserId;
const useDefaultServicePatchEventsById = (options) => (0, react_query_1.useMutation)(Object.assign({ mutationFn: ({ id, requestBody }) => services_gen_1.DefaultService.patchEventsById({ id, requestBody }) }, options));
exports.useDefaultServicePatchEventsById = useDefaultServicePatchEventsById;
const useDefaultServicePatchUsersById = (options) => (0, react_query_1.useMutation)(Object.assign({ mutationFn: ({ id, requestBody }) => services_gen_1.DefaultService.patchUsersById({ id, requestBody }) }, options));
exports.useDefaultServicePatchUsersById = useDefaultServicePatchUsersById;
const useDefaultServiceDeleteEventsById = (options) => (0, react_query_1.useMutation)(Object.assign({ mutationFn: ({ id }) => services_gen_1.DefaultService.deleteEventsById({ id }) }, options));
exports.useDefaultServiceDeleteEventsById = useDefaultServiceDeleteEventsById;
const useDefaultServiceDeleteEventsByEventIdByUserId = (options) => (0, react_query_1.useMutation)(Object.assign({ mutationFn: ({ eventId, userId }) => services_gen_1.DefaultService.deleteEventsByEventIdByUserId({ eventId, userId }) }, options));
exports.useDefaultServiceDeleteEventsByEventIdByUserId = useDefaultServiceDeleteEventsByEventIdByUserId;
const useDefaultServiceDeleteUsersById = (options) => (0, react_query_1.useMutation)(Object.assign({ mutationFn: ({ id }) => services_gen_1.DefaultService.deleteUsersById({ id }) }, options));
exports.useDefaultServiceDeleteUsersById = useDefaultServiceDeleteUsersById;
