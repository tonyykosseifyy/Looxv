const withImages = require('next-images');
const nextConfig = {
    experimental: {
      appDir: true,
    },
    withImages:withImages
};
  
module.exports = nextConfig;