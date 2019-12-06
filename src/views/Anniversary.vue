<template>
    <div class="anniversary">
        <Head ></Head> 
       <p class="title">设置</p>
   <div :style="{'margin-top':'0.2rem','height':'70vh','overflow-y': 'scroll',}">
    
     <div class="contentBox" v-for="(item , i) in list" :key='i' @click="toDetail(i)">
        <!-- <router-link :to="{name: 'anniversarydetail',params:{id:item.id}}"> -->
            <img v-if="item.type==1" src="../assets/image/anniversary_birthday.png" alt="" class="contentImg" >
            <img v-if="item.type==2" src="../assets/image/anniversary_anniversary.png" alt="" class="contentImg" >
            <img v-if="item.type==3" src="../assets/image/anniversary_love.png" alt="" class="contentImg" >
            <img v-if="item.type==4" src="../assets/image/anniversary_customize.png" alt="" class="contentImg" >
        <!-- </router-link> -->
             <p class="descript">{{item.name}}</p>
             <p class="anniversyDay">{{item.date}}</p>
             <p class="remainDay">{{getdays(i)}}</p>
             <p class="unit">天后</p>
        <!--<div class="contentBox">
            <img src="../assets/image/anniversary_anniversary.png" alt="" class="contentImg" >
             <p class="descript">结婚纪念日</p>
             <p class="anniversyDay">2020-2-2</p>
             <p class="remainDay">233</p>
            </div> -->
     </div>
 </div>
       <button class="customize" @click="showCustomize">＋ 自定义事件</button>

    <div class="customize-picker" ref="customize">
       <div class="detail">
          <div class="detail-content">
            <span class="close" @click="close">×</span>
            <ul>
                <li v-for="(item , i) in listdata" :key="i" @click="set(i)">
                    <img :src="item.img" alt="">
                    <p class="text">{{item.text}}</p>
                </li>
                
            </ul>
          
          </div>
       </div>
    </div>

    </div>
</template>

<script>
import  {mapState,mapMutations} from 'vuex';
import Head from '@/components/Head.vue';
import img1 from '@/assets/image/anniversary_smallbirthday.png';
import img2 from '@/assets/image/anniversary_smallanniversary.png';
import img3 from '@/assets/image/anniversary_smalllove.png';
import img4 from '@/assets/image/anniversary_smallcustomize.png';

export default {
    data() {
        return {
            listdata:[
                {img:img1,text:"生日"},
                {img:img2,text:"结婚"},
                {img:img3,text:"恋爱"},
                {img:img4,text:"自定义"},
            ],
            list:[],
            nowDays:'',
            }
        },

    components:{
         Head,
    },
    created() {
        this.getdays();
    },
    computed:{
     ...mapState(['searchShow']),
    },
    methods: {
        ...mapMutations(['changeSearch']),
        showCustomize(){
            this.$refs.customize.style.display='block';
        },
        close(){
            this.$refs.customize.style.display='none';
        },
        set(index){
           if(index==0){
               this.$router.push({name:'setbirthday'});
           };
           if(index==1){
               this.$router.push({name:'setanniversary'});
           };
            if(index==2){
               this.$router.push({name:'setlove'})
           }
            if(index==3){
               this.$router.push({name:'setcustomize'})
           }
            },
        toDetail(index){
            sessionStorage.anniversarydetail=JSON.stringify({
                title:this.list[index].name,
                time:this.list[index].date,
                days: 50,
                type: this.list[index].type,
                remark:this.list[index].remark,
                reminderTime:this.list[index].reminderTime,
                istop:this.list[index].istop,
                img:this.list[index].backgroundImg,

                })
            this.$router.push({name:'anniversarydetail',params:{id:this.list[index].id}})
        },
        getdays(index){
            this.nowDays=new Date();
            var nowtimestamp=Date.parse(this.nowDays);
            var setDays=Date.parse(new Date(this.list[index].date))
            var cha=setDays- nowtimestamp;
            var days=(cha/(1000*60*60*24)).toFixed(0)
             return days
            // console.log(Date.parse(new Date("2019-12-6")))
            
       }

         },

    mounted() {
        this.changeSearch(false);
        var that=this;
        document.onclick=function(e){
            var event=e||window.event;
            var target=event.target || event.srcElement;
           if(target.className=='customize-picker'&&target.className!='detail-content'){
               that.$refs.customize.style.display='none';
           }   
        };
        this.$axios.post('/remind/list',{
          page:1,
          limit: 100,
        }).then(res=>{
            console.log(res);
            this.list=res.data.data.list;
            
        })
    },
     
}
</script>

<style  scoped lang="scss">
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
 .contentBox{
     position: relative;
     width: 3.43rem;
     height: 1.05rem;
     top: 0;
     margin: auto;
 }
 .contentBox .unit{
    position: absolute;
    color: #FFFFFF;
    top: 0.34rem;
    right:  0.15rem;
    font-size: 0.12rem;
    border: 1px solid #FFFFFF;
    border-radius: 0.135rem;
    padding:0 0.04rem  0 0.04rem ;
 }

// .contentBox:nth-child(1){
//         top: 0;
// }
.contentBox:first-child{
     top: 0;
}
.contentBox:last-child{
    bottom:0.8rem;
}
 .contentBox .contentImg{
     width: 100%;
     height: 100%;
 }
 .contentBox .descript{
     position: absolute;
     top: 0.3rem;
     left: 0.8rem;
     color: white;
     font-size: 0.17rem;
     font-weight: bold;
 }
 .contentBox .anniversyDay{
     position: absolute;
     top: 0.56rem;
     left: 0.8rem;
     color: white;
     font-size: 0.12rem;
 }
 .contentBox .remainDay{
     position: absolute;
     top: 0.3rem;
     right: 0.6rem;
     color: white;
     font-weight: bold;
     font-size: 0.26rem;
 }
 .customize{
     width: 3.43rem;
     height: 0.5rem;
     position: fixed;
     bottom: 0.3rem;
     left: 0.16rem;
     background: #FFB502;
     border-radius: 0.25rem;
     border: none;
     color: white;     
     font-size: 0.17rem;
 }
 .customize-picker {
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 100;
  max-width: 3.75rem;
  background-color: rgba(0, 0, 0, 0.7);
  .detail{
    width: 100%;
    height: 30%;
    background: white;
    position: relative;
    top: 70%;
    border-radius: 0.2rem 0.2rem 0 0;
    overflow-y:scroll;
    .detail-content{
      width: 100%;
      margin: auto;
      height: auto;
      overflow: hidden;
    .close{
      font-size: 0.2rem;
      font-weight: bold;
      float: right;
      margin-right: 0.2rem;
      }
      ul{
          width: 100%;
          height: 40%;
          margin-top: 0.5rem;
      }
      li{
          width: 25%;
          height: 100%;
          float: left;
          img{
              width: 0.75rem;
              height: 0.75rem;
              margin: auto;
          }
          .text{
              font-size: 0.15rem;
              text-align: center;
          }
      }
    }
  }
}
</style>