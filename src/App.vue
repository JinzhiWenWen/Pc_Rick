<template>
  <div id="app">
    <head-nav></head-nav>
    <div class="app-body">
      <router-view/>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        title:''
      }
    }
  }
</script>

<style scoped lang="scss">
  #app{
    margin: 0 auto;
    min-width: 1420px;
    font-family: "MyriadPro Regular";
  }
  .app-body{
    margin-top: 111px;
  }
</style>
