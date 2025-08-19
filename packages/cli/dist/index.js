#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const add_1 = require("./commands/add");
const init_1 = require("./commands/init");
const chalk_1 = __importDefault(require("chalk"));
const program = new commander_1.Command();
program
    .name('nothingcn')
    .description('CLI for adding NothingCN components to your project')
    .version('0.1.0');
program
    .command('init')
    .description('Initialize NothingCN in your project')
    .action(init_1.init);
program
    .command('add')
    .description('Add a component to your project')
    .argument('<components...>', 'Components to add')
    .option('-y, --yes', 'Skip confirmation prompts', false)
    .option('-o, --overwrite', 'Overwrite existing files', false)
    .option('-c, --cwd <path>', 'Working directory', process.cwd())
    .option('-p, --path <path>', 'Path to components directory', 'src/components/ui')
    .action(add_1.add);
program.parse();
// Show help if no command is provided
if (!process.argv.slice(2).length) {
    console.log(chalk_1.default.cyan('\n🎨 Welcome to NothingCN!\n'));
    program.outputHelp();
}
//# sourceMappingURL=index.js.map