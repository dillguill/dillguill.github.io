module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add .mdx to the list of extensions
      webpackConfig.resolve.extensions.push('.mdx');

      // Add MDX loader
      webpackConfig.module.rules.push({
        test: /\.mdx?$/,
        use: [
          {
            loader: '@mdx-js/loader',
            options: {
              providerImportSource: '@mdx-js/react',
            },
          },
        ],
      });

      return webpackConfig;
    },
  },
};
