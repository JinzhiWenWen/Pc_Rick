<!-- 未接订单 -->
<template lang="html">
  <div class="answerOrder">
    <img src="../../../static/images/order_refresh.png" class="refresh" alt="" @click="refreshOrder()">
    <el-row>
      <el-col :span="2"><div class="screen_title">
        <ul>
          <li>地点筛选:</li>
          <li>时间筛选:</li>
        </ul>
      </div></el-col>
      <el-col :span="12">
        <div class="screen_con">
          <ul class="screen_box">
            <li>
              <p>
                <el-select v-model="placeProName" @change="chosePro">
                  <el-option
                  v-for="(placePro,index) in placeList"
                  :key="'Pro'+index"
                  :label="placePro.name"
                  :value="placePro.name"
                  >
                  </el-option>
                </el-select>
              </p>
              <p>
                <el-select v-model="placeCityName" @change="choseCity">
                  <el-option
                  v-for="(placePro,index) in cityList"
                  :key="'City'+index"
                  :label="placePro.name"
                  :value="placePro.name"
                  >
                  </el-option>
                </el-select>
              </p>
            </li>
            <li>
              <el-date-picker
                v-model="answerDate"
                align="right"
                type="date"
                placeholder="选择日期"
                @change="choseTime"
                :picker-options="pickerOptions1">
              </el-date-picker>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <ul class="order_list" v-loading="false" v-show="orderLength">
      <li v-for="(order,index) in orderList" :key="index">
        <span class="title_mask" style="color:#eb7a1d;" v-show="order.stateStr==='接单状态'">可接单</span>
        <span class="title_mask" style="color:#666;" v-show="order.stateStr==='截单状态'">已截单</span>
        <span class="order_time">{{order.createTimeStr}}</span>
        <p class="order_name">{{order.name}}</p>
        <p class="order_place">{{order.placeVO.parentName}}-{{order.placeVO.name}}/{{order.address}}</p>
        <p class="order_content">{{order.content}}</p>
        <p class="order_btn">
          <el-button type="primary" size="small" @click="delOrder(index)" :disabled="order.stateStr==='截单状态'">撤销申请</el-button>
        </p>
      </li>
    </ul>
    <p style="text-align:center;" v-show="orderLength">
      <el-pagination
        @current-change="orderPage"
        layout="prev, pager, next"
        :total="page">
      </el-pagination>
    </p>
    <p ref="noData" style="text-align:center;color:#666;font-size:18px;padding-top:30px;border-top:1px solid #ccc;"
     v-show="!orderLength">{{isLogin}}
     <router-link to="/engineer/loginIn" tag="span" style="cursor:pointer;color:#eb7a1d;text-decoration:underline;">
       {{goLogin}}
     </router-link>
   </p>
    <p></p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      userMes:{},//用户信息
      placeList:[],//省级列表
      cityList:[],//城市列表
      placeProName:null,//省级名称
      placeCityName:null,//市级名称
      placeID:null,//城市ID
      answerDate:null,//筛选时间
      pageNum:0,//页码
      page:10,//总页数
      screenTime:null,//筛选时间
      pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
      orderList:[],//数据列表
      orderLength:true,//是否有数据
      isLogin:'暂无更多项目',
      goLogin:''
    }
  },
  mounted(){
    this.getPlace();
    if(window.sessionStorage.getItem('user')){
      this.userMes=JSON.parse(window.sessionStorage.getItem('user'));
    };
    this.getOrderList()
  },
  methods:{
    getPlace(){//添加项目
      let _vm=this;
      _vm.$ajax.get(_vm.url+'/mobile/getUsingPlaceList').then((res)=>{
        if(res.data.code==0){
          _vm.placeList=res.data.data.placeList
        }else{
          _vm.$message.error(res.data.msg);
        }
      }).catch((err)=>{
        _vm.$message.error('未知错误,请联系管理员')
      })
    },
    chosePro(index){//选择省
      this.placeCityName='';
      this.placeList.forEach((e)=>{
        if(index===e.name){
          this.cityList=e.usingChildList
        }
      })
    },
    choseCity(index){//选择市
      this.cityList.forEach((e)=>{
        if(index===e.name){
          this.placeID=e.id;
        }
      })
      this.getOrderList()
    },
    choseTime(){//筛选时间
      let date=new Date(this.answerDate)
      let year=date.getFullYear()
      let month=date.getMonth()+1;
      if(month<10){
        month='0'+month
      };
      let day=date.getDate();
      if(day<10){
        day='0'+day
      };
      this.screenTime=year+'-'+month+'-'+day;
      setTimeout(()=>{
        this.getOrderList()
      })
    },
    delOrder(index){//撤销申请项目
        this.$confirm('您确定要进行撤销吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type:'warning'
        }).then(()=>{
          let formdata=new FormData();
          let userId=this.userMes.engineerVO.id;
          formdata.append('engineerId',userId);
          formdata.append('missionId',this.orderList[index].id);
          this.$ajax.post(this.url+'/mission/deleteMissionRecordByMissionIdAndEngineerId',formdata).then((res)=>{
            if(res.data.code==0){
              this.$alert('撤销成功', '成功', {
                confirmButtonText: '确定',
              });
              this.getOrderList()
            }else{
              this.$alert(res.data.msg, '错误', {
                confirmButtonText: '确定',
              })
            }
          }).catch((err)=>{
            this.$confirm('未知异常,请联系客服', '错误', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type:'warning'
            }).then(()=>{
              console.log('已确认')
            }).catch(()=>{
              console.log('已取消')
            })
            console.log(err)
          })
        }).catch(()=>{
          console.log('已取消')
        })
    },
    getOrderList(){//获取项目列表
      let _vm=this;
      let formdata=new FormData();
      if(_vm.userMes.engineerVO){
        formdata.append('engineerIdIn',_vm.userMes.engineerVO.id);
        formdata.append('page',_vm.pageNum);
        formdata.append('size',10);
        if(_vm.placeID!=null){
          formdata.append('placeId',_vm.placeID);
        }
        if(_vm.screenTime!=null){
          formdata.append('timeStr',_vm.screenTime);
        }
        _vm.$ajax.post(_vm.url+'/mission/findMissionListByCondition',formdata).then((res)=>{
          if(res.data.code==0){
            _vm.page=res.data.data.totalPages*10;
            _vm.orderList=res.data.data.content;
            if(_vm.orderList.length<1){
              _vm.orderLength=false;
            }else{
              _vm.orderLength=true;
            }
          }else{
            _vm.$message.error(res.data.msg)
          }
        }).catch((err)=>{
          _vm.$message.error('未知错误,请联系管理员')
          console.log(err)
        })
      }else{
        _vm.orderLength=false;
        _vm.isLogin="登录后查看,"
        _vm.goLogin='立即登录'
      }
    },
    orderPage(val){//分页器
      this.pageNum=val-1;
      this.getOrderList()
    },
    refreshOrder(){
      this.placeID=null;
      this.screenTime=null;
      this.answerDate=null;
      this.placeCityName=null;
      this.placeProName=null;
      this.pageNum=0;
      setTimeout(()=>{
        this.getOrderList()
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.answerOrder{
  margin:0 auto;
  position: relative;
  .refresh{
    position: absolute;
    width: 30px;
    height: 30px;
    top:90px;
    right:0;
    cursor:pointer;
    z-index: 88;
  }
  ul{
    li{
      float: none;
      line-height: 50px;
    }
  }
  .screen_title{
    ul{
      li{
        text-align:left;
        font-size: 17px;
      }
      li:nth-child(2){
        line-height: 65px;
      }
    }
  }
  .screen_con{
    width: 100%;
    .screen_box{
      li{
        display: flex;
        p{
          width: 30%;
        }
      }
    }
  }
  .order_list{
    width: 100%;
    li{
      width: 99.5%;
      margin:0 auto;
      min-height: 150px;
      max-height: none;
      background: white;
      box-shadow: 0px 0px 5px #999;
      margin-top: 15px;
      position: relative;
      padding-top: 35px;
      padding-bottom:3px;
      .title_mask{
        position: absolute;
        height: 17px;
        border-left:7px solid #eb7a1d;
        line-height: 17px;
        padding-left:3px;
        top:8px;
        left:0;
        font-size: 15px;
        font-weight: bold;
      }
      .order_time{
        position: absolute;
        color:#666;
        right:5px;
        top:0;
        font-size: 14px;
      }
      p{
        width: 100%;
        line-height: 30px;
        padding-left: 10px;
        box-sizing: border-box;
      }
      .order_name{
        font-size: 18px;
        font-weight: bold;
      }
      .order_content{
        width: 100%;
        margin-top: -10px;
      }
      .order_btn{
        text-align: right;
        padding-right: 15px;
      }
    }
    li:hover{
      box-shadow: 0px 0px 10px #666;
    }
  }
}
</style>
