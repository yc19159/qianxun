<template>
    <div class="main">
        <div class="header">
            <i class="el-icon-back" @click="back"></i>
            <input type="text" placeholder="请输入搜索内容">
            <p class="title" @click="cli">管理</p>
        </div>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :offset="400">        
            <div class="list-item">
                <ul>
                    <li class="goods" v-for="(item,i) in goodsList" :key="i" ref="content">
                        <!-- 收藏按钮样式 -->
                        <div class="input_check" v-show="apper">
                            <span class="ico_gou"
                                  :class="{'ico_gou_on':item.checked}"
                                  @click="selectGoods(item)"></span>
                        </div>
                        <div class="goods_img">
                            <img class="image2" :src="item.picUrl" alt="">
                        </div>
                        <div class="goods_text">
                            <p class="introduce" style="width:2rem;
                                      overflow: hidden;
                                      white-space: nowrap;
                                      text-overflow: ellipsis;">
                                {{item.brief}}
                            </p>
                            <p class="people">{{item.people}}收藏</p>
                            <p class="pice">
                                <span class="pice_i">¥</span>
                                <span class="pice_sub">{{item.retailPrice}}</span>
                            </p>
                        </div>
                        <!-- 删除单个收藏 -->
                        <div class=""></div>
                    </li>
                </ul>
            </div>
        </van-list>
        <div class="footer">
            <div class="check">
                <div class="check_i"></div>
                <span>全选</span>
            </div>
            <div class="remove">
                <span>删除</span>
            </div>
        </div>
    </div>
 
</template>
 
 
<script>
    import { Notify } from "vant";
    import axios from 'axios'
    export default {
        data() {
            return {
                allList: [],//所有收藏商品
                loading: false,
                finished: false,
                goodsList: [],//收藏商品信息
                pageindex: 1,
                pagesize: 100,
                count: 0,//记数
                apper: false,
            };
        },
        // created() {
        //     this.getGoods();
        // },
        methods: {
            onLoad() {
                console.log(this.count)
                setTimeout(() => {
                    if (this.allList.length < 3) {
                        console.log(111)
                        for (let i = 0; i < this.allList.length; i++) {
                            this.goodsList.push(this.allList[i])
                        }
                    } else {
                        for (let i = 0; i < 3; i++) {
                            console.log(222)
                          if(this.allList[i+this.count*3]){
                              this.goodsList.push(this.allList[i+this.count*3])
                          }
                        }
                    }
                    this.count = this.count + 1;
                    console.log(this.goodsList)
                    //加载状态结束
                    this.loading = false;
                    //数据加载完成
                    if (this.goodsList.length >= this.allList.length) {
                        this.finished = true;
                    }
                }, 500)
            },
            back() {
                this.$router.go(-1)
            },
            cli() {
                this.apper = !this.apper
            },
            selectGoods(item){
                console.log(111)
                if(typeof item.checked=='undefined'){
                    this.$set(item,"checked",true);
                }else{
                    item.checked=!item.checked;
                }
            },
            // all(item){
            //    this.$sel(item,"checked",true)
            // }
        },
        mounted() {
            let data = new FormData();
            data.append("type", "0")
            data.append("limit", this.pagesize)
            data.append("sort", "add_time")
            data.append("order", "desc")
            data.append("page", this.pageindex)
            this.$axios.post('http://192.168.0.14:8080/wx/collect/list', data).then(res => {
                console.log(res)
                this.allList = res.data.data.list
                console.log(this.allList)
            })
        }
 
    }
 
</script>
 
 
 
<style scoped>
    li {
        list-style: none;
    }
 
    .main {
        padding-left: 0.12rem;
        padding-top: 0.1rem;
        height: 100vh;
        
    }
 
    .header {
        padding: 0.15rem;
        top: 0.1rem;
        padding-bottom: 0.3rem;
    }
 
    .header i {
        font-size: 0.26rem;
        font-weight: bold;
        float: left;
    }
 
    .header input {
        width: 68%;
        height: 0.34rem;
        border-radius: 0.3rem;
        border: none;
        padding-left: 0.1rem;
        margin-left: 0.12rem;
        margin-top: -0.02rem;
        background-color: #F5F6FA;
    }
    .header .title {
        float: right;
        font-size: 0.18rem;
        font-weight: bold;
    }
    /* 收藏商品 */
    .goods {
        margin-top: 0.2rem;
        overflow: auto;
        display: flex;
        flex-direction: row;
    }
 
    .goods_i .not {
        width: 0.14rem;
        height: 0.14rem;
        border-radius: 0.1rem;
        border: 1px solid #ccc;
        float: left;
        margin-top: 0.4rem;
        margin-right: 0.1rem;
    }
    .image2 {
        width: 1rem;
        height: 1rem;
        border-radius: 0.2rem;
    }
    .goods .goods_text {
 
        margin-left: 0.16rem;
    }
 
    .introduce {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        font-size: 0.16rem;
        padding-bottom: 0.1rem;
        font-weight: bold;
    }
 
    .people {
        color: #A9A9A9;
        font-size: 0.14rem;
        padding-top: 0.1rem;
    }
 
    .pice {
        color: #D03515;
        padding-top: 0.2rem;
    }
 
    .pice .pice_i {
        font-weight: 400;
    }
 
    .pice .pice_sub {
        font-weight: blod;
        font-size: 0.2rem;
    }
 
    /* 全选删除按钮 */
    .delete {
        width: 90%;
        height: 0.4rem;
        padding-top: 0.04rem;
        padding-bottom: 0.02rem;
        margin-top: 0.1rem;
        margin-bottom: 0.1rem;
        position: relative;
        /* bottom:0.2rem; */
        border-radius: 0.4rem;
        background-color: #ccc;
    }
 
    .delete .all {
        float: left;
        padding-top: 0.1rem;
        padding-left: 0.2rem;
    }
 
    .all_btn {
        width: 0.2rem;
        height: 0.2rem;
        float: left;
        /* display: inline-block; */
        border: 1px solid #ccc;
        border-radius: 0.1rem;
        background-color: #fff;
    }
 
    .election {
        float: left;
        padding-left: 0.1rem;
    }
 
    .remove {
        float: right;
        color: #fff;
        text-align: center;
        width: 1.2rem;
        height: 0.4rem;
        margin-right: 0.06rem;
        line-height: 0.38rem;
        border-radius: 0.38rem;
        background: linear-gradient(to right, #FF91BF, #F74296);
    }
 
    .ico_gou {
        width: 0.2rem;
        height: 0.2rem;
        float: left;
        margin-left: 0.12rem;
        margin-right: 0.12rem;
        margin-top: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.1rem;
        background-color: #fff;
    }
 
    .ico_gou {
        background-color: #fff;
    }
 
    .ico_gou_on {
        background: url("../assets/image/checklist_icon.png");
        background-size: cover;
        border:none !important;
    }
    .footer{
        width: 94%;
        height: 0.42rem;
        padding-top: 0.04rem;
        padding-bottom: 0.02rem;
        margin-top: 0.1rem;
        margin-bottom: 0.1rem;
        position: relative;
        /* bottom:0.2rem; */
        border-radius: 0.4rem;
        /* background-color: #ccc; */
        box-shadow: 2px 2px 2px 1px #ccc;
    }
    .check_i{
        width:0.26rem;
        height:0.26rem;
        border-radius: 0.26rem;
        display: block;
        float:left;
        margin-left: 0.2rem;
        border:1px solid #ccc;
        background-color: #fff;
    }
    .check span{
        float:left;
        color:#2B2C2D;
        font-size:0.16rem;
        font-weight:bold;
        line-height: 0.3rem;
        padding-left: 0.12rem;
    }
</style>