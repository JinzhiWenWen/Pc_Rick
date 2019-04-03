<!-- 临时管理员页面 -->
<template lang="html">
  <div class="admin">
    <el-row>
      <el-col :span="4">
        <div>
          <el-menu
            default-active="4"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#fff"
            >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-date"></i>
                <span>临时管理</span>
              </template>
              <el-menu-item-group >
                <el-menu-item v-for="(url,index) in route" :key="index">
                  <router-link tag="span" :to="url.path" @click.native="pushCru(index)">{{url.text}}</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-warning"></i>
                <span>临时管理</span>
              </template>
              <el-menu-item-group >
                <el-menu-item>待开发</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="admin_view">
          <div class="crumbs">
            <ul>
              <li v-for="(crum,index) in abc" @click="choseCru(index)" :key="index+'A'" ref="crum">
                <router-link tag="span" :to="crum.url">{{crum.name}}</router-link>
                <i class="iconfont icon-guanbi" ref="close" @click.stop="delCru(index)"></i>
              </li>
              <li></li>
            </ul>
          </div>
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
     return {
       isCollapse: true,
       utlN:0,
       abc:[
         {
           name:'欢迎',
           url:'/admin/wel'
         }
       ],
       route:[
         {
           text:'订单派发',
           path:'/admin/order'
         },
         {
           text:'角色管理',
           path:'/admin/role'
         },
         {
           text:'频道管理',
           path:'/admin/channel'
         }
       ],
       closeUrl:null,//暂存页面地址
     }
   },
   mounted(){
     this.$refs.crum[0].style.borderBottom='0';
     this.$refs.close[0].style.display='none';
     if(this.abc.length<2){
       this.$router.push('/admin/wel')
     }
   },
   methods: {
     handleOpen(key, keyPath) {
       console.log(key, keyPath);
     },
     handleClose(key, keyPath) {
       console.log(key, keyPath);
     },
     choseCru(index){//面包屑选择
       for(let i in this.$refs.crum){
         this.$refs.crum[i].style.borderBottom='1px solid #eb7a1d'
         this.$refs.crum[i].style.color='black'
       };
       setTimeout(()=>{
         this.closeUrl=this.abc[index].url;
         this.$refs.crum[index].style.borderBottom='0';
         this.$refs.crum[index].style.color='#eb7a1d'
       })
     },
     pushCru(index){//添加面包屑
       for(let i in this.$refs.crum){
         this.$refs.crum[i].style.borderBottom='1px solid #eb7a1d'
         this.$refs.crum[i].style.color='black'
       };
       let curMes={
         name:null,
         url:null
       };
       curMes.name=this.route[index].text;
       curMes.url=this.route[index].path;
       this.closeUrl=this.route[index].path;
       let a=[];
       this.abc.forEach((e)=>{
         a.push(e.name)
       });
       if(a.indexOf(curMes.name)<0){
         this.abc.push(curMes);
         setTimeout(()=>{
           this.$refs.crum[this.abc.length-1].style.borderBottom='0';
           this.$refs.crum[this.abc.length-1].style.color='#eb7a1d'
         })
       }else{
         this.$refs.crum[a.indexOf(curMes.name)].style.borderBottom='0'
         this.$refs.crum[a.indexOf(curMes.name)].style.color='#eb7a1d'
       }
     },
     delCru(index){//删除面包屑
       this.abc.splice(index,1);
       for(let i in this.$refs.crum){
         this.$refs.crum[i].style.borderBottom='1px solid #eb7a1d'
       };
       setTimeout(()=>{
          this.$refs.crum[this.abc.length-1].style.borderBottom='0';
          this.$router.push(this.abc[this.abc.length-1].url);
       })
     }
   }
}
</script>

<style lang="scss" scoped>
.cru_active{
  border-bottom:0!important;
  color:#eb7a1d!important;
}
.admin{
  margin:0 auto;
  max-height: none;
  padding-top: 12px;
  .admin_view{
    background: white;
    max-height: none;
    padding-bottom: 50px;
    .crumbs{
      width: 100%;
      height: 30px;
      ul{
        width: 100%;
        height: 100%;
        display: flex;
        li{
          float: none;
          line-height: 30px;
          min-width: 110px;
          max-width: none;
          text-align: center;
          border:1px solid #eb7a1d;
          box-sizing: border-box;
          padding-left: 5px;
          padding-right: 5px;
          cursor:pointer;
          background: white;
          border-top-right-radius: 5px;
          border-top-left-radius: 5px;
          position: relative;
          span{
            display: inline-block;
            width: 100%;
            height: 100%;
          }
          i{
            position: absolute;
            right:10px;
            font-size: 12px;
            color:#999;
            top:0;
          }
          i:hover{
            color:#666;
          }
        }
        li:last-child{
          flex:1;
          border:0;
          border-bottom:1px solid #eb7a1d;
        }
      }

    }
  }
}
</style>
