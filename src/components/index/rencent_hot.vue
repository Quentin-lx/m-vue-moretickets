<template>
  <div>
      <div class="layout">
          <div class="row1">
              <div class="big_count">
                  <div class="img_viewer">

                  </div>
                  <div class="discount">
                      <div class="discount-value">
                          8.7
                      </div>
                      折起
                  </div>
                  <div class="show-text">
                      <div class="show-title">百老汇互动亲子科学剧《化学秀》中文版</div>
                      <div class="show-time">11.23-11.24</div>
                  </div>
              </div>
              <div class="normal_count">
                  <div class="img_viewer">

                  </div>
                  <div class="discount">
                      <div class="discount-value">
                          3.6
                      </div>
                      折起
                  </div>
                  <div class="show-text">
                      <div class="show-title">未来有你·初音未来2019中国巡回演唱会</div>
                      <div class="show-time">11.16-11.16</div>
                  </div>
              </div>
          </div>
          <div class="row2">
              <div class="normal_count">
                  <div class="img_viewer">

                  </div>
                  <div class="show-text">
                      <div class="show-title">未来有你·初音未来2019中国巡回演唱会</div>
                      <div class="show-time">11.16-11.16</div>
                  </div>
              </div>
              <div class="normal_count">
                  <div class="img_viewer">

                  </div>
                  <div class="discount">
                      <div class="discount-value">
                          6.1
                      </div>
                      折起
                  </div>
                  <div class="show-text">
                      <div class="show-title">未来有你·初音未来2019中国巡回演唱会</div>
                      <div class="show-time">11.16-11.16</div>
                  </div>
              </div>
              <div class="normal_count">
                  <div class="img_viewer">

                  </div>
                  <div class="discount">
                      <div class="discount-value">
                          8.0
                      </div>
                      折起
                  </div>
                  <div class="show-text">
                      <div class="show-title">未来有你·初音未来2019中国巡回演唱会</div>
                      <div class="show-time">11.16-11.16</div>
                  </div>
              </div>
          </div>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
.layout{
    width 100%
    padding-top .16rem
    .row1{
        width 100%
        display flex
        justify-content space-between
        margin-bottom: .08rem
        .big_count{
            width 2.18rem
            position relative
            .discount{
                position: absolute;
                left: .08rem;
                top: -.04rem;
                width: .28rem;
                height: .36rem;
                font-size: .1rem;
                color: #fff;
                background: linear-gradient(180deg,#ee0e87,#ff1d41);
                border-radius: .02rem;
                text-align: center;
                padding-bottom: .04rem;
                box-sizing: border-box;
                .discount-value{
                    padding-top: .05rem;
                    font-family: DIN-Condensed-Bold;
                    font-weight: 700;
                    font-size: .19rem;
                    line-height: .16rem;
                }
            }
            .img_viewer{
                width: 2.18rem;
                height: 2rem;
                background-image: url(https://img1.tking.cn/assets/img/CfdjKSYj28_.jpg);
                background-size: cover
                background-position: 0 0;
                border-radius .04rem
            }
            .show-text{
                box-sizing: border-box;
                padding-left: 6%;
                position: absolute;
                bottom: 0;
                left: 0;
                padding-bottom: .08rem;
                width: 100%;
                height: 60%;
                display: flex;
                justify-content: flex-end;
                flex-direction: column;
                background: linear-gradient(180deg,transparent,rgba(0,0,0,.8));
                .show-title{
                    width 100%
                    color #fff
                    height: .22rem;
                    font-weight: 700;
                    font-size: .13rem;
                    line-height: .2rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    padding-top: .08rem;
                }
                .show-time{
                    font-size: .12rem;
                    padding: .02rem 0;
                    color #fff
                }
            }
        }
        .normal_count{
            width: 1.05rem;
            position relative
            .img_viewer{
                width: 1.05rem;
                height: 1.47rem;
                background-image: url(https://img0.tking.cn/assets/img/pPZBapxPWh_.jpg);
                border-radius: .04rem;
                background-size cover
            }
            .discount{
                position: absolute;
                left: .08rem;
                top: -.04rem;
                width: .28rem;
                height: .36rem;
                font-size: .1rem;
                color: #fff;
                background: linear-gradient(180deg,#ee0e87,#ff1d41);
                border-radius: .02rem;
                text-align: center;
                padding-bottom: .04rem;
                box-sizing: border-box;
                .discount-value{
                    padding-top: .05rem;
                    font-family: DIN-Condensed-Bold;
                    font-weight: 700;
                    font-size: .19rem;
                    line-height: .16rem;
                }
            }
            .show-text{
                position: relative;
                width: 100%
                .show-title{
                    padding-top: .08rem;
                    color: #323038;
                    font-weight: 700;
                    font-size: .13rem;
                    line-height: .2rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    width: 100%;
                    height: .22rem;
                }
                .show-time{
                    color: #95949d;
                    font-size: .12rem;
                    padding: .02rem 0;
                }
            }
            
        }
    }
    .row2{
        width 100%
        display flex
        justify-content space-between
        .normal_count:nth-of-type(1) .img_viewer{
            background-image url("https://img2.tking.cn/assets/img/fQE3P3AQc4_.jpg")
        }
        .normal_count:nth-of-type(2) .img_viewer{
            background-image url("https://img1.tking.cn/assets/img/NZ5iKhSzRC_.jpg")
        }
        .normal_count:nth-of-type(3) .img_viewer{
            background-image url("https://img0.tking.cn/assets/img/ccrxb3BmiR_.jpg")
        }
        .normal_count{
            width: 1.05rem;
            position relative
            .img_viewer {
                width: 1.05rem;
                height: 1.47rem;
                
                border-radius: .04rem;
                background-size cover
            }
            .discount{
                position: absolute;
                left: .08rem;
                top: -.04rem;
                width: .28rem;
                height: .36rem;
                font-size: .1rem;
                color: #fff;
                background: linear-gradient(180deg,#ee0e87,#ff1d41);
                border-radius: .02rem;
                text-align: center;
                padding-bottom: .04rem;
                box-sizing: border-box;
                .discount-value{
                    padding-top: .05rem;
                    font-family: DIN-Condensed-Bold;
                    font-weight: 700;
                    font-size: .19rem;
                    line-height: .16rem;
                }
            }
            .show-text{
                position: relative;
                width: 100%
                .show-title{
                    padding-top: .08rem;
                    color: #323038;
                    font-weight: 700;
                    font-size: .13rem;
                    line-height: .2rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    width: 100%;
                    height: .22rem;
                }
                .show-time{
                    color: #95949d;
                    font-size: .12rem;
                    padding: .02rem 0;
                }
            }
            
        }
    }

}

</style>