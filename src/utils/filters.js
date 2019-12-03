import Vue from "vue";
Vue.filter("lower",function(value){
    if(!value){
        return;
    }
    console.log(value)
    return value.toLowerCase();
});



// import Head from "@/components/Head.vue";
// Vue.component("Head",Head)
// import Nav from "@/components/Nav.vue";
// Vue.component("Nav",Nav)
// import Minebody from "@/components/Minebody.vue";
// Vue.component("Minebody",Minebody);
// import Uploadavatar from "@/components/Uploadavatar.vue";
// Vue.component("Uploadavatar",Uploadavatar)
// import Women from "@/components/Women.vue";
// Vue.component("Women",Women)

// import Man from "@/components/Man.vue";
// Vue.component("Man",Man)
// import Food from "@/components/Food.vue";
// Vue.component("Food",Food)
// import Shoes from "@/components/Shoes.vue";
// Vue.component("Shoes",Shoes)
