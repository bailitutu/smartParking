<template>
  <div class="centent">
    <div class="banner">
      <img src="../assets/banner_about.png" alt="">
    </div>
    <div class="address_item">
      <div class="title_sec">
        <div class="title_sec_inner">
          <h1> 关于我们</h1>
          <p > ABOUT US</p>
          <span class="left_line"></span>
          <span class="right_line"></span>
        </div>
      </div>
      <div class="address_inner">
        <div class="address_info fl">
          <div class="address_cell">
            <h4>地址</h4>
            <p > 杭州新天地商务中心4幢东1302-1304</p>
          </div>
          <div class="address_cell">
            <h4>电话</h4>
            <p > +400-0030-700</p>
          </div>
          <div class="address_ewm">
            <div class="fl">
              <img src="../assets/ewm-1.jpeg" alt="">
            </div>
          </div>
        </div>
        <div class="address_map fr">
          <img src="../assets/address_img.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "about"
}
</script>

<style scoped>

  .address_item{
    width: 90%;
    height:auto;
    margin:100px auto 0;
    max-width:1400px;
  }
  .title_sec{
    width:100%;
    height:140px;
    text-align: center;
  }
  .title_sec_inner{
    margin:0 auto;
    width:521px;
    padding:0 100px;
    background: url("../assets/about_us.png") no-repeat center;
    background-size: 100%;
    text-align: center;
    position: relative;
  }
  .title_sec_inner h1{
    line-height: 80px;
    font-size:50px;
    height: 80px;
  }
  .title_sec_inner p{
    font-size:16px;
  }
  .title_sec_inner span{
    width:100px;
    height:3px;
    background:#181818;
    position: absolute;
    top:50%;
    z-index: 1;
    margin-top:-1px;
  }
  .title_sec_inner span.left_line{
    left:10px;
  }
  .title_sec_inner span.right_line {
    right:10px;
  }
  .address_inner{
    width: 100%;
    overflow: hidden;
    margin: 60px auto;
  }
  .address_info{
    width: 400px;
    height: 400px;
    border:1px solid #999999;
    padding:17px 40px;
  }
  .address_map{
    width: 770px;
    height:400px;
    text-align: center;
  }
  .address_map img{
    height:400px;
  }
  .address_cell{
    width: 100%;
  }
  .address_cell h4{
    font-size:15px;
    font-weight:bold;
    line-height: 20px;
    color:#000;
    margin-top: 10px;
  }
  .address_cell p{
    font-size:12px;
    line-height: 40px;
    color:#666;
    border-bottom:1px solid #999999;
    height:40px;

  }
  .address_ewm{
    height:130px;
    width:100%;
    overflow: hidden;
    margin-top:40px;
  }
  .address_ewm>div{
    width:130px;
    height:130px;
    background: #999;
  }
  .address_ewm img{
    width:130px;
    height:130px;
    background: #666666;
  }

</style>
