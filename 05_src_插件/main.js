import Vue from 'vue'
import App from './App.vue'
import plugins from './plugins'

Vue.config.productionTip = false

// 需要导入模块后use
Vue.use(plugins)
new Vue({
    // render传入一个函数h，h函数传入App父组件，
    // render代替了template
    render: h => h(App)
}).$mount('#app')