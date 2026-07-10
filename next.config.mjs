/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "randomuser.me" },
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Prevent three.js and @react-three/fiber from being bundled server-side
      config.externals = [
        ...(Array.isArray(config.externals) ? config.externals : []),
        "three",
        "@react-three/fiber",
      ];
    }
    return config;
  },
};

export default nextConfig;
