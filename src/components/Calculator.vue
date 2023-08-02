<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6">
        <table class="table table-bordered text-center">
          <tr>
            <td colspan="4">
              <input
                type="text"
                class="form-control text-right"
                v-model="result"
                disabled
              />
            </td>
          </tr>
          <tr>
            <td>
              <button class="btn btn-light" @click="clearResult">C</button>
            </td>
            <td>
              <button class="btn btn-light" @click="deleteLastChar">
                &#9003;
              </button>
            </td>
            <td>
              <button class="btn btn-light" @click="operate('/')">
                &#247;
              </button>
            </td>
            <td>
              <button class="btn btn-light" @click="operate('*')">
                &#215;
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button class="btn btn-light" @click="appendToResult('7')">
                7
              </button>
            </td>
            <td>
              <button class="btn btn-light" @click="appendToResult('8')">
                8
              </button>
            </td>
            <td>
              <button class="btn btn-light" @click="appendToResult('9')">
                9
              </button>
            </td>
            <td>
              <button class="btn btn-light" @click="operate('-')">
                &#8722;
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button class="btn btn-light" @click="appendToResult('4')">
                4
              </button>
            </td>
            <td>
              <button class="btn btn-light" @click="appendToResult('5')">
                5
              </button>
            </td>
            <td>
              <button class="btn btn-light" @click="appendToResult('6')">
                6
              </button>
            </td>
            <td>
              <button class="btn btn-light" @click="operate('+')">&#43;</button>
            </td>
          </tr>
          <tr>
            <td>
              <button class="btn btn-light" @click="appendToResult('1')">
                1
              </button>
            </td>
            <td>
              <button class="btn btn-light" @click="appendToResult('2')">
                2
              </button>
            </td>
            <td>
              <button class="btn btn-light" @click="appendToResult('3')">
                3
              </button>
            </td>
            <td rowspan="2">
              <button class="btn btn-success" @click="calculate">=</button>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <button
                class="btn btn-light btn-block"
                @click="appendToResult('0')"
              >
                0
              </button>
            </td>
            <td>
              <button class="btn btn-light" @click="appendToResult('.')">
                .
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalculatorComponent",
  data() {
    return {
      result: "",
    };
  },
  methods: {
    appendToResult(value) {
      this.result += value;
    },
    clearResult() {
      this.result = "";
    },
    deleteLastChar() {
      this.result = this.result.slice(0, -1);
    },
    operate(operator) {
      this.result += operator;
    },
    calculate() {
      try {
        this.result = eval(this.result).toString();
      } catch (error) {
        this.result = "Error";
      }
    },
    handleKeyPress(event) {
      const key = event.key;
      const isNumber = /[0-9]/.test(key);
      const isOperator = /[-+*/]/.test(key);
      const isDot = /[.]/.test(key);

      if (isNumber) {
        this.appendToResult(key);
      } else if (isOperator) {
        this.operate(key);
      } else if (isDot) {
        this.appendToResult(".");
      } else if (key === "Enter") {
        this.calculate();
      }
    },
  },
  mounted() {
    window.addEventListener("keyup", this.handleKeyPress);
  },
  beforeDestroy() {
    window.removeEventListener("keyup", this.handleKeyPress);
  },
};
</script>

<style>
/* Add your custom styling here if needed */
</style>
