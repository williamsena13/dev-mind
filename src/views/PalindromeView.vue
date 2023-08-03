<template>
  <div>
    <h1 class="text-center">04 - Palindrome</h1>
    <p>
      Create a function that checks whether a word is a palindrome (that is,
      whether it reads the same backwards and forwards). The program must ask
      the user for a word and inform whether or not it is a palindrome.
    </p>

    <Palindrome />
  </div>
</template>    
<script>
import Palindrome from "../components/Palindrome.vue";
export default {
  name: "PalindromeView",
  components: {
    Palindrome,
  },
};
</script>
  <style>
</style>
    