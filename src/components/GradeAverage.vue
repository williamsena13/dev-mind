<template>
  <div>
    <h4>Enter Grades for 3 Subjects</h4>
    <div>
      <label for="grade1">Subject 1:</label>
      <input
        v-model="grades[0]"
        type="number"
        id="grade1"
        min="0"
        max="100"
        required
      />
    </div>
    <div>
      <label for="grade2">Subject 2:</label>
      <input
        v-model="grades[1]"
        type="number"
        id="grade2"
        min="0"
        max="100"
        required
      />
    </div>
    <div>
      <label for="grade3">Subject 3:</label>
      <input
        v-model="grades[2]"
        type="number"
        id="grade3"
        min="0"
        max="100"
        required
      />
    </div>
    <button @click="calculateAverage">Calculate Average</button>
    <p v-if="average !== null" id="averageDisplay">
      Average Grade: {{ average.toFixed(2) }}
    </p>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      grades: [null, null, null],
      average: null,
    };
  },
  methods: {
    calculateAverage() {
      const sum = this.grades.reduce(
        (total, grade) => total + parseFloat(grade || 0),
        0
      );
      this.average = sum / this.grades.length;
    },
  },
};
</script>
  