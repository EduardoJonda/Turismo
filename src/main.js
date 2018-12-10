import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyAUnExOayQszFkvcjK2eqvSkPtWMWhusUU",
    authDomain: "prueba-vuejs-44df4.firebaseapp.com",
    databaseURL: "https://prueba-vuejs-44df4.firebaseio.com",
    projectId: "prueba-vuejs-44df4",
    storageBucket: "prueba-vuejs-44df4.appspot.com",
    messagingSenderId: "615601326172"
}

Firebase.initializeApp(config);

Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
