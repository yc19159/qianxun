<template>
  <div>
     <!-- 评论页面头部 -->
     <div class="comment_header">
            <i @click='back'  class="el-icon-back"></i>
            <p class="title">发表评价</p>
            <p class="release" @click="addComment">发布</p>
     </div>
     <!-- 商品信息栏 -->
     <div class="goods">
         <div class="goods_i">
             <img src="../assets/image/photo_item.png" alt="商品信息照片">
         </div>
         <div class="goods_test">
             <p class="goods_title">
                 Apple iPhone11 (A2332)
                 128GB 黑色移动
             </p>
             <p class="configure">
                 <span class="color">颜色:黑色</span>
                 <span class="size">规格:128GB</span> 
             </p>
         </div>
     </div>
     <!-- 整体评价 -->
     <div class="all">
         <div class="whole">
             <ul class="StarsWrap">
                    <li style="color:#666666;">整体评价</li>
                    <li v-for="(i,index) in list" :key="index" @click="clickStars(index)">
                      <img :src="xing>index?stara:starb">
                    </li>
                    <li style="color:#9B9B9B;font-size: 0.14rem;">{{rateScoreText}}</li>
             </ul>
         </div>
     </div>
     <!-- 添加评价文字 -->
     <div class="address">
          <textarea name="" id="" placeholder="请评价高,立即开机使用,手机也不重,也不卡~"
                    v-model="content">
          </textarea>
     </div>
     <!-- 添加评价照片 -->
     <div class="address_photo">
         <ul class="add_img">
             <li v-if="seat"></li>
             <!-- 添加图片显示位置 -->
              <!-- 照片点击上传显示位置 -->
              <li v-for='(value, key) in imgs' class="addImg" style="width:30%;height:1rem;border:1px solid #ccc;">
                    <a class="close" @click="delImg(key)"><img src="../assets/image/delete.png" alt=""></a>
                   <img :src="getObjectURL(value)">
              </li>
              <!-- 添加照片logo图标按钮-->
              <li style="position: relative;" v-if="imgLen>=4 ? false : true">                 
                 <img style="width:0.3rem;padding-left: 0.3rem;padding-top:0.4rem;" src="../assets/image/camera_item.png" alt="">
                 <input  style="position: relative;left:0.1rem;opacity: 0;z-index: 300;" 
                        type="file" class="upload" @change="addImg" ref="inputer" multiple accept="image/png,image/jpeg,image/gif,image/jpg"/>
                 <span style="position: absolute;left:0.18rem;top:0.7rem">添加图片</span>       
              </li>
             
         </ul>
         
        
     </div>
     <!-- 店铺评价星级点击 -->
     <div class="shop">
         <p>店铺评价</p>
         <div class="delivery">
                <ul class="StarsWrap">
                    <li style="color:#666666;">送货评价</li>
                    <li v-for="(i,index) in deliveryList" :key="index" @click="deliveryStars(index)">
                        <img :src="xing2>index?stara:starb">
                    </li>
                 </ul>
         </div>
         <div class="service">
                <ul class="StarsWrap">
                    <li style="color:#666666;">服务态度</li>
                    <li v-for="(i,index) in serviceList" :key="index" @click="serviceStars(index)">
                        <img :src="xing3>index?stara:starb">
                    </li>
                 </ul>
         </div>
     </div>


    
    

   
  </div>


</template>

<script>
    import offImg from '@/assets/image/off.png'
    import Img from '@/assets/image/half.png'
    export default{
        data(){
             return{
                seat:true,
                content:'',//评论内容
                picUrls:'',//评论图片URL
                level:'',//星级点评级别
                score:'',
                rateScoreText: '',
                rateScoreDesc: ['非常不满意', '不满意，比较差', '一般，还需改善', '比较满意', '非常满意'],
                stara:offImg,//亮星星
                list:[0,1,2,3,4],
                deliveryList:[0,1,2,3,4],
                serviceList:[0,1,2,3,4],
                starb:Img,//暗星星
                xing:0,
                xing2:0,
                xing3:0,
                formDate:new FormData(),
                imgs:{},
                imgLen:0,
                tupian:'',//评论图片文件
                pic:'',
                arr:[],
                valve:false,//用户是否提交评论照片的状态,默认没有提交
                id:this.$route.params.goodId
            }
        },
        methods:{
            //返回上一级目录
             back(){
                this.$router.go(-1)
            },
            // 整体评价点击
            clickStars(i){
                this.rateScoreText=this.rateScoreDesc[i]
                this.xing=i+1
                this.level=i+1;
                if(this.level<1){
                    alert("请提交星级点评")
                }
                console.log(this.level)
            },
            //店铺评价点击
            deliveryStars(i){
                this.xing2=i+1
                // console.log("点击了送货"+(i+1)+"颗星")
            },
            //服务态度点击
            serviceStars(i){
                this.xing3=i+1
                // console.log("点击了服务"+(i+1)+"颗星")
            },
            //点击添加评论
            addComment(){
                console.log(this.content)
                
                // console.log(this.goodsId)
                this.$axios.post("http://192.168.0.14:8080/wx/order/comment",{
                    type:0,//类型
                    orderGoodsId:this.id,//商品id
                    content:this.content,//评论内容
                    star:this.level,//评论星级
                    hasPicture:true,//是否上传图片
                    picUrls:this.arr //图片url数组
                }).then(res=>{
                    console.log(res)
                    if(this.content=null){
                        console.log('评论内容不能为空')
                    }
                    //评论成功跳转
                    // if(res.data.errno==0){
                    //       this.$router.push({name:''})
                    // }
                })

            },
            //添加照片 
            addImg(event){
                // console.log(this.file.length)
                // if(this.file.length=0){
                //       this.seat=true;
                // }else{
                //     this.seat=false;
                // }
                this.seat=false;
                let inputDOM=this.$refs.inputer;
                //通过DOM获取数据
                this.fil=inputDOM.files;
                let file=this.$refs.inputer.files[0];
                let file_s=file.size
                // if(file.=0){
                //     this.seat=false;
                // }else{
                //     this.seat=true;
                // }
                console.log(file);
                
                //新建表单存储数据
                let data=new FormData();
                data.append('file',file);               
                this.$axios.post("http://192.168.0.14:8080/wx/comment/uploadCommentPic",data).then(res=>{

                    //获取到照片追加到新的数组提交
                      this.pic=res.data.data.picUrl
                      this.arr.push(this.pic);
               })  
                let oldLen=this.imgLen;
                let len=this.fil.length_oldLen;
                if(len>2){
                    alert('最多可以上传3张+您还可以上传'+(3-oldLen)+'张');
                    return false;
                }
                for(let i=0;i<this.fil.length;i++){
                    let size=Math.floor(this.fil[i].size/1024);
                    if(size>5*1024*1024){
                        alert('请选择5M以内的图片!');
                        return false
                    }
                    this.imgLen++;
                    this.$set(this.imgs,this.fil[i].name+'?'+new Date().getTime()+i,this.fil[i]);
                   
                }
            },
            //浏览器
            getObjectURL(file){
                var url=null;
                if(window.createObjectURL!=undefined){
                    url=window.createObjectURL(file);
                }else if(window.URL!=undefined){
                    url=window.URL.createObjectURL(file);
                }else if(window.webkitURL!=undefined){
                    url=window.webkitURL.createObjectURL(file);
                }
                // console.log(url(1));
                return url;
            },
            // 删除照片
            delImg(key){
                this.$delete(this.imgs,key);
                this.imgLen--;
            },
            submit(){
                for(let key in this.imgs){
                    let name=key.split('?')[0];
                    this.formDate.append('multipartFiles',this.formData,{
                        headers:{'Content-Type':'multipart/form-data'}
                    }).then(res=>{
                        this.alertShow=true;
                    })
                }
            },
        },  
    }
    

  



</script>  

<style scoped>
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
.comment_header .release{
    float:right;
    color:#FF5403;
    font-size: 0.16rem;
    font-weight: 500;
    padding-right: 0.1rem;
}
/* 商品信息样式 */
.goods{
    margin-top: 0.2rem;
    padding-left: 0.12rem;
    padding-right: 0.12rem;
    display: flex;
    justify-content: space-between;
}
.goods_title{
    color:#000000;
    font-size: 0.15rem;
    font-weight: 600;
    text-align: left;
}
.configure{
    width:60%;
    background-color: #F5F6FA;
    padding-left: 0.02rem;
    padding-right: 0.02rem;
    border-radius: 0.12rem;
    line-height: 0.2rem;
    margin-top: 0.12rem;
}
.configure span{
    color:#C8C8C8;
    font-size: 0.08rem;
    margin-left: 0.16rem;
}
/* 整体评价样式 */
.all{
    margin-top: 0.2rem;
    padding-left: 0.12rem;
}
/* 文字评价 */
.address{
    margin-top: 0.2rem;
}
.address textarea{
    width:3.43rem;
    height:1rem;
    margin-left: 0.12rem;
    border:none;
}
/* 评论添加照片 */
.address_photo{
    /* width: 86%;
    height: 1.2rem; */
    width: 86%;
    padding-top: 0.12rem;
    padding-bottom: 0.12rem;
    overflow: hidden;
    /* overflow: auto; */
    margin-top: 0.1rem;
    margin-left: 0.12rem;
    margin-right: 0.12rem;
    padding-left: 0.12rem;
    padding-right: 0.12rem;
    border-radius: 0.12rem;
    box-shadow: 10px 5px 10px 0px #ccc;
}
.add_img li{
    width:30%;
    height:1rem;
    float: left;
    position: relative;
    margin-top: 0.08rem;
    margin-left: 0.08rem;
    border:1px solid #ccc;
}
.addImg>img{
    width:100%;
    /* height:1rem; */
}
.close{
    /* float: right;
    width: 0.2rem;
    height: 0.2rem;
    margin-top: -0.1rem;
    margin-right: -0.1rem; */
    width: 0.2rem;
    height: 0.2rem;
    position: absolute;
    right:-0.06rem;
    top:-0.08rem;
}
.close>img{
    width:100%;
}
/* .add li>img{
    width: 100%;
} */

.shop{
    margin-top: 0.3rem;
    padding-left: 0.12rem;
}
.shop p{
    text-align: left;
    color:#666666;
    font-weight: 800;
    font-size: 0.16rem;
    padding-bottom: 0.09rem;
}
/* 星星点评 */
.StarsWrap{
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  height: 0.2rem;
  margin: 0.1rem 0;
}
.StarsWrap li{
  float: left;
  margin-right: 0.1rem;
}

</style>
