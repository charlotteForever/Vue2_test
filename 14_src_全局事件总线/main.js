import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    beforeCreate() {
        // 给vue实例对象上添加全局事件总线
        // 利用了一个重要关系：Vue.prototype=VueComponent.prototype.__proto__
        // 这个关系使组件实例对象可以访问到vue原型对象上的属性和方法
        // 既要让全局都能看到，又要能访问$on,$emit（vm和vc），所以把vm赋给$bus
        Vue.prototype.$bus = this
    },
}).$mount('#app')