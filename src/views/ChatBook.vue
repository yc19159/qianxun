<template>
    <div class="chatbook">
        <div class="auto">
            <img src="../assets/image/chatbook_auto.png" alt="" class="autoImg">
            <p class="autoText">该功能暂未开放，尽情期待~</p>
            <p class="autoText-se">程序员正在加班ing～</p>
        </div>
        <Foot></Foot>
    </div>
</template>
<script>
import Foot from "@/components/Foot.vue"

export default {
    
    data() {
        return {
            
        }
    },
    components: {
        Foot,
    }
} 
</script>
<style  scoped>
/* 防止margin-top的bug，如果内容高度超过手机页面高度请更改 */
.chatbook{
    overflow: hidden;
}
.auto{
    width: 3.43rem;
    margin: 35% auto;
}
.auto .autoImg{
    width: 100%;
    height: 1.9rem;
}
.auto .autoText{
  color: #999999;
  width: auto;
  margin: auto;
  width: 2.15rem;
}
.autoText-se{
    margin: 0.2rem auto;
    color: #999999;
    width: 1.7rem;
}
</style>