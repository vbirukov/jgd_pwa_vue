import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        level: Number(localStorage.getItem('level') ? localStorage.getItem('level') : 0)
    },
    mutations: {
        levelUp: function (state) {
            new Audio(require(`@/assets/components/user_level/sound_14842.mp4`)).play()
            localStorage.setItem('level', String(++(state.level)))
        }
    },
    actions: {},
    modules: {}
})
