<template>
  <div class="chooseposition">
    <div class="fixedhead">
      <div class="head">
        <div @click="gobackempty" class="left">
          <img src="../assets/image/flowershoplist_close.png" alt="">
        </div>
        <div class="right">
          <div class="inputbox">
            <img src="../assets/image/flowershoplist_search.png" alt="">
            <input type="text" placeholder="请输入搜索内容">
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="hotcity">
        <div class="title">热门城市</div>
        <div class="content">
          <div @click="choosecity(item)" v-for="(item, index) of hotcity" :key="index" class="item">{{item}}</div>
        </div>
      </div>
      <div class="cityhistory">
        <div class="title">定位/最近访问</div>
        <div :class="history.length<=4?' less':''" class="content">
          <div @click="choosecity(item)" v-for="(item, index) of history" :key="index"  class="item">{{item}}</div>
        </div>
      </div>
      <van-index-bar highlight-color="#F74296" :index-list="list" :sticky="false">
        <div class="" v-for="(i,index) of citylist" :key="index">
          <van-index-anchor :index="i.name">
            <span style="color:#333; font-weight: 600">{{i.name}}</span>
            <van-cell @click="choosecity(item.name)" v-for="(item,ind) of i.cities" :key="ind" :title="item.name" />
          </van-index-anchor>
        </div>
      </van-index-bar>
    </div>
  </div>
</template>
<script>
import {cityData} from '../utils/city.js'
export default {
  data() {
    return {
      citylist: cityData,
      hotcity: ['北京市','上海市','广州市','深圳市','南京市','武汉市','成都市','长沙市','郑州市'],
      history: ['北京市','荆州市','杭州市','桂林市','乌鲁木齐市'],
      chosencity: "",
      list:["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"],
    }
  },
  methods: {
    choosecity(city){
      // document.documentElement.scrollTop = document.body.scrollTop  = 0
      // window.scrollTo(0,0)
      this.goback(city)
    },
    goback(city){
      this.$store.commit('choosecity', city)
      this.$router.push({ name: 'flowershoplist'})
    },
    gobackempty(){
      // this.$store.commit('choosecity', "")
      this.$router.push({ name: 'flowershoplist'})
    }
  },
}
</script>
<style>
/* vant样式 */
.chooseposition .van-index-bar__index{
  font-size: 0.13rem;
  padding-top: 0.05rem;
  color: #999999;
}
/* 页头 */
.chooseposition .fixedhead{
  /* position: fixed; */
  width: 100%;
  /* top: 0; */
  z-index: 3000;
  background: #ffffff;
}
.chooseposition .fixedhead .head{
  display: flex;
  align-items: center;
  margin-top: 0.2rem;
  padding: 0 0.16rem;
}
.chooseposition .fixedhead .head .left img{
  width: 0.2rem;
  height: 0.2rem;
}
.chooseposition .head .inputbox{
  position: relative;
  margin-left: 0.3rem;
}
.chooseposition .head .inputbox img{
  width: 0.16rem;
  height: 0.16rem;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}
.chooseposition .head input{
  width: 2.7rem;
  height: 0.36rem;
  box-sizing: border-box;
  border: 0;
  outline: 0;
  background: #F5F6FA;
  padding: 0.10rem 0.3rem 0.12rem;
  border-radius: 0.18rem;
}
.chooseposition .head input::placeholder{
  color: #C8C8C8;
  font-size: 0.12rem;
  /* line-height: 0.14rem;; */
}
/* 内容 */
/* 热门城市 */

.chooseposition .hotcity{
  padding:0 0.16rem;
}
.chooseposition .title{
  font-weight: 600;
  margin: 0.2rem 0;
  color: #333;
  font-size: 0.16rem;
}
.chooseposition .hotcity .content{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  background: #ffffff;
}
.chooseposition .content .item{
  width: 23%;
  height: 0.36rem;
  line-height: 0.36rem;
  background: #F5F6FA;
  border-radius: 0.06rem;
  color: #666666;
  text-align: center;
  font-size: 0.14rem;
  margin-bottom: 0.08rem;
}
/* 历史记录 */
.chooseposition .cityhistory{
  padding:0 0.16rem;
}
.chooseposition .cityhistory .content{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  background: #ffffff;
}
.chooseposition .cityhistory .less{
  justify-content: flex-start;
}
.chooseposition .cityhistory .less div+div{
  margin-left: 0.1rem;
}
</style>