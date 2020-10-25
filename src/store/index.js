import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dialog: false
  },
  getters: {
    get_dialog: state => {
      return state.dialog;
    }
  },
  mutations: {
    SET_DIALOG(state, dialog) {
      state.dialog = dialog;
    }
  },
  actions: {
    set_dialog({ commit }, dialog) {
      commit("SET_DIALOG", dialog);
    }
  },
  modules: {}
});
