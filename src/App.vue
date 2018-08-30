<template>
  <div id="app">
      <user-pane></user-pane>
  </div>
</template>

<script>
    import  UserPane from './components/UserPane'
export default {
  name: 'app',
  components: {
      UserPane
  }
}
</script>

<style>
    *{padding: 0; margin: 0;}
    *::before,*::after,*{
        box-sizing: border-box;
    }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
