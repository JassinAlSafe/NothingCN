#!/usr/bin/env node

import { Command } from 'commander';
import { add } from './commands/add';
import { init } from './commands/init';
import chalk from 'chalk';

const program = new Command();

program
  .name('nothingcn')
  .description('CLI for adding NothingCN components to your project')
  .version('0.1.0');

program
  .command('init')
  .description('Initialize NothingCN in your project')
  .action(init);

program
  .command('add')
  .description('Add a component to your project')
  .argument('<components...>', 'Components to add')
  .option('-y, --yes', 'Skip confirmation prompts', false)
  .option('-o, --overwrite', 'Overwrite existing files', false)
  .option('-c, --cwd <path>', 'Working directory', process.cwd())
  .option('-p, --path <path>', 'Path to components directory', 'src/components/ui')
  .action(add);

program.parse();

// Show help if no command is provided
if (!process.argv.slice(2).length) {
  console.log(chalk.cyan('\n🎨 Welcome to NothingCN!\n'));
  program.outputHelp();
}