<template>
  <div class="container mt-5">
    <h4>Interest Calculation</h4>
    <form>
      <div class="form-group">
        <label for="initialCapital">Initial Capital:</label>
        <input
          v-model="initialCapital"
          type="number"
          class="form-control"
          id="initialCapital"
          min="0"
          required
        />
      </div>
      <div class="form-group">
        <label for="interestRate">Interest Rate (%):</label>
        <input
          v-model="interestRate"
          type="number"
          class="form-control"
          id="interestRate"
          min="0"
          required
        />
      </div>
      <div class="form-group">
        <label for="investmentTime">Investment Time (months):</label>
        <input
          v-model="investmentTime"
          type="number"
          class="form-control"
          id="investmentTime"
          min="0"
          required
        />
      </div>
      <button
        @click="calculateFinalValue"
        type="button"
        class="btn btn-primary"
      >
        Calculate Final Value
      </button>
      <p v-if="finalValue !== null" id="finalValueDisplay" class="mt-3">
        The final value of the investment is: {{ finalValue.toFixed(2) }}
      </p>
    </form>
  </div>
</template>

  
  
<script>
export default {
  name: "InterestCalculationComponent",
  data() {
    return {
      initialCapital: 0,
      interestRate: 0,
      investmentTime: 0,
      finalValue: null,
    };
  },
  methods: {
    calculateFinalValue() {
      // Convert interestRate to a percentage
      const interestRatePercent = this.interestRate / 100;

      // Calculate the final value
      this.finalValue =
        this.initialCapital *
        Math.pow(1 + interestRatePercent, this.investmentTime / 12);
    },
  },
};
</script>
  