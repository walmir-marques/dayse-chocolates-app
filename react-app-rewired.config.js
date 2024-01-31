// react-app-rewired.config.js
const path = require("path");

module.exports = {
  webpack: (config) => {
    // Adicione as configurações de fallback ao objeto config.resolve
    config.resolve.fallback = {
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
    };

    return config;
  },
};
