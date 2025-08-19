import { existsSync } from 'fs';
import { join } from 'path';
import { execa } from 'execa';

export type PackageManager = 'npm' | 'yarn' | 'pnpm' | 'bun';

export async function detectPackageManager(cwd: string): Promise<PackageManager> {
  // Check for lock files to determine package manager
  if (existsSync(join(cwd, 'bun.lockb'))) return 'bun';
  if (existsSync(join(cwd, 'pnpm-lock.yaml'))) return 'pnpm';
  if (existsSync(join(cwd, 'yarn.lock'))) return 'yarn';
  
  // Default to npm
  return 'npm';
}

export async function installDependencies(
  dependencies: string[],
  packageManager: PackageManager,
  cwd: string
): Promise<void> {
  const commands: Record<PackageManager, string[]> = {
    npm: ['install', ...dependencies],
    yarn: ['add', ...dependencies],
    pnpm: ['add', ...dependencies],
    bun: ['add', ...dependencies],
  };

  const command = commands[packageManager];
  
  try {
    await execa(packageManager, command, {
      cwd,
      stdio: 'inherit',
    });
  } catch (error) {
    throw new Error(
      `Failed to install dependencies with ${packageManager}: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`
    );
  }
}