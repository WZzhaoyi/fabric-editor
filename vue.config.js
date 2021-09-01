const path = require('path')

module.exports = {
  lintOnSave: false,

  outputDir: './docs',
  publicPath: './',

  devServer: {
    proxy: {
      '/process': {
        target: 'http://localhost:44533',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/process': '/process'
        }
      }
    }
  },

  configureWebpack: {
    entry: {
      app: path.resolve(__dirname, './docs-src/main.js')
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './docs-src')
      }
    }
  },

  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add(path.resolve(__dirname, './docs-src'))

    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/style/imports.scss";`
      }
    }
  }
}
