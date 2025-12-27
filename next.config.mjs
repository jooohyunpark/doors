/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,

  async redirects() {
    return [{ source: "/", destination: "/room/1", permanent: true }];
  },
};

export default nextConfig;
