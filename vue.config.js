'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')
const $themes = require('./src/styles/variables.scss.js')
const styles = `$themes:${JSON.stringify($themes).replace(/{/g, '(').replace(/}/g, ')').replace(/"/g, '')};`;
function resolve (dir) {
  return path.join(__dirname, dir)
}

if (process.env.NODE_ENV !== 'development') {
  // 通过命令行传参进来,示例：> npm run build:prod --baseurl=http://192.168.0.89:8888/R-AutoConfig
  process.env.VUE_APP_BASE_API = process.env.npm_config_baseurl || process.env.VUE_APP_BASE_API;
}
const name = defaultSettings.title || '一体化管理平台 // page title';

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following method:
// port = 9527 npm run dev OR npm run dev --port = 9527
const port = process.env.port || process.env.npm_config_port || 9527 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'templates/index.html',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `${styles}
        @import "@/styles/index.scss";
        `
      }
    }
  },
  devServer: {
    open: false,
    contentBase: path.join(__dirname, 'public'),
    disableHostCheck: true
    // proxy: {
    //   '/dev-api': {
    //     // target: 'http://localhost:9999',
    //     target: 'http://192.168.0.240:8888', // 公司服务器(内网)
    //     // target: 'http://vpn1.huanya-xt.com:17003', // 公司服务器(vpn)
    //     changeOrigin: true,
    //     secure: false,
    //     ws: false,
    //     pathRewrite: {
    //       '/dev-api': '/'//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
    //     }
    //   }
    // }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        '&': resolve('src/components/topo')
      }
    }
  },
  chainWebpack (config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('source-map')
      )

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
              // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
  }
}
