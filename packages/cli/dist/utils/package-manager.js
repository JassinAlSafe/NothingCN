"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectPackageManager = detectPackageManager;
exports.installDependencies = installDependencies;
const fs_1 = require("fs");
const path_1 = require("path");
const execa_1 = require("execa");
async function detectPackageManager(cwd) {
    // Check for lock files to determine package manager
    if ((0, fs_1.existsSync)((0, path_1.join)(cwd, 'bun.lockb')))
        return 'bun';
    if ((0, fs_1.existsSync)((0, path_1.join)(cwd, 'pnpm-lock.yaml')))
        return 'pnpm';
    if ((0, fs_1.existsSync)((0, path_1.join)(cwd, 'yarn.lock')))
        return 'yarn';
    // Default to npm
    return 'npm';
}
async function installDependencies(dependencies, packageManager, cwd) {
    const commands = {
        npm: ['install', ...dependencies],
        yarn: ['add', ...dependencies],
        pnpm: ['add', ...dependencies],
        bun: ['add', ...dependencies],
    };
    const command = commands[packageManager];
    try {
        await (0, execa_1.execa)(packageManager, command, {
            cwd,
            stdio: 'inherit',
        });
    }
    catch (error) {
        throw new Error(`Failed to install dependencies with ${packageManager}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}
//# sourceMappingURL=package-manager.js.map