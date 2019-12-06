<template>
  <div class="detail_wrap">

    <div class="detail_header">
      <div class="prevTopage"
      @click="backRouter"
      >

      </div>
      <h2>演出详情</h2>
    </div>
    <div class="detail_main">
      <div class="detail-poster">
        <div class="poster-background">
          <img :src="detailData.posterURL" alt="">
        </div>
        <div class="postershow">
          <img :src="detailData.posterURL" alt="">
          <div class="show-info">
            <div class="show-title">{{detailData.showName}}</div>
            <div class="show-price"><span>{{detailData.minPrice}}</span>元起</div>
          </div>
        </div>
      </div>
      <div class="show-detail">
        <div class="show-detail-info">
          <div class="show-time">{{detailData.latestShowTime}}</div>
          <div class="show-address"><span></span><div class="detail-address"><div class="address-title">{{detailData.venueName}}</div><div class="address-value">{{detailData.venueAddress}}</div></div></div>
          <div class="tip">观演须知</div>
        </div>
        <div class="moretickets-service">
          <div class="service-text">
            <div class="service-title">摩天轮服务保障</div>
            <div class="service-details">
              <span>票品保真</span>
              <span>假一赔三</span>
              <span>无票赔付</span>
            </div>
          </div>
          <img src="https://m.moretickets.com/images/icon/icon_bao-f2d94f8ee0.png" alt="">
        </div>
        <div class="moretickets-fornewUser">
          <div class="mf-text">
            新用户注册即送166元红包
            <div class="to-reg">
              立即领取
            </div>
          </div>

      </div>
      <div class="star-wrap">
        <div class="star" v-if="detailData.artists">
          <a href=""><img :src="detailData.artists[0].artistIcon" alt=""></a>
          <a href=""><div class="star-name">{{detailData.artists[0].artistName}}</div><div class="desc">{{detailData.artists[0].artistSummarize}}</div></a>
          <div class="btn-like">关注</div>
        </div>
      </div>
      <div class="content-detail">
        <div class="detail-title">
          节目详情
        </div>
        <div class="introuduce"
        v-html="detailData.content"
        >
          
        </div>        
      </div>


      </div>
      
    </div>
    <div class="detail_footer">
      <div class="customer-service"></div>
      <div class="customer-like"></div>
      <div class="buy-btn"><span>立即购票</span></div>
    </div>
      
  </div>
</template>

<script>
import { get } from '../utils/http.js'
export default {
  data(){
    return{
      detailData:{}
    }
  },
  async mounted(){
    console.log(this.$route.query.data)
    let id = this.$route.query.data
    let result = await get({
      url:'/showapi/pub/show/'+ id
    })
    console.log(result.data.result.data)
    this.detailData = result.data.result.data

  },
  methods:{
    backRouter(){
      this.$router.back(-1)

    }
  }

}
</script>

<style lang="stylus" scoped>
.detail_wrap{
  width 100%
  height 100%
  .detail_header{
    width 100%
    height .5rem
    position: relative;
    background-color: #fff;
    z-index: 8888;
    font-size: .15rem;
    border-bottom: 1px solid #eaeaeb;
    background #ffffff
    display flex
    justify-content center
    h2{
        font-weight normal
        align-self center
        font-size .16rem 
        
    }
    .prevTopage{
        position absolute
        left 0
        top 0
        width: .26rem;
        background: url(https://m.moretickets.com/images/mtl/mtl_spites-e73a2c314d.fw.png) 7px -54px no-repeat;
        height: .25rem;
        margin: .12rem 0 0 .1rem;
        background-size: 210px 210px;
        
    }
    

  }
  .detail_main{
    height calc(100% - 1.12rem)
    width 100%
    overflow-y scroll
    .detail-poster{
      width: 100%;
      position: relative;
      padding: .23rem .18rem 0 .18rem;
      box-sizing border-box
      .poster-background{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          filter: blur(40px);
          transform: scale(1.5)
        }
      }
      .postershow{
        width 100%
        display flex
        justify-content space-between
        position relative
        

        img{
          
          width: .892rem;
          min-width: .892rem;
          height: 1.25rem;
          z-index: 100;
          
          border-radius: 4px;
        }
        .show-info{
          width 2.3rem
          z-index 100
          display flex
          justify-content space-between
          flex-direction column
          height 1.25rem
          box-sizing border-box
          .show-title{
            width: 100%;
            line-height: 1.4;
            font-size: .14rem;
            color: #fff;
            font-weight: 700;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
          }
          .show-price{
            color: #ff4655;
            font-size .11rem
            font-weight: 700;
            span {
              font-size: 18px;
            }
          }

        }
      }

    }
    .show-detail{
      box-sizing border-box
      position: relative;
      margin-top: -.25rem;
      padding: .3rem .18rem 0 .18rem;
      background-color: #fff;
      z-index: 99;
      border-radius: .1rem .1rem 0 0;
      .show-detail-info{
        width: 100%;
        padding: .183rem 0;
        padding-bottom: 0rem;
        font-size: .13rem;
        .show-time{
          padding-left: 22px;
          padding-bottom: 15px;
          color: #2d2d2d;
          font-size: 16px;
          font-weight: 700;
          background-repeat: no-repeat,no-repeat;
          background-position: left 4px,right 4px;
          background-size: 14px auto,7px auto;
          background-image url(https://m.moretickets.com/images/icon/icon_date-e8e802975b.png)
        }
        .show-address{
          background-image url(https://m.moretickets.com/images/icon/icon_location-797b454f26.png)
          padding-left: 22px;
          padding-bottom: 15px;
          color: #2d2d2d;
          font-size: 16px;
          font-weight: 700;
          background-repeat: no-repeat,no-repeat;
          background-position: left 4px,right 4px;
          background-size: 14px auto,7px auto;
          .detail-address{
            display flex
            flex-direction column
            .address-title{
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              color: #2d2d2d;
              font-size: 16px;
              font-weight: 700;
            }
            .address-value{
              padding-top: 4px;
              color: #95949d;
              font-size: 13px;
              font-weight: 400;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }
        .tip{
          background-image: url(https://m.moretickets.com/images/icon/icon_list-85b627a8c8.png),url(https://m.moretickets.com/images/icon/right-forward-650d9063f8.png);
          padding-left: 22px;
          padding-bottom: 15px;
          color: #2d2d2d;
          font-size: 16px;
          font-weight: 700;
          background-repeat: no-repeat,no-repeat;
          background-position: left 4px,right 4px;
          background-size: 14px auto,7px auto;
          box-sizing border-box
        }
      }
      .moretickets-service{
        width 100%
        padding-top .125rem
        font-size .13rem
        display flex
        justify-content space-between
        .service-text{
          .service-title{
            box-sizing border-box
            font-size: 16px;
            font-weight: 700;
          }
          .service-details{
            padding-top .05rem
            span {
              padding-left: .15rem;
              padding-right: .1rem;
              background-image: url(https://m.moretickets.com/images/icon/icon_ok-083a73e5f6.png);
              background-repeat: no-repeat;
              background-size: .1rem;
              background-position: left;
              white-space: nowrap;
            }
          }
        }
        img{
          display block
          max-width: .267rem;
          height .32rem
          align-self center
        }
      }
      .moretickets-fornewUser{
        width: 100%;
        padding: .183rem 0;
        padding-bottom: 0rem;
        font-size: 13px;
        .mf-text{
          background: url(https://m.moretickets.com/images/new-user/new-user-gift_1-c211c4651a.png) no-repeat .1rem center;
          background-size: .28rem;
          background-color: #fff;
          animation: animate 2.5s infinite;
          border: 1px solid #eaeaeb;
          height: .433rem;
          display: -ms-flexbox;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #323038;
          font-size: .14rem;
          padding-left: .46rem;
          border-radius: .05rem;
          box-shadow: 0rem 0.017rem 0.067rem 0rem rgba(0,0,0,.06)
          .to-reg{
            display: block;
            text-align: center;
            width: .55rem;
            height: .217rem;
            line-height: .209rem;
            font-size: 12px;
            border-radius: .108rem;
            background-color: rgba(255,70,85,.07);
            color: #ff1d41;
            margin-right: .1rem;
            border: 1px solid rgba(255,29,65,.3);
          }
        }
      }
      .star-wrap{
        width: 100%;
        padding: .183rem 0;
        font-size: 13px;
        display flex
        .star{
          width 100%
          display flex
          position relative
          a{
            display block
          }
          a:nth-of-type(1){
            img {
              width: .54rem;
              height: .54rem;
              border-radius: 50%;
            }
          }
          a:nth-of-type(2){
            padding-left: .1rem;
            height: .54rem;
            .star-name{
              font-size: 16px;
              font-weight: 700;
              line-height 1.7
              color #494949
            }
            .desc{
              color: #95949d;
              font-size: 13px;
              line-height 1.7
            }
          }
          .btn-like{
            display: inline-block;
            width: .7rem;
            height: .29rem;
            line-height: .29rem;
            text-align: center;
            color: #ff1d41;
            border-radius: .145rem;
            border: 1px solid #ff1d41;
            align-self center
            position absolute
            right .1rem
          }
        }
      }
      .content-detail{
        .detail-title{
          margin-top: .183rem;
          padding: .183rem 0;
          color: #323038;
          font-size: 20px;
          font-weight: 700;
          border-top: 1px solid #eaeaeb;
            
        }
        
        
        .introuduce{
          
          >>>img {
            width 3.4rem
            
          }
          >>>p{
            font-size .16rem
            line-height 1.5
          }
        }
      }
    }

  }
    
    

  .detail_footer{
    background #fff
    height .62rem
    width 100%
    display flex
    align-items center
    .customer-service{
      border-right: 1px solid #e4e4e4;
      width: .55rem;
      text-align: center;
      height .25rem
      background: url(https://m.moretickets.com/images/icon/customer-service-c22f897e4f.png) center center no-repeat;
      background-size: 22px 22px;

    }
    .customer-like{
      
      width: .55rem;
      text-align: center;
      height .25rem
      background: url(https://m.moretickets.com/images/icon/favorite-196c683d09.png) center center no-repeat;
      background-size: 22px 22px;

    }
    .buy-btn{
      padding-right: .09rem;
      display: flex;
      box-sizing border-box
      background-image: linear-gradient(287deg,#ff1d41,#ee0e87);
      color: #fff;
      line-height: .44rem;
      height: .44rem;
      font-size: .16rem;
      flex 1
      margin-right: .09rem;
      border-radius: .22rem
      justify-content center
      
    }
  }

}

</style>