import Vue from "vue";
import VueRouter from "vue-router";

// Importe os componentes que deseja usar nas rotas
import Home from "./views/Home.vue";
import Calculator from "./views/Calculator.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/calculator",
    component: Calculator,
  },
];

const router = new VueRouter({
  mode: "history", // Use 'history' para URLs limpas (sem hash '#')
  routes,
});

export default router;
