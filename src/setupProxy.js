const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy.createProxyMiddleware({
      target: 'https://sftest.olcourt.cn/api/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/'
      }
    })
  );
};