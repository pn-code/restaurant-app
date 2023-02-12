/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["res.cloudinary.com"]
  },
  rewrites: async function() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://restaurant-app-phi.vercel.app:path*'
      }
    ]
  }
}

module.exports = nextConfig