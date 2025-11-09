const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
})

const isProd = process.env.NODE_ENV === 'production';

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Add basePath and assetPrefix for GitHub Pages
  basePath: isProd ? '' : '',
  assetPrefix: isProd ? '' : '',
})