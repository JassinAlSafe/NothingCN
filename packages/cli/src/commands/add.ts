import { existsSync, writeFileSync, mkdirSync } from 'fs-extra';
import { join, dirname } from 'path';
import chalk from 'chalk';
import ora from 'ora';
import fetch from 'node-fetch';
import { z } from 'zod';
import prompts from 'prompts';
import { execa } from 'execa';
import { getRegistryItem, downloadFile } from '../utils/registry';
import { detectPackageManager, installDependencies } from '../utils/package-manager';

interface AddOptions {
  yes?: boolean;
  overwrite?: boolean;
  cwd?: string;
  path?: string;
}

export async function add(components: string[], options: AddOptions) {
  const { yes, overwrite, cwd = process.cwd(), path = 'src/components/ui' } = options;
  
  console.log(chalk.cyan('🎨 Adding NothingCN components...\n'));

  for (const componentName of components) {
    const spinner = ora(`Adding ${componentName}...`).start();

    try {
      // Get component info from registry
      const component = await getRegistryItem(componentName);
      
      if (!component) {
        spinner.fail(`Component "${componentName}" not found in registry`);
        continue;
      }

      // Check if files already exist
      const existingFiles = component.files.filter(file => 
        existsSync(join(cwd, file.target || file.path))
      );

      if (existingFiles.length > 0 && !overwrite && !yes) {
        spinner.stop();
        const { shouldOverwrite } = await prompts({
          type: 'confirm',
          name: 'shouldOverwrite',
          message: `Files already exist for ${componentName}. Overwrite?`,
          initial: false
        });
        
        if (!shouldOverwrite) {
          console.log(chalk.yellow(`Skipped ${componentName}`));
          continue;
        }
      }

      // Install dependencies first
      if (component.dependencies && component.dependencies.length > 0) {
        spinner.text = `Installing dependencies for ${componentName}...`;
        
        const packageManager = await detectPackageManager(cwd);
        await installDependencies(component.dependencies, packageManager, cwd);
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
        const targetPath = join(cwd, file.target || file.path.replace('registry/default/', path + '/'));
        const dir = dirname(targetPath);
        
        // Ensure directory exists
        if (!existsSync(dir)) {
          mkdirSync(dir, { recursive: true });
        }

        // Download file content
        const content = await downloadFile(file.path);
        writeFileSync(targetPath, content);
      }

      spinner.succeed(`Added ${chalk.green(componentName)}`);

    } catch (error) {
      spinner.fail(`Failed to add ${componentName}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  console.log(chalk.green('\n✨ Components added successfully!'));
}