/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `
      @import 'styles/breakpoints.scss';
    `,
  },
}

module.exports = nextConfig
