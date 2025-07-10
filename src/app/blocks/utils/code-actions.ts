export const downloadCode = (code: string, filename: string) => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

export const openInCodeSandbox = (code: string, title: string) => {
    const files = {
        "App.tsx": {
            content: code,
        },
        "package.json": {
            content: JSON.stringify(
                {
                    name: title.toLowerCase().replace(/\s+/g, "-"),
                    version: "1.0.0",
                    dependencies: {
                        react: "^18.0.0",
                        "react-dom": "^18.0.0",
                        "lucide-react": "^0.263.1",
                        "class-variance-authority": "^0.7.0",
                        clsx: "^2.0.0",
                        "tailwind-merge": "^1.14.0",
                    },
                },
                null,
                2
            ),
        },
    };

    const parameters = {
        files,
        template: "react-ts",
    };

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://codesandbox.io/api/v1/sandboxes/define";
    form.target = "_blank";

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "parameters";
    input.value = JSON.stringify(parameters);

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error("Failed to copy text:", err);
        return false;
    }
};

export const truncateCode = (code: string, maxLines: number = 15) => {
    const lines = code.split("\n");
    if (lines.length <= maxLines) return code;

    const functionStartIndex = lines.findIndex((line) =>
        line.includes("export function")
    );
    if (functionStartIndex === -1) return code;

    const imports = lines.slice(0, functionStartIndex);
    const functionSignature = lines[functionStartIndex];
    const returnIndex = lines.findIndex((line) => line.includes("return ("));
    if (returnIndex === -1) return code;

    const bodyLines = lines.slice(functionStartIndex + 1, returnIndex + 1);
    const firstFewReturnLines = lines.slice(returnIndex + 1, returnIndex + 6);

    return [
        ...imports,
        functionSignature,
        ...bodyLines,
        ...firstFewReturnLines,
        "      {/* ... more content */}",
        "    )",
        "  )",
        "}",
    ].join("\n");
}; 