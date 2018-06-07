module.exports = {
  proxy: {
    '/apis': {
      target: 'http://www.cute.com',
      changeOrigin: true,
      pathRewrite: {
        '^/apis': '/apis'
      }
    }
  }
}
