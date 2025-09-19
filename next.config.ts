import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.snapshot = {
      managedPaths: [],
      immutablePaths: [],
    }
    return config
  },
}

export default nextConfig
