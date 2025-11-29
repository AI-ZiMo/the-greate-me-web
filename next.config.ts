import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aibuilder.oss-cn-hangzhou.aliyuncs.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
