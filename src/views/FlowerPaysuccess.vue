<template>
    <div class="flowerWait" >
        <FlowerPay :status="'订单已支付'"></FlowerPay>
    <div class="foot">
         <button class="cancel" @click="cancel">返回首页</button>
         <button class="tijiao" @click="paryRightaway">查看详情</button>
     </div>
    </div>
     
</template>  

<script>
import FlowerPay from "@/components/FlowerPay.vue";

export default {
    data() {
        return {
            
          }
    },

    components:{
     FlowerPay
    },
    methods: {
        cancel(){

        },
        paryRightaway(){

        },
    },
    mounted() {
        
    },
}
</script>

<style  scoped lang='scss'>
  .foot{
      width: 100%;
      height: 0.75rem;
      background: #F5F6FA;
      position: fixed;
      bottom: 0;
      overflow: hidden;
      button{
          width: 1.4rem;
          height: 0.5rem;
          border-radius: 0.25rem;
          border: none;
          outline: none;
          margin-top: 0.15rem;
      }
      .cancel{
         background: white;
          margin-left: 0.16rem;
        border: 1px solid gray;
      }
      .tijiao{
          background: -webkit-linear-gradient(to left, #FF91C0, #F74296) !important;
          background: -o-linear-gradient(to left, #FF91C0, #F74296) !important;
          background: -moz-linear-gradient(to left, #FF91C0, #F74296) !important;
          background: linear-gradient(to left, #FF91C0, #F74296) !important;
         margin-left: 0.6rem;
      }
    }
</style>