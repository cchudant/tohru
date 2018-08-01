<template>
  <div class="directory" :class="error && 'errorBg'">
    <h2>Index of: <span class="path">{{ path }}</span></h2>
    <div class="error" v-if="error">
      <h1>{{ error }}</h1>
    </div>
    <div class="files" v-else>
      <ul v-for="file in files" :key="file">
        <li><a @click="() => click(file)">{{ file }}</a></li>
      </ul>
    </div>
    <h3 v-if="path !== '/'"><a @click="() => click('../')" class="back">Parent directory</a></h3>    
  </div>
</template>
<script>
const { API_URL = 'http://localhost:5050' } = process.env

export default {
  props: ['path'],
  data() {
    return { files: [], error: null }
  },
  beforeMount() {
    this.update()
  },
  watch: {
    path() {
      this.update()
    }
  },
  methods: {
    click(file) {
      const path =
        (this.path.startsWith('/') ? this.path : '/' + this.path) + file

      if (file === '../') {
        // Parent directory
        const dir = this.path.split('/')
        dir.splice(dir.length - 2, 1)
        const path = dir.join('/')

        history.pushState({ file }, path, path)
        this.$emit('walk', path)
      } else if (file.substring(file.length - 1) === '/') {
        // Directory
        history.pushState({ file }, path, path)
        this.$emit('walk', path)
      } else {
        // File
        open(API_URL + path, '_blank')
      }
    },
    async update() {
      try {
        const res = await fetch(API_URL + this.path, {
          headers: { Accept: 'application/json' },
          credentials: 'include'
        })
        const { files, error } = await res.json()

        this.files = files
        this.info = error
      } catch (e) {
        this.info = 'Unknown error'
        throw e
      }
    }
  }
}
</script>

<style scoped>
.directory {
  margin-top: 40px;
  background-color: #f6f6f6;
  padding: 35px 40px 45px;
}
.path {
  color: #2c3e50;
  font-family: monospace;
}
.error {
  margin: 50px;
  font-family: monospace;
}
.errorBg {
  background-color: #fd8c8c;
}
.files {
  margin-bottom: 50px;
}
ul {
  padding: 0;
  list-style-type: none;
}
a {
  color: #42b983;
  cursor: pointer;
}
</style>
