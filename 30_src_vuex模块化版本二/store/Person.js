export default {
    namespaced: true,
    actions: {
        addWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_WANG', value)
            }
        }
    },
    mutations: {
        // 此处的state时miniState
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        },
        ADD_WANG(state, value) {
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
