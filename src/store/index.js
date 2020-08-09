import Vue from "vue";
import Vuex from "vuex";
//import firebase from "firebase";
import firestore from "../plugins/firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: 1,
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
      //let key = this.state.id++;
      function rand() {
        return Math.floor(Math.random() * (999999 - 0)+ 0);
      }
      const newLot = {
        id: rand() ,
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
