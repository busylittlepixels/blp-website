require('dotenv').config()

module.exports = {
  reactStrictMode: true,
  distDir: '/build',
  swcMinify: true,
  images: {
    domains: ['localhost', process.env.NEXT_PUBLIC_SERVER_URL],
  },
}
