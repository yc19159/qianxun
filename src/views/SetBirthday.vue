<template>
    <div>
       <SetBody :setType="{txt:'添加生日',type:1}"></SetBody>
    </div>
</template>

<script>
import SetBody from '@/components/SetBody.vue';

export default {
    data() {
        return {
            
        }
    },
    components:{
     SetBody,
    },
    
}
</script>

<style  scoped>

</style>