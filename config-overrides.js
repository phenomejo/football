const { override, fixBabelImports, overrideDevServer } = require('customize-cra');

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
  ),
  devServer: overrideDevServer(
    devServerConfig()
  )
}