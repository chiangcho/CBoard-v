const resolve = dir => require("path").join(__dirname, dir);

module.exports = {
  publicPath: "", // 使用相对路径可以满足大多数情况需求，如遇特殊情况满足不了请调整该值，请参考Vue Cli文档中关于“相对 baseUrl 的限制”：https://cli.vuejs.org/zh/config/#baseurl
  outputDir: "dist",
  assetsDir: "static",
  runtimeCompiler: true,
  chainWebpack: config => {
    // 重新设置 alias
    config.resolve.alias.set("@", resolve("src"));
  },
  devServer: {
    publicPath: "/",
    proxy: {
      "/api": {
        target: "http://localhost:8026/cboard",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  }
};
