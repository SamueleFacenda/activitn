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
exports.useDefaultServiceGetUsersByIdSubscriptionsSuspense = exports.useDefaultServiceGetUsersByIdParticipationsSuspense = exports.useDefaultServiceGetUsersByIdEventsSuspense = exports.useDefaultServiceGetUsersByIdSuspense = exports.useDefaultServiceGetUsersSuspense = exports.useDefaultServiceGetEventsByIdSuspense = exports.useDefaultServiceGetEventsSuspense = void 0;
const react_query_1 = require("@tanstack/react-query");
const services_gen_1 = require("../requests/services.gen");
const Common = __importStar(require("./common"));
const useDefaultServiceGetEventsSuspense = (queryKey, options) => (0, react_query_1.useSuspenseQuery)(Object.assign({ queryKey: Common.UseDefaultServiceGetEventsKeyFn(queryKey), queryFn: () => services_gen_1.DefaultService.getEvents() }, options));
exports.useDefaultServiceGetEventsSuspense = useDefaultServiceGetEventsSuspense;
const useDefaultServiceGetEventsByIdSuspense = ({ id }, queryKey, options) => (0, react_query_1.useSuspenseQuery)(Object.assign({ queryKey: Common.UseDefaultServiceGetEventsByIdKeyFn({ id }, queryKey), queryFn: () => services_gen_1.DefaultService.getEventsById({ id }) }, options));
exports.useDefaultServiceGetEventsByIdSuspense = useDefaultServiceGetEventsByIdSuspense;
const useDefaultServiceGetUsersSuspense = (queryKey, options) => (0, react_query_1.useSuspenseQuery)(Object.assign({ queryKey: Common.UseDefaultServiceGetUsersKeyFn(queryKey), queryFn: () => services_gen_1.DefaultService.getUsers() }, options));
exports.useDefaultServiceGetUsersSuspense = useDefaultServiceGetUsersSuspense;
const useDefaultServiceGetUsersByIdSuspense = ({ id }, queryKey, options) => (0, react_query_1.useSuspenseQuery)(Object.assign({ queryKey: Common.UseDefaultServiceGetUsersByIdKeyFn({ id }, queryKey), queryFn: () => services_gen_1.DefaultService.getUsersById({ id }) }, options));
exports.useDefaultServiceGetUsersByIdSuspense = useDefaultServiceGetUsersByIdSuspense;
const useDefaultServiceGetUsersByIdEventsSuspense = ({ id }, queryKey, options) => (0, react_query_1.useSuspenseQuery)(Object.assign({ queryKey: Common.UseDefaultServiceGetUsersByIdEventsKeyFn({ id }, queryKey), queryFn: () => services_gen_1.DefaultService.getUsersByIdEvents({ id }) }, options));
exports.useDefaultServiceGetUsersByIdEventsSuspense = useDefaultServiceGetUsersByIdEventsSuspense;
const useDefaultServiceGetUsersByIdParticipationsSuspense = ({ id }, queryKey, options) => (0, react_query_1.useSuspenseQuery)(Object.assign({ queryKey: Common.UseDefaultServiceGetUsersByIdParticipationsKeyFn({ id }, queryKey), queryFn: () => services_gen_1.DefaultService.getUsersByIdParticipations({ id }) }, options));
exports.useDefaultServiceGetUsersByIdParticipationsSuspense = useDefaultServiceGetUsersByIdParticipationsSuspense;
const useDefaultServiceGetUsersByIdSubscriptionsSuspense = ({ id }, queryKey, options) => (0, react_query_1.useSuspenseQuery)(Object.assign({ queryKey: Common.UseDefaultServiceGetUsersByIdSubscriptionsKeyFn({ id }, queryKey), queryFn: () => services_gen_1.DefaultService.getUsersByIdSubscriptions({ id }) }, options));
exports.useDefaultServiceGetUsersByIdSubscriptionsSuspense = useDefaultServiceGetUsersByIdSubscriptionsSuspense;
