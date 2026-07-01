const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '' : '',
  assetPrefix: isProd ? '' : '',
};
