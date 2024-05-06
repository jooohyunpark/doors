/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/room/1/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
