import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'
import { nanoid } from 'nanoid'
const countOptions = {
    namespaced: true,
    actions: {
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
    },
    mutations: {
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
    },
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}
const personOptions = {
    namespaced: true,
    actions: {
        addWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_WANG', value)
            }
        },
        addRandom(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                (response) => {
                    context.commit('ADD_RANDOM', { id: nanoid(), name: response.data })
                },
                (err) => {
                    alert(err)
                }
            )
        }
    },
    mutations: {
        // 此处的state时miniState
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        },
        ADD_WANG(state, value) {
            state.personList.unshift(value)
        },
        ADD_RANDOM(state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: '01', name: '李强' }
        ]
    },
    getters: {
        firstName(state) {
            return state.personList[0].name
        }
    }
}


export default new Vuex.Store({
    // 暴露模块
    modules: {
        countOptions,
        personOptions
    }
})