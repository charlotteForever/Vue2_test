import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
Vue.config.productionTip = false
Vue.use(vueResource)
// 需要导入模块后use
new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
}).$mount('#app')