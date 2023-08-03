<template>
  <div>
    <h1 class="text-center">06 - Vowel Counter</h1>
    <p>
      Create a function that counts the number of vowels in a string. The
      program should ask the user for a sentence and display how many vowels it
      has.
    </p>
    <Table />
  </div>
</template>
  
<script>
import Table from "../components/Table.vue";
export default {
  name: "VowelView",
  components: {
    Table,
  },
};
</script>
<style>
</style>
  