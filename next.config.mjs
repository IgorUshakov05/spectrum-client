/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/api/v1/image/**",
      },
      {
        protocol: "https",
        hostname: "api.spectrum360.ru",
        pathname: "/api/v1/image/**",
      },
    ],
  },
};

export default nextConfig;
