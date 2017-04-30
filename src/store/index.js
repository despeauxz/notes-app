import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})
