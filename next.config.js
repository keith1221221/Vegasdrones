/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['vegasdrones.com'],
  },
  // Enable static file serving for video formats
  async headers() {
    return [
      {
        source: '/talking_alien_head.mov',
        headers: [
          {
            key: 'Content-Type',
            value: 'video/quicktime',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
