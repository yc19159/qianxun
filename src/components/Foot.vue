<template>
    <div class="footer" v-show="hideshow">
        <div class="footerBar">
            <ul>
                <!-- <router-link to="/">
                <li class="active">
                    <img src="" alt="">
                    <span>首页</span></li>
                </router-link>
                 <router-link to="givewarm">
                <li class="footerBarLi">
                    <img src="" alt="">
                    <span>送温暖</span></li>
                  </router-link>
                <li class="footerBarLi">
                    <img src="" alt="">
                    <span>我的</span></li> -->
            <li :class="{'footerBarli':!item.isActive,'active':item.isActive }"  
            @click='changeActive(index)' v-for="(item,index) in list" :key="index" ref="activeli">
      
         <img v-if="!item.isActive" :src="item.img" alt="" class="iconfont">
         <img v-else :src="item.activeImg" alt="" class="iconfont">
           <p>{{item.content}}</p>

   </li>
            </ul>
        </div>
    <!-- <div class="bottomLine"></div> -->
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
// import iconhome from '@/assets/image/home_activehome.png';
// import iconwarm from '../assets/image/wait_bg.png';
// import iconchat from '../assets/image/wait_bg.png';
// import iconmine from '../assets/image/wait_bg.png';

export default {

  data(){
    return{
    docmHeight: document.documentElement.clientHeight,  //默认屏幕高度
	showHeight: document.documentElement.clientHeight,   //实时屏幕高度
	hideshow:true,  //显示或者隐藏footer
    }
  },
  computed: {
      ...mapState(['list'])
  },
  methods: {  
     changeActive(index){  
        setTimeout(()=>{
         console.log(this.$route)
        },0)
         
       for(var i=0;i<this.list.length;i++){
          this.list[i].isActive=false;
         
       }
       this.list[index].isActive = true; 
      
        if(index==0){
        this.$router.push({name:"home"})
       
      };
     if(index==1){
         this.$router.push({name:'givewarm'})
     };
     if(index==2){
         this.$router.push({name:'chatbook'})
     };
     if(index==3){
         this.$router.push({name:'mine'})
     }
      console.log( this.list[index].isActive)
     }
  },
    mounted(){
      for(var i=0;i<this.list.length;i++){
          this.list[i].isActive=false;
       }
       if(this.$route.name=='home'){
        this.list[0].isActive=true;
       }
        if(this.$route.name=='givewarm'){
        this.list[1].isActive=true;
       }
        if(this.$route.name=='chatbook'){
        this.list[2].isActive=true;
       }
        if(this.$route.name=='mine'){
        this.list[3].isActive=true;
       }
    // window.onresize监听页面高度的变化
   
     window.onresize = ()=>{
    return(()=>{
      //  console.log(this.docmHeight);
      //  console.log(this.showHeight);
      this.showHeight = document.body.clientHeight;
    })()
    }
    },
    watch:{
  showHeight:function() {
    
    if(this.docmHeight > this.showHeight){
      this.hideshow=false
    }else{
      this.hideshow=true
    }
  }
},
    
}
</script>

<style scoped>
.footer{
    width: 100%;
    height: 0.83rem;
    background-color: white;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    /* top: 0; */
}
.footerBar{
    width: 3.43rem;
    height: 0.36rem;
    /* background: blue; */
    margin: auto;
    margin-top: 0.08rem;
}
.footerBar ul li{
    float: left;
    box-sizing: border-box;
    width: 25%;
    /* height: 0.36rem; */
    /* margin-right: 0.04rem; */
    color: #000000;
    text-align: center;
    /* background: url('../assets/image/home_iconhome.png') 45% 0.04rem no-repeat; */
    background-size: 0.2rem 0.2rem;
}
/* .footerBar ul li:nth-child(2){
    background: url('../assets/image/home_givewarm.png') 45% 0.04rem no-repeat;
    background-size: 0.2rem 0.2rem;
}
.footerBar ul li:nth-child(3){
    background: url('../assets/image/home_chatbook.png') 45% 0.04rem no-repeat;
    background-size: 0.2rem 0.2rem;
}
.footerBar ul li:nth-child(4){
    background: url('../assets/image/home_mine.png') 45% 0.04rem no-repeat;
    background-size: 0.2rem 0.2rem;
} */
.footerBar .active{
    border: 0;
    /* border-radius: 0.16rem; */
    /* background: -webkit-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: -o-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: -moz-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: linear-gradient(to left, #D50000, #FD9A28) !important; */
}
.footerBar ul li img{
 margin-top: 0.08rem;
 margin-left: 40%;
 width: 0.19rem;
 height: 0.2rem;
 /* color: grey; */
 /* float: left; */
 /* background: grey; */
 color: red;
}

.footerBar ul li p{
    font-size: 0.14rem;
    font-weight: 510;
    line-height: 0.36rem;
    margin-top: 0.04rem;
}


</style>