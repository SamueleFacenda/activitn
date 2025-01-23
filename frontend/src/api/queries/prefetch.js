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
exports.prefetchUseDefaultServiceGetUsersByIdSubscriptions = exports.prefetchUseDefaultServiceGetUsersByIdParticipations = exports.prefetchUseDefaultServiceGetUsersByIdEvents = exports.prefetchUseDefaultServiceGetUsersById = exports.prefetchUseDefaultServiceGetUsers = exports.prefetchUseDefaultServiceGetEventsById = exports.prefetchUseDefaultServiceGetEvents = void 0;
const services_gen_1 = require("../requests/services.gen");
const Common = __importStar(require("./common"));
const prefetchUseDefaultServiceGetEvents = (queryClient) => queryClient.prefetchQuery({ queryKey: Common.UseDefaultServiceGetEventsKeyFn(), queryFn: () => services_gen_1.DefaultService.getEvents() });
exports.prefetchUseDefaultServiceGetEvents = prefetchUseDefaultServiceGetEvents;
const prefetchUseDefaultServiceGetEventsById = (queryClient, { id }) => queryClient.prefetchQuery({ queryKey: Common.UseDefaultServiceGetEventsByIdKeyFn({ id }), queryFn: () => services_gen_1.DefaultService.getEventsById({ id }) });
exports.prefetchUseDefaultServiceGetEventsById = prefetchUseDefaultServiceGetEventsById;
const prefetchUseDefaultServiceGetUsers = (queryClient) => queryClient.prefetchQuery({ queryKey: Common.UseDefaultServiceGetUsersKeyFn(), queryFn: () => services_gen_1.DefaultService.getUsers() });
exports.prefetchUseDefaultServiceGetUsers = prefetchUseDefaultServiceGetUsers;
const prefetchUseDefaultServiceGetUsersById = (queryClient, { id }) => queryClient.prefetchQuery({ queryKey: Common.UseDefaultServiceGetUsersByIdKeyFn({ id }), queryFn: () => services_gen_1.DefaultService.getUsersById({ id }) });
exports.prefetchUseDefaultServiceGetUsersById = prefetchUseDefaultServiceGetUsersById;
const prefetchUseDefaultServiceGetUsersByIdEvents = (queryClient, { id }) => queryClient.prefetchQuery({ queryKey: Common.UseDefaultServiceGetUsersByIdEventsKeyFn({ id }), queryFn: () => services_gen_1.DefaultService.getUsersByIdEvents({ id }) });
exports.prefetchUseDefaultServiceGetUsersByIdEvents = prefetchUseDefaultServiceGetUsersByIdEvents;
const prefetchUseDefaultServiceGetUsersByIdParticipations = (queryClient, { id }) => queryClient.prefetchQuery({ queryKey: Common.UseDefaultServiceGetUsersByIdParticipationsKeyFn({ id }), queryFn: () => services_gen_1.DefaultService.getUsersByIdParticipations({ id }) });
exports.prefetchUseDefaultServiceGetUsersByIdParticipations = prefetchUseDefaultServiceGetUsersByIdParticipations;
const prefetchUseDefaultServiceGetUsersByIdSubscriptions = (queryClient, { id }) => queryClient.prefetchQuery({ queryKey: Common.UseDefaultServiceGetUsersByIdSubscriptionsKeyFn({ id }), queryFn: () => services_gen_1.DefaultService.getUsersByIdSubscriptions({ id }) });
exports.prefetchUseDefaultServiceGetUsersByIdSubscriptions = prefetchUseDefaultServiceGetUsersByIdSubscriptions;
