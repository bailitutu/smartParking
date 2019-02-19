<template>
    <footer class="bocweb-footer footer">
      <div class="w1440">
        <div class="top f-cb">
          <div class="f-right fr c-cb">
            <div class="wleft fl">
              <div class="text-right">
                <div class="h">物产中大 世界500强</div>
                <div class="tit">600704 .SH</div>
              </div>
            </div>
            <div class="wright fr">
              <img width="95" height="95" src="../assets/ewm-1.jpeg" alt="">
            </div>
          </div>
          <div class="f-left f-cb fl">
            <div class="li">
              <router-link to="/profile" title="集团简介">集团简介</router-link>
              <router-link to="/news" title="新闻中心">新闻中心</router-link>
              <router-link to="/service" title="核心业务">核心业务</router-link>
              <a  title="投资者关系">投资者关系</a>
            </div>
            <div class="li">
              <a class="join_item"  title="加盟物产泊车">加盟物产泊车
                <div class="join_top">
                  <img src="../assets/zfb-shh.png" alt="">
                  <img src="../assets/wx-gzh.jpg" alt="">
                </div>

              </a>
              <a  title="党建工作">党建工作</a>
              <a title="企业文化">企业文化</a>
              <a  title="阳光招聘"> 阳光招聘</a>
            </div>
          </div>
          <div class="f-mid f-cb fl">
            <span class="fl">分享:</span>
            <div class="bdsharebuttonbox fl">
              <a  @click.stop="shareToSinaWB()" class="bds_tsina" title="分享到新浪微博"></a>
              <a  @click.stop="shareToqq()" class="bds_sqq"  title="分享到QQ好友"></a>
              <a  class="bds_weixin" data-cmd="weixin" title="分享到微信">
                <div class="wx-share">
                    <p>关注微信公众号，分享公众号至朋友圈</p>
                    <img src="../assets/ewm-1.jpeg" alt="">
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="w1440 wbot">
        <div class="bot f-cb">
          <div class="bot-l fl">
            <div class="ul f-cb fl">
              <a  class="li">集团荣誉</a>
              <a class="li">联系我们:400-0030-700 </a>
            </div>
          </div>
          <div class="bot-r fr">
            Copyrght &copy;1996-2018 物产中大集团 AII Rights Reserved 浙ICP备18039666号
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
    export default {
        name: "myfooter",
        methods:{
           shareToSinaWB:function(){
             let _url = 'http://www.zjmiparking.com/#/';
             let _title = '物产智慧泊车';
            let _shareUrl = 'http://v.t.sina.com.cn/share/share.php?title="123"';     //真实的appkey，必选参数
            _shareUrl += '&url='+ encodeURIComponent(_url||document.location);     //参数url设置分享的内容链接|默认当前页location，可选参数
            _shareUrl += '&title=' + encodeURIComponent(_title||document.title);    //参数title设置分享的标题|默认当前页标题，可选参数
            // _shareUrl += '&source=' + encodeURIComponent(_source||'');
            // _shareUrl += '&sourceUrl=' + encodeURIComponent(_sourceUrl||'');
            _shareUrl += '&content=' + 'utf-8';   //参数content设置页面编码gb2312|utf-8，可选参数
            // _shareUrl += '&pic=' + encodeURIComponent(_pic||'');  //参数pic设置图片链接|默认为空，可选参数
            window.open(_shareUrl,'_blank');
          },
          shareToqq:function (){
            let _url = 'http://www.zjmiparking.com/#/';
            let _title = '物产智慧泊车';
            let _shareUrl = 'http://connect.qq.com/widget/shareqq/index.html?';
            _shareUrl += 'url=' + encodeURIComponent(_url||location.href);   //分享的链接
            _shareUrl += '&title=' + encodeURIComponent(_title||document.title);     //分享的标题
            window.open(_shareUrl,'_blank');
          }
        },

    }
</script>

<style scoped>

  .footer{
    width:100%;
    height: 300px;
    background: url("../assets/footer_bg.png") no-repeat center;
    background-size:100%;
  }
  .footer .top{
    padding: 60px 0 45px;
    border-bottom: 1px solid #f1f1f1;
  }
  .f-left{
    margin-right: 3.5%;
    width:45%;
  }
  .f-left .li{
    display: inline-block;
    margin-right: 30%;
    float: left;
    width: 90px;
  }
  .f-left .li a{
    color: #000;
    line-height: 1.8;
    font-size: 13px;
    display: block;
    cursor:pointer;
    position: relative;
    transition: opacity .8s, color .8s;
  }
  .join_top{
    width:266px;
    height:155px;
    position: absolute;
    top:-160px;
    left:0;
    z-index: 9;
    opacity: 0;
    transition: all 600ms linear;
    background: url("../assets/ewm-bg.png") no-repeat center;
    -webkit-background-size: 100%;
    background-size: 100%;
    padding: 13px 14px 0;
  }
  .join_top img{
    width: 96px;
    height: 96px;
    margin:10px;
  }
  .f-left .li a.join_item:hover .join_top{
    opacity: 1;
  }
  .f-left .li a:hover{
    color:#2dbef0;
    opacity: .9;
  }
  .f-mid {
    width: 230px;
    margin-top: 10px;
  }
  .f-mid span{
    font-size: 14px;
    color:#333;
    line-height: 25px;
    width: 40px;
  }
  .bdsharebuttonbox{
    width: 180px;
  }

  .bds_weixin{
    position: relative;
  }
  .bds_weixin .wx-share{
    width:300px;
    height:360px;
    background: #ffffff;
    border:1px solid #f1f1f1;
    position: absolute;
    top:-380px;
    left:0;
    z-index: 9;
    opacity: 0;
    transition:all 400ms linear;
  }
  .bds_weixin:hover .wx-share{
    opacity: 1;
  }
  .bds_weixin .wx-share img{
    width:240px;
    height:240px;
    margin:30px;
  }
  .bds_weixin .wx-share p{
    font-size:12px;
    text-align: center;
    margin-top: 30px;
  }
  .bdsharebuttonbox a {
    width: 30px;
    height: 30px;
    padding: 0;
    display: inline-block;
    margin: 0 13px 0 0;
    transition: opacity .8s;
  }
  a.bds_tsina{
    background: url(../assets/wb.png) no-repeat  center;
    background-size: 28px auto;
  }
  a.bds_sqq{
    background: url('../assets/qq.png') no-repeat center;
    background-size: 25px 25px;
  }
  a.bds_weixin{
    background: url('../assets/wx.png') no-repeat  center;
    background-size: 28px auto;
  }


  .f-right{
    width: 315px;
  }
  .text-right{
    text-align: right;
    border-bottom: 1px solid #e5e5e5;
  }
  .wleft{
    width: 170px;
  }
  .h{
    font-size: 18px;
    line-height: 1.2;
    color: #666;
  }
  .tit{
    color: #666;
    font-size:24px;
    line-height: 30px;
    font-weight: bold;
  }

  .wright{
    width: 95px;
    height: 95px;
  }
  .gup{
    margin-top: 10px;
  }
  .su2{
    color: #999;
    line-height: 2;
  }
  .su3{
    font-size: 20px;
    color: #f44a4a;
    margin-top: 28px;
    line-height: 1;
  }

  .gup-l .su{
    font-size: 50px;
    line-height: 1;
    color: #f44a4a;
    font-weight: bold;
  }

  .bot{
    padding: 23px 0 ;
    position: relative;
    z-index: 2;
  }
  .bot-l{
    width: 450px;
  }
  .wfspan{
    position: relative;
  }
  .fspandiv{
    border:1px solid #d5d5d5;
    position: absolute;
    left: 0;
    bottom: 33px;
    width: 276px;
    background: #fff;
    border-radius: 10px;
    display: none;
  }
  .fspandiv a{
    height: 33px;
    line-height: 33px;
    text-indent: 12px;
    color: #999;
    border-bottom:1px solid #d5d5d5;
    width: 100%;
    display: block;
    transition: all .8s;
  }
  .fspandiv a:last-child{
    border-bottom:none;
  }
  .fspandiv a:hover{
    color:#2dbef0;
  }
  .w1440{
    width: 92%;
    max-width:1440px;
    min-width:1200px;
    margin:0 auto;
  }
  .ul .li{
    font-size: 13px;
    line-height: 33px;
    color: #333;
    margin-right:15px;
  }
  .ul a{
    transition: all .8s;
  }
  .ul a:hover{
    color:#2dbef0;
  }

  .bot-r{
    font-size: 12px;
    line-height: 33px;
    color: #999;
  }
  .bot-r a{
    font-size: 12px;
    line-height: 33px;
    color: #999;
    display: inline-block;
  }

</style>
