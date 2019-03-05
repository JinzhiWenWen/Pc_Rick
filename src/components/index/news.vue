<template>
  <div class="news w1420">
    <p class="title"><span class="wow xnxg"></span><span class="special-title">新闻动态</span></p>
    <p class="intro">关注行业动向，掌握市场方向</p>
    <!-- <div class="news-list clearfix">
      <div class="news-item f-l" v-for="(news,index) in newsList">
        <router-link :to="{name:'newsDetails',query:{id:news.id}}">
          <div class="img-box">
            <img :src="urlPath+news.imgName">
          </div>
          <p class="news-title">{{news.title}}</p>
          <p class="news-intro">{{news.intro}}</p>
        </router-link>
      </div>
    </div> -->
    <div class="news-both clearfix">
      <div class="company-news">
        <p class="company-title">公司新闻</p>
        <ul>
          <router-link tag="li"  v-for="(news,index) in newsListT" :to="{name:'newsDetails',query:{id:news.id}}">
            <p class="company-pic">
              <img :src="urlPath+news.imgName" alt="">
            </p>
            <p class="company-msg">
              <span>{{news.title}}</span><br>
              <!-- <span class="msg-mask"></span> -->
              <span class="msg-content">{{news.intro}}</span><br>
              <span class="msg-date">{{news.timeStr}}</span>
            </p>
          </router-link>
        </ul>
      </div>
      <div class="work-news">
        <p class="company-title">行业资讯</p>
        <ul>
          <router-link tag="li" v-for="(info,index) in newsList" :to="{name:'newsDetails',query:{id:info.id}}">
            <p class="company-pic">
              <img :src="urlPath+info.imgName"  alt="">
            </p>
            <p class="company-msg">
              <span>{{info.title}}</span><br>
              <!-- <span class="msg-mask"></span> -->
              <span class="msg-content">{{info.intro}}</span><br>
              <span class="msg-date">{{info.timeStr}}</span>
            </p>
          </router-link>
        </ul>
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
            newsList:[],
            newsListT:[]
          }
        },
        mounted(){
          let _this=this;
          this.$ajax({
            method: 'post',
            url:this.dataURL('view/findNewsListByCondition'),
            params: {
              type:2,
              size:2,
              page:0
            }
          }).then((res)=>{
            this.newsList=res.data.data.content;
            for(let i in _this.newsList){
              if(_this.newsList[i].title.length>10){
                let subT=_this.newsList[i].title;
                _this.newsList[i].title=subT.substring(0,13)+'...'
              }
              if(_this.newsList[i].intro.length>38){
                let subX=_this.newsList[i].intro;
                _this.newsList[i].intro=subX.substring(0,65)+'...'
              }
            };
          });
          //新闻列表
          this.$ajax({
            method: 'post',
            url:this.dataURL('view/findNewsListByCondition'),
            params: {
              type:1,
              size:2,
              page:0
            }
          }).then((res)=>{
            console.log(res)
            this.newsListT=res.data.data.content;
            for(let i in _this.newsListT){
              if(_this.newsListT[i].title.length>10){
                let subT=_this.newsListT[i].title;
                _this.newsListT[i].title=subT.substring(0,13)+'...'
              }
              if(_this.newsListT[i].intro.length>38){
                let subX=_this.newsListT[i].intro;
                _this.newsListT[i].intro=subX.substring(0,65)+'...'
              }
            };
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
    .news-both{
      width: 95%;
      margin:0 auto;
      height: 400px;
      display: flex;
      .company-news{
        width: 50%;
        height: 100%;
        .company-title{
          width: 60%;
          text-align: center;
          margin-left:24%;
          box-sizing: border-box;
          padding-bottom:20px;
          font-size: 22px;
          border-bottom:2px solid #eb7a1d;
        }
        ul{
          width: 60%;
          margin-left:24%;
          li{
            width: 100%;
            display: flex;
            float: none;
            padding-bottom:5px;
            padding-top:20px;
            .company-pic{
              width: 40%;
              padding-left: 10px;
              img{
                width: 120px;
                height: 120px;
              }
            }
            .company-msg{
              width: 70%;
              position: relative;
              span:nth-child(1){
                display: inline-block;
                font-size: 18px;
                height: 10px;
              }
              .msg-content{
                position: absolute;
                top:35px;
                width: 100%;
              }
              .msg-date{
                position: absolute;
                bottom:-5px;
                right:0;
              }
            }

          }
          li:first-child{
            border-bottom:1px solid #ccc;
          }
        }
      }
      .work-news{
        width: 50%;
        height: 100%;
        .company-title{
          width: 60%;
          text-align: center;
          margin-left:16%;
          box-sizing: border-box;
          padding-bottom:20px;
          font-size: 22px;
          border-bottom:2px solid #eb7a1d;
        }
        ul{
          width: 60%;
          margin-left:16%;
          li{
            width: 100%;
            display: flex;
            float: none;
            padding-bottom:5px;
            padding-top:20px;
            .company-pic{
              width: 40%;
              padding-left: 10px;
              img{
                width: 120px;
                height: 120px;
              }
            }
            .company-msg{
              width: 70%;
              position: relative;
              span:nth-child(1){
                display: inline-block;
                font-size: 18px;
                height: 10px;
              }
              .msg-content{
                position: absolute;
                top:35px;
                width: 100%;
              }
              .msg-date{
                position: absolute;
                bottom:-5px;
                right:0;
              }
            }

          }
          li:first-child{
            border-bottom:1px solid #ccc;
          }
        }
      }
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
