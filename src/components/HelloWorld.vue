<template>
  <div class="hello">
    <h1>Hi, I am your dragon maid.</h1>
    <p>
      I serve hot and fresh anime right at your door.
      <br>
      Please praise me, <strong>{{ username || 'master' }}</strong>!
    </p>
    <h3>Links</h3>
    <ul>
      <li><a href="https://github.com/SkyBeastMC" target="_blank">My Github</a></li>
      <li><a href="https://vuejs.org" target="_blank">Made with vuejs</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['username']
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ffc107;
}
</style>
