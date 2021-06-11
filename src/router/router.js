import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

//Konfigurisanje router-a prosledjivanjem js objekta konstruktoru
const router = new VueRouter({
  routes: routes,
  mode: "history"
});

export default router;
