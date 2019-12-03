<template>
  <div class="flowershop">
    <div class="bg_white">
      <div class="bg_head">
          <div class="cloak">
            <div class="shopinfo">
              <div class="shopname">
                <div class="left">唯爱鲜花店LoveForever</div>
                <div @click="follow" class="right">
                  <img v-if="isfollow" src="../assets/image/flowershop_star1.png" alt="">
                  <span>{{isfollow?'关注':'已关注'}}</span>
                </div>
              </div>
              <div class="fans">
                <span>综合评分</span>
                <van-rate v-model="starvalue" allow-half size="9px" gutter="1px" void-icon="star" color="#F74397" void-color="#ffffff" readonly />
                <span>粉丝数247万</span>
              </div>
            </div>
            <div @click="choosetype" class="searchbox">
              <img src="../assets/image/flowershop_search1.png" alt="">
              <span :class="curtype==1?'active':''" data-i="1">送恋人</span>
              <span :class="curtype==2?'active':''" data-i="2">送家人</span>
              <span :class="curtype==3?'active':''" data-i="3">送盆友</span>
              <span :class="curtype==4?'active':''" data-i="4">新品</span>
            </div>
            <div class="btnbox">
              <div @click="choosebtn(1)" :class="curbtn==1?'active':''" class="btn">
                <span>销量</span>
                <img v-if="curbtn==1&&countdirection" src="../assets/image/flowershoparrow_active.png" alt="">
                <img v-else-if="curbtn==1" src="../assets/image/flowershoparrow_active2.png" alt="">
                <img v-else src="../assets/image/flowershoparrow.png" alt="">
              </div>
              <div @click="choosebtn(2)" :class="curbtn==2?'active':''" class="btn">
                <span>价格</span>
                <img v-if="curbtn==2&&pricedirection" src="../assets/image/flowershoparrow_active.png" alt="">
                <img v-else-if="curbtn==2" src="../assets/image/flowershoparrow_active2.png" alt="">
                <img v-else src="../assets/image/flowershoparrow.png" alt="">
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="listbox">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="loadMore">
        <div @click="todetail" class="item" v-for="(i,index) of productlist" :key="index">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574853245680&di=949bd992be839d193ff79ad077deca6e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F7d6ca391ee95feb1f4a3cd33417a75ba371491db60f4-PJPtqm_fw658" alt="">
          <div class="content">
            <div class="title">{{i.title}}</div>
            <div class="sense">{{i.sense}}</div>
            <div class="pricebox">
              <div class="left"><span>¥</span>{{i.price}}</div>
              <div class="right">2.4万人付款</div>
            </div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      starvalue: 5,
      curbtn: 1,
      curtype: 1,
      countdirection:true,
      pricedirection:true,
      loading: false,
      finished: false,
      isfollow: false,
      productlist:[
        {img:'../assets/image/flowershop_img1.png',title:'留住好时光·粉玫瑰康乃馨 10枝，白色桔梗8枝',sense:'为父母买一束花·母亲节',price:188},
        {img:'../assets/image/flowershop_img1.png',title:'留住好时光·粉玫瑰康乃馨 10枝，白色桔梗8枝',sense:'为父母买一束花·母亲节',price:183},
        {img:'../assets/image/flowershop_img1.png',title:'留住好时光·粉玫瑰康乃馨 10枝，白色桔梗8枝',sense:'为父母买一束花·母亲节',price:185},
        {img:'../assets/image/flowershop_img1.png',title:'留住好时光·粉玫瑰康乃馨 10枝，白色桔梗8枝',sense:'为父母买一束花·母亲节',price:187},
      ]
    }
  },
  methods: {
    getInfos(){
      // http://192.168.0.16:8080/wx/shop/listSort?id=2&sort=retail_price&order=asc
      this.$axios.get('http://192.168.0.16:8080/wx/shop/listSort?',{params:{
        id:2,
        sort: 'retail_price',
        order: 'asc'
      }}).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },
    todetail(){
      this.$router.push('/flowerdetail')
    },
    choosebtn(i){
      if(this.curbtn == i){
        // console.log('未改变')
        if(this.curbtn == 1){
        this.countdirection = !this.countdirection
        }else{
          this.pricedirection = !this.pricedirection
        }
      }else{
        // console.log('改变了')
        this.curbtn = i;
      }
    },
    choosetype(e){
      if(e.target.nodeName == "SPAN"){
        this.curtype = e.target.dataset.i
      }
    },
    follow(){
      if(this.isfollow){
        this.$toast({
          message: '关注成功',
          forbidClick: true,
          position: 'bottom'
        });
      }else{
        this.$toast({
          message: '取消关注',
          forbidClick: true,
          position: 'bottom',
        });
      }
      this.isfollow = !this.isfollow
    },
    loadMore() {
      // 异步更新数据
      var list = this.productlist
      var item = {img:'../assets/image/flowershop_img1.png',title:'留住好时光·粉玫瑰康乃馨 10枝，白色桔梗8枝',sense:'为父母买一束花·母亲节',price:187};
      setTimeout(() => {
        list.push(item)
        list.push(item)
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (list.length >= 10) {
          this.finished = true;
        }
      }, 3000);
    }
  },
  mounted() {
    this.getInfos()
  },
}
</script>
<style>
.flowershop  .bg_white{
  width: 100%;
  background: #ffffff;
  position: fixed;
  top: 0;
}
.flowershop .bg_head{
  width: 100%;
  height: 1.8rem;
  background: url('../assets/image/flowershop_bg.png');
  background-size: 100%;
  z-index: 1;
}
.flowershop .cloak{
  width: 100%;
  height: 1.8rem;
  z-index: 2;
  background: -webkit-linear-gradient(to bottom, rgba(255, 255, 255, 0),rgba(255, 255, 255, 1)) !important;
  background: -o-linear-gradient(to bottom, rgba(255, 255, 255, 0),rgba(255, 255, 255, 1)) !important;
  background: -moz-linear-gradient(to bottom, rgba(255, 255, 255, 0),rgba(255, 255, 255, 1)) !important;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0),rgba(255, 255, 255, 1)) !important;
}
/* 店铺名字 */
.flowershop .shopinfo{
  padding: 0.4rem 0.16rem 0;
}
.flowershop .shopname{
  display: flex;
  justify-content: space-between;
  height: 0.3rem;
}
.flowershop .shopname .left{
  color: #333333;
  font-size: 0.17rem;
  font-weight: 600;
}
.flowershop .shopname .right{
  width: 0.62rem;
  height: 0.24rem;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 0.5px solid #CDCDCD;
  color: #666666;
  font-size: 0.12rem;
  border-radius: 0.12rem;
}
.flowershop .shopname .right img{
  width: 0.14rem;
  height: 0.14rem;
  margin-right: 0.04rem;
}
.flowershop .fans{
  color: #666666;
  font-size: 0.1rem;
  display: flex;
}
.flowershop .van-rate{
  display: flex;
  align-items: center;
  margin: 0 0.2rem 0 0.1rem;
}
/* 搜索专区 */
.flowershop .searchbox{
  display: flex;
  align-items: center;
  padding: 0 0.16rem;
  margin: 0.15rem 0;
  color: #333333;
  font-size: 0.14rem;
}
.flowershop .searchbox span{
  margin-left: 0.2rem;
}
.flowershop .searchbox .active{
  font-size: 0.18rem ;
  font-weight: 600;
}
.flowershop .searchbox img{
  width: 0.2rem;
  height: 0.2rem;
}
/* 三个按钮 */
.flowershop .btnbox{
  display: flex;
  /* margin-top: 0.4rem; */
  padding: 0 0.16rem;
}
.flowershop .btnbox .btn{
  width: 0.75rem;
  height: 0.31rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999999;
  font-size: 0.13rem;
  margin-right: 0.15rem;
  border-radius: 0.15rem;
}
.flowershop .btnbox .btn img{
  width: 0.07rem;
  height: 0.04rem;
  margin-left: 0.05rem;
}
.flowershop .btnbox .active{
  background: #FF9900;
  font-weight: 600; 
  color: #ffffff;
}
/* 商品列表 */
.flowershop .listbox{
  padding: 0 0.16rem;
  margin-top: 1.8rem;
  background: -webkit-linear-gradient(to bottom, rgba(245, 246, 250, 0.3),rgba(245, 246, 250, 1)) !important;
  background: -o-linear-gradient(to bottom, rgba(245, 246, 250, 0.3),rgba(245, 246, 250, 1)) !important;
  background: -moz-linear-gradient(to bottom, rgba(245, 246, 250, 0.3),rgba(245, 246, 250, 1)) !important;
  background: linear-gradient(to bottom, rgba(245, 246, 250, 0.3),rgba(245, 246, 250, 1)) !important;
}
.flowershop .listbox .van-list{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.flowershop .listbox .van-list .van-list__finished-text{
  width: 100%;
}
.flowershop .listbox .van-list .van-list__loading{
  width: 100%;
}
.flowershop .listbox .item{
  width: 48%;
  background: #ffffff;
  border-radius: 0.1rem 0.16rem 0.16rem 0.16rem;
  margin-bottom: 0.1rem;
}
.flowershop .listbox .item img{
  width: 1.68rem;
  height: 1.73rem;
}
.flowershop .listbox .item .content{
  padding: 0.06rem;
  font-size: 0.1rem;
}
.flowershop .listbox .item .content .title{
  font-size: 0.135rem;
  line-height: 0.18rem;
  color: #2B2C2D;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.flowershop .listbox .item .content .sense{
  color: #FF9600;
  padding: 0.08rem 0;
}
.flowershop .listbox .item .content .pricebox{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #C7C7C7;
}
.flowershop .listbox .item .content .pricebox .left{
  color: #D03515;
  font-size: 0.18rem;
}
.flowershop .listbox .item .content .pricebox .left span{
  font-size: 0.12rem;
}
</style>