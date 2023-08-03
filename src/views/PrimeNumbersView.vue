<template>
  <div>
    <h1 class="text-center">02 - Prime Numbers</h1>
    <p>
      Write a function that checks whether a number is prime or not. Then create
      a program that prints the first 10 prime numbers.
    </p>
    <PrimeNumbers />
  </div>
</template>
  
  <script>
import PrimeNumbers from "../components/PrimeNumbers.vue";
export default {
  name: "PrimeNumbersView",
  components: {
    PrimeNumbers,
  },
};
</script>
<style>
</style>
  