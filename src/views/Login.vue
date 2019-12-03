<template>
    <div class="login">
        <Head ></Head>
        <img src="../assets/image/login_logo.png" alt="" class="logo">
         <h2 class="login-title">欢迎登录飞鸟</h2>
         <div class="login-content">
             <div>
             <input type="text" placeholder="请输入用户名" class="username" v-model="username">
             </div>
             <div>
             <input type="password" placeholder="请输入密码" class="username" v-model="pwd">
             </div>
            
             <img src="../assets/image/login_toLogin.png" class="login" @click="todoLogin" alt="这是登录按钮">
             <router-link to="/register">
              <p class="register" >注册</p>
              </router-link>
              <router-link to="" class="findpwd">
                  忘记密码？去找回
              </router-link>
         </div>
    </div>
</template>

<script>
import { Dialog } from 'vant';
import {mapMutations,mapState} from "vuex";
import Head from '@/components/Head.vue';

export default {
   data(){
       return{
          
           username: "",
           pwd: "",
           codeFlag: false, 
           show:false,
       }
   },
   components: {
     Head,
   },
   computed:{
     ...mapState(['searchShow']),
   },

   mounted() {
       this.changeSearch(false)
   },
   methods: {
       ...mapMutations(['changeSearch']),
       todoLogin(){
           this.$axios.post("auth/login",{
               "username": this.username,
               "password": this.pwd,
           }).then(res=>{
               console.log(res)
               localStorage.token=res.data.data.token;
             this.$router.push({path:'/'});
           })
       },
   },

}
</script>

<style scoped>
.login{
    width: 100%;
    height: 100%;
    background: url('../assets/image/login_bg.png') 0rem 0 no-repeat;
    background-size: 3.75rem 100%;
}
.logo{
    width: 0.48rem;
    height: 0.3rem;
    margin-top: 0.4rem;
    margin-left: 0.16rem;
}
.van-dialog__message{
    text-align: left;
    text-indent: 0.32rem;
}
#tishi{
   margin-left: 30%;
   text-align: center;
}
.login-title{
  font-size: 0.22rem;
  font-weight: bold;
  margin-left: 0.16rem;
  margin-top: 0.5rem;
}
.login-content{
 width: 3.43rem;
 /* height: ; */
 margin: auto;
 margin-top: 0.2rem;
 overflow: hidden;
}
.login-content .register{
  margin-top: 0.3rem;
  color: #666666;
  font-size: 0.15rem;
}
.login-content .findpwd{
    margin-top: 0.2rem;
    text-decoration: underline;
    display: block;
}
.login-content div{
 height: 0.35rem;
 width: 100%;
 border-bottom: 1px solid #EDEFF2;
 margin-top: 0.2rem;
}
input{
 border: none;
}
input::-webkit-input-placeholder {
    color: #BFC2CC;
    font-size: 0.13rem;
    }
.login-content .login{
    margin-top: 0.5rem;
    width: 0.56rem;
    height: 0.56rem;

}
.login-content .agree{
    margin-top: 0.3rem;
    border: 0;
}
.login-content .agree #check{
    margin-left: 0.45rem;
}
.login-content .agree .read{
    font-size: 0.14rem;
    margin-left: 0.08rem;
    color: #D5D7DC;
}
.login-content .agree .user-aggrement{
    margin-left: 0.05rem;
    color: #007BFF;
    font-size: 0.14rem;
}
</style>
