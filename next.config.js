const withImages = require('next-images');
const nextConfig = {
    experimental: {
      appDir: true,
    },
    // withImages:withImages,
    env: {
      BASE_URL: process.env.BASE_URL,
    }
};
  
module.exports = nextConfig;