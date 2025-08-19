import { z } from 'zod';
declare const RegistryItemSchema: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    files: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        type: z.ZodString;
        target: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        type: string;
        target?: string | undefined;
    }, {
        path: string;
        type: string;
        target?: string | undefined;
    }>, "many">;
    dependencies: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    registryDependencies: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tailwind: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    cssVars: z.ZodOptional<z.ZodObject<{
        light: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
        dark: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    }, "strip", z.ZodTypeAny, {
        light?: {} | undefined;
        dark?: {} | undefined;
    }, {
        light?: {} | undefined;
        dark?: {} | undefined;
    }>>;
    categories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    docs: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: string;
    name: string;
    title: string;
    description: string;
    files: {
        path: string;
        type: string;
        target?: string | undefined;
    }[];
    dependencies?: string[] | undefined;
    registryDependencies?: string[] | undefined;
    tailwind?: {} | undefined;
    cssVars?: {
        light?: {} | undefined;
        dark?: {} | undefined;
    } | undefined;
    categories?: string[] | undefined;
    docs?: string | undefined;
}, {
    type: string;
    name: string;
    title: string;
    description: string;
    files: {
        path: string;
        type: string;
        target?: string | undefined;
    }[];
    dependencies?: string[] | undefined;
    registryDependencies?: string[] | undefined;
    tailwind?: {} | undefined;
    cssVars?: {
        light?: {} | undefined;
        dark?: {} | undefined;
    } | undefined;
    categories?: string[] | undefined;
    docs?: string | undefined;
}>;
export type RegistryItem = z.infer<typeof RegistryItemSchema>;
export declare function getRegistryItem(name: string): Promise<RegistryItem | null>;
export declare function downloadFile(path: string): Promise<string>;
export declare function getRegistry(): Promise<unknown>;
export {};
//# sourceMappingURL=registry.d.ts.map