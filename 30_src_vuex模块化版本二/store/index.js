import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
import countOptions from './Count'
import personOptions from './Person'
export default new Vuex.Store({
    // 暴露模块
    modules: {
        countOptions,
        personOptions
    }
})