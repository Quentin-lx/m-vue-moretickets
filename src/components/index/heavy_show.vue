<template>
  <div>
    <div class="heavy_wrap">
      <div class="row1">
        <div class="big_count">
          <img src="https://img1.tking.cn/assets/img/Xe65HcQ7WB_.jpg" alt="">
        </div>
      </div>
      <div class="row2">
        <div class="small_count">
          <img src="https://img0.tking.cn/assets/img/Mi3FQsXKy8_.jpg" alt="">
        </div>
        <div class="small_count">
          <img src="https://img2.tking.cn/assets/img/Rnf4TFTyTz_.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.heavy_wrap{
  width 100%
  padding-top .16rem
  .row1{
    width 100%
    display flex
    margin-bottom .08rem
    .big_count{
      width 100%
      img {
      width 100%
      height 1.06rem
      border-radius .04rem
    }
    }
  }
  .row2{
    display flex
    justify-content space-between
    width 100%
    .small_count{
      width 1.61rem
      img{
        width 100%
        height 1.06rem
        border-radius .04rem
      }
    }
  }
  
}

</style>