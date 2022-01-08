import Vue from 'vue'
import App from './App.vue'

new Vue({
    // render传入一个函数h，h函数传入App父组件，
    // render代替了template
    render: h => h(App)
}).$mount('#app')