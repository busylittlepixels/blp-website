// next.config.js
const { withPayload } = require("@payloadcms/next-payload");
const path = require("path");

module.exports = withPayload(
  {
    // Next conffig here
    publicRuntimeConfig: {
      SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
    transpilePackages: ["@payloadcms/plugin-seo"],
    basePath: '',
    fallback: { 
      "util": require.resolve("util/"),
      fs: false,
    },
    experimental: {
      mdxRs: true,
    },
  },
  {
    // The second argument to `withPayload`
    // allows you to specify paths to your Payload dependencies
    // and configure the admin route to your Payload CMS.
    // Point to your Payload config (Required)
    configPath: path.resolve(__dirname, "./src/payload/payload.config.ts"),
    // Point to your exported, initialized Payload instance (optional, default shown below`)
    payloadPath: path.resolve(process.cwd(), "./src/payload/payloadClient.ts"),
  }
);

const withMDX = require('@next/mdx')({
  // ...
  options: {
    providerImportSource: '@mdx-js/react',
  },
})
module.exports = withMDX(withPayload)