import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
const actions = {
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
const mutations = {
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
    },
    ADD_PERSON(state, value) {
        state.personList.unshift(value)
    }
};
const state = {
    sum: 0,
    school: '尚硅谷',
    subject: '前端',
    personList: [
        { id: '01', name: '李强' }
    ]
};
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})