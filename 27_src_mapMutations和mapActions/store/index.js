import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
// actions用于响应组件的动作（业务逻辑在此）
const actions = {
    // 第一个参数是一个上下文对象（里面有可能用到的函数)
    // jia(context, value) {
    //     console.log('actions中的jia被调用了')
    //     // 大写表明是mutations的函数
    //     context.commit('JIA', value)
    // },
    // jian(context, value) {
    //     console.log('actions中的jian被调用了')
    //     context.commit('JIAN', value)
    // },
    jiaOdd(context, value) {
        console.log('actions中的jiaOdd被调用了')
        if (context.state.sum % 2 !== 0) {
            context.commit('JIAODD', value)
        }
    },
    jiaWait(context, value) {
        console.log('actions中的jiaWait被调用了')
        setTimeout(() => {
            context.commit('JIAWAIT', value)
        }, 500)
    }
};
// mutations用于操作state中的数据
const mutations = {
    // 第一个参数是miniState
    JIA(state, value) {
        console.log('mutation中的JIA被调用了')
        state.sum += value
    },
    JIAN(state, value) {
        console.log('mutation中的JIAN被调用了')
        state.sum -= value
    },
    JIAODD(state, value) {
        console.log('mutations中的JIAODD被调用了')
        state.sum += value
    },
    JIAWAIT(state, value) {
        console.log('mutations中的JIAWAIT被调用了')
        state.sum += value
    }
};
// state用于存储数据
const state = {
    sum: 0,
    school: '尚硅谷',
    subject: '前端'
};
const getters = {
    bigSum(state) {
        // 和computed一样，把返回值作为自己的值
        return state.sum * 10
    }
}
// 传入一个对象
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})