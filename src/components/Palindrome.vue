<template>
  <div>
    <div class="form-group">
      <label for="wordInput">Enter a word:</label>
      <input
        type="text"
        class="form-control"
        id="wordInput"
        v-model="inputWord"
        required
      />
    </div>
    <button
      type="button"
      class="btn btn-sm btn-outline-primary"
      @click="checkPalindrome"
      style="float: right"
    >
      Check Palindrome
    </button>

    <h5 class="text-center">{{ result }}</h5>
  </div>
</template>
  
  <script>
export default {
  name: "PalindromeComponent",
  data() {
    return {
      inputWord: "",
      result: "",
    };
  },
  methods: {
    checkPalindrome() {
      const input = this.inputWord.toLowerCase();
      const reverseInput = input.split("").reverse().join("");

      if (input === reverseInput) {
        this.result = `${input} is a palindrome!`;
      } else {
        this.result = `${input} is not a palindrome.`;
      }
    },
  },
};
</script>
  