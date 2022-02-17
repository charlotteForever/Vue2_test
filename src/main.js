import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
// 导入vuex和store
// import vuex from 'vuex'
import store from './store/index'
Vue.config.productionTip = false
Vue.use(vueResource)
// vuex本质是一个插件，需要use
// Vue.use(vuex)
new Vue({
    store,
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
}).$mount('#app')