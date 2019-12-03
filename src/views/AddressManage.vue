<template>
    <div class="bg-addressManage">
        <Head ></Head> 
       <p class="title">选择收货地址</p>
       <div class="addressManage">
           <v-touch v-on:swipeleft="swiperleft(i)" v-on:swiperight="swiperright(i)" v-for="(item, i) in list" :key="i"  class="wrapper">
             <div class="address"  ref="address">
 <div class="address-left" @click="chooseAddress(i)">
                 <div class="address-default">
                   <span class="username">{{item.name}}</span> 
                   <span class="usertel">{{item.tel}}</span>
                </div>
     <div class="address-d" >
        <p class="address-detail">{{item.address+item.addressDetail}}</p>
    </div>
 </div>
    <button class="edit" @click="gotoAddaddress(i)">编辑</button>
      <div id="delete" ref="delete" @click="del(i)">删除</div>
             </div>
             </v-touch>
             
       </div>
        <!-- <button class="todoAdd" @click="makeSure">确定</button> -->
        <button class="todoAdd" @click="addaddress">添加新地址</button>
        
    </div>
</template>

<script>

import  {mapState,mapMutations} from 'vuex';
import Head from '@/components/Head.vue'

export default {
    data() {
        return {
           list:[],
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
        this.$axios.post("/address/list").then(res=>{
            console.log(res.data.data.list)
            this.list=res.data.data.list;
        })
    },
    methods: {
        ...mapMutations(['changeSearch']),
        swiperleft(index){
            this.$refs.delete[index].style.left="3.03rem"
            // console.log(this.$refs.delete[0].offsetLeft)

        },
        swiperright(index){
        this.$refs.delete[index].style.left="3.75rem"
        },
        gotoAddaddress(index){
            sessionStorage.addressInfo=JSON.stringify({
                id:this.list[index].id,
                name:this.list[index].name,
                tel:this.list[index].tel,
                address:this.list[index].address,
                addressDetail:this.list[index].addressDetail,
                isDefault:this.list[index].isDefault,
                })
            console.log(this.list[index]);
            this.$router.push({name:"addressedit"})
        },
        del(index){
            console.log(this.$refs.delete[index])
             
             this.$axios.post('/address/delete',{
                 id:this.list[index].id,
             }).then(res=>{
                 this.$refs.delete[index].parentNode.remove();
             })
        },
        chooseAddress(index){
            sessionStorage.chooseAddressInfo=JSON.stringify({
            id:this.list[index].id,
            name:this.list[index].name,
            tel:this.list[index].tel,
            address:this.list[index].address,
            addressDetail:this.list[index].addressDetail,
            isDefault:this.list[index].isDefault,
            })
            this.$router.push({path:sessionStorage.lastUrl});
        },
        addaddress(){
            this.$router.push({name:"addaddress"})
        }
    },
}
</script>

<style  scoped>
#delete{
    position: absolute;
    left: 3.75rem;
    top: 0;
    background: -webkit-linear-gradient(to left, #F43441, #FB6C0C) !important;
    background: -o-linear-gradient(to left, #F43441, #FB6C0C) !important;
    background: -moz-linear-gradient(to left, #F43441, #FB6C0C) !important;
    background: linear-gradient(to left, #F43441, #FB6C0C) !important;
    transition: 1s;
    width: 0.55rem;
    height: 0.5rem;
    border-radius: 0.03rem;
    color: white;
    line-height: 0.5rem;
    text-align: center;
}
.title{
  float: right;
  height: 0.2rem;
  font-size: 0.18rem;
  line-height: 0.2rem;
  font-weight: bold;
  position: absolute;
  top: 0.38rem;
  left: 0.6rem;
 }
 .bg-addressManage{
     width: 100%;
     height: auto;
     /* margin-top: 0.1rem; */
 }
 .addressManage{
     width: 100%;
     height: auto;
    overflow: hidden;
 }
 .address{
     width: 3.43rem;
     height: auto;
     margin: auto;
    margin-top: 0.15rem;
    position: relative;
    transition: 1s;
 }
 .address::after{
content:" ";
display:block;
clear:both;
height:0; 
overflow:hidden; 
visibility:hidden;
 }
 .address-left{
     float: left;
     width: 2.64rem;
 }
.address-left::after{
content:" ";
display:block;
clear:both;
height:0; 
overflow:hidden; 
visibility:hidden; 
 }
 .address-default{
     float: left;
 }
 .address-default .username{
     display: block;
     float: left;
     font-weight: bold; 
     width: 0.8rem;
     overflow: hidden;
     text-overflow: ellipsis;
     white-space: nowrap;
 }
 .address-default .usertel{
     font-size: 0.12rem;
     color: #5E6165;
     margin-left: 0.12rem;
 }
 .address .address-d{
     /* margin-top: 0.1rem; */
     float: left;
     font-size: 0.14rem;
     color: #5E6165;
     /* height: 0.28rem; */
 }
 .address .address-d .address-detail{
     width: 2.64rem;
     height: auto;
     line-height: 0.22rem;
     margin-top: 0.08rem;
 }
 .address .edit{
    border: none;
    outline: none;
    background: white;
    color: #5E6165;
    line-height: 0.28rem;
    font-size: 0.14rem;
    padding-top:0.1rem; 
 } 
 .address .delete{
    border: none;
    outline: none;
    background: white;
    color: #5E6165;
    line-height: 0.28rem;
    font-size: 0.14rem;
    margin-top: 0.06rem;
 }
 .todoAdd{
     width: 3.43rem;
     height: 0.44rem;
     border: 0;
     border-radius: 0.22rem;
     margin-top: 0.4rem;
     margin-left: 0.16rem;
    background: -webkit-linear-gradient(to left, #F43441, #FB6C0C) !important;
    background: -o-linear-gradient(to left, #F43441, #FB6C0C) !important;
    background: -moz-linear-gradient(to left, #F43441, #FB6C0C) !important;
    background: linear-gradient(to left, #F43441, #FB6C0C) !important;
 }
 /* .makeSure{
     width: 3.43rem;
     height: 0.44rem;
     border: 0;
     border-radius: 0.22rem;
     margin-top: 0.8rem;
    background: -webkit-linear-gradient(to left, #F43441, #FB6C0C) !important;
    background: -o-linear-gradient(to left, #F43441, #FB6C0C) !important;
    background: -moz-linear-gradient(to left, #F43441, #FB6C0C) !important;
    background: linear-gradient(to left, #F43441, #FB6C0C) !important;
 } */
</style>