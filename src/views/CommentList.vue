<template>
    <div class="main">
         <!-- 评论页面头部 -->
        <div class="comment_header">
            <i @click='back'  class="el-icon-back"></i>
            <p class="title">发表评价</p>
        </div>
        <!-- 头部筛选按钮 -->
        <div class="selection">
            <ul>
                <li @click="getAll">全部 <span>27万</span> </li>
                <li>最新</li>
                <li>有图</li>
                <li>好评</li>
                <li>差评</li>
                <li>中评</li>
            </ul>
        </div>

        <!-- 评论信息展示框 -->
        <div class="exhibition">
             <div class="exhibition_i" v-for="(item,index) in commentList" :key="index">
                 <!-- 评论用户信息 -->
                 <div class="ex_header">
                     <div class="photo"> <img :src="item.userInfo.avatarUrl" alt=""> </div>
                     <div class="use">{{item.userInfo.nickName}}<span class="vip"></span> </div> 
                 </div>
                 <!-- 评论内容 -->
                 <div class="ex_test">
                     <!-- 评论文字 -->
                     <p class="text">{{item.content}}</p>
                     <!-- 评论照片 -->
                     <div class="pin"> 
                         <li v-for="row in item.picList">
                            <img :src="row" alt="">
                         </li>
                        
                     </div>
                     <!-- 评论时间 -->
                    <div class="time">
                        <span class="year">{{item.addTime}}</span>
                        <span class="size">白色, 内存256G</span>
                    </div>
                    
                 </div>  
             </div>
        </div>
        
    </div>
  

</template>

<script>
export default {
    data(){
        return{
           commentList:"",//评论内容列表
           user:"",//用户名
           portrait:"",//头像
           picList:"",//评论图片
           content:"",//评论内容
           time:"",//评论时间
        }
    },
    methods:{
         //返回上一级目录
         back(){
                this.$router.go(-1)
            },
         //请求所有评论
         getAll(){
             console.log(111);
            this.$axios.get("http://192.168.0.22:8080/wx/comment/list",{params:{
                 type:0,
                 valueId:1036002,
                 showType:1
            }}).then(res=>{
                console.log(res)
                this.commentList=res.data.data.list
                console.log(this.commentList)
                for(let i=0;i<this.commentList.length;i++){
                    //所有照片数组
                    this.picList=this.commentList[i].picList
                    console.log(this.picList);
                }
               
            })
         }    
    }
   
}


</script>




<style scoped>
li{
    list-style: none;
}    
.main{
    padding-left: 0.12rem;
    padding-top: 0.1rem;
}
.comment_header{
    padding: 0.15rem;
    padding-bottom: 0.3rem;
}
.comment_header i{
    font-size: 0.26rem;
    font-weight: bold;
    float: left;
}
.title{
    float: left;
    padding-left: 0.12rem;
    font-size: 0.18rem;
    font-weight: bold;
}
/* 评论赛选样式 */
.selection{
    width:100%;
    overflow: auto;
    margin-top: 0.1rem;
    padding-bottom: 0.1rem;
}
.selection li{
    float: left;
    margin-left: 6%;
    margin-top: 0.12rem;
    padding-left: 0.12rem;
    padding-right: 0.12rem;
    background-color: #F5F6FA;
    color:#88898A;
    text-align:center;
    font-size: 0.14rem;
    line-height: 0.3rem;
    border-radius: 0.14rem;
}
/* 评论信息展示框 */
.exhibition{
    margin-top: 0.16rem;
}
.exhibition_i{
    margin-top: 0.12rem;
}
.ex_header{
    position: relative;   
}
.use{
    position: absolute;
    top:0.12rem;
    left: 0.6rem;
}
.photo{
    width:0.5rem;
    height:0.5rem;
    display: inline-block;
    border-radius: 0.5rem;
    /* background-color: #ccc; */
    border:1px solid #ccc;
}
.photo>img{
    width: 100%;
    border-radius: 0.5rem;
}
.ex_test .text{
    color:#A9A9A9;
    font-size: 0.16rem;
}
.pin{
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;;
    overflow: auto;
    border:1px solid #ccc;
    /* background-color:skyblue; */
}
.pin li{
    width: 1rem;
    height: 1rem;
    float: left;
    margin-top: 0.12rem;
    margin-bottom: 0.12rem;
    border: 1px solid yellow;
    margin-left: 0.1rem;
}
.pin li>img{
    width:100%;
    /* height:1rem; */
    height:auto;
}
.year{
    color:#A9A9A9;
    font-size: 0.14rem;
    margin-right: 0.16rem;
}
</style>