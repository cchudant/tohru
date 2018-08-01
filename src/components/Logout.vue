<template>
  <button @click="onLogoff"><i class="material-icons">exit_to_app</i></button>
</template>

<script>
import { logout } from '../auth'

export default {
  methods: {
    async onLogoff() {
      await logout()
      this.$emit('logout')
    }
  }
}
</script>

<style scoped>
button {
  position: fixed;
  width: 49px;
  height: 49px;
  top: 20px;
  right: 20px;
  background-color: #ffc107;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  border: none;
  cursor: pointer;
}
</style>
