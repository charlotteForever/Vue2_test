import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 需要导入模块后use
new Vue({
    render: h => h(App),
}).$mount('#app')