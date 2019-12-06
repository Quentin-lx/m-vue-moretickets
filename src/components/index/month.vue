<template>
  <div>
    <div class="month_wrap">
      <div class="scroll_wrap">
        <div class="show_container"v-for="value in shows_info">
          <div class="poster">
            <img :src="value.poster" alt="">
          </div>
          <div class="discount" v-if="value.discount !== ''">
            <div class="discount-value">{{value.discount}}</div>折起
          </div>
          <div class="show-text">
            <div class="show-title">{{value.title}}</div>
            <div class="show-time">{{value.time}}</div>
            <div class="show-price"><div class="price-value">{{value.price}}</div>元起</div>
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
      shows_info:{
        '重喜剧':{
          poster : 'https://img0.moretickets.com/zbf/assets/img/AZNBAhrrXx_.jpeg',
          discount : '6.0',
          title : '重喜剧《你若安好，那还得了》',
          time : '11.20-12.01',
          price : '72'
        },
        '莫文蔚':{
          poster : 'https://img1.tking.cn/assets/img/4D7YDjeTKM_.jpg',
          discount : '',
          title : '绝色莫文蔚巡回演唱会2019巅峰之旅',
          time : '11.24 18:30',
          price : '632'
        },
        '中超联赛':{
          poster : 'https://img0.tking.cn/assets/img/SQzncRfMbQ_.png',
          discount : '',
          title : '2019马克西姆跨界钢琴演奏会',
          time : '12.01 15:00',
          price : '175'
        },
        '京剧串烧':{
          poster : 'https://img1.tking.cn/assets/img/t2XZZHZKP4_.jpg',
          discount : '1.5',
          title : '梨园剧场京剧串烧',
          time : '10.31-11.30',
          price : '44'
        },
        '正经疯人院':{
          poster : 'https://img0.moretickets.com/zbf/assets/img/8HRKYEEnHb_.jpeg',
          discount : '',
          title : '正经疯人院',
          time : '11.01-02.17',
          price : '88'
        },
        '曹云金':{
          poster : 'https://img0.moretickets.com/zbf/assets/img/aZTr6nazYi_.jpeg',
          discount : '',
          title : '曹云金实力代言——不一样的喜聚现场（第二轮）',
          time : '11.18-11.30',
          price : '59'
        },
        '国家大剧院':{
          poster : 'https://img1.tking.cn/assets/img/C3xTjwSdmz_.png',
          discount : '6.1',
          title : '2019国家大剧院舞蹈节：马林斯基剧院芭蕾舞团《堂吉诃德》',
          time : '11.23 19:00',
          price : '205'
        },
        '好莱坞':{
          poster : 'https://img0.tking.cn/assets/img/X2hiAADhhz_.jpg',
          discount : '8.5',
          title : '好莱坞经典电影金曲交响音乐会',
          time : '11.24 19:30',
          price : '100'
        },

      }

    }
  }

}
</script>

<style lang='stylus' scoped>
.month_wrap{
  width 100%
  padding-top .16rem
  .scroll_wrap{
    margin-right -.22rem
    display flex
    overflow-x scroll
    .show_container{
      width 1.05rem
      margin-right .08rem
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
          font-size: .19rem
          line-height: .16rem;
        }
        
      }
      .poster{
        width 1.05rem
        height 1.47rem
        img{
          width 100%
          height 100%
          border-radius .04rem
        }
      }
      .show-text{
        width 100%
        position relative
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
        }
        .show-time{
          color: #95949d;
          font-size: .12rem;
          padding: .02rem 0;
        }
        .show-price{
          color: #ff4655;
          line-height: .19rem;
          font-size: .1rem;
          .price-value{
            display: inline-block;
            font-size: .18rem;
            padding-right: .02rem;
          }
        }
      }
    }
  }

}


</style>