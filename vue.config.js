// let express = require('express')
let axios = require('axios')
let path = require('path')
// let app = express()
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
    before (app) {
    // 可通过代理名称在js中使用代理
      app.get('/singer/getSingerList', function (req, res) {
        var url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
        axios.get(url, {
          headers: {
            // 设置代理服务器和代理域名
            referer: 'https://u.y.qq.com',
            host: 'u.y.qq.com'
          },
          // 需要注意，请求参数为req.quey而不是req
          // 请求参数由使用该代理的js方法传入
          params: req.query
        }).then((respone) => {
          // js方法请求ajax数据后，通过后端代理对数据进行json解析，再返回数据到方法中
          res.json(respone.data)
        }).catch((e) => {
          console.log(e)
        })
      })
      app.get('/singer/getSingerDetail', function (req, res) {
        var url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
        axios.get(url, {
          headers: {
            // 设置代理服务器和代理域名
            referer: 'https://u.y.qq.com',
            host: 'u.y.qq.com'
          },
          // 需要注意，请求参数为req.quey而不是req
          // 请求参数由使用该代理的js方法传入
          params: req.query
        }).then((respone) => {
          // js方法请求ajax数据后，通过后端代理对数据进行json解析，再返回数据到方法中
          res.json(respone.data)
        }).catch((e) => {
          console.log(e)
        })
      })
    },
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
      // '/singer': {
      //   target: 'https://u.y.qq.com/',
      //   secure: false,
      //   changeOrigin: true,
      //   header: {
      //     referer: 'https://u.y.qq.com/',
      //     host: 'u.y.qq.com'
      //   },
      //   pathRewrite: {
      //     '^/singer': ''
      //   }
      // },
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
