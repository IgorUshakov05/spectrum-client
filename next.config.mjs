/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/api/v1/image/**",
      },
      {
        protocol: "http",
        hostname: "194.87.199.249",
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
