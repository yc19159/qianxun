<template>
    <div class="login">
        <Head ></Head>
         <img src="../assets/image/login_logo.png" alt="" class="logo">
         <h2 class="login-title">欢迎注册飞鸟</h2>
         <div class="login-content">
             <div>
             <input type="text" placeholder="请输入手机号" class="username" v-model="phonenumber">
             </div>
             <div>
             <input type="text" placeholder="请输入用户名" class="username" v-model="username">
             </div>
              <div>
             <input type="text" placeholder="请输入验证码" class="testCode" v-model="testCode">
             <button :disabled='codeFlag' @click="getTestCode" id="getTestCode" 
             :style="{'font-size':'0.13rem',color:'#BFC2CC',float:'right',border:'none',background:'none'}">获取验证码</button>
             </div>
              <div>
             <input type="password" placeholder="请输入密码" class="pwd" v-model="pwd">
             </div>
             <div>
             <input type="password" placeholder="请确认密码" class="dbpwd" v-model="dbpwd">
             </div>
             
               <img src="../assets/image/login_toLogin.png"  class="register" @click="todoRegister" alt="这是注册按钮">
               <router-link to="/login">
              <p class="register">登录</p>
              </router-link>
               <div class="agree">
                   <input type="checkbox" id="check"> 
                   <span class="read">我已经阅读并同意</span> 
                   <span class="user-aggrement" @click="myAlert">《用户协议》</span>
               </div>
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
           phonenumber:"",
           username: "",
           testCode: "",
           code: "",
           pwd: "",
           dbpwd: "",
           num: 10,
           codeFlag: false, 
           show:false,
           timer: null,
       }
   },
   components: {
     Head,
   },
   computed: {
        ...mapState(['searchShow'])
   },
   mounted() {
       this.changeSearch(false)
   },
   methods: {
       myAlert(){
        Dialog({ message: '提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示' });
       },
       ...mapMutations(['changeSearch']),
       getTestCode(){
            var reg=/^[\u4e00-\u9fa50-9a-zA-Z_$]{2,8}$/;
            var regtel=/^1[0-9]{10}$/;
            var username=this.username;
            var phonenumber=this.phonenumber;
            
          
            var txt="";
             if(reg.test(username)){
              if(regtel.test(phonenumber)){
               
                    this.$axios.post("/auth/regCaptcha",{
                        mobile: this.phonenumber,
                    }).then(res=>{
                        this.code=res.data.data;
                        console.log(res.data.data)
               this.timer = setInterval(()=>{
              if(this.num>0){
                this.num--;
                txt="还剩 " + this.num + " S";
                // console.log(txt);
                document.getElementById('getTestCode').innerHTML=txt;
                this.codeFlag=true;
            }else{
                    this.num=60;
                    clearInterval(this.timer);
                    txt="获取验证码",
                    document.getElementById('getTestCode').innerHTML=txt;
                   this.codeFlag=false;
                  
            }
        },1000);
                        
                    })

              }else{
                 this.$notify({message:'请输入正确的手机号', color: 'black',background: '#FF4444'});
              }
             }else{
                this.$notify({message: '请输入长度为2-8位的用户名(请勿使用特殊字符)', color: 'black',background: '#FF4444'});
             }
       },
      
       todoRegister(){
            var reg=/^[\u4e00-\u9fa50-9a-zA-Z_$]{2,8}$/
            var regtel=/^1[0-9]{10}$/
            var regpwd=/^[0-9a-zA-Z]{6,15}$/
            var tishi=document.querySelector('#tishi')
            // var loginInput =document.getElementsByClassName('van-field__control')
            console.log(this.username)
            var username=this.username;
            var phonenumber=this.phonenumber;
            var pwd=this.pwd;
            var dbpwd=this.dbpwd;
            if(reg.test(username)){
              if(regtel.test(phonenumber)){
                //  if(this.code==this.testCode){
                     if(regpwd.test(pwd)){
     
                       if(pwd==dbpwd){
                           var checkInput=document.getElementById('check');
                           if(document.getElementById('check').checked){
              this.$axios.post("/auth/register",{
                  "username":this.username,
                   "password":this.pwd,
                   "mobile":this.phonenumber,
                   "code":this.code,
                    }).then(res=>{
                        console.log(res)
               if(res.data.errno==0){
                //    console.log('注册成功')
                this.$router.push({name:"login"})
               }else {
                    this.$notify({message:res.data.errmsg, color: 'black',});
               }
 
           })
                        }else{
                              this.$notify({message:'请在用户协议处打勾', color: 'black',});  
                           }
   
                       }else{
            //    tishi.innerHTML="请确认两次密码输入一样"
                this.$notify({message:'请确认两次密码输入一样', color: 'black',background: '#FF4444'});
                       }
                   }else{
                // tishi.innerHTML="请输入6-15位密码"
                 this.$notify({message:'请输入6-15位密码', color: 'black',background: '#FF4444'});
                   }
            //      }else{
            //    this.$notify({message:'验证码错误', color: 'black',background: '#FF4444'});
            //      }
                   
              }else{
                //    tishi.innerHTML="请输入正确的手机号"
                this.$notify({message:'请输入正确的手机号', color: 'black',background: '#FF4444'});
              }
            }else{
            //  tishi.innerHTML="请输入长度为2-6位的用户名"
            this.$notify({message: '请输入长度为2-8位的用户名(请勿使用特殊字符)', color: 'black',background: '#FF4444'});
            }
       
       
       }
   },
   beforeDestroy() {
    clearInterval(this.timer);        
    this.timer = null;
}
  
}
</script>

<style  scoped>

.login{
    height: 100%;
    width: 100%;
    background: url('../assets/image/login_bg.png') 0rem 0 no-repeat;
    background-size: 3.75rem 100%;  
}
.logo{
    width: 0.48rem;
    height: 0.3rem;
    margin-top: 0.2rem;
    margin-left: 0.16rem;
}
.van-dialog /deep/ .van-dialog__message{
    text-align: left !important;
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
  margin-top: 0.2rem;
}
.login-content{
 width: 3.43rem;
 /* height: ; */
 margin: auto;
 margin-top: 0.2rem;
 overflow: hidden;
}
.login-content .username{
    
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
.login-content .register{
   margin-top: 0.2rem;
   color: #666666;
   font-size: 0.15rem;
   width: 0.56rem;
   height: 0.56rem;
}
.login-content .login{

}
.login-content .agree{
    margin-top: 0rem;
    border: 0;
}
/* .login-content .agree #check{

} */
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
