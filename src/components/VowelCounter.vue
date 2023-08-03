<template>
  <div>
    <p class="lead">Enter a sentence to count the number of vowels.</p>
    <input
      type="text"
      v-model="inputSentence"
      class="form-control mb-2"
      placeholder="Enter your sentence here"
    />
    <button
      type="button"
      class="btn btn-primary"
      @click="countVowels"
      style="float: right"
    >
      Count Vowels
    </button>
    <h4 class="result" v-if="showResult">Number of vowels: {{ vowelCount }}</h4>
  </div>
</template>
  
  <script>
export default {
  name: "VowelCounterComponent",
  data() {
    return {
      inputSentence: "",
      vowels: ["a", "e", "i", "o", "u"],
      vowelCount: 0,
      showResult: false,
    };
  },
  methods: {
    countVowels() {
      const inputSentence = this.inputSentence.toLowerCase();
      this.vowelCount = 0;
      for (let i = 0; i < inputSentence.length; i++) {
        if (this.vowels.includes(inputSentence[i])) {
          this.vowelCount++;
        }
      }
      this.showResult = true;
    },
  },
};
</script>
<style>
/* Add your custom styles here if needed */
</style>
  