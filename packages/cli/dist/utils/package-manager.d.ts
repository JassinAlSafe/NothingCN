export type PackageManager = 'npm' | 'yarn' | 'pnpm' | 'bun';
export declare function detectPackageManager(cwd: string): Promise<PackageManager>;
export declare function installDependencies(dependencies: string[], packageManager: PackageManager, cwd: string): Promise<void>;
//# sourceMappingURL=package-manager.d.ts.map