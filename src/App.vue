<template>
  <div
    class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"
    id="app"
  >
    <header class="masthead mb-auto">
      <div class="inner">
        <h3 class="masthead-brand">Dev Mind</h3>
        <nav class="nav nav-masthead justify-content-center">
          <router-link class="nav-link" to="/home">Home</router-link>
          <router-link class="nav-link" to="/calculator">Nº 1</router-link>
          <router-link class="nav-link" to="/prime">Nº 2</router-link>
          <router-link class="nav-link" to="/factorial">Nº 3</router-link>
          <router-link class="nav-link" to="/palindrome">Nº 4</router-link>
          <router-link class="nav-link" to="/table">Nº 5</router-link>
          <router-link class="nav-link" to="/vowel">Nº 6</router-link>
          <router-link class="nav-link" to="/average">Nº 7</router-link>
          <router-link class="nav-link" to="/interest">Nº 8</router-link>
        </nav>
      </div>
    </header>

    <main role="main" class="inner cover">
      <router-view></router-view>
    </main>

    <footer class="mastfoot mt-auto">
      <div class="inner">
        <p>
          <a href="https://getbootstrap.com/docs/4.6/examples/cover/"
            >Bootstrap Cover</a
          >, customized by
          <a href="https://github.com/williamsena13">Williamsena13</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@import url("assets/css/cover.css");
</style>
