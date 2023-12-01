/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = 'production';

const nextConfig = {
  basePath: isProd ? '/app-inicial-next-react' : '',
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true,
  images: {
    domains: [
      'source.unsplash.com',
      'images.unsplash.com',
      'lh3.googleusercontent.com'
    ]
  }
}

module.exports = nextConfig
