<template>
  <div>
    <h1 class="text-center">03 - Factorial</h1>
    <p>
      Write a function to calculate the factorial of a number. Next, create a
      program that allows the user to enter a number and displays the
      corresponding factorial.
    </p>
    <Factorial />
  </div>
</template>
  
<script>
import Factorial from "../components/Fractorial.vue";
export default {
  name: "FactorialView",
  components: {
    Factorial,
  },
};
</script>
<style>
</style>
  