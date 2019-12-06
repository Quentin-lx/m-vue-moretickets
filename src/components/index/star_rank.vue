<template>
  <div>
    <div class="star_wrap">
      <div class="star_container">
        <div class="sw_header">
          <div class="sw_btn">
            <button
              v-for=" (value,rank) in ranks "
              :key="rank"
              v-on:click="currentrankcompfun(rank)"
              
            >{{value}}</button>
          </div>
          <div class="show-more">全部 ></div>
        </div>
        <div class="star_area">
          <div class="rank_item">
            <div class="star-img">
              <img src="https://img2.tking.cn/assets/img/srkt2ehzNM_.jpg" alt="">
            </div>
            <div class="star-text">
              <div class="star-id">1.</div>
              <div class="star-title">
                <div class="star-name">莫文蔚</div>
                <div class="star-discount">5场演出</div>
              </div>
            </div>
            <div class="star-todetail-btn">查看</div>
          </div>
          <div class="rank_item">
            <div class="star-img">
              <img src="https://img0.tking.cn/assets/img/5CYnsbGN2T_.jpg" alt="">
            </div>
            <div class="star-text">
              <div class="star-id">2.</div>
              <div class="star-title">
                <div class="star-name">张信哲</div>
                <div class="star-discount">7场演出</div>
              </div>
            </div>
            <div class="star-todetail-btn">查看</div>
          </div>
          <div class="rank_item">
            <div class="star-img">
              <img src="https://img1.tking.cn/assets/img/W6CpXE4S22_.jpg" alt="">
            </div>
            <div class="star-text">
              <div class="star-id">3.</div>
              <div class="star-title">
                <div class="star-name">胡歌</div>
                <div class="star-discount">2场演出</div>
              </div>
            </div>
            <div class="star-todetail-btn">查看</div>
          </div>
            
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      ranks:{
        'show_rankcomp':'节目榜单',
        'star_rankcomp':'艺人榜单'
      }
    }
  },
  methods:{
      currentrankcompfun(rank){
          this.currentrankcomp = rank
        //   console.log(this.currentrankcomp)
          this.$emit('currentRC',this.currentrankcomp)
      }
  }

}
</script>

<style lang="stylus" scoped>
.star_wrap{
  display flex
  justify-content center
  padding-top .3rem
  padding-bottom .1rem
  background-image url(https://img0.tking.cn/assets/img/dG5EKDJQEA_.png)
  .star_container{
    width 3.31rem

    .sw_header{
      width 100%
      display flex
      justify-content space-between
      align-items center
      .sw_btn{
        button{
          background none
          border none 
          font-size .14rem
          color #95949D
          box-sizing border-box
        }
        button:nth-of-type(2){
          margin-left .15rem
          border-bottom .02rem solid #fff
          font-weight 700
          font-size .2rem 
          color #fff
          padding-bottom .05rem
        }
        
      }
      .show-more{
        color #fff
      }
    }
    .star_area{
      padding .25rem 0 .4rem
      .rank_item{
        display flex
        color #ffffff
        padding-bottom .12rem
        padding-left .12rem
        align-items center
        position relative
        .star-img{
          width .45rem
          height .45rem
          border solid .01rem #ffffff
          overflow hidden
          border-radius .45rem
          img{
            width 100%
            height 100%
          }
        }
        .star-text{
          line-height .2rem
          display flex
          padding-left .2rem
          .star-id{
            padding-right .05rem
            font-size .13rem
          }
          .star-title{
            width 1.8rem
            .star-name{
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
            }
            .star-discount{
              opacity .4
              font-size .12rem
            }
          }
        }
        .star-todetail-btn{
          width .6rem
          height .27rem
          border-radius .27rem
          text-align center
          line-height .27rem
          color #2b4e8b
          font-size .12rem
          background #ffffff
          cursor pointer
        }
      }
    }

  }
    


}

</style>