"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
async function init() {
    console.log(chalk_1.default.cyan('🎨 Initializing NothingCN in your project...\n'));
    const cwd = process.cwd();
    // Check if this is a valid project
    const packageJsonPath = (0, path_1.join)(cwd, 'package.json');
    if (!(0, fs_extra_1.existsSync)(packageJsonPath)) {
        console.log(chalk_1.default.red('❌ No package.json found. Please run this command in a valid project directory.'));
        process.exit(1);
    }
    // Check for Tailwind CSS
    const tailwindConfigPaths = [
        'tailwind.config.js',
        'tailwind.config.ts',
        'tailwind.config.mjs'
    ];
    const hasTailwind = tailwindConfigPaths.some(path => (0, fs_extra_1.existsSync)((0, path_1.join)(cwd, path)));
    if (!hasTailwind) {
        console.log(chalk_1.default.yellow('⚠️  Tailwind CSS not detected. NothingCN requires Tailwind CSS to work properly.'));
        console.log(chalk_1.default.blue('📖 Visit https://tailwindcss.com/docs/installation for installation instructions.'));
    }
    const spinner = (0, ora_1.default)('Setting up NothingCN configuration...').start();
    try {
        // Create components directory
        const componentsDir = (0, path_1.join)(cwd, 'src/components/ui');
        if (!(0, fs_extra_1.existsSync)(componentsDir)) {
            require('fs-extra').mkdirSync(componentsDir, { recursive: true });
        }
        // Create lib directory for utils
        const libDir = (0, path_1.join)(cwd, 'src/lib');
        if (!(0, fs_extra_1.existsSync)(libDir)) {
            require('fs-extra').mkdirSync(libDir, { recursive: true });
        }
        // Create nothingcn.json config file
        const config = {
            "$schema": "https://nothingcn.com/schema/config.json",
            "style": "default",
            "rsc": true,
            "tsx": true,
            "tailwind": {
                "config": "tailwind.config.js",
                "css": "src/app/globals.css",
                "baseColor": "slate",
                "cssVariables": true,
                "prefix": ""
            },
            "aliases": {
                "components": "src/components",
                "utils": "src/lib/utils"
            }
        };
        (0, fs_extra_1.writeFileSync)((0, path_1.join)(cwd, 'nothingcn.json'), JSON.stringify(config, null, 2));
        spinner.succeed(chalk_1.default.green('✅ NothingCN initialized successfully!'));
        console.log(chalk_1.default.cyan('\n🚀 Next steps:'));
        console.log('1. Install Tailwind CSS if you haven\'t already');
        console.log('2. Run ' + chalk_1.default.yellow('npx nothingcn@latest add button') + ' to add your first component');
        console.log('3. Visit ' + chalk_1.default.blue('https://nothingcn.com') + ' for documentation and examples');
    }
    catch (error) {
        spinner.fail('Failed to initialize NothingCN');
        console.error(error);
        process.exit(1);
    }
}
//# sourceMappingURL=init.js.map