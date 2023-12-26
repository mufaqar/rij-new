/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "https"
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
      },
    ],
  },
}

module.exports = nextConfig
