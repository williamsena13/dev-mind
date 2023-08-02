import Vue from "vue";
import VueRouter from "vue-router";

// Importe os componentes que deseja usar nas rotas
import Home from "./views/Home.vue";
import Calculator from "./views/Calculator.vue";
import PrimeNumbers from "./views/PrimeNumbers.vue";
import Palindrome from "./views/Palindrome.vue";
import Factorial from "./views/Factorial.vue";
import Table from "./views/Table.vue";
import Vowel from "./views/Vowel.vue";
import Average from "./views/Average.vue";
import Interest from "./views/InterestCalculation.vue";

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
  {
    path: "/prime",
    component: PrimeNumbers,
  },
  {
    path: "/factorial",
    component: Factorial,
  },
  {
    path: "/palindrome",
    component: Palindrome,
  },
  {
    path: "/table",
    component: Table,
  },
  {
    path: "/vowel",
    component: Vowel,
  },
  {
    path: "/average",
    component: Average,
  },
  {
    path: "/interest",
    component: Interest,
  },
];

const router = new VueRouter({
  mode: "history", // Use 'history' para URLs limpas (sem hash '#')
  routes,
});

export default router;
