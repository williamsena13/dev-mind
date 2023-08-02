<template>
  <div class="container mt-8">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6">
        <textarea
          rows="4"
          class="form-control"
          v-model="randomArrayInput"
          @change="processRandomArray"
        />
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
      randomArray: [],
      primeNumbersArray: [],
    };
  },
  mounted() {
    if (this.randomArrayInput === "") {
      this.generateRandomArray();
    } else {
      this.processRandomArray();
    }
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

    generateRandomArray() {
      const randomArray = [];
      for (let i = 0; i < 25; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        randomArray.push(randomNumber);
      }
      this.randomArray = randomArray;
      this.randomArrayInput = randomArray.join(", ");
      this.primeNumbersArray = this.findPrimes(randomArray);
    },

    processRandomArray() {
      const randomArrayString = this.randomArrayInput.trim();
      if (randomArrayString === "") {
        this.randomArray = [];
        this.primeNumbersArray = [];
        return;
      }

      const parsedArray = randomArrayString
        .split(",")
        .map((str) => parseInt(str.trim()));
      if (parsedArray.some(isNaN)) {
        // Invalid input, reset the arrays
        this.randomArray = [];
        this.primeNumbersArray = [];
        return;
      }

      this.randomArray = parsedArray;
      this.primeNumbersArray = this.findPrimes(parsedArray);
    },
  },
};
</script>
