<template>
    <div class="myorder">
        <Head :type="'order'" @searchText='searchText' ></Head>
         <van-tabs v-model="activeOrder">
          <van-tab title="全部">
            <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            >
<div :style="{background:'#F5F6FA'}">
    <div class="bg-content" v-for="(item , i) in showList" :key="i" ref="content">
         <div class="content" v-if="item.goodsList">
              <div class="store">
                  <router-link :to="{name:'dianpu', params:{shopId:item.goodsList[0].shopId}}">
                    <img src="../assets/image/dianpu.png" alt="" class="store-img">
                    <span class="storename">{{item.goodsList[0].shopName}}</span>
                    <img src="../assets/image/more.png" alt="" class="more">
                  </router-link>
                     <span class="state">{{item.orderStatusText}}</span>
             </div>
             <div class="goods-desc" >
                    <router-link  :to="{name:'good',params:{goodId:item.goodsList[0].id}}">
                      <img :src="item.goodsList[0].picUrl" alt="">
                    </router-link>
                    <router-link :to="{name:'dindan',params:{orderId:item.id}}">
                     <div class="goods-right">
                         <p class="goods-name">{{item.goodsList[0].goodsName}}</p>
                         <div class="goods-model">
                            <!-- <span >{{specification[0]}} </span>
                            <span v-if='specification.length>2'>{{specification[1]}}</span> -->
                            <span >{{item.goodsList[0].specifications[0]}} </span>
                            <span v-if="item.goodsList[0].specifications.length>2">{{item.goodsList[0].specifications[1]}}</span>
                         </div>
                         <div>
                         <p class="goods-price" >
                           ￥<span :style="{'font-size':'0.18rem'}">{{item.actualPrice.toFixed(2)}}</span> 
                         </p>
                         <p class="goods-number">×{{item.goodsList[0].number}}</p>
                         </div>
                     </div>
                    </router-link>
             </div> 
             <div class="total">
                  <span class="total-number">共{{item.goodsList[0].number}}件</span>
                  <span class="xiaoji"> 小计：<span :style="{color:'#B3381D'}">￥</span>
                  <span :style="{color:'#B3381D','font-size':'0.17rem'}">{{(item.actualPrice*item.goodsList[0].number).toFixed(2)}}</span> </span>
             </div>
             <div class="operate" v-if="item.goodsList[0]">  
                       <router-link v-if="item.orderStatusText=='待付款'" :to="{name: 'waitforpay',params:{orderId:item.id}}" >
                     <button  class="buyonce">前往付款</button>
                     </router-link>
                   <router-link v-else :to="{name:'good',params:{goodId:item.goodsList[0].id}}">
                     <button class="buyonce"  v-if="item.orderStatusText=='待收货'||item.orderStatusText=='租用中'||
                    item.orderStatusText=='待结算'|| item.orderStatusText=='已完成'||item.orderStatusText=='已取消'||item.orderStatusText=='已取消(系统)'">再次购买</button>
                   </router-link>
                     <router-link :to="{name:'return',params:{orderId:item.id}}">
                     <button v-if="item.orderStatusText=='租用中'||item.orderStatusText=='待结算'||item.orderStatusText=='已逾期'" class="return">归还</button>
                     </router-link >
                     <router-link :to="{name:'comment',params:{goodId:item.goodsList[0].orderGoodsId}}">
                      <button class="comment" v-if="item.orderStatusText=='已完成'">评论</button>
                     </router-link >
                     <button class="delete" v-if="item.orderStatusText=='已完成'||item.orderStatusText=='已取消(系统)'||item.orderStatusText=='已取消'" @click="del(i)">删除</button>
                     <button class="cancel" v-if="item.orderStatusText=='待付款'"  @click="onCancel(i)">取消</button>
                      <button class="confirmReceipt" v-if="item.orderStatusText=='待收货'"  @click="confirmReceiptA(i)">确认收货</button>
                     
               <!-- <button class="pay">去支付</button> -->
             </div>
             </div>
             
    </div>
</div>
</van-list>
    </van-tab>
    <van-tab title="待付款">
<div :style="{background:'#F5F6FA'}" >
    <div class="bg-content" v-for="(item , i) in listsearch" :key="i" ref="waiforpay" >
         <div class="content" v-if="item.goodsList">
              <div class="store">
                  <router-link :to="{name:'dianpu' , params:{shopId:item.goodsList[0].shopId}}">
                    <img src="../assets/image/dianpu.png" alt="" class="store-img">
                    <span class="storename">{{item.goodsList[0].shopName}}</span>
                    <img src="../assets/image/more.png" alt="" class="more">
                  </router-link>
                     <span class="state">{{item.orderStatusText}}</span>
             </div>
             <div class="goods-desc">
                    <router-link  :to="{name:'good',params:{goodId:item.goodsList[0].id}}">
                      <img :src="item.goodsList[0].picUrl" alt="">
                    </router-link>
                    <router-link :to="{name:'dindan',params:{orderId:item.id}}">
                     <div class="goods-right">
                         <p class="goods-name">{{item.goodsList[0].goodsName}}</p>
                         <div class="goods-model">
                            <span >{{item.goodsList[0].specifications[0]}} </span>
                            <span v-if="item.goodsList[0].specifications.length>2">{{item.goodsList[0].specifications[1]}}</span>
                         </div>
                         <div>
                         <p class="goods-price" >
                           ￥<span :style="{'font-size':'0.18rem'}">{{item.actualPrice.toFixed(2)}}</span> 
                         </p>
                         <p class="goods-number">×{{item.goodsList[0].number}}</p>
                         </div>
                     </div>
                    </router-link>
             </div> 
             <div class="total">
                  <span class="total-number">共{{item.goodsList[0].number}}件</span>
                  <span class="xiaoji"> 小计：<span :style="{color:'#B3381D'}">￥</span>
                  <span :style="{color:'#B3381D','font-size':'0.17rem'}">{{(item.actualPrice*item.goodsList[0].number).toFixed(2)}}</span> </span>
             </div>
             <div class="operate" v-if="item.goodsList[0]">  
                      <router-link :to="{name: 'waitforpay',params:{orderId:item.id}}" >
                     <button  class="buyonce">前往付款</button>
                     </router-link>
                 
                     <button class="cancel"  @click="onCancel(i)">取消</button>
         
               <!-- <button class="pay">去支付</button> -->
             </div>
             </div>
             
    </div>
</div>
    </van-tab>
           
    <van-tab  title="待收货">
  <div :style="{background:'#F5F6FA'}">
    <div class="bg-content" v-for="(item , i) in listsearch" :key="i" ref="confirmReceipt">
         <div class="content" v-if="item.goodsList">
              <div class="store">
                  <router-link :to="{name:'dianpu' , params:{shopId:item.goodsList[0].shopId}}">
                    <img src="../assets/image/dianpu.png" alt="" class="store-img">
                    <span class="storename">{{item.goodsList[0].shopName}}</span>
                    <img src="../assets/image/more.png" alt="" class="more">
                  </router-link>
                     <span class="state">{{item.orderStatusText}}</span>
             </div>
             <div class="goods-desc">
                    <router-link  :to="{name:'good',params:{goodId:item.goodsList[0].id}}">
                      <img :src="item.goodsList[0].picUrl" alt="">
                    </router-link>
                    <router-link :to="{name:'dindan',params:{orderId:item.id}}">
                     <div class="goods-right">
                         <p class="goods-name">{{item.goodsList[0].goodsName}}</p>
                         <div class="goods-model">
                            <span >{{item.goodsList[0].specifications[0]}} </span>
                            <span v-if="item.goodsList[0].specifications.length>2">{{item.goodsList[0].specifications[1]}}</span>
                         </div>
                         <div>
                         <p class="goods-price" >
                           ￥<span :style="{'font-size':'0.18rem'}">{{item.actualPrice.toFixed(2)}}</span> 
                         </p>
                         <p class="goods-number">×{{item.goodsList[0].number}}</p>
                         </div>
                     </div>
                    </router-link>
             </div> 
             <div class="total">
                  <span class="total-number">共{{item.goodsList[0].number}}件</span>
                  <span class="xiaoji"> 小计：<span :style="{color:'#B3381D'}">￥</span>
                  <span :style="{color:'#B3381D','font-size':'0.17rem'}">{{(item.actualPrice*item.goodsList[0].number).toFixed(2)}}</span> </span>
             </div>
              <div class="operate">
                 <div>
                      <button class="confirmReceipt" @click="confirmReceipt(i)">确认收货</button>
                    
                </div>
              </div>
             </div>
             
    </div>
</div>
  </van-tab>

  
  <van-tab title="已完成">
       <div :style="{background:'#F5F6FA'}">
    <div class="bg-content" v-for="(item , i) in listsearch" :key="i" ref="complete">
         <div class="content" v-if="item.goodsList">
              <div class="store">
                  <router-link :to="{name:'dianpu' , params:{shopId:item.goodsList[0].shopId}}">
                    <img src="../assets/image/dianpu.png" alt="" class="store-img">
                    <span class="storename">{{item.goodsList[0].shopName}}</span>
                    <img src="../assets/image/more.png" alt="" class="more">
                  </router-link>
                     <span class="state">{{item.orderStatusText}}</span>
             </div>
             <div class="goods-desc">
                    <router-link  :to="{name:'good',params:{goodId:item.goodsList[0].id}}">
                      <img :src="item.goodsList[0].picUrl" alt="">
                    </router-link>
                    <router-link :to="{name:'dindan',params:{orderId:item.id}}">
                     <div class="goods-right">
                         <p class="goods-name">{{item.goodsList[0].goodsName}}</p>
                         <div class="goods-model">
                            <span >{{item.goodsList[0].specifications[0]}} </span>
                            <span v-if="item.goodsList[0].specifications.length>2">{{item.goodsList[0].specifications[1]}}</span>
                         </div>
                         <div>
                         <p class="goods-price" >
                           ￥<span :style="{'font-size':'0.18rem'}">{{item.actualPrice.toFixed(2)}}</span> 
                         </p>
                         <p class="goods-number">×{{item.goodsList[0].number}}</p>
                         </div>
                     </div>
                    </router-link>
             </div> 
             <div class="total">
                  <span class="total-number">共{{item.goodsList[0].number}}件</span>
                  <span class="xiaoji"> 小计：<span :style="{color:'#B3381D'}">￥</span>
                  <span :style="{color:'#B3381D','font-size':'0.17rem'}">{{(item.actualPrice*item.goodsList[0].number).toFixed(2)}}</span> </span>
             </div>
              <div class="operate">
                 <div>
                    <router-link :to="{name:'good',params:{goodId:item.goodsList[0].id}}">
                       <button class="buyonce">再次购买</button>
                     </router-link>
                    <router-link :to="{name:'comment',params:{goodId:item.goodsList[0].orderGoodsId}}">
                      <button class="comment" >评论</button>
                     </router-link >
                    <button class="delete" @click="onDel(i)">删除</button>


                </div>
              </div>
             </div>
             
    </div>
</div>
  </van-tab>
  

</van-tabs>
  
        
              
    </div>
</template>

<script>
import { Dialog } from 'vant';
import {mapState,mapMutations} from "vuex";
import Head from "@/components/Head.vue";
export default {
       
  data(){
        return{
            // activeOrder: 0,
            color:'黑色',
            listsearch: [],
            showType:0,
            loading: false,
            finished: false,
            count:0,
            showList:[],
        }
    },
    created(){

    },
     components: {
     Head,
    },
      methods: {
         ...mapMutations(['changeSearch','changeActiveOrder']),
           del(index){

               Dialog.confirm({
              message: '确认取消？'
              }).then(() => {
            this.$axios.post('order/delete',{
                  orderId:this.listsearch[index].id,
              }).then(res=>{
                this.$refs.content[index].remove();
              })
             }).catch(() => {

             });
              
          },
          onCancel(index){
              Dialog.confirm({
              message: '确认取消？'
              }).then(() => {
             this.$axios.post('order/cancel',{
                  orderId:this.listsearch[index].id,
              }).then(res=>{
                this.$refs.waiforpay[index].remove();
              })
             }).catch(() => {
 
             });
             
          },
          confirmReceiptA(index){
             Dialog.confirm({
              message: '确认取消？'
              }).then(() => {
             this.$axios.post('order/confirm',{
                  orderId:this.listsearch[index].id,
              }).then(res=>{
                 this.$refs.content[index].remove();
              })
             }).catch(() => {

             }); 
          },
          confirmReceipt(index){
             Dialog.confirm({
              message: '确认收货？'
              }).then(() => {
             this.$axios.post('order/confirm',{
                  orderId:this.listsearch[index].id,
              }).then(res=>{
                 this.$refs.confirmReceipt[index].remove();
              })
             }).catch(() => {
               
             });
              
          },
          onDel(index){
              Dialog.confirm({
              message: '确认取消？'
              }).then(() => {
             this.$axios.post('order/delete',{
                  orderId:this.listsearch[index].id,
                }).then(res=>{
                this.$refs.complete[index].remove();
                })
             }).catch(() => {

             });
                
          },
          searchText(value){
            this.listsearch=value;
          },
      onLoad() {
      // 异步更新数据
       this.showType=this.$route.params.active;
         this.$axios.post("/order/list",{
             showType:this.showType,
             page: this.count+1,
             limit:10,
             sort:"update_time",
             order:"desc",
         }).then(res=>{
             console.log(res)
             this.pages=res.data.data.pages;
             this.showList=this.showList.concat(res.data.data.list)
            //  this.allSearch=res.data.data.list.slice(0,2);
               this.count=this.count+1;
                // 加载状态结s
               this.loading = false;
               
                 // 数据全部加载完成
                if (this.count >= this.pages){
                     this.finished = true;
                   }
         });
         
    }
    },
    computed: {
         ...mapState(['searchShow','activeOrder']),

         activeOrder:{
             get(){
                return this.$route.params.active*1;
             },
             set(newval){
                //  if(newval==0){
                //      this.showType=0
                //  }
                // if(newval==1){
                //     console.log(1)
                // }
                //  console.log(newval)
                this.showType=newval;
                 this.$axios.post("/order/list",{
                        showType:this.showType,
                        page: 1,
                        limit:100,
                        sort:"update_time",
                        order:"desc",
                    }).then(res=>{
                        console.log(res)
                        this.listsearch=res.data.data.list;
                        //    console.log( this.listsearch[0].goodsList[0])
                    });
              
                 this.$store.commit("changeActiveOrder",newval);
             }
         }
         
    },
    mounted() {

        
        // console.log(this.activeOrder)
         this.changeSearch(true);
         this.changeActiveOrder(this.$route.params.active*1)
         this.showType=this.$route.params.active;
        //  this.$axios.post("/order/list",{
        //      showType:this.showType,
        //      page: 1,
        //      limit:100,
        //      sort:"update_time",
        //      order:"desc",
        //  }).then(res=>{
        //      console.log(res)
        //      this.listsearch=res.data.data.list;
        //        console.log( res.data.data.list[0].goodsList) 
        //  });
        
    },
}
</script>

<style  scoped>
.myorder{
    width: 100%;
    height: 100%;
    background: #F5F6FA;
}

.van-tabs {
  height: 0.55rem;
    background: white;
}
.van-tabs /deep/ .van-tabs__line {
    position: absolute;
    width: 0.2rem !important;
    bottom: 0.15rem;
    left: 0;
    z-index: 1;
    height: 0.03rem;
    background-color: #f44;
    border-radius: 0.03rem;
    background: -webkit-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: -o-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: -moz-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: linear-gradient(to left, #D50000, #FD9A28) !important;
}
 .van-tabs /deep/ .van-tab--active{
   color: #007BFF;
}
.van-tabs /deep/ .van-tabs__wrap{
   margin-left: 0;
   width: 100%;
}
.bg-content{
       width: 100%;
       background: white;
       margin-top: 0.12rem;
       border-radius: 0.2rem;
       overflow: hidden;
       margin-top: 0.2rem;
   }
   .content{
       width: 3.43rem;
       height: auto;
       margin: auto;
       overflow: hidden;
   }
   .content .goods-desc{
       width: 100%;
       margin-top: 0.24rem;
   }
   .content .goods-desc::after{
              content:" ";
              display:block;
              clear:both;
              height:0; 
              overflow:hidden; visibility:hidden; 
   }
   .content .goods-desc img{
       width: 0.8rem;
       height: 1rem;
       position: absolute;
   }
   .content .goods-desc .goods-right{
       width: 2.51rem;
       /* height: 0.9rem; */
       float: right;
       margin-left: 0.13rem;
   }
   .content .goods-desc .goods-name{
       font-size: 0.14rem;
       font-weight: bold;
       line-height: 0.23rem;
       margin-top: -0.04rem;
       color: black;
   }
   .content .goods-desc .goods-model span{
       font-size: 0.12rem;
       color: #C7C7C7;
       margin-left: 0.3rem;
   }
   .content .goods-desc .goods-model span:first-child{
          margin-left: 0;
   }
    .content .goods-desc .goods-right .goods-price{
        font-size: 0.13rem;
        font-weight: bold;
        color: #B3381D;
        margin-top: 0.06rem;
        float: left;
    }
     .content .goods-desc .goods-right .goods-number{
            float: right;
            margin-top: 0.14rem;
            color: #C7C7C7;
            font-size: 0.12rem;
     }
    .content .store{
        height: 0.2rem;
        margin-top: 0.2rem;  
    }
    .content .store .store-img{
            width: 0.15rem;
            height: 0.15rem;
            float: left; 
            margin-top: 0.02rem;
        }
    .content .store .storename{
            float: left;
            font-size: 0.13rem;
            margin-left: 0.1rem;
            color: black;
        }
    .content .store .more{
           float: left;
           width: 0.075rem;
           height: 0.12rem;
           margin-left: 0.08rem;
           margin-top: 0.05rem;
         }
    .content .store .state{
        float: right;
        font-size: 0.13rem;
        color: #EB5516;
    }
    .total{
        margin-top:  0.1rem;
    }
    .total .total-number{
        margin-left: 45%;
        color: #C7C7C7;
        font-size: 0.12rem;
    }
    .total .xiaoji{
        margin-left: 0.1rem;
        font-size: 0.13rem;
        font-weight: bold;
        float: right;
    }
     .content .operate{
         margin-top: 0.25rem;
         height: 0.26rem;
         margin-bottom: 0.6rem;
     }
     
    .content .operate button{
        box-sizing: border-box;
        outline: none;
        border: 1px solid grey;
        background: white;
        color: #5E6165;
        height: 0.26rem;
        line-height: 0.22rem;
        font-size: 0.13rem;
        border-radius: 0.13rem;
        padding-left: 0.1rem;
        padding-right: 0.1rem;
        margin-left: 0.1rem;
        float: right;
    }
   .content .operate .delete{
       /* float: left; */
       /* margin-left: 1rem; */
   } 
  .content .operate .comment{
     /* float: left; */
     /* margin-left: 0.1rem; */
 }
 .content .operate .buyonce{
    /* float: right; */
 }
 .content .operate .pay{
     float: right;
     color:  #007BFF;
     border: 1px solid  #007BFF;

 }

</style>