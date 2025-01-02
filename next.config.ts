import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '', // No subdirectory for <username>.github.io
  assetPrefix: './', // Ensures static assets (CSS/JS/images) are loaded correctly
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Disable dynamic image optimization for static hosting
  },
};

export default nextConfig;
