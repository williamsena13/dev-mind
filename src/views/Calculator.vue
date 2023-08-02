<template>
  <div>
    <h1 class="text-center">Simple Calculator</h1>
    <p>
      Create a calculator that takes two numbers and an operator (+, -, *, /)
      and returns the result of the operation
    </p>
    <Calculator />
  </div>
</template>
  
  <script>
import Calculator from "../components/Calculator.vue";
export default {
  name: "HomeView",
  components: {
    Calculator,
  },
};
</script>
<style>
</style>
  