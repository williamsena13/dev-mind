<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6">
        <h4>Números gerados aleatoriamente!</h4>
        <input v-model="randomArrayInput" @change="processRandomArray" />
        <h5>Números Primos encontrados!</h5>
        <p>{{ primeNumbersArray.join(", ") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomArrayInput: "",
      primeNumbersArray: [],
    };
  },
  mounted() {
    this.processRandomArray();
  },
  methods: {
    // Vue equivalent of the isPrime function
    isPrime(number) {
      if (number <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    },

    // Vue equivalent of the findPrimes function
    findPrimes(numbers) {
      const primeNumbers = [];
      for (const number of numbers) {
        if (this.isPrime(number)) {
          primeNumbers.push(number);
        }
      }
      return primeNumbers;
    },

    processRandomArray() {
      const randomArrayString = this.randomArrayInput.trim();
      if (randomArrayString === "") {
        this.randomArrayInput = "";
        this.randomArray = [];
        this.primeNumbersArray = [];
        return;
      }

      const parsedArray = randomArrayString
        .split(",")
        .map((str) => parseInt(str.trim()));
      if (parsedArray.some(isNaN)) {
        // Invalid input, reset the arrays
        this.randomArrayInput = this.randomArray.join(", ");
        return;
      }

      this.randomArray = parsedArray;
      this.primeNumbersArray = this.findPrimes(this.randomArray);
    },
  },
};
</script>
