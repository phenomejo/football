const { override, fixBabelImports, overrideDevServer, addWebpackAlias } = require('customize-cra');
const path = require('path');

const devServerConfig = () => config => {
  return {
      ...config,
      port: 3000,
      proxy: {
        '/v2': {
          target: 'https://api.football-data.org',
          changeOrigin: true,
          ws: false,
          pathRewrite: {
            '^/v2': '/v2',
          },
          secure: false,
        },
      },
  }
}

module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    }),
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
    })
  ),
  devServer: overrideDevServer(
    devServerConfig()
  )
}