<template>
    <div class="postal">
         <Head ></Head> 
       <p class="title">vip会员</p>
       <div  class="member">
          
          <img src="" alt="" class="userImg" >
          <div class="member-right">
                <p class="userName">大魔王的小怪兽</p>
                <p class="descript">您还不是vip会员</p>
          </div> 
       </div>
      <div class="main-content">
           <div class="about">
                 <ul>
                     <li>
                         <p class="number">0</p>
                         <p class="about-descript">我的e豆</p>
                     </li>
                     <li>
                         <p class="number">0</p>
                         <p class="about-descript">回寄包邮券</p>
                     </li>
                     <li>
                         <p class="number">0</p>
                         <p class="about-descript">折扣卷</p>
                     </li>
                 </ul>
           </div>
           <div class="bg-openMember">
                 <div class="openMember">
                       <div class="kaitong">
                           <span class="openMember-title">开通会员</span>
                           <span class="zhekou">享100%返现机会，会员折扣</span>

                           <ul>
                               <img src="../assets/image/vip_firstmonth.png" alt="" class="firstmonth">
                               <img src="../assets/image/vip_givediscount.png" alt="" class="givediscount">
                               <li v-for="(item,index) in list" :key="index" :class="{'baoyue':!item.isActive,'active':item.isActive }"  @click='changeActive(index)'>
                                  <p class="lianxu">{{item.lianxu}}</p> 
                                  <p class="price">￥<span class="yuan">{{item.price}}</span> </p>
                                  <p class="next">{{item.next}}</p>
                                  <p class="auto">{{item.auto}}</p>
                               </li>
                                
                           </ul>
                       </div>
                 </div>
          </div> 
          <div class="bg-immediate">
              <button class="immediate">
                 立即开通会员
              </button>
          </div>
          <div class="bg-quanyi">
               <div class="quanyi">
                    <p class="quanli-title">会员权益</p>
                    <ul>
                        <li>
                            <img src="../assets/image/vip_jifen.png" alt="">
                             <p >积分抵现金</p>
                             <span>100%返现机会</span>
                        </li>
                        <li>
                            <img src="../assets/image/vip_huiyuanzk.png" alt="">
                             <p >会员折扣</p>
                             <span>会员专享折扣</span>
                        </li>
                        <li>
                            <img src="../assets/image/vip_baoyouquan.png" alt="">
                             <p >包邮卷</p>
                             <span>归还包邮券</span>
                        </li>
                        <li>
                            <img src="../assets/image/vip_zskefu.png" alt="">
                             <p >专属客服</p>
                             <span>优先接听</span>
                        </li>
                    </ul>
               </div>
          </div>
      </div>
      
    </div>
</template>

<script>
import  {mapState,mapMutations} from 'vuex';
import Head from '@/components/Head.vue'

export default {
    data() {
        return {
            list:[
                {"lianxu":"连续包月首月","price":"9.9",'next':"次月起15元/月","auto":'自动续费',"isActive":true},
                {"lianxu":"一个月","price":"19.9",'next':"联合月卡","auto":'',"isActive":false},
                {"lianxu":"三个月","price":"58",'next':"联合季卡","auto":'',"isActive":false},
                {"lianxu":"六个月","price":"119",'next':"联合季卡","auto":'',"isActive":false},
                {"lianxu":"一年","price":"238",'next':"联合年卡","auto":'',"isActive":false},
            ]
        }
    },
    components:{
     Head,
    },
   computed: {
       ...mapState(['searchShow']),
   },
    mounted() {
        this.changeSearch(false);
    },
    methods: {
        ...mapMutations(['changeSearch']),
        changeActive(index){
            for(var i=0; i<this.list.length; i++){
                this.list[i].isActive=false
            }
            this.list[index].isActive=true;
        }
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
  top: 0.18rem;
  left: 0.6rem;
  }
  .member{
     width: 3.43rem;
    height: 0.8rem;
    position: relative;
    margin: auto;
}
 .member .userImg{
     float: left;
     width: 0.8rem;
     height: 0.8rem;
     border-radius: 50%;
     background: grey;
 }
 .member .member-right{
     float: left;
     margin-left: 0.15rem;
     width: 2.47rem;
    
 }
 .member .member-right .userName{
     font-size: 0.18rem;
     font-weight: 610;
     margin-top: 0.15rem;
 }
 .member .descript{
     margin-top: 0.15rem;
     font-size: 0.12rem;
     color: #C7C7C7;
 }
 .main-content{
     width: 100%;
     height: 5.32rem;
     background: -webkit-linear-gradient(to top, #F5F6FA, #F5F6FA) !important;
     background: -o-linear-gradient(to top, #F5F6FA, #F5F6FA) !important;
     background: -moz-linear-gradient(to top, #F5F6FA, #F5F6FA) !important;
     background: linear-gradient(to top, #F5F6FA, #F5F6FA) !important;
     margin-top: 0.2rem;
 }
  .main-content .about{
      width: 100%;
      height: 0.57rem;
      background: -webkit-linear-gradient(to bottom, white, #F5F6FA) !important;
     background: -o-linear-gradient(to bottom, white, #F5F6FA) !important;
     background: -moz-linear-gradient(to bottom, white, #F5F6FA) !important;
     background: linear-gradient(to bottom, white, #F5F6FA) !important;
  }
  .about ul{
       width: 100%;
       height: 0.57rem;
  }
  .about ul li{
      width: 33%;
      height: 0.57rem;
      float: left;
      text-align: center;
  }
  .about ul li .number{
      font-weight: bold;
      font-size: 0.14rem;
  }
  .about-descript{
      margin-top: 0.08rem;
      font-size: 0.12rem;
      color: #C7C7C7;
  }
  .bg-openMember{
      width: 100%;
      height: 2.15rem;
      background: white;
      border-radius: 0.2rem 0.2rem 0 0;
  }
  .openMember{
      width: 3.43rem;
      height: 2.15rem;
      margin: auto;
       
      /* overflow: hidden; */
  }
  .openMember .kaitong{
      margin-top: 0.1rem;
      overflow-x: scroll;
  }
  .openMember .kaitong .openMember-title{
      font-size: 0.17rem;
      font-weight: bold;
  }
  .openMember .kaitong .zhekou{
      font-size: 0.12rem;
      color: #C7C7C7;
      margin-left: 0.12rem;
  }
  .openMember .kaitong ul{
      position: relative;
      width:5.4rem;
      height: 1.18rem;
      margin-top: 0.32rem;
      /* overflow-x: scroll; */
  }
  .openMember .kaitong ul .firstmonth{
     position: absolute;
     width: 0.65rem;
     height: 0.32rem;
     top: -0.16rem;
     left: 0.45rem;
  }
  .openMember .kaitong ul .givediscount{
      position: absolute;
      width: 0.65rem;
      height: 0.32rem;
      top: -0.16rem;
      left: 2.55rem;
  }
  .openMember .kaitong ul li{
      float: left;
      margin-left: 0.08rem;
  }
  .openMember .kaitong ul li:first-child{
      margin-left: 0.0rem;
  }
  .openMember .kaitong ul .baoyue{
      width: 0.98rem;
      height: 1.18rem;
      background: white;
      border: 1px solid #C7C7C7;
      box-sizing: border-box;
      text-align: center;
      font-size: 0.12rem;
      border-radius: 0.06rem;
  }
  .openMember .kaitong ul .active{
      
      background: #FFF5E3;
      border: 1px solid #DBA94A;
      width: 0.98rem;
      height: 1.18rem;
      box-sizing: border-box;
      text-align: center;
      font-size: 0.12rem;
      border-radius: 0.06rem;
  }
  .openMember .kaitong ul li .lianxu{
      margin-top: 0.1rem;
      font-size: 0.13rem;
  }
  .openMember .kaitong ul li .price{
      font-size: 0.14rem;
      color: #C48E26;
      margin-top: 0.03rem;
  }
   .openMember .kaitong ul li .yuan{
       font-size: 0.21rem;
       font-weight: bold;
   }
   .openMember .kaitong ul li .next,.openMember .kaitong ul li .auto{
       margin-top: 0.1rem;
       color: #C7C7C7;
   }
   .openMember .kaitong ul li .auto{
       margin-top: 0rem;
   }
   .bg-immediate{
       width: 100%;
       height: 0.44rem;
       background: white;
   }
   .immediate{
       width: 3.43rem;
       height: 0.44rem;
       margin-left: 0.16rem;
       border: 0;
    background: -webkit-linear-gradient(to left, #DBA94A, #F4D08B) !important;
    background: -o-linear-gradient(to left, #DBA94A, #F4D08B) !important;
    background: -moz-linear-gradient(to left, #DBA94A, #F4D08B) !important;
    background: linear-gradient(to left, #DBA94A, #F4D08B) !important;
     border-radius: 0.22rem;
   }
   .bg-quanyi{
       width: 100%;
       height: 2.16rem;
       background: white;
   }
   .quanyi{
       width:  3.43rem;
       height: 2.16rem;
       background: white;
       margin: auto;
       overflow: hidden;
   }
   .quanyi .quanli-title{
       margin-top: 0.6rem;
       font-size: 0.17rem;
       font-weight: bold;
   }
   .quanyi ul {
       width: 100%;

   }
   .quanyi ul li{
       width: 25%;
       text-align: center;
       margin-top: 0.15rem;
       float: left;
   }
   .quanyi ul li img{
       width: 0.4rem;
       height: 0.41rem;
       border-radius: 50%;
       margin-left: 0.22rem;
   }
   .quanyi ul li p{
    font-size: 0.14rem;
    color: #5E6165;
    margin-top: 0.1rem;
   }
  .quanyi ul li span{
     font-size: 0.12rem;
     color: #C7C7C7;
  }
</style> 