module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            "#": "./src",
            "@images": "./assets",
            lib: "./src/lib",
            view: "./src/view",
          },
        },
      ],
      "react-native-reanimated/plugin", // NOTE: this plugin MUST be last
    ],
  };
};
