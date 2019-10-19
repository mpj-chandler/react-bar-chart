const path = require('path');

module.exports = ({ config }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
        },
      ],
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        {
          loader: "sass-loader",
          options: {
            javascriptEnabled: true
          }
        }
      ],
      include: path.resolve(__dirname, "../")
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
    };