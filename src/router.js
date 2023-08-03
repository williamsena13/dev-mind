import Vue from "vue";
import VueRouter from "vue-router";

// Importe os componentes que deseja usar nas rotas
import Home from "./views/HomeView.vue";
import Calculator from "./views/CalculatorView.vue";
import PrimeNumbers from "./views/PrimeNumbersView.vue";
import Palindrome from "./views/PalindromeView.vue";
import Factorial from "./views/FactorialView.vue";
import Table from "./views/TableView.vue";
import Vowel from "./views/VowelView.vue";
import Average from "./views/AverageView.vue";
import Interest from "./views/InterestCalculationView.vue";

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
