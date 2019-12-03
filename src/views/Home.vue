<template>
  <div class="home">
    <Advertise></Advertise>
 <van-search
  v-model="value"
  placeholder="请输入搜索关键词"
  show-action
  shape="round"
  @search="onSearch"
  id="topSearch"
>
  <div slot="action" @click="onSearch" id="seasearchrch">
      <img src="../assets/image/home_chat.png" alt="">
    </div>
</van-search>
<div class="bg_banner">
    <div class="banner">
      <router-link  to="list">
<van-swipe :autoplay="3000" indicator-color="white">
   
  <van-swipe-item ><img src="../assets/image/home_banner1.png" alt="" class="bannerImg"> </van-swipe-item>
  <van-swipe-item><img src="../assets/image/home_banner2.png" alt="" class="bannerImg"> </van-swipe-item>
  <van-swipe-item><img src="../assets/image/home_banner3.png" alt="" class="bannerImg"> </van-swipe-item>
</van-swipe>
 </router-link>
    </div>
    </div>
    <div class="mainContent">
  <div class="ban-list">
          <ul class="ban-list-ul">
            <li><img src="../assets/image/home_qiye.png" alt="" class="yuan"> <p>企业专区</p> </li>
            <li><img src="../assets/image/home_sendFlowers.png" alt=""  class="yuan"><p>送花</p></li>
            <li><img src="../assets/image/home_profess.png" alt=""  class="yuan"><p>表白</p></li>
            <li><img src="../assets/image/home_appointment.png" alt=""  class="yuan"><p>约会</p></li>
            <li>
              <router-link :to="{name:'list',params:{activeDescript:'超值套餐'}}">
                <img src="../assets/image/home_all.png" alt="" class="yuan">
              </router-link>
              <p>全部</p></li>
          </ul>
     </div>
     <div class="advertise">
       <img src="../assets/image/home_zxtuijian.png"/>
     </div>
     <div class="content-bottom">
         <ul class="content-bottom-ul">
           <router-link :to="{name: 'search',params:{typeId:1}}">
           <li class="li-first">
             <p class="strong">热租榜单</p>
             <p class="small">热租爆品</p>
           </li>
            </router-link>
           <li class="li-second">
              <p class="strong">特价短租</p>
              <p class="small">限时优惠</p>
           </li>
           <li class="li-third">
              <p class="strong">鲜花排行</p>
               <p class="small">热卖爆品</p>
           </li>
          
         </ul>
     </div>
       <div class="hhtuijian">
        <img src="../assets/image/home_hhtuijian.png"/>
       </div>
         <div class="tuijian-flower">
         <ul class="flower-ul">
           <li class="flower-li" v-for="(item , i) in homeList" :key="i">
             <img :src="item.picUrl" alt="">
             <p class="strong">{{item.name}}</p>
             <div :style="{'margin-top':'0.1rem'}">
               <p class="retail_price"> ￥{{item.retailPrice}}</p>
               <p class="past_price">￥{{item.counterPrice}}</p>
             </div>
             <button class="buyButton">立即购买</button>
             <p class="showNumber">{{item.number}}人已付款</p>
           </li>
           <!-- <li >
             <img src="" alt="">
             <p class="strong">留住好时光，粉玫瑰10支，白色吉梗8支</p>
             <div>
               <p class="retail_price"> ￥188</p>
               <p class="past_price">￥288</p>
             </div>
           </li>
           <li >
             <img src="" alt="">
             <p class="strong">留住好时光，粉玫瑰10支，白色吉梗8支</p>
             <div>
               <p class="retail_price"> ￥188</p>
               <p class="past_price">￥288</p>
             </div>
           </li>
           <li >
             <img src="" alt="">
             <p class="strong">留住好时光，粉玫瑰10支，白色吉梗8支</p>
             <div>
               <p class="retail_price"> ￥188</p>
               <p class="past_price">￥288</p>
             </div>
           </li> -->
         </ul>
     </div>
    </div>
  <Foot></Foot>
  </div>
  
</template>

<script>
// @ is an alias to /src
import {mapMutations,mapState} from "vuex";
import Foot from "@/components/Foot.vue"
import Advertise from "@/components/Advertise.vue"



export default {
  name: 'home',
  data(){
        return{
           value:"",
           tabPosition: 'left',
           homeList:[],
        }
    },
  components: {
  Foot,
  Advertise,
  }, 
  computed: {
          ...mapState(['searchShow'])
    },
  methods: {
     ...mapMutations(['changeSearch']),
     onSearch(){
       this.$router.push({name:'tosearch',params:{keyWords:this.value}})
          console.log(this.value)
     },
      
  },
  mounted() {
      this.changeSearch(true);
     this.$axios.get('/goods/recommendFlower',{params:{
        shopType: 2,
        sort: 'number',
     }}).then(res=>{
        console.log(res)
        this.homeList=res.data.data.list;
        // console.log(this.homeList)
     })
  },
}
</script>

<style  scoped >
.home{
  width:100%;
  height: 100%;
  background: #F5F6FA;
}
.van-search--show-action {
    padding-right: 0;
    padding-top: 0.2rem;
}
#topSearch{
  width: 245px !important;
  height:28px;
  
}
 .van-search {
 width: 3.43;
 
} 
.van-search__action {
    padding: 0 0.14rem;
    color: #323233;
    font-size: 14px;
    line-height: 34px;
}
#search{
  width: 0.21rem;
  margin-left: 0.30rem;
  height: 0.26rem;
}
.bg_banner{
  width: 100%;
    height: 1.46rem;
  background: white;
  overflow: hidden;
}
.banner{
  border-radius: 0.15rem;
  /* border: 1px solid; */
  width: 3.43rem;
  height: 1.36rem;
  margin: auto;
  margin-top: 0.1rem;
  overflow: hidden;
}
.banner .van-swipe-item{
   width: 3.43rem;
  height: 1.36rem !important;
  text-align: center;
}
 .banner .bannerImg{
   width: 100%;
   height: 1.55rem;
 }
.banner .van-swipe /deep/ .van-swipe__indicators .van-swipe__indicator--active{
 width: 0.2rem ;
 border-radius: 0.06rem;
}

.mainContent{
  width: 100%;
  background: #ffffff;
}
.ban-list{
  width:  3.43rem;
   height: 1.1rem;
  overflow: hidden;
  margin: auto;
}
.ban-list-ul{
  width:  3.43rem;
  height: 1.04rem;
}
.ban-list-ul li{
  width: 20%;
  float: left;
  margin-top: 0.15rem;
  /* margin-right: 0.2rem; */
  text-align: center;
  font-size: 0.13rem;
  /* overflow: hidden; */
}
.ban-list-ul li .yuan{
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin: auto;
}
.ban-list-ul li p{
  margin-top: 0.1rem;
}
.ban-list-ul li:last-child{
  margin-right: 0rem;

}
.advertise{
  margin: auto;
  
}
.advertise img{
 margin: auto;
 width:  1.3rem;
 height: 0.17rem;
}
.content-bottom{
 width:  3.43rem;
 height: auto;
 margin: auto;
 margin-bottom: 0.2rem;
}
.content-bottom .content-bottom-ul li{
  width: 1.09rem;
  height: 1.4rem;
  float: left;
  box-sizing: border-box;
  margin-top: 0.13rem;
  border-radius: 0.1rem;
  background: white;
}
.content-bottom .content-bottom-ul .li-first{
  background: url("../assets/image/home_remen.png") no-repeat;
  background-size: 100% 100%;
  
}
.content-bottom .content-bottom-ul .li-second{
background: url("../assets/image/home_tejia.png") no-repeat;
background-size: 100% 100%;
margin-left: 0.08rem;
}
.content-bottom .content-bottom-ul .li-third{
 background: url("../assets/image/home_xianhua.png") no-repeat;
 background-size: 100% 100%;
 margin-left: 0.08rem;
}

.content-bottom-ul::after{
    content:" ";
    display:block;
    clear:both;
    height:0; 
    overflow:hidden; visibility:hidden; 
}
.content-bottom .content-bottom-ul li .strong{
   width:0.65rem;
   height: 0.15rem;
   font-size: 0.14rem;
   color: #ffffff;
   line-height: 0.15rem;
   margin: auto;
   margin-top: 0.08rem; 
  
}
.content-bottom .content-bottom-ul li .small{
  width:0.56rem;
   height: 0.15rem;
   font-size: 0.13rem;
   color: #ffffff;
   line-height: 0.15rem;
   margin: auto;
   margin-top: 0.95rem;
}
.hhtuijian{
margin: auto;
}
.hhtuijian img{
 margin: auto;
 width:  1.3rem;
 height: 0.17rem;
}
.tuijian-flower{
 width:  3.43rem;
 height: auto;
 margin: auto;
 margin-bottom: 0.85rem;
}
.flower-ul::after{
    content:" ";
    display:block;
    clear:both;
    height:0; 
    overflow:hidden; visibility:hidden; 
}
.tuijian-flower .flower-ul .flower-li{
  width: 1.09rem;
  /* height: 1.4rem; */
  float: left;
  box-sizing: border-box;
  margin-top: 0.13rem;
  border-radius: 0.1rem;
  background: white;
  margin-left: 0.08rem;
  position: relative;
}
.tuijian-flower .flower-ul li:nth-child(3n){
  margin-left: 0;
}
.tuijian-flower .flower-ul li img{
  width: 1.09rem;
  height: 0.99rem;
}
.tuijian-flower .flower-ul .strong{
  width: 1rem;
  font-size: 0.12rem;
  color: black;
  line-height: 0.18rem;
  margin: auto;
  margin-top: 0.03rem;
   word-break: break-all;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-box-orient: vertical; 
   -webkit-line-clamp: 2; 
   overflow: hidden; 
}
.tuijian-flower .flower-ul .retail_price{
  color: #B3381D;
  font-size: 0.13rem;
  font-weight: bold;
  float: left;
}
.tuijian-flower .flower-ul .past_price{
  color: #B3381D;
  font-size: 0.12rem;
  margin-left: 0.1rem;
  float: left;
  text-decoration: line-through;
}
.tuijian-flower .flower-ul .buyButton{
     width: 0.9rem;
     height: 0.24rem;
     background: #FF8B08;
     text-align: center;
     line-height: 0.24rem;
     border-radius: 0.11rem;
     border: none;
     font-size: 0.13rem;
     margin-top: 0.05rem;
     color: white;
}
.tuijian-flower .flower-ul .showNumber{
  position: absolute;
  /* width: 0.75rem; */
  height: 0.2rem;
  font-size: 0.12rem;
  color: white;
  line-height: 0.2rem;
  background: -webkit-linear-gradient(to left, #9A37EE, #F284F9) !important;
  background: -o-linear-gradient(to left, #9A37EE, #F284F9) !important;
  background: -moz-linear-gradient(to left, #9A37EE, #F284F9) !important;
  background: linear-gradient(to left, #9A37EE, #F284F9) !important;
  border-radius: 0 0.13rem 0 0;
  padding-left: 0.08rem;
  padding-right: 0.08rem;
  left: 0;
  top: 0.79rem;
}

</style>
