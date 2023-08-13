require('dotenv').config()
// next.config.js
const path = require("path");
const { withPayload } = require("@payloadcms/next-payload");

module.exports = withPayload(
  {
    // your Next config here
    reactStrictMode: true,
    distDir: '/build',
    swcMinify: true,
    images: {
      domains: ['localhost', process.env.NEXT_PUBLIC_SERVER_URL],
    },
  },
  {
    // The second argument to `withPayload`
    // allows you to specify paths to your Payload dependencies
    // and configure the admin route to your Payload CMS.

    // Point to your Payload config (Required)
    configPath: path.resolve(__dirname, "./src/payload/payload.config.ts"),
  }
);