import Vue from 'vue'
import Vuex from 'vuex'
import dataJson from '@/assets/myresources.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        resources: [],
        sessionData: dataJson,
        sortJson: dataJson,
        initialItemCount: 4
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
            state.sessionData = state.sortJson.sort(function(a, b) {
                return a.title > b.title
            })

            state.resources = []
            for (let i = 0; i < state.initialItemCount; i++) {
                state.resources.push(state.sessionData[i])
            }
        },
        sortZA(state) {
            state.sessionData = state.sortJson.sort(function(a, b) {
                return a.title < b.title
            })

            state.resources = []
            for (let i = 0; i < state.initialItemCount; i++) {
                state.resources.push(state.sessionData[i])
            }
        }
    }
})
