<template>
  <div>
    <h1 class="text-center">05 - Table</h1>
    <p>
      Write a function that checks whether a number is prime or not. Then create
      a program that prints the first 10 prime numbers.
    </p>
    <Table />
  </div>
</template>
  
  <script>
import Table from "../components/Table.vue";
export default {
  name: "TableView",
  components: {
    Table,
  },
};
</script>
<style>
</style>
  