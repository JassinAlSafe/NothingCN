"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegistryItem = getRegistryItem;
exports.downloadFile = downloadFile;
exports.getRegistry = getRegistry;
const node_fetch_1 = __importDefault(require("node-fetch"));
const zod_1 = require("zod");
const REGISTRY_URL = process.env.NOTHINGCN_REGISTRY_URL || 'https://component-showcase-six.vercel.app/api/registry';
const FILES_URL = process.env.NOTHINGCN_FILES_URL || 'https://component-showcase-six.vercel.app/api/registry/files';
const FileSchema = zod_1.z.object({
    path: zod_1.z.string(),
    type: zod_1.z.string(),
    target: zod_1.z.string().optional(),
});
const RegistryItemSchema = zod_1.z.object({
    name: zod_1.z.string(),
    type: zod_1.z.string(),
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    files: zod_1.z.array(FileSchema),
    dependencies: zod_1.z.array(zod_1.z.string()).optional(),
    registryDependencies: zod_1.z.array(zod_1.z.string()).optional(),
    tailwind: zod_1.z.object({}).optional(),
    cssVars: zod_1.z.object({
        light: zod_1.z.object({}).optional(),
        dark: zod_1.z.object({}).optional(),
    }).optional(),
    categories: zod_1.z.array(zod_1.z.string()).optional(),
    docs: zod_1.z.string().optional(),
});
async function getRegistryItem(name) {
    try {
        const response = await (0, node_fetch_1.default)(`${REGISTRY_URL}/${name}`);
        if (!response.ok) {
            if (response.status === 404) {
                return null;
            }
            throw new Error(`Registry request failed: ${response.statusText}`);
        }
        const data = await response.json();
        return RegistryItemSchema.parse(data);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            throw new Error('Invalid registry response format');
        }
        throw error;
    }
}
async function downloadFile(path) {
    // Use our file serving API
    const url = `${FILES_URL}/${path}`;
    const response = await (0, node_fetch_1.default)(url);
    if (!response.ok) {
        throw new Error(`Failed to download file: ${path} (${response.status}: ${response.statusText})`);
    }
    return response.text();
}
async function getRegistry() {
    try {
        const response = await (0, node_fetch_1.default)(REGISTRY_URL);
        if (!response.ok) {
            throw new Error(`Registry request failed: ${response.statusText}`);
        }
        return response.json();
    }
    catch (error) {
        throw new Error(`Failed to fetch registry: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}
//# sourceMappingURL=registry.js.map