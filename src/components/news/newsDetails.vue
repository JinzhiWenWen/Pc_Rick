<template>
  <div class="news w100">
    <div class="banner"></div>
    <div class="news-body">
      <p class="news-title">{{title}}</p>
      <div class="news-content" v-html="content"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "new-details",
        data() {
          return {
            urlPath:this.url,
            title:"",
            content:""
          }
        },
        mounted(){
          let newsId = this.$route.query.id;
          if(newsId){
            this.$ajax({
              method: 'post',
              url:this.dataURL('view/findNewsById'),
              params: {
                newsId:newsId
              }
            }).then((res)=>{
              this.title=res.data.data.title;
              this.content=res.data.data.content;
            })
          }
        }
    }
</script>

<style lang="scss" scoped>
  .news{
    margin: 0 auto;
  }
  .banner{
    height: 300px;
    margin: 0 auto;
    background-size: 100% 100%;
    background-image: url("../../../static/images/banner_img_news_nor.png");
  }
  .news-body{
    border: 2px solid #ebebeb;
    margin: 20px auto;
    width: 75%;
  }
  .news-title{
    padding-top: 20px;
    font-size: 24px;
    text-align: center;
  }
  .news-content{
    width: 90%;
    height: 90%;
    margin: 0;
    padding: 40px 50px;
    background-color: #fff;
    -webkit-box-shadow:none;
    box-shadow:none;
  }
</style>
