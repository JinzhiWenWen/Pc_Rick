<!-- 用户资料页 -->
<template lang="html">
  <div class="person_mes">
    <div class="" style="width:100%;display:flex;">
      <div class="mes_title">
        <ul>
          <li>姓名：</li>
          <li>邮箱：</li>
          <li>联系方式：</li>
          <li>工作年限：</li>
          <li>工作区域：</li>
          <li>身份认证：</li>
          <li>技能评估：</li>
          <li>已认证技能：</li>
        </ul>
      </div>
      <div class="mes_con">
        <ul>
          <li>{{userName}}</li>
          <li>
            {{userEmail}}
            <el-input type="text" v-model="newEmail" @blur="trunEmail()" placeholder="请输入您的邮箱" style="width:40%;" v-show="writeEmail"></el-input>
            <img src="../../../static/images/editor_icon.png" alt="" @click="addEmail()">
            <span style="color:red;" v-show="isEmail">*{{emailError}}</span>
          </li>
          <li>{{userPhone}}
            <el-input type="number" v-model="newPhone" placeholder="请输入您的手机号" style="width:40%;" v-show="writePhone"></el-input>
            <!-- <img src="../../../static/images/editor_icon.png" alt="" @click="writePhone=!writePhone"> -->
          </li>
          <li>{{workYear}}&nbsp;&nbsp;年
            <el-input type="number" v-model="newYear" @blur="turnYear()" placeholder="请输入您的工作年限" style="width:40%;" v-show="writeYear"></el-input>
            <img src="../../../static/images/editor_icon.png" alt="" @click="writeYear=!writeYear;isYear=false;Mes=1;turnMes=false;">
            <span style="color:red;" v-show="isYear">*请输入您的工作年限</span>
          </li>
          <li>
            <span>{{choseTurn}}</span>
            <img src="../../../static/images/editor_icon.png" alt="" @click="chosePlace()">
          </li>
          <li>
            <span v-if="hasCation">已认证</span>
            <span v-else>未认证</span>
          </li>
          <li>
            <span v-if="ment">已评估</span>
            <span v-else>未评估</span>
          </li>
          <li>
            <span v-if="hasIdent">{{Ident}}</span>
            <span v-else>未认证</span>
          </li>
        </ul>
      </div>
    </div>
    <p class="saveMes" v-show="showUpBtn">
      <button type="button" name="button" @click="saveMes()" :disabled="turnMes" :class="{isSave:Mes==2}">保存</button>
    </p>
    <div class="locaBox" ref="locaBox" v-show="showLocaBox">
      <input type="text" name="" value="" v-model="choseTurn">
      <input type="text" name="" value="" v-model="choseText">
      <span class="text_mask">
        <i class="el-icon-close" @click="cancelChose()"></i>
      </span>
      <div class="localist">
        <ul class="loca_vince">
          <li v-for="(item,index) in cityList"
          @click="choseInV(index)"
          ref="InV"
          >
          {{item.name}}</li>
        </ul>
        <ul class="loca_city">
          <li ref="allchose">
            <p @click="allChose()">全选</p>
            <span class="cityMask" ref="allicon" @click="cancelAll()">
              <i class="iconfont icon-xuanzhong"></i>
            </span>
          </li>
          <li v-for="(itemlea,index) in delArr"
          ref="city"
          >
          <p @click="choseCity(index)" >{{itemlea.name}}</p>
          <span class="cityMask" @click="delCity(index)">
            <i class="iconfont icon-xuanzhong"></i>
          </span>
        </li>
      </ul>
      </div>
      <p class="chose_btn">
        <button type="button" name="button" @click="savePlace()">保存</button>
      </p>
    </div>
    <div class="locaMask" @touchmove.prevent v-show="showlocaMask" ref="locaMask"  @click="cancelChose()">

    </div>
    <div class="qr_box">
      <img class="phone" src="../../../static/images/cation_phone.png" alt="">
      <img class="qr" src="../../../static/images/company_qr.jpg" alt="">
      <br/><span>扫码关注微信公众号</span>
    </div>

  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  inject:['reload'],
  data(){
    return{
      isYear:false,
      emailError:null,//报错文本
      isEmail:false,//报错
      Mes:0,//禁用按钮样式
      turnMes:false,//是否禁用按钮
      Ident:'派大星',//用户已认证身份
      place:'北京',//用户已选办公区域
      userMes:{},
      userName:null,//用户名
      userEmail:null,//用户邮箱
      userPhone:null,//用户手机号
      workYear:null,//用户工作年限
      hasPlace:false,//是否有地址
      hasCation:false,//是否已认证
      ment:false,//是否已技能认证
      hasIdent:false,//是否已身份认证
      writeEmail:false,//邮箱输入框
      writePhone:false,//手机号输入框
      writeYear:false,//工作年限输入框
      newEmail:null,//编辑邮箱
      newPhone:null,//编辑手机号
      newYear:null,//编辑工作年限
      showUpBtn:false,
      //////////////////////////////////////////
      showLocaBox:false,//显示地址选择盒子
      showlocaMask:false,//蒙层
      userId:'-',//用户ID
      userPass:'-',//用户密码
      userLoca:'-',//用户工作地址
      userCard:'-',//用户身份认证
      userSkill:'-',//用户技能认证
      userDate:'',//用户工作年限
      placeArr:[],
      delArr:[],
      choseText:'-',
      choseTurn:'-',
      choseVal:null,//当前选择的省份
      isAll:[],//是否全选
      cityID:[],//城市ID
      proID:0,//省份ID
      showPl:[],//回显地址
      cityList:[],
      a:[],//数据暂存数组
      b:[],//数据暂存数组2
    }
  },
  watch:{
    writeEmail(val,oldVal){
      if(val){
        this.showUpBtn=true;
      }
    },
    writePhone(val,oldVal){
      if(val){
        this.showUpBtn=true;
      }
    },
    writeYear(val,oldVal){
      if(val){
        this.showUpBtn=true;
      }
    },
    showLocaBox(val,oldVal){
      if(val){
        this.showUpBtn=true;
      }
    }
  },
  computed:{
    // ...mapState(['userMes'])
  },
  mounted(){
    if(window.sessionStorage.getItem('user')){
      this.userMes=JSON.parse(window.sessionStorage.getItem('user'));
      this.comIdent();
      this.comPlace();
      this.getLocation()
      this.userName=this.userMes.engineerVO.name;
      this.userEmail=this.userMes.email;
      if(this.userEmail==null){
        this.userEmail='-'
      }
      this.newEmail=this.userEmail
      this.userPhone=this.userMes.engineerVO.phone;
      this.workYear=this.userMes.engineerVO.workYear;
      this.newPhone=this.userPhone;
      if(this.workYear==null){
        this.workYear=0
      }
      this.newYear=this.workYear
      if(this.userMes.engineerVO.state==1||this.userMes.engineerVO.state==2){
        this.hasCation=true
      };
      if(this.userMes.engineerVO){
        if(this.userMes.engineerVO.childPlaces.length>0){
          for (let a in this.userMes.engineerVO.childPlaces){
            this.showPl.push(this.userMes.engineerVO.childPlaces[a].parentPlace.name+'-'+this.userMes.engineerVO.childPlaces[a].name);
          }
          this.choseTurn=this.showPl.join('/');
        }
      }
      if(this.userMes.engineerVO.identifyState==3){
        this.ment=true
      };
      if(this.userMes.engineerVO.levels.length!=0){
        this.hasIdent=true
      }
    }
  },
  methods:{
    ...mapMutations(['userMes_fn']),
    //选择地址
    chosePlace(){
      this.showlocaMask=true;
      this.showLocaBox=true;
      setTimeout(()=>{
        this.$refs.locaMask.style.opacity='1';
        this.$refs.locaBox.style.opacity='1';
        this.$refs.locaBox.style.top='50%';
      })
    },
    //获取服务地址
    getLocation(){
      let _vm=this;
      _vm.$ajax.get(_vm.url+'/mobile/getUsingPlaceList?engineerId='+_vm.userMes.engineerVO.id).then((res)=>{
        if(res.data.code==0){
          _vm.cityList=res.data.data.placeList;
          _vm.delArr=_vm.cityList[0].usingChildList;
          _vm.choseVal=_vm.cityList[0].name;
          _vm.cityList.forEach((cityL)=>{
            cityL.usingChildList.forEach((x)=>{
              if(x.selected){
                _vm.cityID.push(x.id);
              }
            })
          });
          _vm.b.push(_vm.cityList[0].usingChildList[0].id)
          setTimeout(()=>{
            _vm.cityID.forEach((s)=>{
              let c=_vm.b.indexOf(s);
              if(c>=0){
                _vm.$refs.city[c].style.color='#eb7a1d';
                _vm.$refs.city[c].children[1].style.display='block';
              }else{
                return
              }
            })
          })
        }else{
          this.$alert(res.data.msg, '提示', {
             confirmButtonText: '确定',
           });
        }
      }).catch((err)=>{
        this.$alert('未知错误', '提示', {
           confirmButtonText: '确定',
         });
        console.log(err)
      })
    },
    //取消选择
    cancelChose(){
      this.$refs.locaMask.style.opacity='0'
      this.$refs.locaBox.style.opacity='0';
      this.$refs.locaBox.style.top='30%';
      setTimeout(()=>{
        this.showlocaMask=false;
        this.showLocaBox=false;
      },500)
    },
    //选择省份
    choseInV(index){
      let _vm=this;
      _vm.a=[]//暂存数据
      _vm.$refs.allchose.style.color='black';
      _vm.$refs.allicon.style.display='none';
      _vm.proID=index;
      for(let i in _vm.$refs.InV){
        _vm.$refs.InV[index].style.color='#eb7a1d'
        _vm.$refs.InV[i].style.color='black';
      };
      _vm.delArr=_vm.cityList[index].usingChildList;
      let b=[];//存放是全选状态
      _vm.delArr.forEach((c)=>{
        _vm.a.push(c.id);
        b.push(c.selected)
      });
      if(b.indexOf(false)>=0){
        console.log(1)
      }else{
        _vm.isAll.push(_vm.choseVal);
        _vm.isAll.forEach((x)=>{
          if(_vm.choseVal===x){
            _vm.$refs.allchose.style.color='#eb7a1d';
            _vm.$refs.allicon.style.display='block';
          }else{
            _vm.$refs.allchose.style.color='black';
            _vm.$refs.allicon.style.display='none';
          }
        });
      }
      setTimeout(()=>{
        _vm.cityID.forEach((v)=>{
          let b=_vm.a.indexOf(v);
          if(b>=0){
            _vm.$refs.city[b].style.color='#eb7a1d';
            _vm.$refs.city[b].children[1].style.display='block';
          }else{
            return
          }
        })
      })
      _vm.choseVal=_vm.cityList[index].name;
      _vm.$refs.city.forEach((e)=>{
        e.style.color='black';
        e.children[1].style.display='none'
      })
      setTimeout(()=>{
        _vm.placeArr.forEach((e)=>{
          let indexV=[];
          let a=[];
          _vm.delArr.forEach((i)=>{
            a.push(i.name);
            if(a.indexOf(_vm.getCaption(e))!=-1){
              _vm.$refs.city[a.indexOf(_vm.getCaption(e))].children[1].style.display='block'
              _vm.$refs.city[a.indexOf(_vm.getCaption(e))].style.color='#eb7a1d'
            }
          })
        });
      });
    },
    //选择城市
    choseCity(index){
      let _vm=this;
      _vm.placeArr.push(_vm.choseVal+'-'+_vm.delArr[index].name);
      setTimeout(()=>{
        _vm.cityID.push(_vm.cityList[_vm.proID].usingChildList[index].id);
      });
      _vm.showPl.push(_vm.choseVal+'-'+_vm.delArr[index].name);
      _vm.choseTurn=_vm.showPl.join('/')
      _vm.choseText=_vm.placeArr.join('/');
      _vm.$refs.city[index].style.color='#eb7a1d';
      _vm.$refs.city[index].children[1].style.display='block';
    },
    //删除当前选中
    delCity(index){
      let _vm=this;
      let indexT=_vm.placeArr.indexOf(_vm.choseVal+'-'+_vm.delArr[index].name);
      _vm.placeArr.splice(indexT,1);
      let indexE=_vm.showPl.indexOf(_vm.choseVal+'-'+_vm.delArr[index].name);
      if(indexE>=0){
        _vm.showPl.splice(indexE,1);
        _vm.choseTurn=_vm.showPl.join('/');
      }
      let indexID=_vm.cityID.indexOf(_vm.cityList[_vm.proID].usingChildList[index].id);
      _vm.cityID.splice(indexID,1);
      _vm.choseText=_vm.placeArr.join('/');
      _vm.$refs.city[index].children[1].style.display='none';
      _vm.$refs.city[index].style.color='black';
    },
    //字符串截取
    getCaption(obj){
        var index=obj.lastIndexOf("\-");
        obj=obj.substring(index+1,obj.length);
        return obj;
    },
    //全选
    allChose(){
      this.$refs.allchose.style.color='#eb7a1d';
      this.$refs.allicon.style.display='block';
      this.$refs.city.forEach((e)=>{
        e.style.color='#eb7a1d';
        e.children[1].style.display='block';
      });
      this.delArr.forEach((y)=>{
        let indexD=this.placeArr.indexOf(this.choseVal+'-'+y.name);
        this.placeArr.splice(indexD,1);
        setTimeout(()=>{
          this.placeArr.push(this.choseVal+'-'+y.name);
          this.showPl.push(this.choseVal+'-'+y.name)
          this.choseText=this.placeArr.join('/');
          this.choseTurn=this.showPl.join('/');
        })
      });
      this.delArr.forEach((i)=>{
        this.cityID.push(i.id);
      })
      this.isAll.push(this.choseVal);
    },
    //取消全选
    cancelAll(){
      let _vm=this;
      _vm.$refs.allchose.style.color='black';
      _vm.$refs.allicon.style.display='none';
      for(let l in this.isAll){
        let indexI=this.isAll.indexOf(this.choseVal);
        this.isAll.splice(indexI,1);
      }
      _vm.$refs.city.forEach((i)=>{
        i.style.color='black';
        i.children[1].style.display='none';
      });
      _vm.delArr.forEach((r)=>{
        let indexT=_vm.placeArr.indexOf(_vm.choseVal+'-'+r.name);
        let indexPc=_vm.showPl.indexOf(_vm.choseVal+'-'+r.name);
        _vm.placeArr.splice(indexT,1)
        _vm.showPl.splice(indexPc,1)
        this.choseText=this.placeArr.join('/');
        this.choseTurn=this.showPl.join('/');
      });
      let arr=[];
      _vm.delArr.forEach((c)=>{
        arr.push(c.id)
      });
      arr.forEach((x)=>{
        let indexDel=_vm.cityID.indexOf(x);
        _vm.cityID.splice(indexDel,1);
      });
    },
    //计算用户评估身份
    comIdent(){
      let identList=this.userMes.engineerVO.levels;
      let identName=[];
      identList.forEach((e)=>{
        identName.push(e.technology.name+'-'+e.name)
      });
      this.Ident=identName.join('/')
    },
    //计算用户工作区域
    comPlace(){
      console.log(this.userMes.engineerVO);
      let placeList=this.userMes.engineerVO.childPlaces;
      let placeName=[];
      placeList.forEach((e)=>{
        placeName.push(e.parentPlace.name+'-'+e.name)
      })
      this.place=placeName.join('/')
    },
    //保存选择地址
    savePlace(){
      this.$refs.locaMask.style.opacity='0'
      this.$refs.locaBox.style.opacity='0';
      this.$refs.locaBox.style.top='30%';
      setTimeout(()=>{
        this.showlocaMask=false;
        this.showLocaBox=false;
      },500)
    },
    //上传修改信息
    saveMes(){
      let _vm=this;
      let formData=new FormData();
      formData.append('id',_vm.userMes.engineerVO.id);
      formData.append('workYear',_vm.newYear);
      formData.append('email',_vm.newEmail);
      for(let i in _vm.cityID){
        formData.append('placeIds',_vm.cityID[i]);
      }
      _vm.$ajax.post(_vm.url+'/mobile/editEngineer',formData).then((res)=>{
        _vm.showUpBtn=false;
        if(res.data.code==0){
          _vm.writeEmail=false;
          _vm.writeYear=false;
          _vm.writePhone=false;
          window.sessionStorage.setItem('user',JSON.stringify(res.data.data));
          _vm.userMes=JSON.parse(window.sessionStorage.getItem('user'));
          _vm.reload();
          _vm.userMes_fn(res.data.data);
          this.$alert('保存成功', '提示', {
             confirmButtonText: '确定',
           });
        }else{
          this.$alert(res.data.msg, '提示', {
             confirmButtonText: '确定',
           });
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    //更改邮箱
    addEmail(){
      this.writeEmail=!this.writeEmail;
      this.isEmail=false;
      this.Mes=1;
      this.turnMes=false;
    },
    //验证邮箱格式
    trunEmail(){
      if(this.newEmail==''){
        this.isEmail=true;
        this.emailError='请输入您的邮箱';
        this.Mes=2;
        this.turnMes=true;
      }else if(!(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(this.newEmail))){
        this.isEmail=true;
        this.emailError='请输入正确的邮箱';
        this.Mes=2;
        this.turnMes=true;
      }else if(this.newYear==''){
        this.Mes=2;
        this.turnMes=true;
      }else{
        this.isEmail=false;
        this.Mes=1;
        this.turnMes=false;
      }
    },
    //验证工作年限
    turnYear(){
      if(this.newYear==''){
        this.isYear=true;
        this.Mes=2;
        this.turnMes=true;
      }else if(this.newEmail==''){
        this.Mes=2;
        this.turnMes=true;
      }else if(!(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(this.newEmail))){
        this.Mes=2;
        this.turnMes=true;
      }else{
        this.isYear=false;
        this.Mes=1;
        this.turnMes=false;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.isSave{
  background:rgba(235,122,29,.5)!important;
}
.person_mes{
  width: 100%;
  height: 100%;
  position: relative;
  .mes_title{
    width: 25%;
    height: 100%;
    ul{
      li{
        float: none;
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        text-align: right;
      }
    }
  }
  .mes_con{
    width: 75%;
    height: 100%;
    ul{
      li{
        float: none;
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        text-align: left;
        box-sizing: border-box;
        padding-left: 20px;
        position: relative;
        .el-input{
          position: absolute;
          left:0;
        }
        img{
          position: absolute;
          width: 35px;
          height: 35px;
          cursor:pointer;
          right:50%;
          top:13px;
        }
      }
      li:nth-child(2){
        position: relative;
        span{
          font-size: 14px;
          position: absolute;
          left:10px;
          bottom:-30px;
        }
      }
      li:nth-child(4){
        position: relative;
        span{
          font-size: 14px;
          position: absolute;
          left:10px;
          bottom:-30px;
        }
      }
    }
  }
  .saveMes{
    width: 100%;
    height: 40px;
    text-align: center;
    margin-top:20px;
    button{
      width: 80px;
      height: 90%;
      background: #eb7a1d;
      color:white;
      border-radius:5px;
      border:none;
      outline: none;
    }
  }
  .locaBox{
    width: 600px;
    height: 450px;
    background: white;
    position: fixed;
    padding:10px;
    padding-right: 20px;
    top:30%;
    left:50%;
    margin-top: -200px;
    margin-left: -300px;
    transition: 1s all;
    z-index: 100;
    border-radius:10px;
    opacity: 0;
    input{
      width: 100%;
      height: 35px;
      padding-left:10px;
      border-bottom:1px solid #ccc;
      border:none;
      border-bottom:1px solid #ccc;
      margin-top: 5px;
    }
    .text_mask{
      width: 100%;
      height:90px;
      position: absolute;
      top:0;
      left:0;
      i{
        position: absolute;
        font-size: 30px;
        color:#eb7a1d;
        right:5px;
        top:5px;
        cursor:pointer;
      }
    }
    .localist{
      width: 100%;
      // overflow-y: auto;
      height: 280px;
      display: flex;
      ul::-webkit-scrollbar {
            display: none;
        }
      ul{
        height: 300px;
        overflow-y: visible;
        li{
          height: 35px;
          font-size: 15px;
          text-align: center;
          line-height:35px;
          float: none;
          cursor:pointer;
        }
      }
      .loca_vince{
        width: 25%;
        overflow: auto;
        box-sizing: border-box;
        border-right:1px solid #ccc;
        li:nth-child(1){
          color:#eb7a1d;
        }
      }
      .loca_vince::-webkit-scrollbar {
            display: none;
        }
      .loca_city{
        width: 75%;
        overflow: auto;
        li{
          position: relative;
          .cityMask{
            position: absolute;
            width: 100%;
            height:100%;
            background: rgba(0,0,0,0);
            position: absolute;
            top:0;
            left:0;
            display: none;
            i{
              font-size: 15px;
              font-weight: bold;
              color:#eb7a1d;
              position: absolute;
              right:30px;
            }
          }
        }
      }
    }
    .chose_btn{
      width: 100%;
      height: 40px;
      margin-top: 30px;
      text-align: center;
      button{
        height: 90%;
        border-radius:8px;
        width: 80px;
        border:0;
        background: #eb7a1d;
        outline: none;
        color:white;
      }
    }
  }
  .locaMask{
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0,0,0,.5);
    top:0;
    left:0;
    z-index: 10;
    transition: 1s all;
  }
  .qr_box{
    width: 220px;
    height: 450px;
    background: white;
    position: absolute;
    right:0px;
    top:20px;
    box-shadow: 0px 0px 20px #999;
    text-align: center;
    box-sizing: border-box;
    padding-top:20px;
    .phone{
      width: 60%;
      height: 55%;
    }
    .qr{
      width: 60%;
      margin-top: 20px;
    }
  }
}
</style>
