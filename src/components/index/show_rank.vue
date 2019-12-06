<template>
  <div>
      <div class="show_wrap">
          <div class="show_container">
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
              <div class="show_area">
                  <div class="area_left">
                      <div class="rank_viewer">
                          <img src="https://img0.tking.cn/assets/img/dxzwe34w8S_.jpg" alt="">
                          <div class="number">NO.1</div>
                      </div>
                      <div class="rank_viewer">
                          <img src="https://img1.tking.cn/assets/img/NZ5iKhSzRC_.jpg" alt="">
                          <div class="number">NO.2</div>
                      </div>
                      <div class="rank_viewer">
                          <img src="https://img1.tking.cn/assets/img/MBZm7DsNFc_.png" alt="">
                          <div class="number">NO.3</div>
                      </div>

                  </div>
                  <div class="area_right">
                      <div class="rank_item">
                          <div class="item_id">1.</div>
                          <div class="item_text">
                              <div class="item_title">托尼奖史诗音乐剧《泰坦尼克号》</div>
                              <div class="item_hot">6295热度</div>
                          </div> 
                      </div>
                      <div class="rank_item">
                          <div class="item_id">2.</div>
                          <div class="item_text">
                              <div class="item_title">【限量6折起】纽约体验式大秀《蓝人秀》</div>
                              <div class="item_hot">6268热度</div>
                          </div> 
                      </div>
                      <div class="rank_item">
                          <div class="item_id">3.</div>
                          <div class="item_text">
                              <div class="item_title">孟京辉经典戏剧作品《恋爱的犀牛》</div>
                              <div class="item_hot">5629热度</div>
                          </div> 
                      </div>
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
      },
      currentrankcomp:'show_rankcomp'
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


<style  lang="stylus" scoped>
.show_wrap{
    display flex
    justify-content center
    padding-top .3rem
    padding-bottom .1rem
    background-image url(https://img0.tking.cn/assets/img/nMZAjpE6F7_.png)
    background-color #6651d3
    background-size 100% auto;
    .show_container{
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
                }  
                button:nth-of-type(1){
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
        .show_area{
            padding .25rem 0 .4rem
            display flex
           
            margin-right -.2rem
            .area_left{
                width 1.08rem
                height 1.55rem
                padding-right .2rem
                position relative
                transform-origin right center
                transform-style preserve-3d
                transform perspective(3rem) rotateY(-5deg)
                @keyframes swiperadm {
                    0%{
                        transform translateX(0.2rem) translateZ(-1rem) scale(1) 
                        opacity 1
                        z-index 1
                    }
                    25%{
                        transform translateX(0.125rem) translateZ(-0.625rem) scale(1)
                        opacity 1
                        z-index 1  
                    }
                    50%{
                        transform translateX(0.05rem) translateZ(-0.25rem) scale(1)
                        opacity 1
                        z-index 9999 
                    }
                    75%{
                        transform translateX(-0.025rem) translateZ(-0.125rem) scale(0.5)
                        opacity 0.5
                        z-index 1
                    }
                    100%{
                        transform translateX(-0.1rem) translateZ(-0.5rem) scale(0)
                        z-index 1
                    }

                    
                }
                .rank_viewer:nth-of-type(1){
                    z-index  10
                    animation swiperadm 6s linear 2s infinite
                }
                .rank_viewer:nth-of-type(2){
                    z-index 8
                    animation swiperadm 6s linear 4s infinite
                }
                .rank_viewer:nth-of-type(3){
                    z-index 3
                    animation swiperadm 6s linear 6s infinite
                }
                .rank_viewer{
                    
                    position absolute
                    left 0
                    right 0
                    top 0
                    bottom 0
                    transform-origin left center
                    img{
                        display block
                        width 1.18rem
                        height 1.55rem
                        border-radius .05rem
                    }
                    .number{
                        position absolute
                        bottom -.05rem
                        right .2rem
                        width .42rem
                        height .21rem
                        background #000
                        font-size .14rem
                        font-family DIN-Condensed-Bold
                        border-radius .02rem
                        font-weight 700 
                        color #ffffff
                        text-align center

                    }
                }
            }
            .area_right{
                align-items center
                
                .rank_item{
                    font-family PingFang,Microsoft YaHei,Helvetica Neue,Helvetica,STHeiTi,sans-serif; 
                    width 100%
                    color #ffffff
                    padding-bottom .12rem
                    padding-left .32rem
                    position relative
                    display flex
                    align-items center
                    font-size .13rem
                    .item_id{
                        padding-right .05rem
                        align-self flex-start
                    }
                    .item_text{
                        line-height .2rem
                        .item_title{
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            width: 1.8rem;
                        }
                        .item_hot{
                            font-size .12rem
                            opacity .4
                        }
                    }
                }
                .rank_item:nth-of-type(2),.rank_item:nth-of-type(3){
                    padding-top .1rem
                }
            }

        }

    }
    


}

</style>