let path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    // 设置别名
    config.resolve.alias
      .set('@', resolve('src'))
  },
  devServer: {
    open: true, // 打开浏览器窗口
    host: 'localhost',
    port: 9000,
    proxy: {
      '/music': {
        target: 'https://c.y.qq.com/',
        secure: false,
        changeOrigin: true,
        header: {
          referer: 'https://c.y.qq.com',
          host: 'c.y.qq.com'
        },
        pathRewrite: {
          '^/music': ''
        }
      },
      '/travel': {
        target: 'http://localhost:9000'
      }
    }
  },
  // 定义scss全局变量
  css: {
    loaderOptions: {
      sass: {
        data: `
                @import "@/assets/css/scss/global.scss";
                @import "@/assets/css/hotcss/px2rem.scss";
              `
      }
    }
  },
  // webpack插件配置
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'development') {}
  }
}
