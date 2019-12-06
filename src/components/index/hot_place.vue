<template>
  <div>
      <div class="place_wrap">
          <div class="scroll_wrap">
              <div class="place_container" v-for="value in places_info">
                  <div class="room" >
                      <div class="place-text">
                          <div class="place-name">{{value.title}}</div>
                          <div class="place-detail">共{{value.shownums}}场演出</div>
                      </div>
                      <div class="place-shows">
                          <div class="show-detail" v-for="show in value.shows">
                              <div class="discount">
                                  <div class="discount-value">{{show.discount}}</div>折起
                              </div>
                              <div class="show-viewer">
                                  <img :src="show.show_poster" alt="">
                              </div>
                              <div class="show-text">
                                  <div class="show-title">{{show.show_title}}</div>
                                  <div class="show-time">{{show.show_time}}</div>
                              </div>
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
            places_info:{
                '繁星':{
                    title:'繁星戏剧村1039剧场（壹剧场）',
                    shownums:'3',
                    shows:{
                        show1:{
                            show_poster:'https://img1.tking.cn/assets/img/zHMczb8fYA_.jpg',
                            show_title:'繁星戏剧 情感喜剧《爱在无爱城》第七轮',
                            show_time:'10.31-11.24',
                            discount:'8.2'
                        },
                        show2:{
                            show_poster:'https://img2.tking.cn/assets/img/MJGeT428Fy_.jpg',
                            show_title:'繁星戏剧 人间喜剧《我是余欢水》第八轮',
                            show_time:'11.28-12.15',
                            discount:'9.3'
                        }

                    }
                },
                '天桥艺术中心-大':{
                    title:'天桥艺术中心——大剧场',
                    shownums:'7',
                    shows:{
                        show1:{
                            show_poster:'https://img0.tking.cn/assets/img/dxzwe34w8S_.jpg',
                            show_title:'托尼奖史诗音乐剧《泰坦尼克号》',
                            show_time:'11.12-11.24',
                            discount:'4.8'
                        },
                        show2:{
                            show_poster:'https://img1.tking.cn/assets/img/NZ5iKhSzRC_.jpg',
                            show_title:'【限量6折起】纽约体验式大秀《蓝人秀》',
                            show_time:'11.27-12.08',
                            discount:'6.1'
                        }

                    }
                },
                '天桥艺术中心-中':{
                    title:'天桥艺术中心——中剧场',
                    shownums:'9',
                    shows:{
                        show1:{
                            show_poster:'https://img0.tking.cn/assets/img/3sTFSTAANx_.jpg',
                            show_title:'音乐剧《故宫里的大怪兽之吻兽使命》',
                            show_time:'11.23-11.24',
                            discount:'2.9'
                        },
                        show2:{
                            show_poster:'https://img1.tking.cn/assets/img/nbAhTMydXH_.jpg',
                            show_title:'俄罗斯皇家芭蕾舞剧《天鹅湖》',
                            show_time:'12.14-12.15',
                            discount:'8.4'
                        }

                    }
                },
                '五棵松体育馆':{
                    title:'华熙LIVE凯迪拉克中心(原五棵松体育馆)',
                    shownums:'2',
                    shows:{
                        show1:{
                            show_poster:'https://img1.tking.cn/assets/img/4D7YDjeTKM_.jpg',
                            show_title:'绝色莫文蔚巡回演唱会2019巅峰之旅',
                            show_time:'11.24 18:30',
                            discount:'9.7'
                        },
                        show2:{
                            show_poster:'https://img2.tking.cn/assets/img/sjhEhTNeak_.png',
                            show_title:'伍佰&China Blue Rock Star 2019演唱会',
                            show_time:'12.28 19:00',
                            discount:'9.8'
                        }

                    }
                },
                '世纪剧院':{
                    title:'世纪剧院',
                    shownums:'3',
                    shows:{
                        show1:{
                            show_poster:'https://img0.tking.cn/assets/img/KRhRFSYPnD_.jpg',
                            show_title:'原版音乐剧史诗巨制《艾薇塔》Evita',
                            show_time:'11.22-11.28',
                            discount:'4.8'
                        },
                        show2:{
                            show_poster:'https://img1.tking.cn/assets/img/rEdcKkpD8k_.jpg',
                            show_title:'世界经典原版音乐剧《猫》CATS',
                            show_time:'07.03-07.09',
                            discount:'9.0'
                        }

                    }
                },
                '国家大剧院':{
                    title:'国家大剧院——戏剧场',
                    shownums:'3',
                    shows:{
                        show1:{
                            show_poster:'https://img0.tking.cn/assets/img/Jf5FXJsZKC_.jpg',
                            show_title:'国家大剧院制作莫扎特歌剧《费加罗的婚礼》 ',
                            show_time:'11.24-11.30',
                            discount:'8.3'
                        },
                        show2:{
                            show_poster:'https://img0.tking.cn/assets/img/TQWQ6abmDM_.jpg',
                            show_title:'庆祝新中国成立70周年：国家大剧院与广州话剧艺术中心联合制作原创话剧《林则徐》',
                            show_time:'12.14-12.20',
                            discount:'7.5'
                        }

                    }
                },

            }
        }
    },
    

}
</script>

<style lang='stylus' scoped>
.place_wrap{
    width 100%
    padding-top .16rem
    .scroll_wrap{
      margin-right -.22rem
      display flex
      overflow-x scroll
      .place_container{
          
          margin-right .08rem
          .room{
              box-sizing border-box
              border-radius .06rem
              height 2.56rem
              border solid .01rem #dddddd
              padding .16rem .14rem
              .place-text{
                 
                 
                  padding-bottom .18rem
                  .place-name{
                      font-size: .12rem;
                      color: #95949d;
                      line-height: .22rem;
                      
                      padding-bottom: .03rem;
                      color: #323038;
                      font-size: .16rem;
                      position: relative;
                      font-weight 700
                      white-space: nowrap;
                      text-overflow ellipsis
                      overflow hidden
                      width 1.91rem
                      

                  }
                  .place-detail{
                      font-size .1rem

                  }
              }
              .place-shows{
                  width 100%
                  display flex
                  .show-detail:nth-of-type(1){
                      margin-right .08rem
                  }
                  .show-detail{
                      width .91rem
                      height .08rem
                      position relative
                      .show-viewer{
                          img {
                              width .91rem
                              height 1.27rem
                              border-radius .04rem
                          }
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
                        font-size: .19rem
                        line-height: .16rem;
                        }

                      }                      
                  
                    .show-text{
                        position relative
                        width 100%
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
                    }
                  }
              }

          }

      }
    }
}

</style>