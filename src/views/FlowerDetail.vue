<template>
  <div class="flowerdetail">
    <div class="bg-detail">
      <Head style="background: transparent !important"></Head>
      <div class="banner">
        <van-swipe indicator-color="white">
          <van-swipe-item><img src="../assets/image/flowerdetail_banner1.png" alt="" class="bannerImg"> </van-swipe-item>
          <van-swipe-item><img src="../assets/image/flowerdetail_banner2.png" alt="" class="bannerImg"> </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div style="width:100%; height:1px"></div>
    <div class="detail_content">
      <!-- 第一个盒子 -->
      <div class="pricebox">
        <div class="title">留住好时光·粉绣球6枝，粉玫瑰8枝，白桔梗8枝</div>
        <div class="positiontxt">
          <div class="left">精选昆明A级花材</div>
          <div class="right">已售8556件</div>
        </div>
        <div class="price">
          <div class="left">
            <span class="redprice">¥199</span>
            <span class="garyprice">¥199</span>
          </div>
          <div class="right">
            <van-stepper disable-input v-model="num" />
          </div>
        </div>
        <div class="countbox">
          <div>2019年母亲节销量
            <span>NO.1</span>
          </div>
          <div>2019年父亲节销量
            <span>1万+</span>
          </div>
        </div>
      </div>
      <!-- 第二个盒子 花语 -->
      <div class="flower">
        <div class="item">
          <div class="left">花语</div>
          <div class="right">让每点阳光，洒于你脸庞；令你的微笑，比花更盛放！</div>
        </div>
        <div class="item">
          <div class="left">材料</div>
          <div class="right">粉绣球6枝，粉玫瑰8枝，白桔梗8枝</div>
        </div>
        <div class="item">
          <div class="left">配送</div>
          <div class="right">全国</div>
        </div>
        <div class="item">
          <div class="left">附送</div>
          <div class="right">下单填写留言，即免费赠送精美贺卡！</div>
        </div>
      </div>
      <!-- 第三个盒子 配送至 -->
      <div class="place">
        <div class="item">
          <div class="left">配送至</div>
          <div class="right">
            <img src="../assets/image/flowerdetail_position.png" alt="">
            <div class="positiondetail">
              <span>湖北省</span>
              <span>武汉市</span>
              <span>江汉区</span>
            </div>
            <div class="point">…</div>
          </div>
        </div>
        <div class="choose">现在下单，最快今晚送达（日期/时段可选）</div>
      </div>
      <!-- 第四个盒子 评价 -->
      <div class="commit">
        <div class="title">
          <div class="left">
            <div class="committxt">评价</div>
            <div class="count">
              <span>500万+</span>
            </div>
          </div>
          <div class="right">
            <span>查看全部</span>
            <img src="../assets/image/flowerdetail_rightarrow.png" alt="">
          </div>
        </div>
        <div class="choosebox">
          <div class="item">全部</div>
          <div class="item">好评</div>
          <div class="item">包装好看</div>
        </div>
        <div class="usercommit">
          <div class="namebox">
            <!-- <img src="" alt=""> -->
            <div class="img"></div>
            <span class="uname">不雨亦潇潇</span>
          </div>
        </div>
        <div class="descbox">
            真机很漂亮，体验很好，之前有看评论说11发烫的情况，用了几天，一开在用着挺好的，待机感觉跟xr差不...
        </div>
        <div class="imgbox">
          <div class="imgitem">
              <img src="../assets/image/flowerdetail_img1.png" alt="">
          </div>
          <div class="imgitem">
              <img src="../assets/image/flowerdetail_img2.png" alt="">
          </div>
          <div class="imgitem">
              <img src="../assets/image/flowerdetail_img3.png" alt="">
          </div>
          <div class="imgitem">
              <img src="../assets/image/flowerdetail_img1.png" alt="">
          </div>
        </div>
        <div class="flowertype">99朵红玫瑰</div>
      </div>
      <!-- 第五个盒子 商品详情 -->
      <div class="productdetail">
        <div class="title">商品详情</div>
        <div class="imgitem">
          <img src="../assets/image/flwoerdetail_detail1.png" alt="">
          <div class="imgdesc">
            <div class="title">留住好时光</div>
            <div class="other">
              <div>让每点阳光，洒于你脸庞</div>
              <div>令你的微笑，比花更盛放</div>
            </div>
          </div>
        </div>
        <div class="imgitem">
          <img src="../assets/image/flwoerdetail_detail2.png" alt="">
          <div class="imgdesc">
            <!-- <div class="title">留住好时光</div> -->
            <div class="other">
              <div>粉绣球，粉雪山，粉桔梗等粉色花材</div>
              <div>唯爱注入鲜活感，温馨而浪漫</div>
              <div>是让人惊艳且温暖的来自自然的馈赠</div>                            
            </div>
          </div>
        </div>
        <div class="imgitem">
          <img src="../assets/image/flwoerdetail_detail3.png" alt="">
        </div>
      </div>
    </div>

    <!-- <div style="height: 0.5rem; width: 100%; background: transparent;"></div> -->
    <div class="fixedbox">
      <div class="fixedcontent">
        <div class="icons">
          <div class="iconitem">
            <img src="../assets/image/flowerdetail_shop.png" alt="">
            <span>店铺</span>
          </div>
          <div class="iconitem">
            <img src="../assets/image/flowerdetail_msg.png" alt="">
            <span>客服</span>
          </div>
          <div class="iconitem">
            <img src="../assets/image/flowerdetail_star.png" alt="">
            <span>收藏</span>
          </div>
        </div>
        <div class="btn">
          <button @click="toorder">立即购买</button>
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
      num: 1,
    }
  },
  methods: {
    ...mapMutations(['changeSearch']),
    toorder(){
      this.$router.push('/flowerorder')
    },
  },
  components: {
    Head,
  },
  computed: {
    ...mapState(['searchShow']),
  },
  mounted() {
    this.changeSearch(false);
  },
}
</script>
<style>
.flowerdetail{
  position: relative;
}
.flowerdetail .head{
  position: absolute;
  background: transparent;
  z-index: 10;
}
.flowerdetail .head .van-search{
  background: transparent !important;
}
.flowerdetail .banner{
  /* margin-top: 0.2rem; */
  z-index: 10!important;
  overflow: hidden;
}
.van-swipe__indicators {    /*vant样式*/
  position: absoulte;
  bottom: 30px!important;
  left: 50%;
}
.flowerdetail .banner img{
  width: 100%;
  overflow: hidden;
}
/* 内容 */
.flowerdetail .detail_content{
  width: 100%;
  background: #F5F6FA;
  padding: 0.02rem 0.16rem;
  box-sizing: border-box;
  position: relative;
}
.flowerdetail .detail_content .pricebox{
  width: 3.43rem;
  background: #fff;
  border-radius: 0.2rem;
  margin-top: -0.16rem;
  /* z-index: 99999; */
  /* position: absolute; */
  box-sizing: border-box;
  padding: 0.16rem 0.14rem 0.14rem;
  background: #fff;
}
.detail_content .pricebox .title{
  font-size: 0.15rem;
}
.detail_content .pricebox .positiontxt{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #FF9600;
  font-size: 0.13rem;
  margin-top: 0.1rem;
}
.detail_content .pricebox .positiontxt .right{
  color: #C8C8C8;
  font-size: 0.11rem;
}
.detail_content .pricebox .price{
  display: flex;
  justify-content: space-between;
  margin: 0.15rem 0 0.2rem;
}
.detail_content .pricebox .price .redprice{
  color: #D03515;
  font-size: 0.36rem;
  margin-right: 0.2rem;
}
.detail_content .pricebox .price .garyprice{
  color: #999999;
  font-size: 0.15rem;
  text-decoration: line-through;
}
.detail_content .pricebox .price .right{
  display: flex;
  align-items: center;
}
.detail_content .pricebox .price .right .van-stepper{
  margin-top: 0.08rem;
}
.van-stepper__input[disabled] {
  color: #666666 !important;
}
.detail_content .pricebox .countbox{
  width: 100%;
  height: 0.525rem;
  background: url('../assets/image/flowerdetail_garybg.png');
  background-size: 100%;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.detail_content .pricebox .countbox>div{
  font-size: 0.12rem;
}
.detail_content .pricebox .countbox span{
  color: #FF9600;
  margin-left: 0.05rem;
  font-size: 0.14rem;
  font-weight: bold;
  font-style: italic;
}
/* 花语 盒子 */
.detail_content .flower{
  margin-top: 0.2rem;
  width: 3.43rem;
  background: #fff;
  border-radius: 0.2rem;
}
.detail_content .flower .item{
  display: flex;
}
.detail_content .flower .item .left{
  width: 15%;
  color: #2B2C2D;
  text-align: center;
  font-size: 0.13rem;
  font-weight: bold;
  border-bottom: 0;
  line-height: 0.58rem;
}
.detail_content .flower .item .right{
  color: #2B2C2D;
  width: 80%;
  font-size: 0.12rem;
  padding: 0.2rem 0;
  border-bottom: 1px solid #EFEFEF;
}
/* 配送至 */
.detail_content .place{
  margin-top: 0.15rem;
  width: 3.43rem;
  background: #fff;
  border-radius: 0.2rem;
  padding-bottom: 0.15rem;
}
.detail_content .place .item{
  display: flex;
  padding-top: 0.16rem;
}
.detail_content .place .item .left{
  width: 20%;
  line-height: 0.2rem;
  text-align: center;
  color: #2B2C2D;
  font-size: 0.13rem;
  font-weight: bold;
}
.detail_content .place .item .right{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.detail_content .place .item .right img{
  width: 0.1rem;
  height: 0.13rem;
}
.detail_content .place .item .right span{
  color: #2B2C2D;
  font-size: 0.12rem;
  margin-left: 0.12rem;
}
.detail_content .place .item .right .point{
  line-height: 0.2rem;
  color: #999;
}
.detail_content .place .item .right .positiondetail{
  width: 2.2rem;
}
.detail_content .place .choose{
  color: #FF9600;
  font-size: 0.11rem;
  margin-left: 20%;
  margin-top: 0.1rem;
}
/* 评价 */
.detail_content .commit{
  margin-top: 0.15rem;
  width: 3.43rem;
  background: #fff;
  border-radius: 0.2rem;
  padding: 0.16rem;
  box-sizing: border-box;
  /* padding-bottom: 0.15rem; */
}
.detail_content .commit .title{
  display: flex;
  justify-content: space-between;
  border-left: 0.03rem solid #FF6E00;
  font-size: 0.13rem;
}
.detail_content .commit .title img{
  width: 0.075rem;
  height: 0.12rem;
  margin-top: 0.01rem;
}
.detail_content .commit .title .left{
  display: flex;
}
.detail_content .commit .title .right{
  display: flex;
}
.detail_content .commit .committxt{
  color: #FF5503;
  font-weight: bold;
  margin-left: 0.1rem;
  font-size: 0.13rem;
}
.detail_content .commit .count{
  font-size: 0.1rem;
  color: #5C6165;
  line-height: 0.1rem;
  display: flex;
  align-items: center;
  margin-left: 0.1rem;
}
/* .detail_content .commit .count span{
  margin-top: 0.05rem;
} */
.detail_content .commit .right{
  display: flex;
  align-items: center;
}
.detail_content .commit .right>span{
  color: #FF5503;
  font-size: 0.1rem;
  margin-right: 0.05rem;
}
.detail_content .commit .choosebox{
  display: flex;
  padding: 0.2rem 0;
}
.detail_content .commit .choosebox .item{
  font-size: 0.1rem;
  color: #5C6165;
  padding: 0.04rem 0.2rem;
  background: #F6F7FA;
  margin-right: 0.20rem;
  border-radius: 0.2rem;
}

.detail_content .commit .usercommit .namebox{
  display: flex;
  align-items: center;
}
.detail_content .commit .usercommit .namebox .img{
  width: 0.24rem;
  height: 0.24rem;
  background: #cf0;
  border-radius: 50%;
}
.detail_content .commit .usercommit .namebox img{
  width: 0.24rem;
  height: 0.24rem;
}
.detail_content .commit .usercommit .namebox .uname{
  font-size: 0.12rem;
  color: #5E6165;
  margin-left: 0.08rem;
}
.detail_content .commit .descbox{
  margin: 0.16rem 0;
  color: #666;
  font-size: 0.12rem;
}
.detail_content .commit .imgbox{
  display: flex;
  flex-wrap: wrap;
  height: 1rem;
  overflow: hidden;
}
.detail_content .commit .imgbox .imgitem{
  width: 33%;
}
.detail_content .commit .imgbox img{
  width: 0.83rem;
  margin-bottom: 0.2rem;
}
.detail_content .commit .flowertype{
  color: #C8C8C8;
  font-size: 0.1rem;
}
/* 商品详情 */
.detail_content .productdetail{
  margin-top: 0.15rem;
  width: 3.43rem;
  background: #fff;
  border-radius: 0.2rem;
  padding: 0.16rem 0;
}
.detail_content .productdetail>.title{
  margin-left: 0.16rem;
  font-size: 0.13rem;
  color: #FF5503;
  font-weight: bold;
  border-left: 0.03rem solid #FF6E00;
  padding-left: 0.05rem;
}
.detail_content .productdetail .imgitem img{
  width: 100%;
  margin: 0.2rem 0;
}
.detail_content .productdetail .imgdesc{
  text-align: center;
  box-sizing: border-box;
  color: #333333;
  font-size: 0.13rem;
}
.detail_content .productdetail .imgdesc .title{
  font-weight: bold;
}
.detail_content .productdetail .imgdesc .other div{
  letter-spacing: 0.04rem;
  margin-top: 0.05rem;
}




/* 底部固定 */
.flowerdetail .fixedbox{
  position: fixed;
  width: 100%;
  padding: 0 0.16rem;
  box-sizing: border-box;
  height: 0.5rem;
  background: transparent;
  bottom: 0.1rem;
}
.flowerdetail .fixedbox .fixedcontent{
  width: 100%;
  height: 0.5rem;
  display: flex;
  border-radius: 0.5rem;
  background: #fff;
}
.flowerdetail .fixedbox .icons{
  width: 55%;
  display: flex;
}
.flowerdetail .fixedbox .btn{
  width: 45%;
}
.flowerdetail .fixedbox .iconitem{
  width: 33%;
  height: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.flowerdetail .fixedbox .iconitem img{
  width: 0.2rem;
  height: 0.2rem;
}
.flowerdetail .fixedbox .iconitem span{
  color: #5C6165;
  font-size: 0.1rem;
}
.flowerdetail .fixedbox button{
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
</style>