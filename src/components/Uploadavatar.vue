<template>
    <!-- <div id="photo"> -->
        <div class="tx-img">
        <img :src="touxiang" alt="" @click="uploadImg"  class="userImg" ref="touxiang">
        <input v-show="false" @change="shangchuan" type="file" ref="upload" accept="image/*" class="hiddenInput">
        
    </div>
</template>

<script>
 function isPicFile(fileName) {
        //lastIndexOf如果没有搜索到则返回为 -1
        if (fileName.lastIndexOf(".") != -1) {
            var fileType = (fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length)).toLowerCase();
            var suppotFile = new Array();
                suppotFile[0] = "jpg";
                suppotFile[1] = "gif";
                suppotFile[2] = "bmp";
                suppotFile[3] = "png";
                suppotFile[4] = "jpeg";
            for ( var i = 0; i < suppotFile.length; i++) {
                if (suppotFile[i] == fileType) {
                    return true;
                } else {
                    continue;
                }
            }
            alert("文件类型不合法,只能是jpg、gif、bmp、png、jpeg、png类型！");
            return false;
        } else {
            alert("文件类型不合法,只能是 jpg、gif、bmp、png、jpeg、png类型！");
            return false;
        }
    }
export default {
    data(){
        return {
            touxiang:"",
        }
    },
    methods:{
        uploadImg(){
            this.$refs.upload.click();
        },
        shangchuan(){
            console.log("准备上传...");
            let file = this.$refs.upload.files[0];
            console.log(file);
            // 表单  Form    name 
            let data = new FormData() ;  // 新建 表单对象  
           
            data.append('file',file);
            console.log(data)
            // isPicFile(file)
            // let data={

            //     file: file,
            // }
            this.$axios({
                url:"/user/uploadAvatar",
                method:"POST",
                data:data,
                contentType:false,
                processData:false,
            }).then(res=>{
                //  this.touxiang =res.data.data.avatarUrl;   // 配置代理 
                console.log(res);
                this.$axios.post("/user/info").then(res=>{
            console.log(res.data.data.avatarUrl)
                  if(res.data.data.avatarUrl){
                      console.log(res.data.data.avatarUrl)
                      this.touxiang = res.data.data.avatarUrl;
                    //   this.$refs.touxiang.src= "http://192.168.0.18:8080/zubei/users/img/9a0be563-2daf-4391-b2a3-27485e251849.jpg";
                      console.log(this.touxiang);
                  }else{
                      this.touxiang = require("@/assets/image/touxiang.jpg");
                  }
            })
                // this.touxiang = res.data.pic.replace(/public/,'http://192.168.0.24:8080');  //不需要配置代理 
                // localStorage.avatar = this.touxiang;
            })

            // processData: false,//默认情况下，通过data选项传递进来的数据，如果是一个对象(技术上讲只要不是字符串)，都会处理转化成一个查询字符串，以配合默认内容类型 "application/x-www-form-urlencoded"。如果要发送 DOM 树信息或其它不希望转换的信息，请设置为 false。
            // contentType: false,//数据编码格式不使用jquery的方式 为了避免 JQuery 对其操作，从而失去分界符，而使服务器不能正常解析文件。data:formData,
        }
    },
    mounted(){
        // if(localStorage.avatar){
        //     this.touxiang = localStorage.avatar;
        // }else{
        //     // 使用默认 
        //     this.touxiang = require("@/assets/images/img4.jpg");
        // }
        this.$axios.post("/user/info").then(res=>{
            console.log(res.data.data.avatarUrl)
                  if(res.data.data.avatarUrl){
                      console.log(res.data.data.avatarUrl)
                      this.touxiang = res.data.data.avatarUrl;
                    //   this.$refs.touxiang.src= "http://192.168.0.18:8080/zubei/users/img/9a0be563-2daf-4391-b2a3-27485e251849.jpg";
                      console.log(this.touxiang);
                  }else{
                      this.touxiang = require("@/assets/image/touxiang.jpg");
                  }
            })
        
    }
}
</script>

<style scoped>
/* .photo{
    height: 2rem;
} */
.userImg{
     width: 0.54rem;
     height: 0.54rem;
     border-radius: 50%;
     float: right;
     margin-right: 0.12rem;
 }
.touxiang{
    width:0.8rem;
    height:0.8rem;
    border-radius: 50%;
    margin-top: 0.1rem;
}

.hiddenInput{
    display: none;
} 
</style>

