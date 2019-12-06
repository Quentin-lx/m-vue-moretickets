<template>
  <div>
    <div class="seven_wrap">
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
        '孩子梦':{
          poster : 'https://img1.tking.cn/assets/img/kn8XCnpp7F_.jpg',
          discount : '2.6',
          title : '2019第三届老舍戏剧节 汉诺赫•列文编剧作品《孩子梦》',
          time : '11.16-11.17',
          price : '59'
        },
        '泰坦尼克号':{
          poster : 'https://img0.tking.cn/assets/img/dxzwe34w8S_.jpg',
          discount : '4.8',
          title : '托尼奖史诗音乐剧《泰坦尼克号》',
          time : '11.12-11.24',
          price : '118'
        },
        '安尼施·卡普尔':{
          poster : 'https://img0.moretickets.com/zbf/assets/img/fH3ya42xGx_.jpeg',
          discount : '9.0',
          title : '【9折特惠】安尼施·卡普尔',
          time : '10.25-01.01',
          price : '60'
        },
        '达芬奇':{
          poster : 'https://img0.moretickets.com/zbf/assets/img/G6TmeXJmeJ_.jpeg',
          discount : '7.5',
          title : '【双十一特惠】达·芬奇与他的艺术群体',
          time : '09.12-12.08',
          price : '68'
        },
        '莫文蔚':{
          poster : 'https://img1.tking.cn/assets/img/4D7YDjeTKM_.jpg',
          discount : '',
          title : '绝色莫文蔚巡回演唱会2019巅峰之旅',
          time : '11.24 18:30',
          price : '632'
        },
        '马克西姆':{
          poster : 'https://img1.tking.cn/assets/img/WenDaY5Cwj_.jpg',
          discount : '',
          title : '2019马克西姆跨界钢琴演奏会',
          time : '11.23 19:30',
          price : '1016'
        },
        '京剧串烧':{
          poster : 'https://img1.tking.cn/assets/img/t2XZZHZKP4_.jpg',
          discount : '1.5',
          title : '梨园剧场京剧串烧',
          time : '10.31-11.30',
          price : '44'
        },
        'cba':{
          poster : 'https://img0.tking.cn/assets/img/nkzDTzQWj5_.png',
          discount : '',
          title : '2019-2020赛季CBA联赛常规赛北京首钢主场比赛 北京首钢VS北京控股 ',
          time : '11.20 19:35',
          price : '105'
        },
        '曹云金':{
          poster : 'https://img0.moretickets.com/zbf/assets/img/aZTr6nazYi_.jpeg',
          discount : '',
          title : '曹云金实力代言——不一样的喜聚现场（第二轮）',
          time : '11.18-11.30',
          price : '59'
        },
        '陈鸿宇':{
          poster : 'https://img2.tking.cn/assets/img/dTzfDf4QWw_.jpg',
          discount : '8.4',
          title : '陈鸿宇“理想三旬”2019工体演唱会',
          time : '11.23 19:00',
          price : '458'
        },

      }

    }
  }

}
</script>

<style lang='stylus' scoped>
.seven_wrap{
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