
import store from 'store'

let { id , name } = store.get('current_city') || { id : 1101 , name : '北京'}

const state = {
    cityid: id,
    name
}

const mutations = {
setCity(state, {id, name}) {
    state.cityid = id
    state.name = name
    }
}

const actions = {
saveCity({commit}, payload) {
    commit('setCity', payload)
    }
}

export default {
namespaced: true,
state,
mutations,
actions
}