module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Add other plugins if you use them
      // Example: 'react-native-reanimated/plugin'
    ],
  };
};
