<template>
  <div class="shows-wrap">
    <div class="header-location_search">
      <div class="location_search">
        <div class="location" @click="linkTo_selectcity"><span>{{$store.state.cities.name}}</span></div>
        <div class="input-wrapper"
        @click="linkTo_search"
        >
          <van-search
            placeholder="搜索明星、演出、赛事、场馆"
            shape="round"
          >
          </van-search>
        </div>
      </div>
    </div>
    <div class="router-nav">
      <div class="routers-wrap">
        <ul class="routers">
          <router-link tag="li" to="/common/shows/1101-all" active-class="active">全部</router-link>
          <router-link tag="li" to="/common/shows/1101-concert" active-class="active">演唱会</router-link>
          <router-link tag="li" to="/common/shows/1101-opera" active-class="active">歌剧戏剧</router-link>
          <router-link tag="li" to="/common/shows/1101-match" active-class="active">体育赛事</router-link>
          <router-link tag="li" to="/common/shows/1101-concertt" active-class="active">音乐会</router-link>
          <router-link tag="li" to="/common/shows/1101-exhibition" active-class="active">展览休闲</router-link>
          <router-link tag="li" to="/common/shows/1101-dance" active-class="active">舞蹈芭蕾</router-link>
          <router-link tag="li" to="/common/shows/1101-parenting" active-class="active">儿童亲子</router-link>
          <router-link tag="li" to="/common/shows/1101-quyizatan" active-class="active">曲艺杂谈</router-link>
        </ul>
      </div>
      <div class="routers-menu-btn">
      </div>
    </div>
    <div class="kindsOfshows-wrap">
      <router-view></router-view>

    </div>
    
  </div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';
Vue.use(Search);
export default {
  methods:{
    linkTo_selectcity(){
      this.$router.push('/selectcity')
    },
    linkTo_search(){
      this.$router.push('/search')
    }
  },
  

  watch:{
    $route(to,from){
      
    }
  }

}
</script>

<style lang="stylus" scoped>

.shows-wrap{
  width 100%
  .header-location_search{
    width: 100%;
    background: #fff;
    height: .44rem;
    
    .location_search{
      align-items: center;
      display: flex;
      .location{
        font-size: 15px;
        font-weight: 700;
        height: 100%;
        color: #323038;
        padding-left: .18rem;
        padding-right: .125rem;
        span{
          line-height: .44rem;
          padding-left: .18rem;
          background-image: url(https://m.moretickets.com/images/icon/icon_loc_red-ebe5989d33.png);
          background-repeat: no-repeat;
          background-position: left;
          background-size: 14px;
          font-size: 15px;
          font-weight: 700;
        }
      }
      .input-wrapper{
        z-index: 100;
        height: .275rem;
        line-height: .275rem;
        color: #fff;
        border-radius: .14rem;
        background-color: #f4f4f5;
        display: flex;
        position: relative;
        flex 1
        width 100%
        .van-search{
          width 100%
          
        }
      }

    }
  }
  .router-nav{
    width 100%
    box-sizing: border-box;
    transition: opacity .5s;
    position relative
    .routers-wrap{
      width 90%
      background: #fff;
      height: .5rem;
      line-height: .5rem;
      overflow-x scroll
      .routers{
        height 100%
        display flex
        li{
          color: #95949d;
          font-size: 15px;
          padding-left: .18rem;
          height: 100%;
          text-align: center;
          white-space: nowrap;
          box-sizing border-box
          &.active{
            color: #323038;
            font-size: 24px;
            font-weight: 700;
            border-bottom solid #000 2.5px
            padding-left 0
            margin-left .18rem
          }

        }
      }
    }
    .routers-menu-btn{
      width .36rem
      height .24rem
      position absolute
      right 0
      top .12rem
      background-image: url(https://m.moretickets.com/images/icon/icon_menu-40783d9b7f.png);
      background-size: .267rem;
      background-repeat: no-repeat;
      background-position: left;
      background-color: #fff;
    }
  }
  .kindsOfshows-wrap{
    box-sizing border-box
    width: 100%;
    padding: 0 .18rem;
    height calc(100% - .94rem)
    position: relative;
    z-index: 1000;
    overflow-y scroll
  }
}

</style>