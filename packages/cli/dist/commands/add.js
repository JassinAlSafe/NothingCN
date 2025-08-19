"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
const prompts_1 = __importDefault(require("prompts"));
const registry_1 = require("../utils/registry");
const package_manager_1 = require("../utils/package-manager");
async function add(components, options) {
    const { yes, overwrite, cwd = process.cwd(), path = 'src/components/ui' } = options;
    console.log(chalk_1.default.cyan('🎨 Adding NothingCN components...\n'));
    for (const componentName of components) {
        const spinner = (0, ora_1.default)(`Adding ${componentName}...`).start();
        try {
            // Get component info from registry
            const component = await (0, registry_1.getRegistryItem)(componentName);
            if (!component) {
                spinner.fail(`Component "${componentName}" not found in registry`);
                continue;
            }
            // Check if files already exist
            const existingFiles = component.files.filter(file => (0, fs_extra_1.existsSync)((0, path_1.join)(cwd, file.target || file.path)));
            if (existingFiles.length > 0 && !overwrite && !yes) {
                spinner.stop();
                const { shouldOverwrite } = await (0, prompts_1.default)({
                    type: 'confirm',
                    name: 'shouldOverwrite',
                    message: `Files already exist for ${componentName}. Overwrite?`,
                    initial: false
                });
                if (!shouldOverwrite) {
                    console.log(chalk_1.default.yellow(`Skipped ${componentName}`));
                    continue;
                }
            }
            // Install dependencies first
            if (component.dependencies && component.dependencies.length > 0) {
                spinner.text = `Installing dependencies for ${componentName}...`;
                const packageManager = await (0, package_manager_1.detectPackageManager)(cwd);
                await (0, package_manager_1.installDependencies)(component.dependencies, packageManager, cwd);
            }
            // Install registry dependencies
            if (component.registryDependencies && component.registryDependencies.length > 0) {
                for (const dep of component.registryDependencies) {
                    spinner.text = `Installing registry dependency: ${dep}...`;
                    await add([dep], { ...options, yes: true });
                }
            }
            // Download and save component files
            spinner.text = `Downloading ${componentName} files...`;
            for (const file of component.files) {
                const targetPath = (0, path_1.join)(cwd, file.target || file.path.replace('registry/default/', path + '/'));
                const dir = (0, path_1.dirname)(targetPath);
                // Ensure directory exists
                if (!(0, fs_extra_1.existsSync)(dir)) {
                    (0, fs_extra_1.mkdirSync)(dir, { recursive: true });
                }
                // Download file content
                const content = await (0, registry_1.downloadFile)(file.path);
                (0, fs_extra_1.writeFileSync)(targetPath, content);
            }
            spinner.succeed(`Added ${chalk_1.default.green(componentName)}`);
        }
        catch (error) {
            spinner.fail(`Failed to add ${componentName}: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
    console.log(chalk_1.default.green('\n✨ Components added successfully!'));
}
//# sourceMappingURL=add.js.map