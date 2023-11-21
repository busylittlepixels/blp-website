// next.config.js
const { withPayload } = require("@payloadcms/next-payload");
const path = require("path");

module.exports = withPayload(
  {
    // Next config here
    publicRuntimeConfig: {
      SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'source.unsplash.com'
        },
        {
          protocol: 'https',
          hostname: 'busylittlepixels.com'
        }
      ],
    },
    reactStrictMode: true,
    transpilePackages: ["@payloadcms/plugin-seo"],
    basePath: '',
    experimental: {
      mdxRs: true,
      serverActions: true
    },
    async redirects() {
      return [
        {
          source: '/blog/accessibility/:slug*',
          destination: '/blog',
          permanent: true,
        },
        {
          source: '/blog/tech/:slug*',
          destination: '/blog',
          permanent: true,
        },
        {
          source: '/blog/strategy/:slug*',
          destination: '/blog',
          permanent: true,
        },
      ]
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
    adminRoute: "/admin"
  }
);