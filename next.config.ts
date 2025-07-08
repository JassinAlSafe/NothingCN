import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
              svgProps: {
                fill: 'currentColor',
              },
              replaceAttrValues: {
                '#000': 'currentColor',
                '#000000': 'currentColor',
              },
            },
          },
        ],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we want to handle it
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
