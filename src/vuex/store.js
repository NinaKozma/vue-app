//Ovde su cuvaju sva stanja
import Vue from "vue";
import Vuex from "vuex";
import * as fb from "../firebase";
import router from "../router/router.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userProfile: {},
    authorized: false,
    romanceCollection: [],
    classicsCollection: [],
    scifiCollection: [],
    horrorCollection: []
  },
  actions: {
    async login({ dispatch }, form) {
      //Prijava korisnika
      const { user } = await fb.auth.signInWithEmailAndPassword(
        form.email,
        form.password
      );

      //vracanje korisnika i setovanje u state-u
      dispatch("fetchUserProfile", user);

      router.push("/products");
    },

    async logout({ commit }) {
      //Odjava korisnika sa firebase-a
      await fb.auth.signOut();

      //Reset user profile
      commit("setUserProfile", {});

      router.push("/login");
    },

    async fetchUserProfile({ commit }, user) {
      // fetch user profile iz firebase-a
      const userProfile = await fb.usersCollection.doc(user.uid).get();

      // set user profile in state
      commit("setUserProfile", userProfile.data());
    },

    async register({ dispatch }, form) {
      //Registrovanje korisnika
      //Await vraca neki promise - dok se ne resolvira taj promise, cekaj...
      const { user } = await fb.auth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );

      //Unesi korisnika u user kolekciju na firebase-u
      await fb.usersCollection.doc(user.uid).set({
        email: form.email,
        password: form.password,
        name: form.name,
        lastName: form.lastName
      });

      //vracanje korisnika i setovanje u state-u
      dispatch("fetchUserProfile", user);

      router.push("/login");
    },

    async getRomanceCollection({ state }) {
      var romanceProductsRef = fb.romanceCollection;
      try {
        var allRomanceProductsSnapShot = await romanceProductsRef.get(); //vraca sve dokumente iz kolekcije
        state.romanceCollection = [];
        allRomanceProductsSnapShot.forEach(doc => {
          const singleRomanceProduct = doc.data();
          singleRomanceProduct["id"] = doc.id;
          state.romanceCollection.push(singleRomanceProduct);
          console.log(singleRomanceProduct);
        });
        console.log("Ended with fetching romance products");
      } catch (err) {
        console.log("Error getting documents", err);
      }
    },

    async deleteRomanceProduct({ state }, id) {
      try {
        await fb.romanceCollection.doc(id).delete();
        alert("Product with ID: " + id + " was deleted!");
      } catch (error) {
        console.log(error);
      }
    }
  },
  mutations: {
    //ovo mi treba kako bi mi vratio profil korisnika nakon prijave
    //inicijalno je userProfile prazan objekat
    //pa se zbog toga koriste mutacije kako bi se postavilo novo stanje userProfile
    setUserProfile(state, val) {
      state.userProfile = val;
    }
  }
});
