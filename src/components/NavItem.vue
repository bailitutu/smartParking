<template>
  <!--导航-->
  <div class="nav_pop" id="nav_pop" v-bind:class="{ 'active' : isShow}">
    <div class="nav_pop_inner">
      <div class="nav_pop_left fl">
        <div class="nav_index">
          <router-link to="/">/ 首页</router-link>
        </div>
        <ul class="nav_list">
          <li class="nav_li">
            <router-link to="/profile">物产简介</router-link>
          </li>
          <li class="nav_li">
            <router-link to="/news">新闻中心</router-link>
          </li>
          <li class="nav_li nav_dongtai">
            <a >公司动态</a>
          </li>
          <li class="nav_li">
            <router-link to="/about">关于我们</router-link >
          </li>
        </ul>

      </div>
      <div class="nav_pop_right fr">
        <div class="nav_pop_list fl">
          <ul>
            <li>
              <router-link to="/profile">战略合作</router-link>
            </li>
            <li>
              <a href="javascript:;" >行业科技</a>
            </li>
            <li>
              <router-link to="/service">汽车服务</router-link>
            </li>
          </ul>
        </div>
        <div class="nav_pop_img fr">
          <img src="../assets/Group-2.png" width="500" height="300" alt="">
          <div class="nav_pop_title">
            <h3 >車停天下</h3>
            <p>大腹能容，容天下难容之事 <br>智慧善泊，泊世间可泊之车</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "navitem",
    computed:{
      isShow(){
        return this.$store.state.showMenu;
      }
    }
  }
</script>
<style lang="less" scoped>
  .nav_pop{
    width:100%;
    height:0;
    overflow: hidden;
    position: fixed;
    top:100px;
    left:0;
    z-index: 20;
    background:#F6F6F6 ;
    background-size: 100%;
    padding:0 50px;
    text-align: center;
    transition: height 300ms linear;
    &.active{
      height: 100%;
    }
    .nav_pop_inner{
      max-width:1440px;
      min-width:1040px;
      width:90%;
      margin:0 auto;
      height:100%;
    }
    .nav_pop_left{
      width:30%;
      height:100%;
      padding-left: 62px;
    }
    .nav_index{
      width:66px;
      height:32px;
      font-size:23px;
      color:rgba(0,0,0,1);
      line-height:32px;
      margin:20px 0;
      >a{
        font-size:16px;
        color:rgba(0,0,0,1);
      }
    }
    .nav_list{
      width: 100%;
      height: auto;
      li{
        height:68px;
        position: relative;
        padding:20px;
        a{
          font-size:20px;
          color:rgba(0,0,0,1);
          text-align: left;
          width: 100%;
          display: inline-block;
          line-height: 28px;
        }
        &.nav_dongtai a{
          color:#3066B0;
          &:after {
            content:'';
            background:url("../assets/next.png") no-repeat center;
            width:20px;
            height: 14px;
            position: absolute;
            left:120px;
            top:50%;
            margin-top:-7px;
          }
        }
      }
    }
    .nav_pop_right{
      width:70%;
      height: 70%;
      margin-top:72px;
      border-left:3px solid #9A9A9A;
    }
    .nav_pop_list{
      width:200px;
      ul{
        width: 100%;
        height: 100%;
        li{
          width: 100%;
          padding:20px ;
          font-size:16px;
          color:#000;
          line-height:33px;
          cursor: pointer;
          &:hover{
            color:#3066B0;
          }
          a{
            color: #000;
            &:hover{
              color:#3066B0;
            }
          }
        }
      }
    }
    .nav_pop_title{
      text-align: left;
      font-size:14px;
      color:#666666;
      h3{
        font-size:18px;
        font-weight:bold;
      }
    }
  }
</style>
