<template>
    <div class="anniversarydetail">
         <Head ></Head> 
       <p class="title" v-if="detail.type==1">生日</p>
       <p class="title" v-if="detail.type==2">结婚</p>
       <p class="title" v-if="detail.type==3">恋爱</p>
       <p class="title" v-if="detail.type==4">自定义</p>
       <img src="../assets/image/anniversarydetail_showmore.png" alt="" class="showMore" @click="showMore">
       <div class="content">
           <div class="contnetTop">

           
         <p class="content-title">{{detail.title}}</p>
         <p class="content-time">{{detail.time}}</p>
         <img src="../assets/image/anniversarydetail_xiexian.png" alt="" class="xiexianImg">
         <p class="day">{{detail.days}}</p>
         <p class="unit">天后</p>
         </div>
         <div class="bgDiv">
             <img :src="backgroundImg" class="bgImg" alt="">
         </div>
       </div> 
    <div class="pick" ref="pick">
       <div class="detail">
          <div class="detail-content">
              <div class="pickDiv">
                 <p class="pickP" @click="reset">重新编辑内容</p>
              </div>
              <div class="pickDiv" @click="uploadImg" :style="{'position':'relative'}">
                 <p class="pickP">更换背景图</p>
                  <!-- this.$refs.upload.click(); -->
                 <input @change="shangchuan" type="file" ref="upload" accept="image/*" class="hiddenInput">
              </div>
              <div class="pickDiv" @click="del" :style="{'border':'none'}">
                 <p class="pickP" >删除</p>
              </div>
          </div>
       </div>
    </div>
    </div> 
</template>

<script>
import  {mapState,mapMutations} from 'vuex';
import Head from '@/components/Head.vue';

export default {
     data(){ 
        return {
          detail:{},
          backgroundImg:'',
        }
    },
    components:{
         Head,
    },
    computed:{
     ...mapState(['searchShow']),
    },
    methods: {
       ...mapMutations(['changeSearch']),
       showMore(){
        this.$refs.pick.style.display='block';
       },
       close(){
        this.$refs.pick.style.display='none';
       },
       del(){
         this.$axios.post('/remind/delete',{
           id: this.$route.params.id,
           
         }).then(res=>{
           console.log(res);
           this.$router.push({name:'anniversary'});
         })
       },
       uploadImg(){
            this.$refs.upload.click();
         },
       shangchuan(){
         let file = this.$refs.upload.files[0];
            console.log(file);
            // 表单  Form    name 
            let data = new FormData() ;  // 新建 表单对象  
            data.append('file',file);
            data.append('id',this.$route.params.id)
            console.log(data)
            this.$axios.post('/remind/uploadBackground',
              data,
            ).then(res=>{
                 console.log(res)
                 this.backgroundImg=res.data.data.backgroundImg;
                  this.$refs.pick.style.display='none';
            })
       },
          
       reset(){
         if(this.detail.type==1){
           this.$router.push({name:'setbirthday',params:{id:this.$route.params.id}});
         };
         if(this.detail.type==2){
           this.$router.push({name:'setanniversary',params:{id:this.$route.params.id}});
         };
         if(this.detail.type==3){
           this.$router.push({name:'setlove',params:{id:this.$route.params.id}});
         };
         if(this.detail.type==4){
           this.$router.push({name:'setcustomize',params:{id:this.$route.params.id}});
         };
         
       }
    },
    mounted(){
        this.changeSearch(false);
        this.detail=JSON.parse(sessionStorage.anniversarydetail);
        this.backgroundImg=this.detail.img;
        var that=this
        document.onclick=function(e){
            var event=e||window.event;
            var target=event.target || event.srcElement;
           if(target.className=='pick'&&target.className!='detail-content'){
               that.$refs.pick.style.display='none';
           }   
        };
    },
}
</script>

<style lang='scss' scoped>
.hiddenInput{
  position: absolute;
  display: none;
  left: 0;
  width: 100%;
  height: 100%;
}
.head{
    height: 11.1vh;
}
.title{
  float: right;
  height: 0.2rem;
  width: 1.2rem;
  font-size: 0.18rem;
  line-height: 0.2rem;
  font-weight: bold;
  position: absolute;
  top: 0.38rem;
  left: 0.6rem;
 }
 .showMore{
     position: absolute;
     width: 0.23rem;
     height: 0.05rem;
     top: 0.45rem;
     left: 88%;
 }
.content{
  width: 100%;
  background-color: #F5F6FA;
  height: 88.9vh;
  /* background: url('../assets/image/anniversarydetail_bg.png') 0 0 ; */
  background-size:100% 100%; 
  background: -webkit-linear-gradient(to top, #F5F6FA, #FFFFFF) !important;
    background: -o-linear-gradient(to top, #F5F6FA, #FFFFFF) !important;
    background: -moz-linear-gradient(to top, #F5F6FA, #FFFFFF) !important;
    background: linear-gradient(to top, #F5F6FA, #FFFFFF) !important;

}
.content .contnetTop{
   width: 3.04rem;
   position: relative;
   margin: auto;
   height: 1.2rem;
   background: white;
   box-shadow:0px 0px 20px #F0F0F0;
   top: 0.1rem;
}
.content-title{
    position: absolute;
    top: 0.37rem;
    left: 0.3rem;
    font-weight: bold;
}
.content-time{
    position: absolute;
    top: 0.68rem;
    left: 0.3rem;
    font-size: 0.12rem;
    color: #999999;
}
.xiexianImg{
    position: absolute;
    width: 0.18rem;
    height: 0.29rem;
    top: 0.47rem;
    left: 1.45rem;
  
}
.day{
    position: absolute;
    height: 0.29rem;
    top: 0.45rem;
    right: 0.66rem;
    font-size: 0.25rem;
    font-weight: bold;
}
.unit{
    position: absolute;
    color: #999999;
    top: 0.5rem;
    left: 2.5rem;
    font-size: 0.12rem;
    border: 1px solid #999999;
    border-radius: 0.135rem;
    padding:0 0.04rem  0 0.04rem ;
}
.bgDiv{
    width: 3.04rem;
    margin: auto;
    height: 61vh;
}
.bgDiv .bgImg{
    width: 100%;
    height:100%;
}
.pick {
  animation: 1s;
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
    width: 3.43rem;
    height: 25%;
    background: white;
    position: relative;
    top: 31%;
    left: 0.16rem;
    border-radius: 0.2rem 0.2rem 0.2rem 0.2rem;
    overflow-y:scroll;
    .detail-content{
      width: 100%;
      margin: auto;
    //   height: auto;
      overflow: hidden;
      max-height: 999999px; 
    .close{
      font-size: 0.2rem;
      font-weight: bold;
      float: right;
      margin-right: 0.2rem;
      }
    }
  }
}
.pickDiv{
 height: 0.387rem;
 width: 100%;
 border-bottom: 1px solid #EDEFF2;
 margin-top: 0.15rem;
 font-size: 0.17rem;
}
.pickDiv .pickP{
    margin-left: 0.32rem;
    font-size: 0.17rem;
    font-weight: bold;
    float: left;
}
</style>