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
exports.ensureUseDefaultServiceGetUsersByIdSubscriptionsData = exports.ensureUseDefaultServiceGetUsersByIdParticipationsData = exports.ensureUseDefaultServiceGetUsersByIdEventsData = exports.ensureUseDefaultServiceGetUsersByIdData = exports.ensureUseDefaultServiceGetUsersData = exports.ensureUseDefaultServiceGetEventsByIdData = exports.ensureUseDefaultServiceGetEventsData = void 0;
const services_gen_1 = require("../requests/services.gen");
const Common = __importStar(require("./common"));
const ensureUseDefaultServiceGetEventsData = (queryClient) => queryClient.ensureQueryData({ queryKey: Common.UseDefaultServiceGetEventsKeyFn(), queryFn: () => services_gen_1.DefaultService.getEvents() });
exports.ensureUseDefaultServiceGetEventsData = ensureUseDefaultServiceGetEventsData;
const ensureUseDefaultServiceGetEventsByIdData = (queryClient, { id }) => queryClient.ensureQueryData({ queryKey: Common.UseDefaultServiceGetEventsByIdKeyFn({ id }), queryFn: () => services_gen_1.DefaultService.getEventsById({ id }) });
exports.ensureUseDefaultServiceGetEventsByIdData = ensureUseDefaultServiceGetEventsByIdData;
const ensureUseDefaultServiceGetUsersData = (queryClient) => queryClient.ensureQueryData({ queryKey: Common.UseDefaultServiceGetUsersKeyFn(), queryFn: () => services_gen_1.DefaultService.getUsers() });
exports.ensureUseDefaultServiceGetUsersData = ensureUseDefaultServiceGetUsersData;
const ensureUseDefaultServiceGetUsersByIdData = (queryClient, { id }) => queryClient.ensureQueryData({ queryKey: Common.UseDefaultServiceGetUsersByIdKeyFn({ id }), queryFn: () => services_gen_1.DefaultService.getUsersById({ id }) });
exports.ensureUseDefaultServiceGetUsersByIdData = ensureUseDefaultServiceGetUsersByIdData;
const ensureUseDefaultServiceGetUsersByIdEventsData = (queryClient, { id }) => queryClient.ensureQueryData({ queryKey: Common.UseDefaultServiceGetUsersByIdEventsKeyFn({ id }), queryFn: () => services_gen_1.DefaultService.getUsersByIdEvents({ id }) });
exports.ensureUseDefaultServiceGetUsersByIdEventsData = ensureUseDefaultServiceGetUsersByIdEventsData;
const ensureUseDefaultServiceGetUsersByIdParticipationsData = (queryClient, { id }) => queryClient.ensureQueryData({ queryKey: Common.UseDefaultServiceGetUsersByIdParticipationsKeyFn({ id }), queryFn: () => services_gen_1.DefaultService.getUsersByIdParticipations({ id }) });
exports.ensureUseDefaultServiceGetUsersByIdParticipationsData = ensureUseDefaultServiceGetUsersByIdParticipationsData;
const ensureUseDefaultServiceGetUsersByIdSubscriptionsData = (queryClient, { id }) => queryClient.ensureQueryData({ queryKey: Common.UseDefaultServiceGetUsersByIdSubscriptionsKeyFn({ id }), queryFn: () => services_gen_1.DefaultService.getUsersByIdSubscriptions({ id }) });
exports.ensureUseDefaultServiceGetUsersByIdSubscriptionsData = ensureUseDefaultServiceGetUsersByIdSubscriptionsData;
