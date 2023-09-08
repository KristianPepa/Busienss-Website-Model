module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
      ],
    },
    ignoreWarnings: [
      {
        message: /Failed to parse source map from/,
      }  
    ],
  };