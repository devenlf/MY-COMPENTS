<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div style="width:300px">
      <L-Button :color="'#fff'" :backColor="'#3582fb'" @active="activeEvent">12313</L-Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    activeEvent(){
      console.log(123123213)
    }
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
