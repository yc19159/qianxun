

import axios from "axios";

let AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0aGlzIGlzIGxpdGVtYWxsIHRva2VuIiwiYXVkIjoiTUlOSUFQUCIsImlzcyI6IkxJVEVNQUxMIiwidXNlcklkIjoyLCJpYXQiOjE1NzEzODM0NTV9.Bd8k6nLAJpUm114pzoFK5Zeekeb59kJKYA-Ja9HkrrU";
// let AUTH_TOKEN = ""
axios.defaults.baseURL = "http://192.168.0.16:8080/wx"; // 基路径   
axios.defaults.headers.common['X-Litemall-Token'] = AUTH_TOKEN;    // token 
axios.defaults.headers.post['Content-Type'] = 'application/json';


import {Toast} from "vant"; 

function fail(msg){
    Toast.clear();
    Toast({
        message:msg,
        //  icon: 'cross',
        duration:400
    });
}

 
import router from "@/router"

// 拦截器配置    Interceptors 
// 发送请求之前 添加拦截器  
axios.interceptors.request.use(function (config) {
    // 发送之前做的事情 
    
    // if(localStorage.token){
    //     AUTH_TOKEN = localStorage.token;
    //   }
    config.headers['X-Litemall-Token'] = AUTH_TOKEN;
    // console.log(config);
    Toast.loading({
        message: '加载中...',
        duration:3000
    });
    return config;
}, function (error) {
    // 发送失败 做的失败 
    fail('请求-未知错误');
    return Promise.reject(error);
});

// 响应数据 的拦截器 
axios.interceptors.response.use(function (response) {
    // 成功接收到数据 
    // console.log(response);
    setTimeout(()=>{
        Toast.clear();
        // Toast({
        //     message:response.data.errmsg,
        //     duration:400
        // });
        if(response.data.code=="500"){
            router.push({
                name:"login",
                query:{
                    active:1
                }
            })
        }
    },800)
    return response;
}, function (error) {
    fail('响应-未知错误')
    // 无法接收到数据  
    return Promise.reject(error);
});



export default axios;