<template>
  <div class="index-wrap" >
      <div class="header-section">
        <van-sticky :offset-top="0" @scroll="scrollEvent">
          
        <div :class="{'location_search-wrap':activefixed,stickystyle:activesticky}"  >
          
            
              <div :class="{'location_search':true,stickychildstyle:childactivesticky}" >
                <div class="location" @click="linkTo_selectcity"><span>{{$store.state.cities.name}}</span></div>
                <div class="input-wrapper" @click="linkTo_search">
                  <van-search placeholder="请输入搜索关键词"  class="ipt-search" background="#fff"/>
                </div>
              </div>
           
          
        </div>
         
          </van-sticky>
        <div class="hot_wrap">
          <div class="hot-search">
            <span>热搜:</span>
            <div class="hot-keys">
              <span>暗恋桃花源</span>
              <span>莫文蔚</span>
              <span>陈鸿宇</span>
              <span>安尼施卡普尔</span>
            </div>
          </div>
        </div>
        <swiper :options="swiperOption" ref="mySwiper" >
          <!-- slides -->
          <swiper-slide><img src="https://img1.tking.cn/assets/img/WwKYGHKQBS_.png" alt="" ></swiper-slide>
          <swiper-slide><img src="https://img2.tking.cn/assets/img/w4Nd2hph6x_.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://img0.tking.cn/assets/img/axa5cwZYpG_.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://img0.tking.cn/assets/img/Xzb7mH2Z4Z_.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://img0.tking.cn/assets/img/MQTEdhSC3G_.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://img0.tking.cn/assets/img/RezdbMc8Y8_.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="https://img0.tking.cn/assets/img/hBBb5KrPcF_.jpg" alt=""></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          
          <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
    </div>
    <div class="modules_wrap">
      <div class="modules">
        <div class="mline1">
          <span style="background-image:url(https://img2.tking.cn/assets/img/4NhSXpiZd6_.png);color:#000000;">演唱会</span>
          <span style="background-image:url(https://img0.tking.cn/assets/img/kh338wBpbz_.png);color:#000000;">话剧歌剧</span>
          <span style="background-image:url(https://img0.tking.cn/assets/img/3kbc2Rr3K5_.png);color:#000000;">体育赛事</span>
          <span style="background-image:url(https://img2.tking.cn/assets/img/EaaPtMGBzE_.png);color:#000000;">音乐会</span>
        </div>
        <div class="mline2">
          <span style="background-image:url(https://img0.tking.cn/assets/img/5AziMWNh6e_.png);color:#000000;">展览休闲</span>
          <span style="background-image:url(https://img1.tking.cn/assets/img/XC37yzix7E_.png);color:#000000;">芭蕾舞蹈</span>
          <span style="background-image:url(https://img0.tking.cn/assets/img/WySfiMXK5E_.png);color:#000000;">儿童亲子</span>
          <span style="background-image:url(https://img1.tking.cn/assets/img/M3f7Z7CmhH_.png);color:#000000;">曲艺杂谈</span>
        </div>
      </div>
    </div>
    <div class="advertisement_wrap">
      <div class="advertisement">
        <img src="https://img2.tking.cn/assets/img/xm2JKJE3TC_.gif" alt="">
      </div>
    </div>
    <div class="promises_wrap">
      <div class="promises">
        <img src="../assets/promises.png" alt="">
        <span class="title">服务保障</span>
        <span class="promise">票品保真</span>
        <span class="promise">假一赔三</span>
        <span class="promise">无票赔付</span>
      </div>
    </div>
    <div class="floors">
      <div class="rencent_hot common-module">
        <div class="rh_header">
          <h2>近期热门</h2>
          <div class="show-more">全部 ></div>
        </div>
        <rencentcomp>
        </rencentcomp>
      </div>
      <div class="seven_month common-module">
        <div class="sm_header">
          <div class="sm_btn">
          <button
            v-for=" (value,comp) in comps "
            :key="comp"
            v-on:click="currentcomp = comp"
            :class="{ active_btn:currentcomp === comp }"
          >{{value}}</button>
        </div>
        <div class="show-more">全部 ></div>
        </div>
        <component
          :is="current"
        >
          
        </component>

      </div>
      <div class="heavy_show common-module">
        <div class="hs_header">
          <h2>重磅呈现</h2>
          <div class="show-more">全部 ></div>
        </div>
        <heavycomp>
        </heavycomp>
      </div>
      <div class="show_star">
        <component
        :is="currentrank" 
        @currentRC= "listen"
        >
        </component>

      </div>
      <div class="hot_place common-module">
        <div class="hp_header">
          <h2>热门场馆</h2>
          <div class="show-more">全部 ></div>
        </div>
        <placecomp>
        </placecomp>
      </div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Search,Sticky } from 'vant';
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import rencentcomp from '../components/index/rencent_hot.vue'
import sevencomp from '../components/index/seven.vue'
import monthcomp from '../components/index/month.vue'
import heavycomp from '../components/index/heavy_show.vue'
import show_rankcomp from '../components/index/show_rank.vue'
import star_rankcomp from '../components/index/star_rank.vue'
import placecomp from '../components/index/hot_place.vue'

Vue.use(Sticky);
Vue.use(Search);
export default {
  
  components: {
    swiper,
    swiperSlide,
    sevencomp,
    monthcomp,
    rencentcomp,
    heavycomp,
    show_rankcomp,
    star_rankcomp,
    placecomp
  },
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        loop: true, // 循环模式选项
        autoplay: true,
        effect: 'slider',
        autoplay:{
            disableOnInteraction:false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      currentcomp:'sevencomp',
      comps:{
        'sevencomp':'七天精选',
        'monthcomp':'月度看点',
      },
      currentrankcomp:'show_rankcomp',

      activesticky:false,
      activefixed:true,
      childactivesticky:false
      
    }
  },
  computed: {

    swiper() {
      return this.$refs.mySwiper.swiper
    },
    current(){
      return this.currentcomp
    },
    currentrank(){
      
      return this.currentrankcomp
    },
    
    
  },
  methods:{
    listen(data){
      this.currentrankcomp = data
      
    },
    
    linkTo_selectcity(){
      this.$router.push('/selectcity')
    },
    linkTo_search(){
      this.$router.push('/search')
    },
    
    scrollEvent(){
      this.activesticky = false
      this.activefixed = true
      this.childactivesticky = false
      this.$nextTick(()=>{
        if(this.$parent.$refs.mainscroll.scrollTop > 12){
        this.activesticky = true
        this.activefixed = false
        this.childactivesticky = true
      }
      })
     
      
      
      
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }

}
</script>


<style lang='stylus' scoped>
.stickychildstyle{
  border-radius .2rem!important
  height .35rem!important
  align-self center
}
.van-sticky--fixed{
  display flex
  justify-content center
}
.index-wrap{
  width 100%
  height auto
  .header-section{
    box-sizing border-box
    padding-top .12rem
    width 100%;
    height 2.15rem
    background: rgb(105, 80, 170)
    position relative 
    .stickystyle{
      background: rgb(105, 80, 170)
      z-index 9999
     
      width 100%
      height .44rem
      display flex
      justify-content center
      
    }
    .location_search-wrap{
      background: rgb(105, 80, 170)
      z-index 9999
      padding-bottom .1rem
      width 100%
      height .44rem
      display flex
      justify-content center
    }
      .location_search{
        width 3.31rem
        height 100%
        background #fff
        display flex
        border-radius .05rem
        padding-left .12rem
        .location{
          font-weight: 700;
          background: url(https://m.moretickets.com/_nuxt/img/7beda2a.png) no-repeat left center;
          background-size: .22rem .22rem;
          white-space: nowrap;
          display flex
          align-items center
          span{
            padding-right: .2rem;
            padding-left: .22rem;
            border-right: 1px solid rgba(0,0,0,.1);
          }
        }
        .input-wrapper{
          width 2.47rem
          height 100%
          display flex
          align-items center 
          border none
          .ipt-search{
            background #fff
            width 100%;
            height .2rem
            
          }
        }
        
      }
    
    .hot_wrap{
      width 100%
      height .16rem
      display flex
      justify-content center
      .hot-search{
        width 3.31rem
        height 100%
        background  url(../assets/hot.png) no-repeat 0;
        background-size: .1rem .1rem;
        color: #fff;
        padding-left: .15rem;
        box-sizing: border-box;
        font-size: .12rem;
        white-space: nowrap;
        overflow: hidden;
        display flex
        >span{
          opacity .6
        }
        .hot-keys{
          >span{
            padding 0 .05rem
          }
        }
      }
    }
    .swiper-container{
      width 3.31rem
      height 1.33rem
      display flex
      justify-content center
      position: relative;
      top: .15rem;

      .swiper-wrapper{
        
        img{
          width 3.31rem
          height 1.33rem
          border-radius .05rem
        }
      }
    }
  }
  .modules_wrap{
    width: 3.31rem;
    padding-top: .15rem;
    margin: 0 auto;
    position: relative;
    z-index: 6;
    .modules{
      .mline1,.mline2{
        padding-top: .15rem;
        display: flex;
        justify-content: space-around;
        font-size: .12rem;
        span{
          flex: 1;
          height: .6rem;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          background-position: top;
          background-size: .4rem .4rem;
          background-repeat: no-repeat;
        }
      }
    } 
  }
  .advertisement_wrap{
    width 100%
    padding-top: .15rem;
    .advertisement{
      img{
        margin: 0 auto;
        display: block;
        max-width: 100%;
      }
    }
  }
  .promises_wrap{
    width 100%
    padding-top .15rem
    .promises{
      width 3.31rem
      margin 0 auto
      box-sizing: border-box;
      background: #f8f8f8;
      padding 0 .1rem
      height .34rem
      display flex
      justify-content left
      align-items center 
      img{
        width .13rem
        height .13rem
      }
      span{
        font-size .12rem
      }
      .title{
        padding 0 .1rem
        color #68676c
      }
      .promise{
        flex 1
        text-align center
        color #807e8c
      }
    }
  }
  .floors{
    width 100%
    
    display flex
    flex-direction column
    
    .common-module{
      align-self center
      width 3.31rem
      padding-top .4rem
    }
    .rencent_hot{
      .rh_header{
        width 100%
        display flex
        justify-content space-between
        align-items flex-end
        h2{
          font-size .2rem
        }
        .show-more{
          font-size .14rem
        }
      }

    }
    .seven_month{
      
      .sm_header{
        width 100%
        display flex
        justify-content space-between
        align-items center
        .sm_btn{
          button{
            background #fff
            border none 
            font-size .14rem
            color #95949D
            box-sizing border-box
          }
          button:nth-of-type(2){
            margin-left .15rem
          }  
          .active_btn{
            border-bottom .02rem solid #000
            font-weight 700
            font-size .2rem 
            color #000
            padding-bottom .05rem
          }
          
        }
      }
    }
    .heavy_show{
      
      .hs_header{
        width 100%
        display flex
        justify-content space-between
        align-items flex-end
        h2{
          font-size .2rem
        }
        .show-more{
          font-size .14rem
        }
      }
    }
    .show_star{
      width 100%
      padding-top .4rem
    }
    .hot_place{
      .hp_header{
        width 100%
        display flex
        justify-content space-between
        align-items flex-end
        h2{
          font-size .2rem
        }
        .show-more{
          font-size .14rem
        }
      }
    }


  } 
}


</style>