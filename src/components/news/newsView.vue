<template>
  <div class="news-view w100">
    <div class="banner"></div>
    <div class="container news-type">
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-6 text-center" :class="{'active':active[0]}" @click="changeTab(0)">
          公司新闻
        </div>
        <div class="col-md-6 col-sm-6 col-xs-6 text-center" :class="{'active':active[1]}" @click="changeTab(1)">
          行业资讯
        </div>
        <img class="fg-img" src="../../../static/images/news-delimiter.png"/>
      </div>
    </div>
    <div class="container news-content">
        <div class="row news-item" v-for="(news,index) in newsList">
          <div class="col-md-2 col-sm-2 col-xs-2">
            <img :src="urlPath+news.imgName">
          </div>
          <div class="col-md-2 col-sm-2 col-xs-2">

          </div>
          <div class="col-md-8 col-sm-8 col-xs-8">
            <p class="news-title">{{news.title}}</p>
            <p class="news-intro">{{news.intro}}</p>
            <p class="news-date">{{news.timeStr|fn}}</p>
            <p class="news-more-btn">
              <router-link :to="{name:'newsDetails',query:{id:news.id}}">查看更多</router-link>
            </p>
          </div>
        </div>
        <div class="page_div">
            <button class="page_btn" id="prePage">上一页</button>
            <button class="page_btn" id="btn1">1</button>
            <span id="prePoint">...</span>
            <button class="page_btn" id="btn2"></button>
            <button class="page_btn" id="btn3"></button>
            <button class="page_btn" id="btn4"></button>
            <button class="page_btn" id="btn5"></button>
            <button class="page_btn" id="btn6"></button>
            <span id="sufPoint">...</span>
            <button class="page_btn" id="btn7"></button>
            <button class="page_btn" id="sufPage">下一页</button>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "news",
        data(){
          return{
            urlPath:this.url,
            size:4,//每页显示条数
            currentPage:0,//当前页码
            newsList:null,
            newsType:1,
            active: [true]
          }
        },
        mounted(){
          this.searchList(0);
          this.pageTurning();
        },
        methods:{
          changeTab(num){
            for(var i=0;i<this.active.length;i++){
              if(i!=num)
                this.$set(this.active,i,false);
            }
            this.$set(this.active,num,true);
            this.newsType = num+1;
            this.searchList(0);
            this.pageTurning();
          },
          searchList(page){
            var page=page||0;
            var that = this;
            this.$ajax({
              method: 'post',
              url:this.dataURL('view/findNewsListByCondition'),
              params: {
                type:that.newsType,
                size:that.size,
                page:page
              }
            }).then((res)=>{
              that.newsList=res.data.data.content;
              that.currentPage=page+1;
              that.pageCreate(that.currentPage,res.data.data.totalPages);
            });
          },
          pageCreate(currentPage,pageNum){
            if(pageNum>1){
              var currentPage=currentPage||Number(1);
              var pageNum=pageNum||Number(5);

              this.$jq(".page_div").show();
              this.$jq(".page_btn").show();
              this.$jq(".page_div span").show();

              //给每个button赋值（第一个默认为1）
              this.$jq("#btn2").text(currentPage-2);
              this.$jq("#btn3").text(currentPage-1);
              this.$jq("#btn4").text(currentPage);
              this.$jq("#btn5").text(currentPage+1);
              this.$jq("#btn6").text(currentPage+2);
              this.$jq("#btn7").text(pageNum);

              //可改变当前页的button样式
              this.$jq("#btn4").css("background-color","#F19707");

              //先处理"上一页"和"下一页"的情况
              if(currentPage==1){//如果当前页为首页
                this.$jq("#prePage").hide();
              }
              if(currentPage==pageNum){//如果当前页为末页
                this.$jq("#sufPage").hide();
              }

              if(currentPage<=3){//处理当前页小于等于3的特殊情况
                this.$jq("#prePoint").hide();
                this.$jq("#btn1").hide();
              }else if(currentPage==4){//当前页是4还需要hide掉第一个省略号按钮（！重要）
                this.$jq("#prePoint").hide();
              }
              if(currentPage==1) {//当前页是1还需要hide掉第二第三个按钮
                this.$jq("#btn2").hide();
                this.$jq("#btn3").hide();
              }else if(currentPage==2){//当前页是2则也需要hide掉第二个按钮（此时为-1）
                this.$jq("#btn2").hide();
              }

              //最末端的特殊情况处理和最前端是一样的
              if(this.currentPage>=pageNum-2){
                this.$jq("#sufPoint").hide();
                this.$jq("#btn7").hide();
              }else if(this.currentPage==pageNum-3){
                this.$jq("#sufPoint").hide();
              }

              if(this.currentPage==pageNum){
                this.$jq("#btn5").hide();
                this.$jq("#btn6").hide();
              }
              if(this.currentPage==pageNum-1){
                this.$jq("#btn6").hide();
              }
              this.pageTurning();
            }else
              this.$jq(".page_div").hide();
          },
          pageTurning(){
            var that = this;
            var btns=document.querySelectorAll(".page_btn");
            btns.forEach(function(btn,index){
              if(btn.id==='prePage'){//up
                btn.onclick=function(){
                  that.searchList(that.currentPage-2);
                };
              }else if(btn.id==='sufPage'){//nex
                btn.onclick=function(){
                  that.searchList(that.currentPage);
                };
              }else{
                btn.onclick=function(){
                  that.searchList(parseInt(btn.innerText)-1);
                };
              }
            });
          }
        },
        filters:{
          //过滤器
          fn(val){
            return val.substring(0,val.indexOf("日")+1);
          }
        }
    }
</script>

<style lang='scss' scoped>
  .news-view{
    margin: 0 auto;
  }
  .banner{
    height: 300px;
    margin: 0 auto;
    background-size: 100% 100%;
    background-image: url("../../../static/images/banner_img_news_nor.png");
  }
  .news-type{
    width: 90%;
    padding-top: 5px;
    height: 50px;
    .row{
      position: relative;
      height: 50px;
      border-radius: 10px;
      &>div{
        height: 100%;
        line-height: 50px;
        background-color: #ebebeb;
        border-radius: 8px;
        font-size: 20px;
        cursor: pointer;
        color: #202020;
      }
      &>div:nth-of-type(1){
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      &>div:nth-of-type(2){
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      .fg-img{
        position: absolute;
        height: 100%;
        left: 50%;
      }
    }
    .active:after {
      position: absolute;
      width: 100px;
      bottom: 8px;
      left: 20px;
      right: 20px;
      height: 3px;
      margin: 0 auto;
      content: '';
      background-color: #000;
    }
  }
  .news-content{
    width: 90%;
    min-height: 300px;
    margin: 15px auto;
    padding: 20px;
    /*border: 2px solid #ebebeb;*/
    border-radius: 5px;
    &>.news-item{
      border: 2px solid #ebebeb;
      border-radius: 5px;
      margin-bottom: 20px;
      &>div:first-child{
        padding-left: 0!important;
      }
    }
    img{
      width: 360px;
      height: 260px;
    }
    .news-title,.news-more-btn{
      font-size: 24px;
      text-align: center;
      margin-top: 10px;
    }
    .news-intro,.news-date{
      font-size: 14px;
    }
    .news-intro{
      height: 70px;
      margin: 20px 0;
      line-height: 30px;
    }
    .news-more-btn{
      width: 100px;
      height: 38px;
      margin: 30px 0 20px;
      border: 1px solid $fontColor;
      border-radius: 5px;
      line-height: 38px;
      a{
        font-size: 20px;
        color: $fontColor;
        text-decoration: none;
      }
    }
    ul{
      padding: 40px 60px;
      width: 1180px;
      height: 260px;
      margin: 50px auto 0;
      &:nth-of-type(1){
        margin-top: 60px;
      }
      li{
        &:nth-of-type(1){
          width: 360px;
        }
        &:nth-of-type(2){
          margin-left: 50px;
          width: 770px;
        }
      }
    }
  }
  .page_div{
    width: 100%;
    padding: 20px 0;
    text-align: center;
  }
  .page_btn{
    border-radius:4px;
    border:1px solid #e5e9ef;
    background:#fff;
    margin-right:10px;
    text-align:center;
    min-width:38px;
    height:38px;
    line-height: 8px;
    margin-top:6px;
    outline:0;
    cursor: pointer;
    &:hover{
      border:1px solid #4f90fb;
      color:#4f90fb;
    }
  }
</style>
