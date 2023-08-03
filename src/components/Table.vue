<template>
  <div>
    <form @submit.prevent="calculateTable">
      <div class="input-group mb-3">
        <input
          type="number"
          class="form-control"
          v-model="inputNumber"
          required
        />
        <div class="input-group-prepend">
          <button
            type="button"
            class="btn btn-sm btn-outline-primary"
            @click="calculateTable"
          >
            <i class="fa fa-calculator"></i>
          </button>
        </div>
      </div>
    </form>

    <div class="mt-3">
      <h4>
        Table of the number: <strong>{{ inputNumber }}</strong>
      </h4>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Number</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="isNaN(parsedNumber)">
            <td colspan="2">Invalid input. Please enter a valid number.</td>
          </tr>
          <tr v-else v-for="i in 10" :key="i">
            <td>{{ inputNumber }} x {{ i }}</td>
            <td>{{ parsedNumber * i }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "TableComponent",
  data() {
    return {
      inputNumber: "",
    };
  },
  computed: {
    parsedNumber() {
      return parseInt(this.inputNumber);
    },
  },
  methods: {
    calculateTable() {
      if (isNaN(this.parsedNumber)) {
        // Handle invalid input
        this.tableHTML =
          "<tr><td colspan='2'>Invalid input. Please enter a valid number.</td></tr>";
        this.strNumber = "";
      } else {
        // Handle valid input
        let tableHTML = "";
        for (let i = 1; i <= 10; i++) {
          const result = this.parsedNumber * i;
          tableHTML += `<tr><td>${this.inputNumber} x ${i}</td><td>${result}</td></tr>`;
        }
        this.tableHTML = tableHTML;
        this.strNumber = this.inputNumber;
      }
    },
  },
};
</script>
  
  <style>
/* Add your custom styles here if needed */
</style>
  