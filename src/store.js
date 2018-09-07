import Vue from 'vue'
import Vuex from 'vuex'
import dataJson from '@/assets/myresources.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        resources: [],
        sessionData: dataJson,
        sortJson: dataJson
    },
    mutations: {
        addResource(state, data) {
            state.resources.push(data)
        },
        deleteResource(state, data) {
            state.resources.splice(data, 1)
            state.sessionData.splice(data, 1)
        },
        sortAZ(state) {
            state.resources = state.sortJson.sort(function(a, b) {
                return a.title > b.title
            })
        },
        sortZA(state) {
            state.resources = state.sortJson.sort(function(a, b) {
                return a.title < b.title
            })
        }
    }
})
