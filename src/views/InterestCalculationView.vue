<template>
  <div>
    <h1 class="text-center">08 - Interest Calculation</h1>
    <p>
      Create a function that calculates the final value of an investment based
      on initial capital, interest rate, and investment time (in months). The
      program must prompt the user for these values and display the final
      value.!
    </p>
    <InterestCalculation />
  </div>
</template>
    
  
    
<script>
import InterestCalculation from "../components/InterestCalculation.vue";
export default {
  name: "InterestCalculationView",
  components: {
    InterestCalculation,
  },
};
</script>
  <style>
</style>
    