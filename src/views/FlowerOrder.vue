<template>
  <div class="flowerorder">
    <div class="bg_head">
      <Head><span slot="title" class="name">确认订单</span></Head>
      <div class="clock"></div>
    </div>
    <div class="ordercontent">
      <div style="height: 1px;"></div>
      <!-- 选择地址 -->
      <div class="chooseplace">
        <div class="item bottomline">
          <div class="left pinktxt">选择收货地址</div>
          <div class="right"><img src="../assets/image/flowerorder_arrow.png"></div>
        </div>
        <div @click="choosetime" class="item bottomline">
          <div class="left boldtxt333">立即送出</div>
          <div class="right">
            <span class="pinktxt">{{timetxt}}送达</span>
            <img src="../assets/image/flowerorder_arrow.png">
          </div>
        </div>
        <div @click="choosepay" class="item">
          <div class="left boldtxt333">支付方式</div>
          <div class="right">
            <span class="boldtxt333">{{styleradio == 1?'支付宝':'微信'}}</span>
            <img src="../assets/image/flowerorder_arrow.png">
          </div>
        </div>
      </div>
      <!-- 订购人电话 -->
      <div class="phonebox">
        <div class="item bottomline">
          <div class="left boldtxt333">订购人电话</div>
          <div class="right">
            <input type="text" v-model="userphone" placeholder="必填，便于商家及时沟通">
          </div>
        </div>
        <div @click="inputcongratulate" class="item">
          <div class="left boldtxt333">祝福语</div>
          <div class="right">
            <div class="garytxt13 congratulate">
              <span v-if="!congratulatetxt">添加祝福语</span>
              {{congratulatetxt}}
            </div>
            <img src="../assets/image/flowerorder_arrow.png">
          </div>
        </div>
      </div>
      <!-- 花店 -->
      <div class="flowershop">
        <div class="item boldtxt333 bottomline">唯爱鲜花店LoveForener</div>
        <div class="item">
            <div class="left">
              <img src="../assets/image/flowerdetail_img1.png" alt="">
              <div class="detail">
                留住好时光·粉绣球6枝，粉玫瑰8枝光, 粉玫瑰8枝光·...
              </div>
            </div>
            <div class="right">
              <span class="count">x1</span>
              <span class="price1">¥299</span>
              <span class="boldtxt14">¥199</span>
            </div>
        </div>
        <div class="item bottomline" style="padding-top: 0;">
          <div class="left">
            <div class="bluetxt">配送费</div>
            <div class="normaltxt13">商家配送</div>
          </div>
          <div class="right">
            <div class="boldtxt14">¥0</div>
          </div>
        </div>
        <div class="item wenhao">
          <div class="left">
            <div class="graytxtc7">优惠说明</div>
            <img src="../assets/image/flowerorder_wen.png" alt="">
          </div>
          <div class="right">
            <div class="normaltxt13">小计</div>
            <div class="total">
              <i style="font-size: 0.18rem; font-style: normal;">¥</i>199</div>
          </div>
        </div>
      </div>
      <!-- 备注信息 -->
      <div class="other">
        <div @click="inputremark" class="item">
          <div class="left boldtxt333">订购备注</div>
          <div class="right">
            <div class="garytxt13 congratulate">
              <span v-if="!remarktxt">可输入备注/要求</span>
              {{remarktxt}}
            </div>
            <img src="../assets/image/flowerorder_arrow.png">
          </div>
        </div>
      </div>
      <!-- 附加信息 -->
      <div class="addinfo">
        <span>商家承诺：商家若取消订单，将赔付¥5店铺红包</span>
        <img src="../assets/image/flowerorder_wen.png" alt="">
      </div>
    </div>
    <!-- 选择时间弹出层 -->
    <van-popup v-model="choosetimeeshow" position="bottom" round :style="{ height: '40%' }">
      <div class="choosetimebox">
        <div class="title">选择时间</div>
        <div class="content">
          <div class="left">
            <div @click="chooseday(0)" :class="curday==0?'active':''" class="day">今天</div>
            <div @click="chooseday(1)" :class="curday==1?'active':''" class="day">明天</div>
            <div @click="chooseday(2)" :class="curday==2?'active':''" class="day">后天</div>
          </div>
          <div class="right">
            <div v-if="curday==0" class="todaytime">
              <div @click="choosetimelist(i)" v-for="(i,index) of todaylist" :key="index" class="timeitem">{{i}}</div>
            </div>
            <div v-if="curday==1" class="tomorrowtime">
              <div @click="choosetimelist(i)" v-for="(i,index) of tomorrowlist" :key="index" class="timeitem">{{i}}</div>
            </div>
            <div v-if="curday==2" class="tomorrowtime">
              <div @click="choosetimelist(i)" v-for="(i,index) of tomorrowlist" :key="index" class="timeitem">{{i}}</div>
            </div>
          </div>
        </div>
      </div>
    </van-popup>
    <!-- 支付方式选择弹出层 -->
    <van-popup v-model="paystyleshow" position="bottom" round :style="{ height: '30%' }">
      <div class="paystylebox">
        <div class="title">选择支付方式</div>
        <div class="content">
          <van-radio-group v-model="styleradio">
            <div @click="choosestyle(1)" class="style">
              <div class="left">
                <img src="../assets/image/zhifubao.png" alt="">
                <span>支付宝支付</span>
              </div>
              <van-radio checked-color="#EB7347" name="1"></van-radio>
            </div>
            <div @click="choosestyle(2)" class="style">
              <div class="left">
                <img src="../assets/image/weixin.png" alt="">
                <span>微信支付</span>
              </div>
              <van-radio checked-color="#EB7347" name="2"></van-radio>
            </div>
          </van-radio-group>
        </div>
      </div>
    </van-popup>
    <!-- 祝福弹出层 -->
    <van-popup v-model="congratulateshow" position="bottom" round :style="{ height: '40%' }">
      <div class="congratulatebox">
        <div class="title">添加祝福语</div>
        <div class="content">
          <textarea placeholder="请输入贺卡祝福语！" maxlength="100" v-model="congratulatetxt" cols="30" rows="7"></textarea>
          <span class="count">{{congratulatelength}}/100个字</span>
        </div>
      </div>
    </van-popup>
    <!-- 备注信息弹出层 -->
    <van-popup v-model="remarkshow" position="bottom" round :style="{ height: '40%' }">
      <div class="congratulatebox">
        <div class="title">订单备注</div>
        <div class="content">
          <textarea placeholder="填写额外对商家和快递小哥的备注信息！" maxlength="100" v-model="remarktxt" cols="30" rows="7"></textarea>
          <span class="count">{{remarklength}}/100个字</span>
        </div>
      </div>
    </van-popup>
    <div class="fixedbox">
      <div class="fixedcontent">
        <div class="icons">
         <span class="text">合计:</span>
         <span class="totalprice">
            <i style="font-size: 0.2rem; font-style: normal;">¥</i>199.00</span>
        </div>
        <div class="btn">
          <button >提交订单</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Head from '@/components/Head.vue';
import  {mapState,mapMutations} from 'vuex';
export default {
  data() {
    return {
      choosetimeeshow: false,
      choosetimeetxt: "",
      paystyleshow: false,
      styleradio: '1',
      congratulateshow: false,
      congratulatetxt: "",
      remarkshow: false,
      remarktxt: "",
      curday: 0,
      todaylist: [],
      timetxt: "",
      userphone: "",
      tomorrowlist:['0:00-1:00','1:00-2:00','2:00-3:00','3:00-4:00','4:00-5:00','5:00-6:00','6:00-7:00',
      '7:00-8:00','8:00-9:00','9:00-10:00','11:00-12:00','12:00-13:00','13:00-14:00','14:00-15:00','15:00-16:00',
      '16:00-17:00','17:00-18:00','18:00-19:00','19:00-20:00','20:00-21:00','21:00-22:00',
      '22:00-23:00','23:00-24:00',],

    }
  },
  methods: {
    ...mapMutations(['changeSearch']),
    inputcongratulate(){
      this.congratulateshow = true;
    },
    inputremark(){
      this.remarkshow = true;
    },
    choosetime(){
      this.choosetimeeshow = true;
    },
    chooseday(i){
      this.curday = i;
    },
    choosepay(){
      this.paystyleshow = true;
    },
    choosestyle(i){
      this.styleradio = ''+i;
      this.paystyleshow = false;
    },
    choosetimelist(i){
      if(this.curday == 1){
        this.timetxt = "明天"+i
      }else if(this.curday == 2){
        this.timetxt = "后天"+i
      }else{
        this.timetxt = i;
      }
      this.choosetimeeshow = false;
    },
    getHour(){
      var time = new Date().getHours();
      this.timetxt = `${time+1}:00-${time+2}:00`
      for(var i = time+1; i<24; i++){
        var item = `${i}:00-${i+1}:00`
        this.todaylist.push(item)
      }
    }
  },
  created() {
    this.getHour()
  },
  components: {
    Head,
  },
  computed: {
    ...mapState(['searchShow']),
    congratulatelength(){
      if(!this.congratulatetxt){
        return 0
      }else{
        return this.congratulatetxt.length
      }
    },
    remarklength(){
      if(!this.remarktxt){
        return 0
      }else{
        return this.remarktxt.length
      }
    }
  },
  mounted() {
     this.changeSearch(false);
  },
}
</script>
<style>
/* 弹出层样式 */
.van-popup--bottom.van-popup--round {
    border-radius: 30px 30px 0 0;
}

.flowerorder .head{
  position: absolute;
  background: transparent;
}

.flowerorder .head .name{
  display: inline-block;
  color: #333;
  font-weight: 600;
  font-size: 0.18rem;
  margin-left: 0.2rem;
  margin-top: 0.35rem;
}
.flowerorder .clock{
  width: 100%;
  height: 2rem;
  position: absolute;
  padding: 0 0.16rem;
  box-sizing: border-box;
  top: 0.4rem;
  background: -webkit-linear-gradient(to bottom, rgba(245, 246, 250, 0),rgba(245, 246, 250, 1)) !important;
  background: -o-linear-gradient(to bottom, rgba(245, 246, 250, 0),rgba(245, 246, 250, 1)) !important;
  background: -moz-linear-gradient(to bottom, rgba(245, 246, 250, 0),rgba(245, 246, 250, 1)) !important;
  background: linear-gradient(to bottom, rgba(245, 246, 250, 0),rgba(245, 246, 250, 1)) !important;
}
.flowerorder .bg_head{
  background: url('../assets/image/flowerorder_bg.png') 0 0 no-repeat;
  width: 100%;
  height: 2.3rem;
  background-size: 100% 100%;
}
.flowerorder .congratulate{
  width: 2rem;
  text-align: right;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.flowerorder .ordercontent{
  width: 100%;
  padding: 0 0.16rem;
  background: #F5F6FA;
  box-sizing: border-box;
  position: relative;
} 
.flowerorder .bottomline{
  border-bottom: 1px solid #EFEFEF;
}
.flowerorder .boldtxt333{
  color: #333;
  font-weight: 600;
}
.flowerorder .normaltxt13{
  font-weight: normal;
  font-size: 0.13rem;
  color: #333;
}
.flowerorder .boldtxt14{
  color: #333;
  font-weight: 600;
  font-size: 0.14rem;
}
.flowerorder .pinktxt{
  color: #F74397;
  font-weight: 600;
}
.flowerorder .garytxt13{
  font-size: 0.13rem;
  color: #999999;
}
/* 选择地址 */
.flowerorder .chooseplace{
  width: 3.43rem;
  background: #fff;
  border-radius: 0.2rem;
  position: absolute;
  top: -1.4rem;
}
.flowerorder .item{
  margin: 0 0.16rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.18rem 0;
  font-size: 0.15rem;
}
.flowerorder .item input{
  outline: 0;
  border: 0;
  color: #F74397;
  text-align: right;
}
.flowerorder .item input::-webkit-input-placeholder{
  color: #999999;
  font-size: 0.13rem;
  text-align: right;
}
.flowerorder .chooseplace .item:first-child{
  font-size: 0.2rem;
}
.flowerorder .item img{
  width: 0.09rem;
  height: 0.14rem;
}
.flowerorder .item .right{
  display: flex;
  align-items: center;
}
.flowerorder .item span{
  margin-right: 0.1rem;
}
/* 订购人电话 */
.flowerorder .phonebox{
  width: 3.43rem;
  margin-top: 0.55rem;
  background: #fff;
  border-radius: 0.2rem;
  font-size: 0.15rem;
}
/* 花店 */
.flowerorder .flowershop{
  width: 3.43rem;
  margin-top: 0.2rem;
  background: #fff;
  border-radius: 0.2rem;
  font-size: 0.15rem;
}
.flowerorder .flowershop .left{
  display: flex;
  align-items: center;
}
.flowerorder .flowershop .left img{
  width: 0.42rem;
  height: 0.42rem;
}
.flowerorder .flowershop .detail{
  width: 1.15rem;
  height: 0.35rem;
  margin-left: 0.03rem;
  font-size: 0.13rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
    /*! autoprefixer: off */
  -webkit-box-orient: vertical;
}
.flowerorder .flowershop .count{
  font-size: 0.11rem;
  font-weight: bold;
  color: #333;
}
.flowerorder .flowershop span{
  margin-left: 0.15rem;
  margin-right: 0 !important;
}
.flowerorder .flowershop .price1{
  font-weight: bold;
  font-size: 0.14rem;
  color: #999;
  text-decoration: line-through;
}
.flowerorder .flowershop .bluetxt{
  width: 0.39rem;
  height: 0.16rem;
  text-align: center;
  line-height: 0.16rem;
  color: #26B3ED;
  font-size: 0.1rem;
  border: 0.5px solid #7ECEF4;
  border-radius: 0.04rem;
  margin-right: 0.1rem;
}
.flowerorder .flowershop .wenhao img{
  width: 0.12rem;
  height: 0.12rem;
  margin-top: 0.01rem;
}
.flowerorder .flowershop .graytxtc7{
  color: #c7c7c7;
  font-size: 0.13rem;
  margin-right: 0.08rem;
}
.flowerorder .flowershop .total{
  font-weight: bold;
  margin-left: 0.05rem;
  font-size: 0.23rem;
  color: #D03515;
}
.flowerorder .flowershop .normaltxt13{
  margin-top: 0.01rem;
}
/* 备注信息 */
.flowerorder .other{
  width: 3.43rem;
  margin-top: 0.2rem;
  background: #fff;
  border-radius: 0.2rem;
  font-size: 0.15rem;
}
/* 附加信息 */
.flowerorder .addinfo{
  color: #C7C7C7;
  font-size: 0.12rem;
  display: flex;
  margin-top: 0.08rem;
  padding-bottom: 1rem;
  align-items: center;
}
.flowerorder .addinfo img{
  width: 0.12rem;
  height: 0.12rem;
  margin-left: 0.07rem;
}

/* 底部固定按钮 */
/* 底部固定 */
.flowerorder .fixedbox{
  position: fixed;
  width: 100%;
  padding: 0 0.16rem;
  box-sizing: border-box;
  height: 0.5rem;
  background: transparent;
  bottom: 0.3rem;
}
.flowerorder .fixedbox .fixedcontent{
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  display: flex;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow:0px 10px 26px rgba(0, 0, 0, 0.07);
  justify-content: space-between;
}
.flowerorder .fixedbox .icons{
  width: 65%;
  height: 0.4rem;
  display: flex;
}
.flowerorder .fixedbox .icons .text{
  color: #2B2C2D;
  margin-top: 0.04rem;
  font-size: 0.15rem;
  font-weight: bold;
  margin-left: 0.2rem;
}
.flowerorder .fixedbox .icons .totalprice{
  font-weight: bold;
  color: #D03515;
  font-size: 0.3rem;
  margin-left: 0.05rem;
}
.flowerorder .fixedbox .btn{
  width: 35%;
}
.flowerorder .fixedbox button{
  color: #fff;
  width: 100%;
  height: 0.5rem;
  padding: 0;
  border-radius: 0.5rem;
  border: 0;
  outline: 0;
  background: -webkit-linear-gradient(to left, #F74296, #FF91C0) !important;
  background: -o-linear-gradient(to left, #F74296, #FF91C0) !important;
  background: -moz-linear-gradient(to left, #F74296, #FF91C0) !important;
  background: linear-gradient(to left, #F74296, #FF91C0) !important;
}

/* 祝福语弹出层 */
.flowerorder .congratulatebox{
  width:100%;
  height: 100%;
  text-align: center;
}
.flowerorder .congratulatebox .title{
  height: 25%;
  color: #2B2C2D;
  font-size: 0.18rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flowerorder .congratulatebox .content{
  height: 75%;
  position: relative;
}
.flowerorder .congratulatebox .count{
  position: absolute;
  right: 0.4rem;
  top: 1.4rem;
  color: #666666;
  font-size: 0.14rem;
}
.flowerorder .congratulatebox textarea{
  background: #F5F6FA;
  width: 3.2rem;
  height: 1.6rem;
  padding: 0.1rem;
  border-radius: 0.1rem;
  border: 0;
}
.flowerorder .congratulatebox textarea::-webkit-input-placeholder { 
  /* WebKit browsers */ 
  font-size: 0.16rem;
}
/* 时间选择弹出层 */
.flowerorder .choosetimebox .title{
  text-align: center;
  color: #333;
  font-weight: 600;
  font-size: 0.16rem;
  margin-top: 0.2rem;
  padding-bottom: 0.1rem;
  border-bottom: 1px solid #EFEFEF;
}
.flowerorder .choosetimebox .content{
  display: flex;
  margin-top: 0.1rem;
}
.flowerorder .choosetimebox .left{
  width: 25%;
  height: 2rem;
  background: #F5F6FA;
}
.flowerorder .choosetimebox .left .active{
  background: #fff;
  font-weight: 600;
}
.flowerorder .choosetimebox .left .day{
  text-align: center;
  line-height: 0.4rem;
}
.flowerorder .choosetimebox .right{
  width: 75%;
  height: 2rem;
  overflow: auto;
  padding-left: 0.2rem;
}
.flowerorder .choosetimebox .right .timeitem{
  padding: 0.1rem 0;
  color: #666666;
  border-bottom: 1px solid #ededed;
}
/* 支付方式选择弹出层  */
.flowerorder .paystylebox .title{
  margin-top: 0.3rem;
  text-align: center;
  font-size: 0.18rem;
  color: #2B2C2D;
  font-weight: bold;
  padding: 0 0.1rem;
}
.flowerorder .paystylebox .content{
  margin-top: 0.2rem;
}
.flowerorder .paystylebox .content .style{
  padding: 0.1rem 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flowerorder .paystylebox .content .style .left{
  display: flex;
  align-items: center;
}
.flowerorder .paystylebox .content .style img{
  width: 0.3rem;
  height: 0.3rem;
  margin-right: 0.2rem;
}
</style>