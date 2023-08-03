<template>
  <div>
    <h1 class="text-center">07 - Grade Average</h1>
    <p>
      Create a program that takes a student's grades in three different subjects
      and calculates the average of the grades. Then display the calculated
      average.
    </p>
    <GradeAverage />
  </div>
</template>
    
<script>
import GradeAverage from "../components/GradeAverage.vue";
export default {
  name: "AverageView",
  components: {
    GradeAverage,
  },
};
</script>
  <style>
</style>
    