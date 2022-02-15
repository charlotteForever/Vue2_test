// 是Common.JS模块
module.exports = {
    pages: {
        index: {
            //入口
            entry: 'src/main.js',
        },
    },
    lintOnSave: false,
    // vue-cli开启的服务器端口为8080（本地），我们要将发给8080的请求转发到下面的5000
    // devServer: {
    //     proxy: 'http://localhost:5000',
    // }
    devServer: {
        proxy: {
            'atguigu': {
                target: 'http://localhost:5000',
                pathRewrite: { '^atguigu': '' },
                // ws: true, //用于支持websocket
                // changeOrigin: true //用于控制请求头中的host值
            },
            '/demo': {
                target: 'http://localhost:5001',
                pathRewrite: { '^/demo': '' },
                // ws: true, //用于支持websocket
                // changeOrigin: true //用于控制请求头中的host值
            }
        }
    }
}