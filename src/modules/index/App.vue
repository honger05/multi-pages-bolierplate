<template>
  <div id="app">
    <hello></hello>
    <p>
      Welcome to your Vue.js app!
    </p>
    <h1>Multi Pages Bolierplate</h1>
    <h2><a href="detail.html">go to detail</a></h2>
  </div>
</template>

<script>
import Hello from 'components/Hello';

export default {
  components: {
    Hello,
  },
};
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
