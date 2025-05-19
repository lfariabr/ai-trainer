import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: [
      'localhost:3000',
      '127.0.0.1:3000',
      '192.168.0.40:3000', 
      '192.168.0.40'      
    ]
  }
};

export default nextConfig;
