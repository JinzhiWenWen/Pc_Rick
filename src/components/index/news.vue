<template>
  <div class="news w1420">
    <p class="title"><span class="wow xnxg"></span><span class="special-title">新闻动态</span></p>
    <p class="intro">关注行业动向，掌握市场方向</p>
    <div class="news-list clearfix">
      <div class="news-item f-l" v-for="(news,index) in newsList">
        <router-link :to="{name:'newsDetails',query:{id:news.id}}">
          <div class="img-box">
            <img :src="urlPath+news.imgName">
          </div>
          <p class="news-title">{{news.title}}</p>
          <p class="news-intro">{{news.intro}}</p>
        </router-link>
      </div>
    </div>
    <p class="news-more">
      <router-link :to="{name:'newsView'}">
        更多新闻
      </router-link>
    </p>
  </div>
</template>

<script>
    export default {
        name: "news",
        data(){
          return{
            urlPath:this.url,
            newsList:null
          }
        },
        mounted(){
          this.$ajax({
            method: 'post',
            url:this.dataURL('view/findNewsListByCondition'),
            params: {
              type:1,
              size:3,
              page:0
            }
          }).then((res)=>{
            this.newsList=res.data.data.content;
          });
        }
    }
</script>

<style lang="scss" scoped>
  .news{
    height: 760px;
    margin: 0 auto;
    .special-title{
      color: $fontColor;
    }
    .xnxg{
      display: inline-block;
      width: 150px;
      height: 75px;
      margin-right: 10px;
      background-size: 100% 100%;
      background-image: url("../../../static/images/xiniuxiaoge.png");
      animation: fadeInLeft 1s;
    }
    .title{
      padding-top: 50px;
      text-align: center;
      font-size: 36px;
      letter-spacing: 2px;
    }
    .intro{
      padding: 26px 0;
      text-align: center;
      font-size: 24px;
      letter-spacing: 2px;
    }
    .news-list{
      margin: 0 100px;
      height: 400px;
    }
    .news-item{
      width: 400px;
      &>a{
        display: block;
        color: #000;
        text-decoration: none;
      }
      .img-box{
        width: 100%;
        height: 200px;
        overflow: hidden;
        border-radius: 5px;
        img{
          width: 100%;
          height: 100%;
          &:hover{
            transform: scale(1.2);
            transition-duration: 1s;
          }
        }
      }
      .news-title{
        padding: 22px 0 19px;
        text-align: center;
        font-size: 24px;
        color: $fontColor;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      .news-intro{
        height: 100px;
        text-align: left;
        font-size: 14px;
        line-height: 25px;
      }
    }
    .news-item + .news-item{
      margin-left: 8px;
    }
    .news-more{
      width: 120px;
      margin: 40px auto 20px;
      border: 4px solid $fontColor;
      border-radius: 25px;
      font-size: 20px;
      text-align: center;
      a{
        display: inline-block;
        height: 35px;
        line-height: 35px;
        color:#000;
        text-decoration: none;
      }
    }
  }
</style>
