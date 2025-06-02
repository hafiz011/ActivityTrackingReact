const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",                    // Anything under /api
        destination: "http://localhost:5000/api/:path*", // Forward to your .NET backend
      },
    ];
  },
};

export default nextConfig;
