<template>
  <div class="common-wrap">
      <main ref="mainscroll">
          <router-view></router-view>
      </main>
      <van-tabbar v-model="active" route active-color="#ff1d41">
        <van-tabbar-item
            replace
            to="/common/index" 
        >
            <span>精选</span>
            <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon_index.active : icon_index.inactive"
            >
        </van-tabbar-item>
        <van-tabbar-item
            replace
            to="/common/shows"
        >
            <span>演出</span>
            <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon_shows.active : icon_shows.inactive"
            >
        </van-tabbar-item>
        <van-tabbar-item
            replace 
            v-if="isLogin === true"
            to="/common/mine" 
        >
            <span>我的</span>
            <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon_mine.active : icon_mine.inactive"
            >
        </van-tabbar-item>
        <van-tabbar-item
            replace 
            v-if="isLogin === false"
            to="/login" 
        >
            <span>我的</span>
            <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon_mine.active : icon_mine.inactive"
            >
        </van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);
export default {
    data() {
    return {
      active: 0,
      icon_index: {
        active: 'https://m.moretickets.com/_nuxt/img/35f2215.png',
        inactive: 'https://m.moretickets.com/_nuxt/img/d919980.png',
      },
      icon_shows: {
        active: 'https://m.moretickets.com/images/bottom-tab/list-active-d90ccc2e14.png',
        inactive: 'https://m.moretickets.com/images/bottom-tab/list-ddc66f48b7.png',
      },
      icon_mine: {
        active: 'https://m.moretickets.com/images/bottom-tab/list-active-d90ccc2e14.png',
        inactive: 'https://m.moretickets.com/images/bottom-tab/mine-9d7cd31309.png',
      },
    isLogin : false 

    }
  }

}
</script>

<style lang='stylus' scoped>
.common-wrap{
    display flex
    flex-direction column
    height 100%
    width 100%
    main{
        background #fff
        height calc(100% - .5rem)
        overflow-y: scroll;
        >div{
          height 100%
        }
    }
    img{
        width .22rem
        height .22rem
    }
    
}



</style>