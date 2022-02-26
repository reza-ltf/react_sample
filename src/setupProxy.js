const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/browser',
    createProxyMiddleware({
      target: 'http://2.144.6.32:11800/',
      pathRewrite: {
        "^/browser": ""
      },
      changeOrigin: false,
      secure: false
    })
  );
};