<template>
    <div class="setbody">
         <Head ></Head> 
       <p class="title">{{setType.txt}}</p>
       <div class="content">
        <div class="contentDiv">
              <span class="contentSpan">标题</span>
             <input type="text" placeholder="请输入姓名"  v-model="name">
        </div>
        <div class="contentDiv">
              <span class="contentSpan">日期</span>
             <input type="text" placeholder="" id="text"  v-model="date" @click="showdate">
        </div>
        <div class="contentDiv">
              <span class="contentSpan" >提醒</span>
             <input type="text" placeholder="15分钟前" v-model="textValue"  @click="showPick" >
        </div>
        <div class="contentDiv">
              <span class="contentSpan">备注</span>
             <input type="text" placeholder="请输入备注内容"  v-model="beizhu">
        </div>
        <div class="contentDiv">
              <span class="contentSpan">置顶</span>
              <van-switch v-model="checked" />
        </div>
        <button class="preserve" @click="preserve">保存</button>
       </div>
    <div class="pick" ref="pick">
       <div class="detail">
          <div class="detail-content">
            <span class="close" @click="close">×</span>
              <div class="pickDiv">
                 <p class="pickP">日程发生时</p>
              </div>
               <div class="pickDiv" v-for="(item , i) in text" :key="i" @click="chooseTime(i)">
                 <p class="pickP" ref="picP">{{item.text}}</p>
                 <img src="../assets/image/setbody_choose.png" alt="" ref="chooseImg" class="chooseImg">
              </div>
               <!-- <div> -->
              <button class="sure" @click="sure">确定</button>
              <!-- </div> -->
          </div>
       </div>
    </div>
    <div class="pickDate" ref="pickDate">
       <div class="detail">
          <div class="detail-content">
            <span class="close" @click="close">×</span>
              <van-datetime-picker
              v-model="currentDate"
              type="date"
              :min-date="minDate"
              @confirm="confirm"
              />
               <!-- <div> -->
              <!-- </div> -->
          </div>
       </div>
    </div>
    </div>
</template>

<script>
import  {mapState,mapMutations} from 'vuex';
import Head from '@/components/Head.vue';
import { Dialog } from 'vant';

export default {
    data() {
        return {
            text:[{text:"当天"},{text:"一天前"},{text:"两天前"},{text:"三天前"}],
            name: "",
            date: "2019-01-01",
            beizhu: "",
            checked: false,
            reminderTime:[],
            textValue:[],
            detail:[],
            currentDate: new Date(),
            minDate: new Date(),
        }
    },
    props:{
     setType: String,
    },
    components:{
         Head,
    },
    created() {
      
    },
    computed:{
     ...mapState(['searchShow']),
    },
    methods: {
        ...mapMutations(['changeSearch']),
        showPick(){
            this.$refs.pick.style.display='block';
            console.log(1)
        },
        close(){
            this.$refs.pick.style.display='none';
            this.$refs.pickDate.style.display='none';
        },
        chooseTime(index){
          if(this.$refs.chooseImg[index].style.display=='none'||this.$refs.chooseImg[index].style.display==''){
              this.$refs.chooseImg[index].style.display='block';
          }else{
              this.$refs.chooseImg[index].style.display='none';
          }
        },
        sure(){
           this.reminderTime=[];
           this.textValue=[];
           for(var i=0; i<this.$refs.chooseImg.length;i++){
             if(this.$refs.chooseImg[i].style.display=='block'){
               this.reminderTime.push(i)
               this.textValue.push(this.$refs.chooseImg[i].previousElementSibling.innerHTML)
               console.log(this.textValue)
             }
           }
           this.$refs.pick.style.display='none';
        },
        preserve(){
            
         
          if(this.$route.params.id>=0){
            this.$axios.post('/remind/addOrUpdate',{
            name: this.name,
            type: this.setType.type,
            reminderTime:this.reminderTime,
            remark:this.beizhu,
            date: this.date,
            istop: this.checked,
            id:this.$route.params.id,
          }).then(res=>{
            console.log(res)
            if(res.data.errno==0){
            this.$router.push({name:'anniversary'})
            }else{
            Dialog({message:res.data.errmsg})
            }
          });
          }else{
            this.$axios.post('/remind/addOrUpdate',{
            name: this.name,
            type: this.setType.type,
            reminderTime:this.reminderTime,
            remark:this.beizhu,
            date: this.date,
            istop: this.checked,
          }).then(res=>{
            console.log(res)
            if(res.data.errno==0){
            this.$router.push({name:'anniversary'})
            }else{
            Dialog({message:res.data.errmsg})
            }
          });
          }

        },
        showdate(){
        this.$refs.pickDate.style.display='block';
        },
        confirm(value){
           var year=value.getFullYear();
           var month=value.getMonth()+1;
           var day=value.getDate();
           if(month<10){
             month='0'+month;
           }
            if(day<10){
             day='0'+day;
           }
          this.date=year+'-'+month+'-'+day;
           this.$refs.pickDate.style.display='none';
          console.log(this.date)
          // console.log(Date.parse(this.date))
        },

    },
    mounted() {
      console.log(this.setType);
      
      setTimeout(() => {
        console.log(document.getElementsByClassName('van-picker__cancel')[0].style.background)
       document.getElementsByClassName('van-picker__cancel')[0].style.background='none';
        document.getElementsByClassName('van-picker__cancel')[0].style.border='0';
        document.getElementsByClassName('van-picker__cancel')[0].style.marginLeft='0.16rem'
       document.getElementsByClassName('van-picker__confirm')[0].style.background='none';
         document.getElementsByClassName('van-picker__confirm')[0].style.border='0';
      }, 0);
      
        this.changeSearch(false);
        if(this.$route.params.id>=0){
         this.detail=JSON.parse(sessionStorage.anniversarydetail)
         console.log(this.detail)
         this.name=this.detail.title;
         this.date=this.detail.time;
         this.beizhu=this.detail.remark;
         this.checked=this.detail.istop;
         this.reminderTime=this.detail.reminderTime;
         for(var i=0; i<this.reminderTime.length;i++){
          //  console.log(this.reminderTime[i])
          this.textValue.push(this.$refs.picP[this.reminderTime[i]].innerHTML)

         }
        }
    },
}
</script>

<style lang="scss"  scoped>
.van-picker .van-picker__cancel, .van-picker .van-picker__confirm {
    padding: 0 16px;
    color: #1989fa;
    font-size: 14px;
    background: none;
    border: 0;
    margin-left: 0.16rem;
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
 .content{
 width: 3.43rem;
 margin: auto;
 margin-top: 0.3rem;
 overflow: hidden;
}
 .content .preserve{
   width: 3.43rem;
   height: 0.5rem;
   margin: auto;
   border: 0;
   color: white;
   background: #FFB502;
   border-radius: 0.25rem;
   margin-top: 0.5rem;
 }
.content .contentDiv{
 height: 0.4rem;
 width: 100%;
 border-bottom: 1px solid #EDEFF2;
 margin-top: 0.2rem;
}
.content .contentDiv input{
 border: none;
 margin-left: 0.35rem;
 font-size: 0.15rem;
}
.content .contentDiv input::-webkit-input-placeholder {
color: #BFC2CC;
font-size: 0.14rem;
}
.content .contentDiv .contentSpan{
    font-size: 0.17rem;
}
.van-switch{
    margin-left: 0.35rem;
    background: grey;
}
.van-switch--on {
    background-color: #1989fa !important;
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
    height: 73%;
    background: white;
    position: relative;
    top: 10%;
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
 .pickDate {
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
    height: 40%;
    background: white;
    position: relative;
    top: 40%;
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
 height: 0.45rem;
 width: 100%;
 border-bottom: 1px solid #EDEFF2;
 margin-top: 0.2rem;
}
.pickDiv .pickP{
    margin-left: 0.32rem;
    font-size: 0.17rem;
    font-weight: bold;
    float: left;
}
.pickDiv .chooseImg{
  float: right;
  width: 0.18rem;
  height: 0.18rem;
  margin-right: 0.25rem;
  display: none;
}
 .sure{
     width: 3.23rem;
     height: 0.5rem;
     margin-left: 0.1rem;
     background: #FFB502;
     border-radius: 0.25rem;
     border: none;
     color: white;     
     font-size: 0.17rem;
     margin-top: 0.25rem;
 }
</style>