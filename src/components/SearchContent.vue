<template>
  <div >
       <Head :type="'goodslist'" @searchText='searchText' @changeKeyWords='changeKeyWords'></Head>
       <van-tabs v-model="active">
  <van-tab title="价格">
    
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
          <router-link :to="{name:'dianpu',params:{shopId:item.shopId}}">
          <p class="toshop">进店</p>
          </router-link>
          <img src="../assets/image/more.png" alt="" class="more">

        </li>
        
      </ul>
    </div> 
    </van-tab>
  <van-tab title="销量 " > 
     <div class="price">
        <ul class="glist">
           <li class="glist-item" v-for="(item , i) in listxiaoliang" :key="i">
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
            <router-link :to="{name:'dianpu',params:{shopId:item.shopId}}">
             <p class="toshop">进店</p>
           </router-link>
          <img src="../assets/image/more.png" alt="" class="more">

        </li>
       
      </ul>
    </div> 
    </van-tab>
  
  
 
</van-tabs>
<img src="../assets/image/retail_price.png" class="retail_price" alt="" @click="orderByPrice">
<div class="xiaoliang" @click="orderByNumber"></div>

  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex";
import Head from "@/components/Head.vue";
export default {
  data(){
    return{
    //  value:'',
     sort:"",
     order:"",
     drawer: false,
     direction: 'rtl',
     active:0,
     lowerprice:"",
     highprice:"",
     goodsList:[],
     listxiaoliang:[],
     listselect:[],
     keyWords:this.$route.params.keyWords,
    }
  },
  components:{
       Head,
  },
    computed:{
        
      ...mapState(['searchShow','value']),
      value:{
          get(){
             return this.value;
          },
          set(newval){
          this.changeValue(newval)
              console.log(this.value)
          }
      }
    },
  methods: {
     ...mapMutations(['changeValue','changeSearch']),
     orderByPrice(){
      this.sort="retail_price";
      this.active=0; 
         this.$axios.get("/goods/listGoods",{params:{
            keyword:this.keyWords,
            sort:this.sort,
          }}).then(res=>{
            console.log(res);
            this.goodsList=res.data.data.list;
            console.log(this.goodsList);
          })
    },
    orderByNumber(){
      this.active=1;
      this.sort="number";
      this.order="desc";

        this.$axios.get("/goods/listGoods",{params:{
             keyword:this.keyWords,
             sort:'number',
            }}).then(res=>{
              console.log(res);
              this.listxiaoliang=res.data.data.list;
              console.log(this.goodsList);
            })
        },
      searchText(childValue){
       this.goodsList=childValue;
       console.log(this.goodsList)
       },
       changeKeyWords(text){
        this.keyWords=text;
       },
   
  },

  mounted() {
    this.changeSearch(true);

       this.$axios.get("/goods/listGoods",{params:{
                 keyword:this.$route.params.keyWords,
            }}).then(res=>{
                    console.log(res.data.data.list);
                    this.goodsList=res.data.data.list;
                    console.log(this.goodsList);
                })
    console.log(this.$route.params.keyWord)
     
  },
}
</script>

<style  scoped>
.retail_price{
  position: absolute;
  width: 0.1rem;
  height: 0.08rem;
  top: 0.93rem;
  left: 1.25rem;
}
.xiaoliang{
  position: absolute;
  box-sizing: border-box;
  width: 1.70rem;
  height: 0.44rem;
  opacity: 0;
  top: 0.76rem;
  left: 1.90rem;
}
.bolting{
  position: absolute;
  width: 1.15rem;
  height: 0.44rem;
  opacity: 0;
  top: 0.75rem;
  left: 2.5rem;
}
.searchInput{
  width: 3.02rem;
  height: 0.32rem;
  border: none;
  outline: none;
  background:#F5F6FA;
  border-radius: 0.16rem;
  margin-left: 0.38rem;
  margin-top: 0.1rem;
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
    background: -webkit-linear-gradient(to left, #3FE699, #007BFF) !important;
    background: -o-linear-gradient(to left, #3FE699, #007BFF) !important;
    background: -moz-linear-gradient(to left, #3FE699, #007BFF) !important;
    background: linear-gradient(to left, #3FE699, #007BFF) !important;
}
.van-tabs /deep/ .van-tabs__wrap{
   margin-left: 0;
   width: 100%;
}
  .price{
    width: 100%;
    background: #F5F6FA;
    border-radius: 0.2rem;
    margin-top: 0.15rem;
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
 .el-dialog__wrapper /deep/.el-drawer{
   width: 3.05rem !important;
   height: 93%;
   top: 7%;
   border-radius: 0.2rem 0 0 0.2rem;
 }
 .alert-content{
   width: 2.7rem;
   height: 100%;
   margin-top: 0.24rem;
   margin: auto;
 }
 .alert-content .strong-t{
   font-size: 0.13rem;
   font-weight: bold;
   font-family: "PingFangSC-Semibold";
 }
 .normal-c{
   margin-left: 0.05rem;
    font-size: 0.13rem;
    color: grey;
 }
 .between-price{
  margin-top: 0.15rem;
 }  
.l-price{
   float: left;
   width: 1.2rem;
   height: 0.31rem;
   border-radius: 0.155rem;
   text-align: center;
   line-height: 0.31rem;
   background-color: #F5F6FA;
   border: none;
   outline: none;
 }
 .crossing{
      width: 0.15rem;
      height: 0.02rem;
      float: left;
      background-color: #000000;
      margin-top: 0.145rem;
      margin-left: 0.07rem; 
      /* margin-right: 0.07rem; */ 
 }
 .m-price{
  float: left;
   width: 1.2rem;
   height: 0.31rem;
   border-radius: 0.155rem;
   text-align: center;
   line-height: 0.31rem;
   background-color: #F5F6FA;
   margin-left: 0.07rem;
   border: 0;
   outline: 0;
 }
 .zujin{
   height: 0.6rem;
   width: 2.7rem;
 }
 .sendfrom{
   margin-top: 0.48rem;
   height: 0.6rem;
   width: 2.7rem;
 }
 .makesure{
   width: 2.7rem;
   height: 0.38rem;
   margin-top: 60%;
 }
 .makesure .reset{
   border: none;
   width: 1.2rem;
   height: 0.38rem;
   border-radius: 0.19rem;
 }
 .makesure .sure{
   border: none;
   margin-left: 0.3rem;
    width: 1.2rem;
    height: 0.38rem;
    border-radius: 0.19rem;
    background: -webkit-linear-gradient(to left, #D50000,#FD9A28) !important;
    background: -o-linear-gradient(to left, #D50000,#FD9A28) !important;
    background: -moz-linear-gradient(to left, #D50000,#FD9A28) !important;
    background: linear-gradient(to left, #D50000,#FD9A28) !important;
 }
 .days{
   margin-top: 0.48rem;
   height: 0.6rem;
   width: 2.7rem;
 }
 .small-day, .middle-day, .large-day{
   width:0.78rem;
   height: 0.31rem;
   line-height: 0.31rem;
   background-color: #F5F6FA;
   float: left;
   margin-left: 0.15rem;
   text-align: center;
   border-radius: 1.55rem;
 }
 .small-day{
    margin-left: 0;
 }
</style>
