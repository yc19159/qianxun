<template>
    <div class="personal-data">
         <Head ></Head> 
       <p class="title">修改密码</p>
       <div class="original">
           <p class="original-title">原始密码</p>
           <input type="text" class="originalPwd" placeholder="请输入原始密码">
       </div>
       <div class="new" >
           <p class="new-title">新密码</p>
           <input type="password" placeholder="请输入原始密码">
           
       </div>
       <div class="repeat">
             <p class="repeat-title">重复新密码</p>
            <input type="password" placeholder="请再次输入新时间">
        
       </div>
       <button class="sure">确定</button>
    </div>
</template>

<script>
import  {mapState,mapMutations} from 'vuex';
import Head from '@/components/Head.vue'

export default {
    data() {
        return {
            
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
  top: 0.38rem;
  left: 0.6rem;
 }
  
  /* input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
    background-color: rgb(255, 255, 255) !important;
    background-image: none !important;
    color: rgb(0, 0, 0) !important;
} */
 .original,.new, .repeat{
  width: 3.43rem;
  height: 0.54rem;
  margin: auto;
  margin-top: 0.5rem;
  /* line-height: 0.54rem; */
   border-bottom: 1px solid #EFEFEF;
 }
 
 .original .original-title{
   font-size:0.15rem;
   font-weight: bold;
 }
 input{
     width: 3.43rem;
     outline: none;
     height: 0.34rem;
     border: none;
 }
 input::-webkit-input-placeholder {
    color: #C7C7C7;
    font-size: 0.13rem;
    }
 .new{
     margin-top: 0.25rem;
 }
 .new .new-title{
   font-size:0.15rem;
   font-weight: bold;
 }
 .new .name{
     float: right;
     margin-right: 0.12rem;
     font-size: 0.14rem;
     color: #5E6165
 }
.repeat{
    margin-top: 0.25rem;
}
.repeat .repeat-title{
   font-size:0.15rem;
   font-weight: bold;
}

.sure{
  width: 3.43rem;
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
  margin-top: 1.1rem;
  background: -webkit-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: -o-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: -moz-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: linear-gradient(to left, #D50000, #FD9A28) !important;
  border: 0;
  outline: 0;
  border-radius: 0.22rem;
  margin-left: 0.16rem;
  font-size: 0.14rem;
  color: white;
}

</style>