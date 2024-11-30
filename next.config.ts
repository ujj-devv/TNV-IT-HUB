import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  sassOptions: {
    implementation: 'sass-embedded',
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}
 
export default nextConfig