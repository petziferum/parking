import Vue from "vue";
import Vuex from "vuex";
//import firebase from "firebase";
import firestore from "../plugins/firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    spaces: []
  },
  mutations: {
    addParkingSpace(state, payload) {
      state.spaces = payload;
    }
  },
  actions: {
    receiveParking({ commit }) {
      firestore
        .collection("parkinglots")
        .get()
        .then(res => {
          let data = [];
          res.forEach(p => data.push(p.data()));
          commit("addParkingSpace", data);
        });
    },
    saveNewParkingLot({ dispatch }) {
      const newLot = {
        id: "0001",
        name: "Parkplatz Ost",
        guide: "Peter",
        spaces: 100,
        active: true
      };
      firestore
        .collection("parkinglots")
        .doc()
        .set(newLot)
        .then(() => {
          console.info("neue Parkplatz", newLot);
          dispatch("receiveParking");
        });
    }
  },
  getters: {
    getParkingSpaces: state => {
      return state.spaces;
    }
  },
  modules: {}
});
