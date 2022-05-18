import { createStore } from 'vuex'
import axios from 'axios'
import Promise from 'core-js/features/promise'

const mainurl = 'https://api.elkogroup.com'

export default createStore({
  state: {
    token: localStorage.getItem("token") || "",
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
  mutations: {
    set(state, [variable, value]) {
      state[variable] = value;
    },
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token) {
      state.status = "success";
      state.token = token;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    },
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: `${mainurl}/v3.0/api/Token`,
          data: user,
          method: "POST",
        })
          .then((resp) => {
            const token = resp.data;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            commit("auth_success", token);
            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error");
            localStorage.clear();
            delete axios.defaults.headers.common["Authorization"];
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit("logout");
        localStorage.clear();
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
  },
  account({ commit }) {
    return new Promise((resolve) => {
      axios({ url: `${mainurl}/v3.0/api/Accounts/My`, method: 'GET' })
        .then((resp) => {
          console.log('account', resp);
          commit("auth_success", localStorage.getItem('token'))
          resolve(resp)
        })
    })
  },


}
})
