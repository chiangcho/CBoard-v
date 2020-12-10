const resolve = dir => require('path').join(__dirname, dir)
var nodeExternals = require('webpack-node-externals')

module.exports = {
  publicPath: '', // 使用相对路径可以满足大多数情况需求，如遇特殊情况满足不了请调整该值，请参考Vue Cli文档中关于“相对 baseUrl 的限制”：https://cli.vuejs.org/zh/config/#baseurl
  outputDir: 'dist',
  assetsDir: 'static',
  runtimeCompiler: true,
  productionSourceMap: true,
  filenameHashing: false,
  // lintOnSave: false,
  chainWebpack: config => {
    // 重新设置 alias
    config.resolve.alias.set('@', resolve('src'))
    config.optimization.splitChunks(false)
  },
  configureWebpack: {
    externals: process.env.NODE_ENV === 'production' ? [nodeExternals()] : [],
    optimization: {
      splitChunks: {
        minChunks: 100,
        cacheGroups: {
          default: false,
          // Custom common chunk
          commons: {
            name: 'lib',
            chunks: 'async',
            minChunks: 1,
            reuseExistingChunk: true
          }
        }
      }
    }
  },
  css: { extract: false },
  devServer: {
    publicPath: '/',
    proxy: {
      '/api': {
        target: 'http://localhost:8026/cboard',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
