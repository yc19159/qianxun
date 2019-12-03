<template>
    <div class=main>
        <div class="order_bg">
            <div class="header">
                <i @click='back' class="el-icon-back"></i>
                <div class="order_box">
                    <p>买家已付款</p>
                </div>
            </div>
        </div>
        <!-- 姓名地址模块 -->
        <div class="din_name">

            <div class="address_i">
                <img src="../assets/image/jiesuan_dingwei.png" alt="">
            </div>

            <div class="user_info">
                <p><span class="username">小橙子</span> <span class="usetel">13253453329</span></p>
                <p class="hat">湖北省武汉市江夏区江汉路世纪中心508</p>
                <p class="service">收货不便时，可免费选择暂存服务</p>
            </div>
            <div class="address_icon" style="float:left;">
                <i class="el-icon-arrow-right"></i>
            </div>
        </div>
        <!-- 商品的具体信息点击进店 -->
        <div class="shop">
            <div>
                <p class="store">
                    <span class="store_i"> <img src="../assets/image/dianpu.png" alt="" class="store-img"></span>
                    <span class="shop_name">佳佳手机专营店</span>
                    <span class="shop_icon"><i class="el-icon-arrow-right"></i></span>
                </p>
            </div>
            <div class="store_box">
                <div class="shop_i">
                    <div class="shop_goods">
                        <img src="../assets/image/photo_item.png" alt="">
                    </div>
                </div>
                <div class="shop_test">
                    <p class="goods_name">
                        Apple iPhone 11 (A2332) 128GB 黑色
                        移动联通 电信4G手机 双卡双待
                    </p>
                    <p class="guige"> <span>颜色:黑色</span> <span>规格:258GB </span> </p>
                    <p class="deliver">商品发货时间 付款后7天发货</p>
                    <p class="deliver_day">7天发货</p>
                </div>
            </div>
            <div class="all_pice">
                <span>商品总价</span><span style="color:#D58745;"> &yen;9.99</span>
            </div>
        </div>
        <!-- 订单信息 -->
        <div class="order_message">
            <p><span style="color:#DA5B17;">|</span> &nbsp;<span style="color:33A3A3A;">订单信息</span> </p>
            <!--订单物流信息跳转-->
            <p class="logistics"><span>物流信息&nbsp;:去订单物流中查看</span> <span class="el-icon-arrow-right"></span></p>
            <p style="color:#B6B6B6;"><span>订单编号</span>&nbsp;: <span>66799687</span></p>
            <p class="see" @click="More" v-show="see"><span>查看更多</span> <span class="el-icon-arrow-down"></span></p>
            <div v-show="seeLook">
                <p class="establish"><span>创建时间</span> : <span class="establish_sub">2019-11-29 13:42:00</span></p>
                <p class="pay"><span>付款时间</span> : <span class="establish_sub">2019-11-29 13:42:00</span></p>
            </div>
        </div>
    </div>


</template>


<script>
    export default {
        data() {
            return {
                see:true,
                seeLook:false,
            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            },
            More(){
                this.see=!this.see
                this.seeLook=!this.seeLook
            }

        }
    }


</script>


<style scoped>
    li {
        list-style: none;
    }

    .main {
        background-color: #F5F6FA;
        height: 100%;
    }

    .order_bg {
        width: 100%;
        background: url("../assets/image/wait_bg.png") 0 0 no-repeat;
        background-size: 100% 100%;
        height: 2.2rem;
        color: white;
        overflow: hidden;
    }


    .header {
        padding: 0.15rem;
        padding-bottom: 0.3rem;
    }

    .header i {
        font-size: 0.26rem;
        font-weight: bold;
        float: left;
    }

    .order_box {
        margin: 0 auto;
        margin-top: 1.3rem;
        width: 1.6rem;
        height: 0.37rem;
    }

    .order_box p {
        text-align: center;
        font-size: 0.16rem;
        font-weight: bold;
        color: #fff;
    }

    .din_name {
        width: 100%;
        height: 1rem;
        padding-top: 0.12rem;
        background-color: #fff;
        border-radius: 0.3rem;
        margin-top: -0.2rem;
    }

    .address_i {
        float: left;
        width: 0.24rem;
        height: 0.3rem;
        margin-left: 0.12rem;
        display: block;
        margin-top: 0.26rem;
    }

    .address_i>img {
        width: 100%;
    }

    .user_info {
        float: left;
        margin-left: 0.12rem;
    }

    .user_info p {
        line-height: 0.24rem;
    }

    .username {
        font-size: 0.18rem;
        font-weight: 800;
        color: #2F3031;
    }

    .hat {
        color: #2F3031;
        font-size: 0.15rem;
    }

    .usetel {
        font-size: 0.13rem;
        color: #838589;
    }

    .service {
        color: #FD9828;
        font-size: 0.12rem;
    }

    .address_icon {
        float: left;
        margin-top: 0.26rem;
        margin-left: 0.3rem;
        color: #B8B8B8;
    }

    .shop_name {
        color: #2F3031;
        margin-left: 0.06rem;
    }

    .shop {
        width: 100%;
        padding-top: 0.12rem;
        padding-bottom: 0.22rem;
        height: auto;
        overflow: auto;
        background-color: #fff;
        border-radius: 0.3rem;
        margin-top: 0.1rem;
    }

    .store_i {
        width: 0.2rem;
        height: 0.2rem;
        margin-left: 0.12rem;
        display: block;
        float: left;
    }

    .store_i>img {
        width: 100%;
    }

    .store_box {
        margin-top: 0.12rem;
        display: flex;
    }

    .shop_i {
        width: 20%;
        float: left;
    }

    .shop_goods {
        width: 0.7rem;
        height: 0.7rem;
        display: block;
    }

    .shop_goods>img {
        width: 100%;
    }

    .shop_test {
        width: 80%;
        float: left;
    }

    .goods_name {
        color: #2F3031;
        font-size: 0.15rem;
        padding-right: 0.1rem;
        font-weight: bold;
        /* font-size: 0.19rem;
        line-height: 0.3rem; */
    }

    .guige {
        background-color: #F5F6FA;
        border-radius: 0.2rem;
        color: #CBCBCC;
        font-size: 0.14rem;
        margin-top: 0.08rem;
        padding-left: 0.1rem;
        width: 60%;
    }

    .deliver {
        color: #EEAE5B;
        font-size: 0.12rem;
        margin-top: 0.04rem;
    }

    .deliver_day {
        margin-top: 0.04rem;
        color: #E86E35;
        width: 20%;
        padding-left: 0.1rem;
        font-size: 0.12rem;
        border-radius: 0.2rem;
        background-color: #FEF1F0;
    }

    .all_pice {
        margin-top: 0.2rem;
        display: flex;
        justify-content: space-between;
        margin-left: 0.16rem;
        margin-right: 0.26rem;
    }

    .order_message {
        width: 100%;
        padding-top: 0.12rem;
        background-color: #fff;
        border-radius: 0.3rem;
        margin-top: 0.12rem;
        line-height: 0.28rem;
        padding-bottom: 0.2rem;
    }
    .order_message p{
        padding-left: 0.12rem;
    }
    .logistics{
        display: flex;
        color:#B6B6B6;
        justify-content: space-between;
        margin-right:0.12rem;
    }
    .establish{
        color:#B6B6B6;
        justify-content: space-between;
        margin-right:0.12rem;
    }
    .see{
        text-align: center;margin-top: 0.12rem;
    }
    .pay{
        color:#B6B6B6;
        justify-content: space-between;
        margin-right:0.12rem;
    }
    .establish_sub{
        font-size: 0.13rem;
    }
</style>