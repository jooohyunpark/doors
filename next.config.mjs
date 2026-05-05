/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,

  async redirects() {
    return [{ source: "/", destination: "/room/1", permanent: false }];
  },
};

export default nextConfig;
