// 该文件专门用于创建整个应用的路由器
// 引入vue-router
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detial from '../pages/Detial'
export default new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
            // 设置二级路由
            children: [
                {
                    // 不需要带反斜杠
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: "xijie",
                            path: 'detial/:id/:title',
                            component: Detial,
                            // props($route) {
                            //     return { id: $route.params.id, title: $route.params.title }
                            // }
                            // 本来的参数是直接传递给detial的,现在要经过index.js配置,
                            props({ params: { id, title } }) {
                                return { id, title }
                            }
                        }
                    ]
                },
                {
                    path: 'news',
                    component: News
                }
            ]
        }
    ]
})