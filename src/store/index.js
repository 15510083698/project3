import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
     arr:[]
	},
	mutations:{
      addshop2(state,obj){
          state.arr.push(obj)
          window.localStorage.setItem('arr',JSON.stringify(state.arr))
      }
	},
	actions:{

	}
})
