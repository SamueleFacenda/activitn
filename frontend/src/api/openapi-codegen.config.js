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
const typescript_1 = require("@openapi-codegen/typescript");
const cli_1 = require("@openapi-codegen/cli");
exports.default = (0, cli_1.defineConfig)({
    api: {
        from: {
            relativePath: "./swagger/oas3.yaml",
            source: "file",
        },
        outputDir: "./frontend/src/api",
        to: (context) => __awaiter(void 0, void 0, void 0, function* () {
            const filenamePrefix = "api";
            const { schemasFiles } = yield (0, typescript_1.generateSchemaTypes)(context, {
                filenamePrefix,
            });
            yield (0, typescript_1.generateReactQueryComponents)(context, {
                filenamePrefix,
                schemasFiles,
            });
        }),
    },
});
