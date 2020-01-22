<template>
  <div id="app">
    <app-clock />
  </div>
</template>

<script>
import AppClock from './components/AppClock.vue'
import store from './store'
export default {
  store,
  name: 'app',
  components: {
    AppClock
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
