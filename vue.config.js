const CompressionWebpackPlugin = require("compression-webpack-plugin"); // webpack优化 打包的时候开启gzip可以大大减少体积，非常适合于上线部署
const productionGzipExtensions = ["js", "css"]; // gzip压缩的文件类型后缀
const VConsolePlugin = require("vconsole-webpack-plugin"); // VConsole插件，可用于移动端测试
const isProduction = process.env.NODE_ENV === "production"; // 判断当前运行环境是否是生产环境
const isDebug = process.env.VUE_APP_DEBUG === "enable"; // 是否开始debug模式，此处用来判断是否开启VConsole

process.env.VUE_APP_VERSION = require("./package.json").version; //当前版本

module.exports = {
  devServer: {
    disableHostCheck: true // 不可用端口检测
  },
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: "gzip",
          test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }
    if (isDebug) {
      config.plugins.push(
        new VConsolePlugin({
          enable: true
        })
      );
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/styles/_variables.scss";
        @import "@/styles/_mixins.scss";
        @import "@/styles/_functions.scss";
        @import "@/styles/_utils.scss";
        @import "@/styles/_border.scss";
        `
      }
    }
  }
};
