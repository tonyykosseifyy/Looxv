const nextConfig = {
    experimental: {
      appDir: true,
    },
    // withImages:withImages,
    env: {
      BASE_URL: process.env.BASE_URL,
    },
    reactStrictMode: true,
    swcMinify: true,
};
  
module.exports = nextConfig;