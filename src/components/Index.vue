<template>
  <div class="centent">
    <div class="banner">
      <img src="../assets/banner1.png" alt="">
    </div>
    <div class="inner">
      <div class="inner_list">
        <ul>
          <li>
            <div class="menu_bg"></div>
            <div class="menu_li">
              <img src="../assets/index_icon1.png"  class="normal_img" alt="">
              <img src="../assets/index_icon1_active.png" class="active_img" alt="">
              <p>停车服务</p>
            </div>
            <div class="menu_li_text">

              <div class="img_box fl">
                <img src="../assets/Group.png" alt="">
              </div>
              <div class="menu_text fl">
                <h4>停车服务新规则</h4>
                <p>停车,数百家企业的选择, 智慧泊车提供一站式停车场服务.停车问题,咨询在线客服,</p>
                <router-link to="/car" class="check_btn">立即了解</router-link>
              </div>
            </div>
          </li>
          <li>
            <div class="menu_bg"></div>
            <router-link class="menu_li" to="/news">
              <img src="../assets/index_icon2.png"  class="normal_img" alt="">
              <img src="../assets/index_icon2_active.png" class="active_img" alt="">
              <p>新闻中心</p>
            </router-link>

          </li>
          <li>
            <div class="menu_bg"></div>
            <router-link class="menu_li" to="/service">
              <img src="../assets/index_icon3.png"  class="normal_img" alt="">
              <img src="../assets/index_icon3_active.png" class="active_img" alt="">
              <p>汽车售后服务</p>
            </router-link>

          </li>
          <li>
            <div class="menu_bg"></div>
            <router-link class="menu_li" to="/car">
              <img src="../assets/index_icon4.png"  class="normal_img" alt="">
              <img src="../assets/index_icon4_active.png" class="active_img" alt="">
              <p>金融板块</p>
            </router-link>
          </li>

        </ul>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "myindex"
    }
</script>

<style scoped>

  .inner{
    width:100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    z-index: 5;
  }
  .inner_list{
    position: absolute;
    left:60px;
    top:120px;
    width:144px;
    height: auto;
  }
  .inner_list ul{
    width: 100%;
  }
  .inner_list ul li{
    width: 144px;
    height: 144px;
    margin-top:30px;
    text-align: center;
    position: relative;
  }
  .menu_li{
    width:144px;
    height:144px;
    position: absolute;
    top:0;
    left: 0;
    z-index: auto;
    text-align: center;
    padding:20px 0;
  }
  .menu_li img{
    width:30px;
    height: 30px;
  }
  .menu_li p{
    color: #fff;
    font-size:13px;
    margin-top: 10px;
  }
  .menu_bg{
    width:101px;
    height: 101px;
    background: red;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    margin:0 auto;
    background:rgba(255,255,255,0.5);
    -webkit-transition: all 600ms;
    -moz-transition: all 600ms;
    -ms-transition: all 600ms;
    -o-transition: all 600ms;
    transition: all 600ms;
  }
  .inner_list ul li .active_img{
    display: none;
  }
  .inner_list ul li:hover .menu_bg{
    background:rgba(0,107,183,0.8);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  .menu_li_text{
    width: 1200px;
    height:0;
    display: inline-block;
    background:rgba(0,107,183,0.8);
    position: absolute;
    left:123px;
    top:-91px;
    z-index: auto;
    -webkit-transition: all 600ms;
    -moz-transition: all 600ms;
    -ms-transition: all 600ms;
    -o-transition: all 600ms;
    transition: all 600ms;
    opacity: 0;
    text-align:left;
  }
  .inner_list ul li:hover .menu_li_text{
    opacity: 1;
    height:320px;
    padding:40px 60px 40px 80px;
  }
  .inner_list ul li:hover .active_img{
    display: inline-block;
  }
  .inner_list ul li:hover .normal_img{
    display: none;
  }
  .img_box{
    width:420px;
    height:240px;
    display: inline-block;
  }
  .img_box img{
    width: 100%;
    height: 100%;
  }
  .menu_text{
    width:600px;
    color: #fff;
    margin-left:20px;
    position: relative;
    height: 100%;
  }
  .menu_text h4{
    font-size:20px;
  }
  .menu_text p{
    font-size:16px;
  }
  .menu_text .check_btn{
    width:180px;
    height:45px;
    font-size:16px;
    cursor:pointer;
    background:rgba(0,107,183,1);
    border-radius:2px;
    color: #fff;
    text-align: center;
    line-height: 45px;
    position: absolute;
    bottom:0;
    left: 0;
    z-index: auto;
  }
</style>
