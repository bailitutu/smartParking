<template>
  <!--搜索-->
  <div class="search_item" id="search_item" v-bind:class="{ active : isshow }">
    <div class="close_btn" id="close_search" @click='closeFn'></div>
    <div class="logo_item">
      <img src="../assets/LOGO-02.png" alt="">
    </div>
    <div class="search_cell" >
      <div class="search_icon">
        <img src="../assets/search_black.png" alt="">
      </div>
      <div class="search_input">
        <input type="text" class="search_input_ele" placeholder="请输入搜索内容">
      </div>
      <div class="search_text" >搜索</div>
    </div>
  </div>

</template>

<script>
export default {
    name: "SearchItem",
  data(){
      return {
      }
  },
  methods:{
      closeFn(){
        this.$store.commit('hideSearch');
      }
  },
  computed:{
    isshow(){
      return this.$store.state.showSearch;
    }
  }

}
</script>

<style scoped>
  /*搜索模块*/
  .search_item{
    width:100%;
    height:0;
    overflow: hidden;
    position: fixed;
    top:0;
    left:0;
    z-index: 30;
    background:#fff url("../assets/search_bg.png") no-repeat center center;
    background-size: 100%;
    padding:0 50px;
    text-align: center;
    transition: height 300ms linear;
  }
  .search_item.active{
    height:100%;
  }
  .search_item .close_btn{
    width: 30px;
    height: 31px;
    position: absolute;
    top: 56px;
    right: 60px;
    z-index: 10;
    background:url("../assets/close_icon.png") no-repeat center;
    background-size: 30px 31px;
  }
  .search_item .logo_item{
    margin:200px auto;
    width: 300px;
    height: 120px;
  }
  .search_item .logo_item img{
    height: 50px;
    margin:0 auto;
  }
  .search_item .search_cell{
    height: 100px;
    width:auto;
    position: absolute;
    top:50%;
    left:50px;
    right:50px;
    margin-top:-50px;
    border-bottom:3px solid rgb(221,221,221);
  }
  .search_cell .search_icon{
    width:30px;
    position:absolute;
    top: 30px;
    left: 0;
    z-index: 20;
  }
  .search_input{
    width:70%;
    height:90px;
    line-height: 90px;
    text-align: center;
    margin: 0 auto;
  }
  .search_input input{
    width:100%;
    height: 100%;
    font-size:30px;
    color:#000;
    text-align: center;
    background: transparent;
  }
  .search_text{
    position:absolute;
    right: 0;
    top: 0;
    z-index: 20;
    padding:0 10px;
    line-height: 90px;
    font-size:16px;
    height: 90px;
    color:#000;
    font-weight: bold;
    cursor: pointer;
  }

</style>
