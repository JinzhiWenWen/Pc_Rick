<template>
  <div id="app"  v-if="isLoad">
    <head-nav></head-nav>
    <div class="app-body">
      <router-view></router-view>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
  export default {
    name: 'App',
    provide(){
      return{
        reload:this.reload
      }
    },
    data(){
      return {
        title:'',
        isLoad:true
      }
    },
    methods:{
      reload(){
        this.isLoad=false;
        this.$nextTick(()=>{
          this.isLoad=true;
        })
      }
    }
  }
</script>

<style>
  #app{
    margin: 0 auto;
    min-width: 1420px;
    font-family: "MyriadPro Regular";
  }
  .app-body{
    margin-top: 111px;
  }
  #nprogress .bar {
    background: #eb7a1d !important;
  }
</style>
