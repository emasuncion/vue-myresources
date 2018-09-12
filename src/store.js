import Vue from 'vue'
import Vuex from 'vuex'
import dataJson from '@/assets/myresources.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        resources: [],
        sessionData: dataJson,
        sortJson: dataJson,
        initialItemCount: 4,
        headerUserName: 'Student Reg 2',
        userName: 'Student Reg 2 UAT 1'
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
        },
        sortOldNew(state) {
            state.resources = state.sortJson.sort(function(a, b) {
                return new Date(a.date) - new Date(b.date)
            })

            state.resources = []
            for (let i = 0; i < state.initialItemCount; i++) {
                state.resources.push(state.sessionData[i])
            }
        },
        sortNewOld(state) {
            state.resources = state.sortJson.sort(function(a, b) {
                return new Date(b.date) - new Date(a.date)
            })

            state.resources = []
            for (let i = 0; i < state.initialItemCount; i++) {
                state.resources.push(state.sessionData[i])
            }
        }
    }
})
