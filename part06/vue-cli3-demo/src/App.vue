<template>
  <div id="app">

      <HelloWorld></HelloWorld>

      
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="show">
        你好吗？
    </div>
    <login></login>

  </div>
</template>

<script>
import login from './pages/login/index.js'
export default {
  name: 'app',
  components:{
      login:login.login
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .show{
      font-size: 20px;
      color: blue;
  }
}
</style>
