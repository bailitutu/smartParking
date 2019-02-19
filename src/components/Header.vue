<template>
  <header class="header">
    <div class="header-nav nav_1 f-cb fl " v-show="!showActive">
      <div class="header-l f-cb fl">
        <div class="boc-logo fl">
          <router-link to="/">
            <img class="imga" src="../assets/LOGO-01.png" alt="">
          </router-link>
        </div>
        <div class="nav_btn nav_btn1" @click='menuHandler'>
          <div class="btn_white">
            <img  src="../assets/nav_white.png" />
            <p class="nav_text c-white">导航</p>
          </div>
        </div>
      </div>
      <div class="header-right fr f-cb">
        <div class="search-btn search-btn-1" @click="showSearchFn"></div>
      </div>
    </div>

    <div class="header-nav nav_2 f-cb fl" v-show="showActive" >
      <div class="header-l f-cb fl">
        <div class="boc-logo fl">
          <router-link to="/">
            <img class="imgb" src="../assets/LOGO-02.png" alt="">
          </router-link>
        </div>
        <div class="nav_btn nav_btn2" @click='menuHandler'>
          <div class="btn_black ">
            <img class="icon_nav" v-bind:class="{ 'active':navActive }" src="../assets/nav_black.png" />
            <p class="nav_text c-black">导航</p>
          </div>
        </div>
      </div>
      <div class="header-right  fr f-cb">
        <div class="search-btn fr search-btn-2" @click="showSearchFn"></div>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  name: "myheader",
  data () {
    return {
      showActive:false
    }
  },
  methods: {
    showSearchFn(){
      this.$store.commit('showSearch');
    },
    menuHandler(){
      let isShow = this.$store.state.showMenu;
      if(isShow ){
        this.$store.commit('hideMenu');
        let dTop = document.documentElement.scrollTop;
        if(!dTop){
          this.showActive = false;
        }
      }else{
        this.showActive = true;
        this.$store.commit('showMenu');
      }
    }
  },
  watch: {
    $route: {
      handler: function(val, oldVal){
        this.$store.commit('hideMenu');
        let dTop = document.documentElement.scrollTop;
        if(!dTop){
          this.showActive = false;
        }
      }
    }
  },
  computed:{
    navActive(){
      return this.$store.state.showMenu;
    }
  },
  created(){
    var that = this;
    window.onscroll= function(){
      var dTop = document.documentElement.scrollTop;
      var openNav = that.$store.state.showMenu;
      if(openNav){
        return false;
      }
      if(dTop > 0){
        that.showActive = true;
      }else{
        that.showActive = false;
      }
    }

  }
}
</script>
<style >
  @import '../css/style.css';

  /*头部*/
  .header{
    width:100%;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: transparent;
  }
  .header-nav{
    width: 100%;
    height: 100%;
    display: block;
    padding:20px 70px 20px 55px;
  }
  .header-nav.nav_2{
    background:#fff;
    border-bottom: 1px solid #f1f1f1;
  }
  .header-nav.nav_2.active{
    background:#fff;
  }
  .boc-logo img{
    width: 260px;
    height:50px;
  }
  .nav_btn{
    height: 50px;
    margin-left:82px;
    display: inline-block;
    vertical-align: middle;
    cursor:pointer;
  }
  .nav_btn .nav_text{
    display: inline-block;
    margin-left: 15px;
    width:47px;
    height:50px;
    font-size:16px;
    line-height:50px;
    vertical-align: middle;
  }
  .nav_btn img{
    width: 30px;
    height: auto;
    vertical-align: middle;
  }
  .c-black{
    color:black;
  }
  .c-white{
    color: #fff;
  }
  .nav_btn2 .icon_nav{
    -webkit-transition: all 0.6s ;
    -moz-transition: all 0.6s ;
    -ms-transition: all 0.6s ;
    -o-transition: all 0.6s ;
    transition: all 0.6s ;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  .nav_btn2 .icon_nav.active{
    -webkit-transition: all 0.6s ;
    -moz-transition: all 0.6s ;
    -ms-transition: all 0.6s ;
    -o-transition: all 0.6s ;
    transition: all 0.6s ;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .search-btn{
    width: 28px;
    height: 29px;
    background: orange;
    margin-top: 10px;
  }
  .header-right{
    height:50px;
    line-height: 50px;
    vertical-align: middle;
  }
  .search-btn-1{
    background: url("../assets/search_white.png") no-repeat center ;
    -webkit-background-size: 28px 29px;
    background-size:  28px 29px;
  }
  .search-btn-2{
    background: url("../assets/search_black.png") no-repeat center ;
    -webkit-background-size: 28px 29px;
    background-size:  28px 29px;
  }
</style>
