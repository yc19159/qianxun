<template>
<div class="main">
    <div class="bg-top">
        <div class="top">
      <Head></Head>
      <div class="wait-pay">
           <p class="wiat-forpay">{{status}}</p>
      </div>
         <div class="top-third">
             <!-- <span class="needpay">需付款：￥{{orderInfo.goodsPrice.toFixed(2)}}</span> -->
              <!-- <span class="havetime">剩余时间：XX小时XX分钟</span> -->
         </div>
       </div>  
       <div class="clock"></div>
    </div>
    
    <div class="bg-address">
        <div class="address">
            <div class="user-information">
               <img src="../assets/image/jiesuan_dingwei.png" alt="">
               <span class="username">orderInfo.consignee</span>
               <span class="usetel">orderInfo.mobile</span>
            </div>
           <div class="address-detail">
               <p >orderInfo.address</p>
           </div>
             <span class="sp1">收货不便时，可免费选择暂存服务</span>
           </div>
       </div>
           <div class="bg-content">
         <div class="content">
             <div class="bg_store">
             <div class="store">
                 <!-- <router-link :to="{name:'dianpu',params:{shopId: orderGoods.shopId}}"> -->
                    <!-- <img src="../assets/image/dianpu.png" alt="" class="store-img"> -->
                    <span class="storename">1orderGoods.shopName</span>
                    <!-- <img src="../assets/image/more.png" alt="" class="more"> -->
                <!-- </router-link> -->
             </div>
             <div class="goods">
                <div class="goods-top">
                    <img src="" class="goodsImg" alt="">
                    <p class="goodsName">留住美好时光留住美好时光，粉玫瑰八只光，留住美，粉玫瑰八只光，留住美好时</p>
                    <p class="goodsnumber">×1</p>
                    <span class="highPrice">￥299</span>
                    <p class="lowerPrice">￥199</p>
                </div>
             </div>
             <div class="delever">
                 <p class="deleverName"> 配送费</p>
                 <p class="deleverShop">商家配送</p>
                 <p class="deleverPrice">￥0</p>
             </div>
             <div class="priceTotal">
                 <p class="priceTitle">总价</p>
                 <p class="price">小计 <span :style="{color:'#D54F35'}"> ￥</span> <span class="price-sp">199</span></p>
             </div>
            </div>
           
         </div>
          <div class="peisong-content">
              <div class="bg-peisong">
                 <div class="peisong-title">
                    <span class="title">配送消息</span>
                </div>
                <div class="first">
                   <p class="first-title">配送服务</p>
                   <p class="first-content">全程配送</p>
                </div>
                <div class="first">
                   <p class="first-title">配送时间</p>
                   <p class="first-content">立即配送</p>
                </div>
                <div class="first">
                   <p class="first-title">配送地址</p>
                   <p class="first-content">世纪中心508</p>
                    
                </div>
                    <p class="first-tel">1234567890</p> 
                    <p class="first-name">大魔王</p>
              </div>
          </div>
           <div class="peisong-content">
              <div class="bg-peisong">
                 <div class="peisong-title">
                    <span class="title">订单信息</span>
                </div>
                <div class="first">
                   <p class="first-title">订单号码</p>
                   <p class="first-content">全程配送</p>
                </div>
                <div class="first">
                   <p class="first-title">下单时间</p>
                   <p class="first-content">立即配送</p>
                </div>
                <div class="first" :style="{'margin-bottom':'0.2rem'}">
                   <p class="first-title">支付方式</p>
                   <p class="first-content">世纪中心508</p>
                    
                </div>
              </div>
          </div>
       
     </div>
     
     
    </div>
</template>

<script>
import {mapState,mapMutations} from "vuex";
import Head from "@/components/Head.vue";
import { Dialog } from 'vant';

export default {
    
  data(){
        return{
            orderGoods:[],
            orderInfo:{},
            specification: '',
         }
    },
    props:{
     status:String,
    },
    components: {
     Head,
    },
    methods: {
         ...mapMutations(['changeSearch']),
         cancel(){
             Dialog.confirm({
       
              message: '确认取消？'
              }).then(() => {
            this.$axios.post('order/cancel',{
                orderId:this.$route.params.orderId,
            }).then(res=>{
                console.log(res)
                if(res.data.errno==0){
                this.$router.push({name:'good',params:{goodId:this.orderGoods.goodsId}})
                }else{
                     Dialog({message:'删除失败'})
                }
            })
             console.log(confirm)
             }).catch(() => {
             // on cancel
             console.log('cancel')
             });
            
         },
     
    },
    computed: {
         ...mapState(['searchShow']),
    },
    mounted() {
         this.changeSearch(false);
         console.log(this.status)
    },
}
</script>

<style lang="scss"  scoped>
.main{
    background: #F5F6FA;
    width: 100%;
    height: 7.57rem;
}
.head{
    background:rgba(0,0,0,0);;
}
 .bg-top{
    width: 100%;
    background: url("../assets/image/flowerpay_bg.png") 0 0 no-repeat;
    background-size: 100% 100%;
    height: 2.2rem;
    color: white;
    overflow: hidden;
    // background: #F64296;
    opacity: 0.9;
    z-index: 333;
    // background: #F64296;

}
.clock{
  width: 100%;
  height: 2rem;
  position: absolute;
  padding: 0 0.16rem;
  box-sizing: border-box;
  top: 0.4rem;
  z-index: 0;
  background: -webkit-linear-gradient(to bottom, rgba(245, 246, 250, 0),rgba(245, 246, 250, 1)) !important;
  background: -o-linear-gradient(to bottom, rgba(245, 246, 250, 0),rgba(245, 246, 250, 1)) !important;
  background: -moz-linear-gradient(to bottom, rgba(245, 246, 250, 0),rgba(245, 246, 250, 1)) !important;
  background: linear-gradient(to bottom, rgba(245, 246, 250, 0),rgba(245, 246, 250, 1)) !important;
}
.wait-pay{
    // width: 1.2rem;
    height: 0.22rem;
    margin-top: 0.22rem;

    .wiat-forpay{
        margin-left: 0.13rem;
        font-size: 0.22rem;
        font-weight: bold;
        height: 0.2rem;
        line-height: 0.2rem;
        margin-top: 0.16rem;
        color: black;
    }
}
.top-third{
margin-top: 0.6rem;
font-size: 0.13rem;
margin-left: 0.43rem;
.needpay{
    margin-left: 0.25rem;
}
}
.bg-address{
   width: 100%;
   height: 1.09rem;
   background: #F5F6FA;
   position: relative;
//    margin-top: -0.2rem;
   overflow: hidden;
    background: -webkit-linear-gradient(to bottom, #F5E1EE, #F5F6FA) !important;
    background: -o-linear-gradient(to bottom, #F5E1EE, #F5F6FA) !important;
    background: -moz-linear-gradient(to bottom, #F5E1EE, #F5F6FA) !important;
    background: linear-gradient(to bottom, #F5E1EE, #F5F6FA) !important;
    // background: -webkit-linear-gradient(to right, #FF91C0, #F64296) !important;
    // background: -o-linear-gradient(to right, #FF91C0, #F64296) !important;
    // background: -moz-linear-gradient(to right, #FF91C0, #F64296) !important;
    // background: linear-gradient(to right, #FF91C0, #F64296) !important;
   .address{
       width: 3.43rem;
       margin: auto;
       background-color: white;
        border-radius: 0.2rem;
        height: 1.09rem;
        overflow: hidden;
        position: relative;
       .user-information{
           margin-top: 0.2rem;
           height: 0.2rem;
           img{
               width: 0.2rem;
               height: 0.22rem;
               float: left;
               margin-top: 0.23rem;
               margin-left: 0.23rem;
           }
           .username{
               font-size: 0.16rem;
               font-weight: bold;
               margin-left: 0.2rem;
               float: left;
           }
           .usetel{
               margin-left: 0.12rem;
               font-size: 0.12rem;
               color: #5E6165;
               float: left;
               line-height: 0.22rem;
           }
       }
       .address-detail{
          margin-top: 0.05rem;
          margin-left: 0.1rem;
          p{
              font-size: 0.13rem;
              margin-left: 0.52rem;
              color: #5E6165;
          }
       }
   }
}
 .bg-content{
    //    height: 4.35rem;
       width: 100%;
       background: #F5F6FA;
       margin-top: 0.12rem;
       overflow: hidden;
       margin-bottom: 0.75rem;
   }
   .content{
       width: 3.43rem;
       margin: auto;
       overflow: hidden;
       background: white;
       border-radius: 0.2rem;
   }
   .content .bg_store{
       width: 3.2rem;
       margin: auto;
       overflow: hidden;
   }
   .content .goods-top{
       width: 100%;
       height: 0.45rem;
       margin-top: 0.1rem;
   }
   .content .goods-top .goodsImg{
       width: 0.45rem;
       height: 0.45rem;
       background: #5E6165;
       float: left;
   
   }
   .content .goods-top .goodsName{
       width: 1.2rem;
       font-size: 0.12rem;
       color: #2B2C2D;
       line-height: 0.22rem;
       margin-left: 0.07rem;
       float: left;
       display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
   }
   .content .goods-top .goodsnumber{
        margin-left: 0.3rem;
        line-height: 0.45rem;
        font-size: 0.13rem;
        float: left;
   }
   .content .goods-top .highPrice{
       line-height: 0.45rem;
       margin-left: 0.18rem;
       float: left;
       color: #999999;
       text-decoration: line-through;
       font-size: 0.12rem;
   }
   .content .goods-top .lowerPrice{
       line-height: 0.45rem;
       float: right;
       font-size: 0.13rem;
   }
   .content .delever{
       width: 100%;
       height: 0.35rem;
       margin-top: 0.2rem;
       border-bottom: 1px solid #EFEFEF;
       padding-bottom: 0.12rem;
   }
   .content .delever .deleverName{
       width: 0.45rem;
       height: 0.18rem;
       font-size: 0.12rem;
       line-height: 0.2rem;
       text-align: center;
       border-radius: 0.09rem;
       float: left;
       border:  1px solid #26B3ED;
       color: #26B3ED;
   }
   .content .delever .deleverShop{
       margin-left: 0.12rem;
       font-size: 0.14rem;
       float: left;
   }
   .content .delever .deleverPrice{
       float: right;
       font-size: 0.13rem;
   }
   .content .priceTotal{
       width: 100%;
       height: 0.2rem;
       margin-top: 0.2rem;
       margin-bottom: 0.2rem;
   }
   .content .priceTotal .priceTitle{
     font-size: 0.13rem;
     float: left;
   }
   .content .priceTotal .price{
       font-size: 0.14rem;
       float: right;
   }
   .content .priceTotal .price-sp{
       color: #D54F35;
       font-size: 0.18rem;
   }
   .peisong-content{
    width: 3.43rem;
    margin: auto;
    overflow: hidden;
    background: white;
    border-radius: 0.2rem;
    margin-top: 0.12rem;
   }
   .bg-peisong{
    width: 3.2rem;
    margin: auto;
    overflow: hidden;
   }
   .bg-peisong .peisong-title{
        height: 0.2rem;
        margin-top: 0.2rem;
        padding-bottom: 0.2rem;
        border-bottom: 1px solid #EFEFEF;
   }
   .bg-peisong .title{
       float: left;
        font-size: 0.15rem;
        // margin-left: 0.1rem;
        font-weight: bold;
   }
   .bg-peisong .first{
      width: 100%;
      height: 0.2rem;
      font-size: 0.14rem;
      margin-top: 0.2rem;
   }
   .bg-peisong .first .first-title{
     float: left;
     color: #999999;
   }
   .bg-peisong .first .first-content{
    float: right;
   }
    .bg-peisong  .first-tel{
        float: right;
    }
     .bg-peisong  .first-name{
        float: right;
        margin-right: 0.05rem;
        margin-bottom: 0.2rem
    }
    .content .store{
        height: 0.2rem;
        margin-top: 0.2rem;
        padding-bottom: 0.2rem;
        border-bottom: 1px solid #EFEFEF;
        
        .store-img{
            width: 0.15rem;
            height: 0.15rem;
            float: left; 
            margin-top: 0.02rem;
        }
        .storename{
            float: left;
            font-size: 0.15rem;
            // margin-left: 0.1rem;
            font-weight: bold;
            color:black;
        }
        .more{
            float: left;
            margin-top: 0.05rem;
            margin-left: 0.08rem;
        }
    }
    .foot{
      width: 100%;
      height: 0.56rem;
      background: white;
      position: fixed;
      bottom: 0;
      button{
          width: 1.35rem;
          height: 0.4rem;
          border-radius: 0.2rem;
          border: none;
          outline: none;
          margin-top: 0.09rem;
      }
      .cancel{
         background: white;
          margin-left: 0.58rem;
        border: 1px solid gray;
      }
      .tijiao{
          background: -webkit-linear-gradient(to left, #D50000, #FD9A28) !important;
          background: -o-linear-gradient(to left, #D50000, #FD9A28) !important;
          background: -moz-linear-gradient(to left, #D50000, #FD9A28) !important;
          background: linear-gradient(to left, #D50000, #FD9A28) !important;
         margin-left: 0.3rem;
      }
    }
    .sp1{
      color: #FD9828;
      font-size: 0.12rem;
      padding: 0.03rem;
      float: left;
      padding-top: 0.03rem;
      margin-left: 0.16rem;
      margin-top: 0.03rem;
  }
</style>