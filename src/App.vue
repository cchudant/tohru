<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld :username="username"/>
    <template v-if="requested">
      <template v-if="username">
        <DirectoryView :path="path" @walk="p => path = p"/>
        <Logout @logout="() => username = null"/>
      </template>
      <template v-else>
        <Login @login="u => username = u"/>
      </template>
    </template>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login.vue'
import Logout from './components/Logout.vue'
import DirectoryView from './components/DirectoryView.vue'
import { logged } from './auth'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Login,
    Logout,
    DirectoryView
  },
  data() {
    return {
      path: location.pathname,
      username: null,
      requested: false
    }
  },
  async beforeMount() {
    try {
      const { username } = await logged()
      this.username = username
    } catch (e) {
      /* emtpy */
    }

    this.requested = true
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
