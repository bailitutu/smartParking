<template>
  <div class="centent">
    <div class="banner">
      <img src="../assets/banner2.png" alt="">
    </div>

    <div class="news_item">
      <div class="news_inner">
        <div class="news_head">
          <div class="news_head_left fl">
            <h4>NEW CENTER</h4>
            <h4>新闻中心</h4>
          </div>
          <div class="news_head_right fr">
            <div class="new_li">
              企业新闻&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enterprise News
            </div>
            <div class="new_li">
              行业科技&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Industry News
            </div>
          </div>

        </div>

        <div class="news_table">
          <ul>
            <li>
              <router-link :to="{path:'/newsdetail',query:{newid:2}}">
                <div class="news_time">
                  <h4>19</h4>
                  <p>2018-07</p>
                </div>
                <div class="news_img">
                  <img src="../assets/news2_logo.png" alt="">
                </div>
                <h4 class="news_title"> 物产泊车与北京海泊、蓝卡科技进行交流会谈</h4>
                <span class="check_btn">了解详情</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{path:'/newsdetail',query:{newid:1}}">
                <div class="news_time">
                  <h4>18</h4>
                  <p>2018-07</p>
                </div>
                <div class="news_img">
                  <img src="../assets/news2-1.png" alt="">
                </div>
                <h4 class="news_title"> 物产泊车签约xx集团打造智能</h4>
                <span class="check_btn">了解详情</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{path:'/newsdetail',query:{newid:2}}">
                <div class="news_time">
                  <h4>19</h4>
                  <p>2018-07</p>
                </div>
                <div class="news_img">
                  <img src="../assets/news2_logo.png" alt="">
                </div>
                <h4 class="news_title"> 物产泊车与北京海泊、蓝卡科技进行交流会谈</h4>
                <span class="check_btn">了解详情</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{path:'/newsdetail',query:{newid:1}}">
                <div class="news_time">
                  <h4>18</h4>
                  <p>2018-07</p>
                </div>
                <div class="news_img">
                  <img src="../assets/news2-1.png" alt="">
                </div>
                <h4 class="news_title"> 物产泊车签约xx集团打造智能</h4>
                <span class="check_btn">了解详情</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{path:'/newsdetail',query:{newid:2}}">
                <div class="news_time">
                  <h4>19</h4>
                  <p>2018-07</p>
                </div>
                <div class="news_img">
                  <img src="../assets/news2_logo.png" alt="">
                </div>
                <h4 class="news_title"> 物产泊车与北京海泊、蓝卡科技进行交流会谈</h4>
                <span class="check_btn">了解详情</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{path:'/newsdetail',query:{newid:1}}">
                <div class="news_time">
                  <h4>18</h4>
                  <p>2018-07</p>
                </div>
                <div class="news_img">
                  <img src="../assets/news2-1.png" alt="">
                </div>
                <h4 class="news_title"> 物产泊车签约xx集团打造智能</h4>
                <span class="check_btn">了解详情</span>
              </router-link>
            </li>
          </ul>
          <div class="news_pages">
            <div id="layPage"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "news",
      data(){
          return {
          }
      }

    }
</script>

<style>
  .news_item{
    width: 100%;
    padding:40px 0 100px;
    background: #fff;
  }
  .news_item .news_inner{
    width:1200px;
    margin:0 auto;
  }
  .news_head{
    width: 100%;
    height:120px;
    overflow: hidden;
  }
  .news_head_left{
    width:380px;
    height: 100%;
    background: #f7f7f7;
    text-align: right;
    padding:14px 27px;
  }
  .news_head_left h4{
    font-size:24px;
    font-weight: bold;
    line-height: 45px;
  }
  .news_head_right{
    padding:14px 27px;
    width: 790px;
    height: 100%;
    background: #f7f7f7;
  }
  .new_li{
    font-size:16px;
    color:#000;
    line-height: 45px;
    padding-left:40px;
  }
  .new_li.active,.new_li:hover{
    color: #006BB7;
    background: url("../assets/next.png") no-repeat center left;
    background-size:20px 14px;
  }
  .news_table{
    width:100%;
  }
  .news_table ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: space-between;
    flex-wrap: wrap;
  }
  .news_table ul li{
    margin-top:40px;
    width:380px;
    height:440px;
    border:1px solid rgba(221,221,221,1);
  }
  .news_table ul li a{
    width:100%;
    height: 100%;
    position: relative;
    display: inline-block;
    padding:33px;
  }
  .news_time h4{
    font-size:18px;
    font-weight:bold;
    color: #000;
  }
  .news_time p{
    width:auto;
    border-top: 1px solid rgba(221,221,221,1);
    font-size:16px;
    color:#666;
    display: inline-block;
  }
  .news_img{
    width: 310px;
    height: 170px;
    margin-top: 10px;
  }
  .news_img img{
    width: 100%;
    height: 100%;
  }
  .news_title{
    font-size:18px;
    color: #000;
    margin-top: 10px;
  }
  .check_btn{
    display: inline-block;
    width: 140px;
    height: 46px;
    text-align: center;
    line-height: 46px;
    border:1px solid #ddd;
    color: #000;
    position: absolute;
    bottom:33px;
    left:33px;
    z-index: 1;
  }
  .check_btn:hover{
    background: #006BB7;
    border-color:#006BB7;
    color: #fff;
  }
  .news_pages{
    text-align: center;
    margin-top: 20px;
  }
  .layui-laypage .layui-laypage-curr .layui-laypage-em{
    background-color: #006BB7;
  }
</style>
