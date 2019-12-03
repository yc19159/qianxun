<template>
  <div class="mine">
      <div :style="{height:'2.37rem',background:'white',overflow:'hidden'}">
     <div class="top">
          <router-link to="register">
         <!-- <img src="" alt="" class="news"> -->
          </router-link>
         <router-link to="setting">
         <img src="../assets/image/mine_setting.png" alt="" class="setting">
         </router-link>
     </div>
      <div class="bg-consume">
               <div class="consume">
                  
     <div v-if="isLogin" class="login">
           <!-- <Uploadavatar :username="isLogin"/> -->
          <img :src="userinfo.avatarUrl" alt="" class="userImg" >
          <div class="login-right">
                <p class="userName">{{userinfo.nickName}}</p>
                <!-- //v-if="userinfo.userLevel==0" -->
                <!-- <p class="vipLevel" v-if="userinfo.userLevel!=0">开通会员</p> -->
                <img  v-if="true" src="../assets/image/mine_kthuiyuan.png" class="clubber" alt="" @click="toVipMember">
                
                <img v-else src="../assets/image/mine_vip.png" class="isClubber" alt="">
                <!-- <p class="vipLevel" v-if="userinfo.userLevel!=0">{{userinfo.vipName}}</p> -->
                <router-link to="personaldata">
                <img src="../assets/image/more.png" class="more" alt="">
                </router-link>
          </div>

           
       </div>
       <div v-else class="unlogin">
           <!-- <Uploadavatar :username="isLogin"/> -->
            <p class="newfriend">HI，新朋友</p>
            <p class="sp">立即登录，享受更多服务</p>
            <button class="login" @click="gotoLogin">登录</button>
            
       </div>
       <!-- <div class="some-fun">
           <ul>
               <li>
                   <p>0</p>
                   <p>优惠卷</p>
               </li>
               <li>
                   <p>0</p>
                   <p>红包</p>
               </li>
               <li>
                   <p>0</p>
                   <p>余额</p>
               </li> 
               <li>
                   <p>0</p>
                   <p>收藏夹</p>
               </li>
           </ul>
       </div> -->

      <div class="vipdiv">
       <div class="vipdiv-left">
           <p class="vipdiv-title">VIP权益卡</p>
           <p class="vipdiv-save">花0.85/每天，预计省<span :style="{color:'#95862D'}">2500</span> /每年</p>
       </div>
       <button class="vipdiv-right" @click="openVip">点击抢购</button>
      </div>
               </div>
      </div>
      </div>
     <div class="bg-myorder">
           <div class="myorder">
               <div class="allorder">
                   <p class="left">
                       我的订单
                   </p>
                    <router-link to="/myorder">
                    <p class="right">
                        全部订单
                    </p>
                    <img src="../assets/image/more.png" alt="" class="more">
                     </router-link>
               </div>
               <ul>
                   <li> 
                       <router-link :to="{name:'myorder',params:{active:1}}">
                       <img src="../assets/image/mine_daifukuan.png" alt="">
                       </router-link>
                       <p>待付款</p>
                   </li>
                     <li>
                        <router-link :to="{name:'myorder',params:{active:4}}">
                       <img src="../assets/image/mine_daifahuo.png" alt="">
                        </router-link>
                       <p>租用中</p>
                   </li>
                     <li>
                         <router-link :to="{name:'myorder',params:{active:5}}">
                       <img src="../assets/image/mine_daishouhuo.png" alt="">
                        </router-link>
                       <p>待结算</p>
                   </li>
                     <li>
                    <router-link :to="{name:'myorder',params:{active:6}}">
                       <img src="../assets/image/mine_yiwancheng.png" alt="">
                     </router-link>
                       <p>已完成</p>
                   </li>
               </ul>
           </div>
     </div>
           <div class="bg-service">
           <div class="service">
               <div class="allorder">
                   <p class="left">
                       我的服务
                   </p>
                   
               </div>
               <ul>
                   <li>
                       <img src="../assets/image/mine_youhuiquan.png" alt="">
                        <p>收藏夹</p>
                   </li>
                     <li>
                         <router-link :to="{name:'list',params:{activeDescript:'超值套餐'}}">
                       <img src="../assets/image/mine_qyzulin.png" alt="">
                       </router-link>
                       <p>企业租赁</p>
                   </li>
                     <li>
                         <router-link to='suggested'>
                       <img src="../assets/image/mine_yjfankui.png" alt="">
                        </router-link>
                       <p>意见反馈</p>
                   </li>
                     <li>
                       <img src="../assets/image/mine_cjwenti.png" alt="">
                       <p>常见问题</p>
                   </li>
               </ul>
           </div>
     </div>

     <div class="tuijian">
         <img src="../assets/image/mine_tuijian.png" alt="" class="tuijian-img">
         <p class="recommendForYou">为你推荐</p>
     </div>
      <div class="price">
      <ul class="glist">
       <li class="glist-item"  v-for="(item , i) in goodsList" :key="i">
         <router-link :to="{name:'good',params:{goodId:item.id}}">
          <img :src="item.picUrl" class="glist-img"/>
        </router-link>
          <p class="phont-type">{{item.name}}</p>
          <div :style="{width:'100%','margin-top':'0.15rem'}">
           <span class="glist-price"><span :style="{'font-size':'0.14rem','font-weight':'normal'}">￥</span>{{item.retailPrice}} <span :style="{'font-size':'0.14rem','font-weight':'normal'}">/天</span></span> 
           <span :style="{color:'grey','font-size':'0.13rem','margin-left':'0.03rem'}">销量：{{item.number}}</span>
          </div>
          <p :style="{'font-size':'0.13rem','line-height':'0.16rem',height:'0.16rem',
          'margin-left':'0.12rem','border-radius':'0.02rem',width:'0.32rem',
          'text-align':'center',float:'left','margin-top':'0.1rem'}" class="new">全新</p>
              <p :style="{color:'#269CF0','font-size':'0.13rem','line-height':'0.16rem',height:'0.16rem',
          'margin-left':'0.12rem',border:'1px solid #269CF0','border-radius':'0.02rem',width:'0.44rem',
          'text-align':'center',float:'left','margin-top':'0.1rem'}">免押金</p>
          <p :style="{color:'#FB9F00','font-size':'0.13rem','line-height':'0.16rem',height:'0.16rem',
          'margin-left':'0.12rem',border:'1px solid #FCAC39','border-radius':'0.02rem',width:'0.2rem',
          'text-align':'center',float:'left','margin-top':'0.1rem'}">赠</p> <br/>
          <span class="pay">万人已付款</span> <span class="haoping">99%好评</span>
          <p class="shop">荣耀京东自营旗舰店</p>
          <router-link :to="{name:'dianpu',params:{shopId:item.id}}">
          <p class="toshop">进店</p>
          </router-link>
          <img src="../assets/image/more.png" alt="" class="more">

        </li>
        
      </ul>
    </div> 
       <Foot/>
  </div>
</template>

<script>
import {mapMutations,mapState} from "vuex";
import Foot from "@/components/Foot.vue";
import Uploadavatar from "@/components/Uploadavatar.vue";
export default {
    data(){
        return{
            isLogin:false,
            userinfo:[],
            username:"",
            goodsList:[],
        }
    },
    components:{
     Foot,
     Uploadavatar,
    },
    methods: {
        openVip(){
          this.$router.push({name:'vipmember'})
        },
        gotoLogin(){
            this.$router.push({name:'login'})
        },
        leave(){
            sessionStorage.removeItem('username') 
            this.isLogin=false
        },
        toVipMember(){
            this.$router.push({name: 'vipmember'})
        }
    },
      computed: {
          ...mapState(['searchShow'])
        // leave(){
        //     sessionStorage.removeItem('username') 
        //     this.isLogin=false
        // } 
    },
    mounted() {
        // var username=sessionStorage.username;
        if(localStorage.token){
            this.isLogin=true;
          
        };
       
        this.$axios.post("/user/info").then(res=>{
            console.log(res)
            this.userinfo=res.data.data;
            localStorage.info=JSON.stringify({"avatar":this.userinfo.avatarUrl,"username":this.userinfo.nickName,"vipLevel":this.userinfo.userLevel});
            console.log(this.userinfo)
        });
        this.$axios.post('/goods/recommend').then(res=>{
            this.goodsList=res.data.data.list
            console.log(this.goodsList)
        })
         
    },

}

</script>

<style scoped>
.mine{
    width: 100%;
    height: auto;
    background: #F5F6FA;
    overflow: hidden;
}
.top{
    width: 3.43rem;
    height: 0.22rem;
    margin: auto;
    margin-top: 0.2rem;
    background: white;
}
.top .news{
    float: right;
    width: 0.18rem;
    height: 0.2rem;
    background: grey;
}
.top .setting{
    float: right;
    width: 0.18rem;
    height: 0.19rem;
}
.bg-consume{
    width: 100%;
    height: 1.85rem;
    margin-top: 0.15rem;
    background: white;
}
.consume{
    width: 3.43rem;
    height: 1.85rem;
    margin: auto;
}
.unlogin{
    width: 3.43rem;
    height: 0.8rem;
    position: relative;
    
}

.unlogin .newfriend{
    font-size: 0.21rem;
    font-weight: bold;
}
.unlogin .sp{
  font-size: 0.14rem;
  color: #C7C7C7;
  margin-top: 0.12rem;
}
.unlogin .login{
    position: absolute;
    right: 0;
    top: 0.2rem;
    border: none;
    outline: none;
    width: 0.7rem;
    height: 0.31rem;
    border-radius: 0.155rem;
    color: white;
    font-size: 0.14rem;
    background: -webkit-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: -o-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: -moz-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: linear-gradient(to left, #D50000, #FD9A28) !important;
}
.login{
     width: 3.43rem;
    height: 0.8rem;
    position: relative;
}
.consume .some-fun{
    width: 100%;
    margin-top: 0.20rem;
    height: 0.35rem;
}
.consume .some-fun ul{
    height: 0.35rem;
}
.consume .some-fun ul li{
    text-align: center;
    float: left;
    width: 25%;
}
.consume .some-fun ul li p:first-child{
    font-size: 0.14rem;
    font-weight: bold;
}
.consume .some-fun ul li p:nth-child(2){
    font-size: 0.12rem;
    font-weight: normal;
    color: #C7C7C7;
}
.consume .vipdiv{
    width: 100%;
    height: 0.6rem; 
    border-radius: 0.12rem;
    background:url("../assets/image/mine_bg.png") 0 0  no-repeat;
    background-size:100%;
    margin-top: 0.15rem;
}
.vipdiv .vipdiv-left{
    float: left;
    margin-left: 0.2rem;
}
.vipdiv .vipdiv-left .vipdiv-title{
    font-size: 0.17rem;
    color: white;
    margin-top: 0.1rem;
}
.vipdiv .vipdiv-left .vipdiv-save{
    font-size: 0.12rem;
    margin-top: 0.05rem;
    color: #C7C7C7;
}
.vipdiv .vipdiv-right{
    float: right;
    border: 0;
    background: #F5F6FA;
    font-size: 0.13rem;
    padding: 0.06rem 0.17rem;
    border-radius: 0.14rem;
    margin-top: 0.15rem;
    margin-right: 0.25rem;
}
.bg-myorder{
    width: 3.43rem;
    height: 1.2rem;
    margin: auto;
    margin-top: 0.24rem;
    background: white;
    border-radius: 0.2rem;
    overflow: hidden;
}
.myorder{
    width: 3.08rem;
    height: 1.2rem;
    margin: auto;
}
.allorder{
width: 100%;
height: 0.18rem;
margin-top: 0.15rem;

}
.allorder .left{
 font-size: 0.15rem;
 font-weight: bold;
 float: left;
}
.allorder .right{
 font-size: 0.12rem;
 margin-left: 2.46rem;
 width: 0.5rem;
 color: black;
}
.allorder .more{
  float: right;
  width: 0.08rem;
  height: 0.12rem;
  margin-top: -0.15rem;
}
.bg-myorder .myorder ul{
width: 3.43rem;
height: 0.55rem;
margin: auto;
margin-top: 0.2rem;
}

.bg-myorder .myorder ul li{
  width: 25%;
  float: left;
  text-align: center;
  font-size: 0.12rem;
  color: #5E6165;
  margin-left: 0;
  height: 0.55rem;
}

.myorder ul li img{
    width: 0.23rem;
    height: 0.2rem;
    margin-left: 0.26rem;
}
.myorder ul li p{
    width: 0.73rem;
    margin-top: 0.13rem;
}
.bg-service{
    width: 3.43rem;
    height: 1.2rem;
    margin: auto;
    margin-top: 0.24rem;
    background: white;
    border-radius: 0.2rem;
    overflow: hidden;
}
.service{
    width: 3.08rem;
    height: 1.2rem;
    margin: auto;
}
.bg-service .service ul{
width: 3.43rem;
height: 0.55rem;
margin: auto;
margin-top: 0.2rem;
}

.bg-service .service ul li{
  width: 25%;
  float: left;
  text-align: center;
  font-size: 0.12rem;
  color: #5E6165;
  margin-left: 0;
  height: 0.55rem;
}

.service ul li img{
    width: 0.22rem;
    height: 0.19rem;
    margin-left: 0.26rem;
}
.service ul li p{
    width: 0.73rem;
    margin-top: 0.13rem;
}
.tuijian{
    width: 0.8rem;
    height: 0.2rem;
    margin-left: 1.5rem;
    margin-top: 0.22rem;
}
.tuijian .tuijian-img{
    width: 0.15rem;
    height: 0.16rem;
    float: left;
    margin-top: 0.03rem;
}
.tuijian .recommendForYou{
    font-weight: bold;
    font-size: 0.15rem;
    float: left;
    margin-left: 0.05rem;
}
 .price{
    width: 100%;
    background: #F5F6FA;
    border-radius: 0.2rem;
    margin-top: 0.15rem;
    margin-bottom: 0.8rem;
  }
  .glist{
    width: 100%;
    margin: auto;
    height: 100%;
  }
  .glist::after, .clear::after{
    content:" .";
    display:block;
    clear:both;
    height:0; 
    overflow:hidden; visibility:hidden; 
  }
  .glist .glist-item{
     width: 1.825rem;
     height: 3.53rem;
     background: white;
     border-radius: 0.16rem;
     float: left;
     margin-top: 0.25rem;
     overflow: hidden;
  }
  .glist .glist-item:nth-child(2n){
    margin-left: 0.1rem;
  }
  .glist .glist-item .new{
    color: white;
    background: -webkit-linear-gradient(to left, #F06726, #D6242C) !important;
    background: -o-linear-gradient(to left, #F06726, #D6242C) !important;
    background: -moz-linear-gradient(to left, #F06726, #D6242C) !important;
    background: linear-gradient(to left, #F06726, #D6242C) !important;
  }
  .glist .glist-item .pay{
    float: left;
    font-size: 0.12rem;
    color: #C7C7C7;
    line-height: 0.3rem;
    margin-left: 0.16rem;
  }
  .glist .glist-item .shop{
    float: left;
    font-size: 0.12rem;
    color: #C7C7C7;
    margin-left: 0.16rem;
    width: 0.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .glist .glist-item .toshop{
    color: black;
    font-size: 0.12rem;
    font-weight: bold;
    float: left;
  }
  .glist .glist-item .more{
    /* width: 0.08rem;
    height: 0.12rem; */

    float: left;
    margin-left: 0.05rem;
    margin-top: 0.05rem;
  }
  .glist .glist-item .haoping{
    float: left;
    font-size: 0.12rem;
    color: #C7C7C7;
    line-height: 0.3rem;
    margin-left: 0.1rem;
  }
  .glist-img{
       /* border: 1px solid; */
       /* display: block; */
       width: 1.5rem;
       height: 1.7rem;
       margin: auto;
       margin-top: 0.17rem;
  }
 .phont-type{
   margin-left: 0.12rem;
   margin-top: 0.1rem;
   font-size: 0.14rem;
   font-family: "PingFangSC-Semibold";
   font-weight: bold;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
 }
 .glist-price{
    margin-top: 0.28rem;
    font-size: 0.18rem;
    color: #B3381D;
    font-weight: bold;
    margin-left: 0.12rem;

 }
 .login .userImg{
     float: left;
     width: 0.8rem;
     height: 0.8rem;
     border-radius: 50%;
 }
 .login .login-right{
     float: left;
     margin-left: 0.15rem;
     width: 2.47rem;
    
 }
 .login .login-right .userName{
     font-size: 0.23rem;
     font-weight: 610;
     margin-top: 0.15rem;
     height: 0.3rem;
 }
 .login .login-right .clubber{
  width: 0.89rem;
  height: 0.26rem;
  margin-top: 0.15rem;
 }
 .login .login-right .more{
     float: right;
     margin-top: -0.3rem;
 }
 .login .login-right .isClubber{
  width: 0.88rem;
  height: 0.25rem;
  margin-top: 0.15rem;
 }
 .login .login-right .vipLevel{
    position: absolute;
    font-size: 0.13rem;
    top: 0.63rem;
    left: 1.33rem;
    color: #5E6165;
 }
</style>