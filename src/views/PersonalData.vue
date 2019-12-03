<template>
    <div class="personal-data">
         <Head ></Head> 
       <p class="title">个人信息</p>
       <div class="touxiang">
           <p class="tx-p">头像</p>
           <img src="../assets/image/more.png" class="more" alt="">
           <Uploadavatar></Uploadavatar>
            <!-- <img src="" class="tx-img" alt=""> -->
       </div>
       <div class="nickname">
           <p class="nick">昵称</p>
            <img src="../assets/image/more.png" class="more" alt="">
           <span class="name">{{username}}</span>
       </div>
       <div class="level">
             <p class="hy-title">会员等级</p>
            <img src="../assets/image/more.png" class="more" alt="">
           <span class="hy-level">lv{{vipLevel}}</span>
       </div>
    </div>
</template>

<script>
import  {mapState,mapMutations} from 'vuex';
import Head from '@/components/Head.vue'
import Uploadavatar from "@/components/Uploadavatar.vue";

export default {
    data() {
        return {
            username: JSON.parse(localStorage.info).username,
            vipLevel: JSON.parse(localStorage.info).vipLevel,
        }
    },
    components:{
     Head,
     Uploadavatar,
    },
   computed: {
       ...mapState(['searchShow']),
   },
    mounted() {
        this.changeSearch(false);
        console.log()
    },
    methods: {
        ...mapMutations(['changeSearch']),
    },
}
</script>

<style  scoped>
   .title{
  float: right;
  height: 0.2rem;
  width: 0.8rem;
  font-size: 0.18rem;
  line-height: 0.2rem;
  font-weight: bold;
  position: absolute;
  top: 0.38rem;
  left: 0.6rem;
 }
 .more{
     width: 0.06rem;
     height: 0.11rem;
     float: right;
     margin-top: 0.22rem;
   }
 .touxiang,.nickname, .level{
  width: 3.43rem;
  height: 0.54rem;
  margin: auto;
  margin-top: 0.4rem;
  line-height: 0.54rem;
 }
 
 .touxiang .tx-p{
   float: left;
   font-size:0.15rem;
   font-weight: bold;
 }
 .touxiang .tx-img{
  width: 0.54rem;
  height: 0.54rem;
  border-radius: 50%;
  float: right;
  margin-right: 0.12rem;
 }
 .nickname{
     margin-top: 0.1rem;
 }
 .nickname .nick{
   float: left;
   font-size:0.15rem;
   font-weight: bold;
 }
 .nickname .name{
     float: right;
     margin-right: 0.12rem;
     font-size: 0.14rem;
     color: #5E6165
 }
.level{
    margin-top: 0.1rem;
}
.level .hy-title{
  float: left;
   font-size:0.15rem;
   font-weight: bold;
}
.level .hy-level{
    float: right;
     margin-right: 0.12rem;
     font-size: 0.14rem;
     color: #5E6165
}
</style>