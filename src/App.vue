<template>
  <div id="app" class="appT"  v-if="isLoad">
      <div class="app-body">
        <head-nav></head-nav>
        <div class="view_box">
            <keep-alive>
              <router-view v-if="$route.meta.keep"></router-view>
            </keep-alive>
          <router-view v-if="!$route.meta.keep"></router-view>
        </div>
        <footer-nav></footer-nav>
      </div>
    <!-- <router-view v-if="$route.meta.admin"></router-view> -->
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
    overflow-x: hidden;
  }
  .appT::-webkit-scrollbar {
      display: none!important;
    }
  .app-body{
    margin-top: 111px;
  }
  #nprogress .bar {
    background: #eb7a1d !important;
  }
</style>
