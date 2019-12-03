<template>

    <div class="head">
       
       <div class="goback" @click="goback">
         
          <img src="../assets/image/goback.png" alt="">
          
        </div> 
         
         <van-search placeholder="请输入搜索关键词" @change="onSearch" v-model="text" v-if="searchShow"/>
   
    </div>
    
</template>

<script>
import {mapState,mapMutations} from "vuex";
export default {
    data() {
        return {
            text: '',
            childValue: '',
        }
       
    },
    props: {
        type: String,
        categoryId: String,
    },
    computed:{
        
    },
     methods: {
           goback(){
                 this.$router.go(-1);
            } ,
            onSearch(){
                console.log(this.text , this.type)
                if(this.type=='goodslist'){
                this.$axios.get("/goods/listGoods",{params:{
                 keyword:this.text,
                 }}).then(res=>{
                    console.log(res.data.data.list);
                    this.childValue=res.data.data.list;
                    this.$emit('searchText',this.childValue);
                    this.$emit('changeKeyWords',this.text);
                })
                }
                if(this.type=='searchlist'){
                     console.log(2)
                     this.$axios.get("/goods/listGoods",{params:{
                     categoryId:this.categoryId,
                     keyword:this.text,
                 }}).then(res=>{
                    console.log(res.data.data.list);
                    this.childValue=res.data.data.list;
                    this.$emit('searchText',this.childValue);
                    this.$emit('changeKeyWords',this.text);        
                })
                }
                if(this.type=='order'){
                     this.$axios.post("/order/listSearch",{
                     page:1,
                     limit: 100,
                     keywords:this.text,
                 }).then(res=>{
                    console.log(res);
                    this.childValue=res.data.data.list;
                    this.$emit('searchText',this.childValue);
                    this.$emit('changeKeyWords',this.text);        
                })
                }
             },
        },
        computed: {
     ...mapState(['searchShow']),
       },
       mounted() {

       },
}
</script>

<style  scoped>
     .head{
         height: 0.74rem;
         background-color: white;

     }
    .goback{
        width: 0.2rem;
        height: 0.2rem;
        margin-left: 0.16rem;
        float: left;
         margin-top: 0.36rem;  
    }
    .goback img{
         width: 0.2rem;
         height: 0.2rem;
    }
     .van-search {
         width: 3rem;
         float: left;
         margin-left: 0.26rem;
         margin-top: 0.2rem;
     }
    .van-search .van-search__content {

    width: 3rem;
    padding-left: 8px;
    background-color: #f7f8fa;
    border-radius: 0.16rem;
}
</style>