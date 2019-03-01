<template>
  <div class="successful-case-view w100">
    <div class="banner"></div>
    <div class="case-content">
        <h1 class="title">成功案例</h1>
        <ul class="case-type clearfix" v-for="(typeItem,index) in allTypeList" :key="typeItem.id">
          <li><i></i><span>{{typeItem.name}}</span></li>
          <li v-for="(type,index) in typeItem.childVOList" :key="type.id" @click="checkType($event,typeItem.code,type.id)">
            {{type.name}}
          </li>
        </ul>
        <ul class="case-detail clearfix">
          <li class="clearfix" v-if="solutionArr1.length>0">
            <div class="f-l" v-for="(solution,index) in solutionArr1" :key="solution.id">
              <img :src="urlPath+solution.imgName"/>
              <router-link class="detail img-mark" :to="{name:'successfulCaseDetail',query:{id:solution.id}}">
                <h1>{{solution.title}}</h1>
                <p>{{solution.intro}}</p>
              </router-link>
            </div>
          </li>
          <li class="clearfix" v-if="solutionArr2.length>0">
            <div class="f-l" v-for="(solution,index) in solutionArr2" :key="solution.id">
              <img :src="urlPath+solution.imgName"/>
              <router-link class="detail img-mark" :to="{name:'successfulCaseDetail',query:{id:solution.id}}">
                <h1>{{solution.title}}</h1>
                <p>{{solution.intro}}</p>
              </router-link>
            </div>
          </li>
          <li class="clearfix" v-if="solutionArr3.length>0">
            <div class="f-l" v-for="(solution,index) in solutionArr3" :key="solution.id">
              <img :src="urlPath+solution.imgName"/>
              <router-link class="detail img-mark" :to="{name:'successfulCaseDetail',query:{id:solution.id}}">
                <h1>{{solution.title}}</h1>
                <p>{{solution.intro}}</p>
              </router-link>
            </div>
          </li>
        </ul>
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
    import qs from 'qs'
    export default {
        name: "successful-case-view",
        data(){
          return{
            urlPath:this.url,
            size:6,//每页显示条数
            currentPage:0,//当前页码
            solutionList:null,
            solutionType:2,
            active: [true],
            allTypeList:null,
            typeParameterIds:[],
            tradeParameterIds:[],
            solutionArr1:[],
            solutionArr2:[],
            solutionArr3:[],
          }
        },
        mounted(){
          this.findTypeList();
          this.searchList(0);
          this.pageTurning();
        },
        methods:{
          findTypeList(){
            var that = this;
            this.$ajax({
              method: 'post',
              url:this.dataURL('parameter/findParameterByCodes'),
              params: {
                codes:['solutionTradeCode','solutionTypeCode']
              },
              paramsSerializer: params => {
                return qs.stringify(params, { indices: false })
              }
            }).then((res)=>{
              if(res.data.code==0){
                that.allTypeList = res.data.data;
              }
            });
          },
          changeTab(num){
            for(var i=0;i<this.active.length;i++){
              if(i!=num)
                this.$set(this.active,i,false);
            }
            this.$set(this.active,num,true);
            // this.newsType = num+1;
            this.searchList(0);
            this.pageTurning();
          },
          searchList(page){
            var page=page||0;
            var that = this;
            this.$ajax({
              method: 'post',
              url:this.dataURL('view/findSolutionListByCondition'),
              params: {
                type:that.solutionType,
                typeParameterIds:this.typeParameterIds,
                tradeParameterIds:this.tradeParameterIds,
                size:that.size,
                page:page
              },
              paramsSerializer: params => {
                return qs.stringify(params, { indices: false });
              }
            }).then((res)=>{
              that.solutionArr1=[];
              that.solutionArr2=[];
              that.solutionArr3=[];
              if(res.data.data!=null){
                that.solutionList=res.data.data.content;
                that.solutionList.forEach(function (item,index,arr) {
                  if(index<=1)
                    that.$set(that.solutionArr1,index,item);
                  else if(index<=3)
                    that.$set(that.solutionArr2,index-2,item);
                  else
                    that.$set(that.solutionArr3,index-4,item);
                });
                that.currentPage=page+1;
                that.pageCreate(that.currentPage,res.data.data.totalPages);
              }else{
                that.solutionList=null;
                that.currentPage=0;
                this.pageCreate(0,0)
              }
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
          },
          checkType(even,code,typeId){
            if(code == "solutionTypeCode"){
              if(this.typeParameterIds.indexOf(typeId)<0){
                this.typeParameterIds.push(typeId);
                this.$jq(even.target).addClass("active");
              }else{
                var delIndex = this.typeParameterIds.findIndex(function(value){
                  return value === typeId;
                });
                this.typeParameterIds.splice(delIndex,1);
                this.$jq(even.target).removeClass("active");
              }
            }else if(code == "solutionTradeCode"){
              if(this.tradeParameterIds.indexOf(typeId)<0){
                this.tradeParameterIds.push(typeId);
                this.$jq(even.target).addClass("active");
              }else{
                var delIndex = this.tradeParameterIds.findIndex(function(value){
                  return value === typeId;
                });
                this.tradeParameterIds.splice(delIndex,1);
                this.$jq(even.target).removeClass("active");
              }
            }
            this.searchList(0);
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
    background-size: cover;
    background-image: url("../../../static/images/successful-case-banner.png");
  }
  .case-content{
    width: 1100px;
    margin: 0 auto;
    color: #252525;
    .title{
      margin: 30px 0 40px;
      text-align: center;
      font-size: 20px;
    }
    .case-type{
      height: 50px;
      margin: 0 69px 40px;
      li{
        width: 100px;
        height: 100%;
        margin-right: 18px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        border: 1px solid #252525;
        cursor: pointer;
        &:nth-of-type(1){
          position: relative;
          margin-right: 30px;
          border: none;
          color: #fff;
          background-color: $fontColor;
          &>i{
            position: absolute;
            width: 20px;
            height: 20px;
            top:15px;
            left: 15px;
            background-size: 100% 100%;
            background-image: url("../../../static/images/type_icon.png");
          }
          &>span{
            position: absolute;
            left: 50px;
          }
        }
      }
      .active{
        background-color: $fontColor;
        color:#fff;
      }
    }
    .case-detail{
      li{
        width: 100%;
        height: 365px;
        margin-bottom: 24px;
        img{
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
        &>div{
          position: relative;
        }
        .detail{
          display: block;
          width: 100%;
          height: 100%;
        }
        .img-mark{
          position: absolute;
          border-radius: 10px;
          width: 100%;
          height: 100%;
          top:0;
          left: 0;
          background-color: rgba(0,0,0,0.4);
          color: #fff;
          text-decoration: none;
          &>h1{
            font-size: 20px;
            text-align: center;
            margin: 20px auto;
          }
          &>p{
            font-size: 16px;
            text-indent: 32px;
            padding: 0 20px;
            line-height: 1.5;
          }
        }
        &:nth-of-type(1){
          &>div:nth-of-type(1){
            width: 500px;
            height: 365px;
            margin:0 30px 0 80px;
          }
          &>div:nth-of-type(2){
            width: 364px;
            height: 265px;
            margin: 50px 0;
          }
        }
        &:nth-of-type(2){
          &>div{
            width: 500px;
            height: 365px;
            &:nth-of-type(1){
              margin: 0 30px 0 20px;
            }
          }
        }
        &:nth-of-type(3){
          &>div:nth-of-type(1){
            width: 495px;
            height: 365px;
            margin:0 30px 0 80px;
          }
          &>div:nth-of-type(2){
            width: 367px;
            height: 269px;
            margin: 48px 0;
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
  }
</style>
