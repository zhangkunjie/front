const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
  app.use(proxy.createProxyMiddleware('/api', 
    {
        target: "http://localhost:8080/",
        changeOrigin: true,
        pathRewrite:{'^/api':''}
    }))
    
    //app.use(proxy(...)) //可以配置多个代理
}