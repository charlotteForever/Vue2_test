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
    devServer: {
        proxy: 'http://localhost:5000',
    }
}