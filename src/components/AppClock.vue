<template>
  <div class="clock-container">
    <div class="clock-item">{{ hours }} :</div>
    <div class="clock-item">{{ minutes }} :</div>
    <div class="clock-item">{{ seconds }}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    clockInterval: null
  }),
  computed: {
    ...mapState('clock', [
      'seconds',
      'minutes',
      'hours'
    ])
  },
  methods: {
    ...mapActions('clock', [
      'setClock'
    ])
  },
  created() {
    this.setClock()
    this.clockInterval = setInterval(() => {
      this.setClock()
    }, 1000)
  },
  destroyed() {
    clearInterval(this.clockInterval)
  }
}
</script>

<style>
.clock-container {
  margin: 0 auto;
  text-align: center;
  border-radius: 5px;
  display: inline-block;
  border: 1px solid #eee;
}
.clock-item {
  padding: 10px;
  font-size: 40px;
  font-weight: bold;
  display: inline-block;
}
</style>
