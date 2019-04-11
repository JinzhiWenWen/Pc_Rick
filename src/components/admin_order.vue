<!-- 管理员派单 -->
<template lang="html">
  <div class="admin_order w100">
    <p class="admin_add">
      <el-button type="primary" icon="el-icon-plus" @click="pushOrder=true">添加项目</el-button>
    </p>
    <p class="admin_reload">
      <el-tooltip class="item" effect="dark" content="刷新数据" placement="bottom">
        <i class="el-icon-refresh" @click="refresh()"></i>
      </el-tooltip>
    </p>
    <div class="order_title">
      <el-row>
        <el-col :span="2"><div class="title">序号</div></el-col>
        <el-col :span="3"><div class="title">任务名称</div></el-col>
        <el-col :span="3"><div class="title">任务内容</div></el-col>
        <el-col :span="3"><div class="title">任务地点</div></el-col>
        <el-col :span="3"><div class="title">详细地址</div></el-col>
        <el-col :span="3"><div class="title">创建日期</div></el-col>
        <el-col :span="3"><div class="title">任务状态</div></el-col>
        <el-col :span="4"><div class="title">申请接单记录</div></el-col>
      </el-row>
    </div>
    <div class="order_con"  v-loading="loadOrder">
      <el-row v-for="(orderCon,index) in msgList" :key="index" class="el_con">
        <el-col :span="2"><div class="title_con">{{orderCon.num+1}}</div></el-col>
        <el-tooltip class="item" effect="dark" :content="orderCon.name" placement="bottom">
          <el-col :span="3" style="cursor:pointer;"><div class="title_con">{{orderCon.name.substring(0,6)+'...'}}</div></el-col>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" :content="orderCon.content" placement="bottom">
          <el-col :span="3" style="cursor:pointer;"><div class="title_con">{{orderCon.content.substring(0,6)+'...'}}</div></el-col>
        </el-tooltip>
        <el-col :span="3"><div class="title_con">{{orderCon.placeVO.parentName+'-'+orderCon.placeVO.name}}</div></el-col>
        <el-tooltip class="item" effect="dark" :content="orderCon.address" placement="bottom">
          <el-col :span="3" style="cursor:pointer;"><div class="title_con">{{orderCon.address.substring(0,6)+'...'}}</div></el-col>
        </el-tooltip>
        <el-col :span="3"><div class="title_con">{{orderCon.createTimeStr}}</div></el-col>
        <el-col :span="3"><div class="title_con">
          <el-select v-model="orderCon.orderStatus" @change="upStatus(index)">
            <el-option
              size="mini"
              :label="orderCon.choseStatus"
              :value="value">
            </el-option>
          </el-select>
        </div></el-col>
        <el-col :span="4">
          <div class="title_con">
            <i class="el-icon-tickets" style="font-size:20px;cursor:pointer;" @click="takeDis(index)"></i>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 分页器 -->
    <div class="order_page">
      <el-pagination
        background
        layout="prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :total="pageNum">
      </el-pagination>
    </div>
    <!-- 查看申请人弹出框 -->
    <div class="">
      <el-dialog
        title="查看"
        :visible.sync="takeOrder"
        width="30%">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="takeOrder = false">取 消</el-button>
          <el-button type="primary" @click="takeOrder = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <!-- 添加项目弹出框 -->
    <div class="">
      <el-dialog
        title="添加"
        :visible.sync="pushOrder"
        width="30%">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="pushOrder = false">取 消</el-button>
          <el-button type="primary" @click="pushOrder = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msgList:[],
      currentPage3:1,
      page:0,//当前页码
      userMes:{},//用户信息
      options:[
        {
          value:'派大星',
          label:'派大星'
        }
      ],
      value:null,
      length:0,//数据排序
      pageNum:10,//总页码
      loadOrder:false,//是否启用loading
      takeOrder:false,//接单记录查看
      pushOrder:false,//添加项目
    }
  },
  mounted(){
    if(window.sessionStorage.getItem('user')){
      this.userMes=JSON.parse(window.sessionStorage.getItem('user'))
    };
    this.getOrderList()
  },
  methods:{
    refresh(){//刷新数据
      this.page=0;
      this.getOrderList();
    },
    handleSizeChange(val) {
       console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.page=val-1;
        this.getOrderList()
    },
    getOrderList(){//获取可用订单列表
      let _vm=this;
      _vm.loadOrder=true;
      let formdata=new FormData();
      formdata.append('sortStr','createTime');
      formdata.append('asc','desc');
      formdata.append('page',_vm.page);
      formdata.append('size',15);
      _vm.$ajax.post(_vm.url+'/mission/findMissionListByCondition',formdata).then((res)=>{
        if(res.data.code==0){
          _vm.length=_vm.page*15;
          _vm.pageNum=res.data.data.totalPages*10;
          res.data.data.content.forEach((e)=>{
            _vm.$set(e,'num',_vm.length++);
            if(e.state==-1){
              _vm.$set(e,'orderStatus','截单状态');
              _vm.$set(e,'choseStatus','接单状态');
            }else{
              _vm.$set(e,'orderStatus','接单状态');
              _vm.$set(e,'choseStatus','截单状态');
            }
          });
          _vm.loadOrder=false;
          _vm.msgList=res.data.data.content;
        }else{
          _vm.loadOrder=false;
          _vm.$message.error(res.data.msg);
        }
      }).catch((err)=>{
        _vm.loadOrder=false;
        _vm.$message.error('未知异常,请联系管理员');
      })
    },
    upStatus(index){//更新订单状态
      console.log(this.msgList[index])
      if(this.msgList[index].state==-1){
        let formdata=new FormData();
        formdata.append('id',this.msgList[index].id);
        formdata.append('state',2);
        this.$ajax.post(this.url+'/mission/updateMissionState',formdata).then((res)=>{
          if(res.data.code==0){
            this.$set(this.msgList[index],'orderStatus','接单状态');
            this.$set(this.msgList[index],'choseStatus','截单状态');
            this.msgList[index].state=2;
            this.$message({
              message: '更新订单状态成功',
              type: 'success'
            });
          }else{
            this.$message.error(res.data.msg);
          }
        }).catch((err)=>{
          this.$message.error('未知异常,请联系管理员');
        })
      }else{
        let formdata=new FormData();
        formdata.append('id',this.msgList[index].id);
        formdata.append('state',-1);
        this.$ajax.post(this.url+'/mission/updateMissionState',formdata).then((res)=>{
          if(res.data.code==0){
            this.$set(this.msgList[index],'orderStatus','截单状态');
            this.$set(this.msgList[index],'choseStatus','接单状态');
            this.msgList[index].state=-1;
            this.$message({
              message: '更新订单状态成功',
              type: 'success'
            });
          }else{
            this.$message.error(res.data.msg);
          }
        }).catch((err)=>{
          this.$message.error('未知异常,请联系管理员');
        })
      }
    },
    takeDis(index){//派发订单
      this.takeOrder=true;
    }
  }
}
</script>

<style lang="scss" scoped>
.admin_order{
  margin:0 auto;
  position: relative;
  .admin_add{
    width: 100%;
    padding-top: 30px;
    box-sizing: border-box;
    padding-left: 20px;
  }
  .admin_reload{
    position: absolute;
    top:30px;
    right:150px;
    i{
      font-size: 32px;
      color:#eb7a1d;
      cursor:pointer;
    }
  }
  .order_title{
    margin-top: 15px;
    width: 90%;
    margin-left: 20px;
    .title{
      text-align: center;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      background: rgba(235,122,29,.8);
      color:white;
    }
  }
  .order_con{
    width: 90%;
    margin-left: 20px;
    min-height: 600px;
    .title_con{
      text-align: center;
      font-size: 15px;
      line-height: 50px;
      max-height: none;
      .el-icon-tickets{
        color:red;
      }
    }
  }
  .el_con:nth-of-type(even){
    background:#eee;
  }
  .order_page{
    width: 90%;
    text-align: right;
    margin-top:15px;
  }
}
</style>
