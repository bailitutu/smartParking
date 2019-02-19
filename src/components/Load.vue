<template>
  <div class="loading_item" id="loading_item" :class="{'hide': !showLoad}">
    <div class="loading_img">
      <img src="../assets/LOGO-02.png" alt="">
    </div>
  </div>
</template>

<script>
    export default {
      name: "load",
      props:['showLoad']
    }
</script>

<style scoped>
  .loading_item{
    width:100%;
    height:100%;
    position: fixed;
    top:0;
    left:0;
    z-index: 50;
    background:#fff ;
    background-size: 100%;
    padding:0 50px;
    text-align: center;
  }
  .loading_item.hide{
    display: none;
  }
  .loading_item .loading_img{
    width:auto;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    margin-top:-22px;
    margin-left:-111px;
  }
</style>
