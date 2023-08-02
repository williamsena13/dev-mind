import Vue from "vue";
import VueRouter from "vue-router";

// Importe os componentes que deseja usar nas rotas
import Home from "./views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history", // Use 'history' para URLs limpas (sem hash '#')
  routes,
});

export default router;
