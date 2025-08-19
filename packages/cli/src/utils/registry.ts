import fetch from 'node-fetch';
import { z } from 'zod';

const REGISTRY_URL = process.env.NOTHINGCN_REGISTRY_URL || 'https://component-showcase-six.vercel.app/api/registry';
const FILES_URL = process.env.NOTHINGCN_FILES_URL || 'https://component-showcase-six.vercel.app/api/registry/files';

const FileSchema = z.object({
  path: z.string(),
  type: z.string(),
  target: z.string().optional(),
});

const RegistryItemSchema = z.object({
  name: z.string(),
  type: z.string(),
  title: z.string(),
  description: z.string(),
  files: z.array(FileSchema),
  dependencies: z.array(z.string()).optional(),
  registryDependencies: z.array(z.string()).optional(),
  tailwind: z.object({}).optional(),
  cssVars: z.object({
    light: z.object({}).optional(),
    dark: z.object({}).optional(),
  }).optional(),
  categories: z.array(z.string()).optional(),
  docs: z.string().optional(),
});

export type RegistryItem = z.infer<typeof RegistryItemSchema>;

export async function getRegistryItem(name: string): Promise<RegistryItem | null> {
  try {
    const response = await fetch(`${REGISTRY_URL}/${name}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Registry request failed: ${response.statusText}`);
    }

    const data = await response.json();
    return RegistryItemSchema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error('Invalid registry response format');
    }
    throw error;
  }
}

export async function downloadFile(path: string): Promise<string> {
  // Use our file serving API
  const url = `${FILES_URL}/${path}`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Failed to download file: ${path} (${response.status}: ${response.statusText})`);
  }
  
  return response.text();
}

export async function getRegistry() {
  try {
    const response = await fetch(REGISTRY_URL);
    
    if (!response.ok) {
      throw new Error(`Registry request failed: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Failed to fetch registry: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}