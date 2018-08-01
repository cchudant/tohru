<template>
  <form @submit.prevent="onLogin" class="login" :class="err && 'errorBg'">
    <h2>Login to proceed</h2>
    <div><label>Username</label><input v-model="username" class="input" type="text"></div>
    <div><label>Password</label><input v-model="password" class="input" type="password"></div>
    <div><input class="button" value="Submit" type="submit" ></div>
    <div v-if="err" class="error"><h1>{{ err }}</h1></div>
  </form>
</template>

<script>
import { login } from '../auth'

export default {
  data() {
    return {
      username: '',
      password: '',
      err: null
    }
  },
  methods: {
    async onLogin() {
      try {
        const { username } = await login(this.username, this.password)
        this.$emit('login', username)
      } catch (err) {
        this.error = err
        throw err
      }
    }
  }
}
</script>

<style scoped>
.login {
  margin-top: 40px;
  background-color: #f6f6f6;
  padding: 35px 40px 45px;
}
.login > div {
  margin-top: 15px;
}
label {
  margin-right: 15px;
}
input[type='submit'] {
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #ffc107;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #ffc107;
}
.input {
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  padding: 0 15px 0 15px;
  border: 1px solid #e3e3e3;
  color: #2c3e50;
  outline: none;
  border-radius: 15px;
  margin-right: 10px;
  transition: border-color 0.2s ease;
  background-size: 20px;
}
.error {
  margin: 50px;
  font-family: monospace;
}
.errorBg {
  background-color: #fd8c8c;
}
</style>
