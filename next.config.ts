import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // Transpiler framer-motion pour compatibilité avec React 19
  transpilePackages: ['framer-motion'],
};

export default nextConfig;
