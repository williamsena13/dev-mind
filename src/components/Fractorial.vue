<template>
  <form @submit.prevent="calculateFactorial">
    <div class="form-group">
      <label for="numberInput">Enter a Number:</label>
      <input
        type="number"
        class="form-control"
        id="numberInput"
        v-model="inputNumber"
        required
      />
    </div>
    <button
      type="submit"
      class="btn btn-sm btn-outline-primary"
      style="float: right"
    >
      Calculate Factorial
    </button>
    <div v-if="result !== null" class="mt-3 text-center">
      <label for="result">Factorial of {{ inputNumber }}:</label>
      <h4>{{ calculation }}</h4>
    </div>
  </form>
</template>

<script>
export default {
  name: "FractorialComponent",
  data() {
    return {
      inputNumber: null,
      result: null,
      calculation: "",
    };
  },
  methods: {
    calculateFactorial() {
      const number = parseInt(this.inputNumber);
      if (isNaN(number) || number < 0) {
        alert("Please enter a valid number greater than or equal to 0.");
      } else {
        let factorial = 1;
        let calculation = "";
        for (let i = number; i >= 1; i--) {
          factorial *= i;
          calculation += i === number ? `${i}` : ` * ${i}`;
        }
        this.result = factorial;
        this.calculation = `${number}! = \n${calculation} = ${factorial}`;
      }
    },
  },
};
</script>

<style>
</style>
