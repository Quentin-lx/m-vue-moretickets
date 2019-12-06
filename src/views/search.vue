<template>
  

  <div class="search-wrap">
      <div class="ipt-search">
          <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            shape="round"
            @input="getValue(value)"
            @clear="clearValue()"
            >
            <div slot="action" style="font-weight:700"
            @click="linkTo_back"
            >取消</div>
          </van-search>

      </div>
      <div class="hot_history"
      v-if="searchAction === false"
      >
        <div class="history-search">
        <h2>历史搜索<div class="delete-icon"></div></h2>
        <div class="history-wrap">
          <div class="nores"
          v-if="!searched"
          >暂无历史记录</div>
          <div class="history-detail"
          v-for="(value,index) in searched"
          :key="index"
          >
            {{value}}
          </div>
        </div>
        </div>
        <div class="hot-search">
          <h2>热门搜索</h2>
          <div class="hot-wrap">
            <div class="hot-detail" 
            v-for="(value,index) in hotSearch"
            :key="index"
            @click="addToRencent(value.keyword)"
            >
              {{value.keyword}}
            </div>
          </div>
        </div>
      </div>
      <div class="search-result"
      v-if="searchAction === true"
      >
        <div class="search-shows" 
        v-for="value in searchResult"
        :key="value.showOID"
        >
          <div class="shows-title">{{value.showName}}</div>
          <div class="address_time">
            <div class="shows-address">{{value.venueName}}</div>
            <div class="shows-time">{{value.showDate}}</div>
          </div>
        </div>
      </div>
      
  </div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';
Vue.use(Search);
import { get } from '../utils/http.js'
import store from 'store'
import _ from 'lodash'
// import { async } from 'q';

export default {

  data(){
    return{
      value:"",
      searchResult:[],
      hotSearch:[],
      
    }
  },
  created(){
    this.searchAction = false
    this.searched = store.get('rs')
    
    // this.searchEvent = _.throttle(this.getValue,1000)

  },
  async mounted(){

    let result = await get({
      url:'/userdataapi/keywords',
      
    })
    console.log(result.data.result.data)
    this.hotSearch = result.data.result.data
    
  },
  methods:{
    linkTo_back(){
      this.$router.back(-1)
    },
    // async getValue(keyword){
    //   this.searchAction = true
    //   let result = await get({
    //     url:'/showapi/page/index',
    //     params:{
    //       offset:0,
    //       length:10,
    //       keyword
    //     }
    //   })
      
    //   this.searchResult = result.data.result.data
    //   console.log(this.searchResult)
    // },
    getValue:_.throttle(async function(keyword){
      this.searchAction = true
      let result = await get({
        url:'/showapi/page/index',
        params:{
          offset:0,
          length:10,
          keyword
        }
      })
      this.searchResult = result.data.result.data
      console.log(this.searchResult)
    },2500),
    clearValue(){
      this.searchAction = false
    },
    addToRencent(value){
      let rencentSearch = store.get('rs') || []
      rencentSearch.push(value)
      store.set('rs', _.uniq(rencentSearch))



    }
  }

}
</script>

<style lang="stylus" scoped>
.search-wrap{
    width 100%
    height 100%
    display flex
    flex-direction column
    .ipt-search{
      width 100%

    }
    .hot_history{
      height calc(100% - .54rem)
      background #fff
      .history-search{
        width 100%
        h2{
          height: .58rem;
          color: #000;
          line-height: .58rem;
          padding-left: .18rem;
          background-color: #fff;
          font-size: .16rem;
          font-weight: 700;
          box-sizing border-box
          display flex
          justify-content space-between
          .delete-icon{
            width: .22rem;
            height: .22rem;
            text-align: center;
            background: url(https://m.moretickets.com/images/icon/delete-icon-749cf23739.png) no-repeat center;
            background-size: .22rem;
            margin-top: .18rem;
            margin-right: .18rem;

          }
        }
        .history-wrap{
          box-sizing border-box
          background-color: #fff;
          overflow: hidden;
          padding-bottom: .1rem;
          padding-left: .18rem;
          .history-detail{
            box-sizing border-box
            padding: .07rem .15rem;
            border-radius: 4px;
            border: .5px solid #eaeaeb;
            display: inline-block;
            margin-top: .1rem;
            margin-right: .1rem;
            margin-bottom: 0;
            color: #323038;

          }

        }
    }
      .hot-search{
        h2{
          height: .58rem;
          color: #000;
          line-height: .58rem;
          padding-left: .18rem;
          background-color: #fff;
          font-size: .16rem;
          font-weight: 700;
          box-sizing border-box
        }
        .hot-wrap{
          box-sizing border-box
          background-color: #fff;
          overflow: hidden;
          padding-bottom: .1rem;
          padding-left: .18rem;
          
          .hot-detail{
            box-sizing border-box
            padding: .07rem .15rem;
            border-radius: 4px;
            border: .5px solid #eaeaeb;
            display: inline-block;
            margin-top: .1rem;
            margin-right: .1rem;
            margin-bottom: 0;
            color: #323038;

          }
        }
          

      }

    }
    .search-result{
      box-sizing border-box
      min-height: 0;
      overflow-y: auto;
      width: 100%;
      padding: 0 .18rem;
      flex: 1;
      display: block;
      position: relative;
      z-index: 1000;
      background-color: #fff;
      overflow-x: hidden;
      .search-shows{
        box-sizing: border-box
        width: 100%;
        padding: .12rem 0;
        overflow: hidden;
        border-bottom: 1px solid #e4e4e4;
        position: relative;
        .shows-title{
          color: #131313;
          font-size: .14rem;
          line-height: .2rem;
          max-height: .4rem;
          margin-bottom: .08rem;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .address_time{
          display flex
          justify-content space-between
          .shows-address{
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            display: inline-block;
            vertical-align: top;
            width: 38%;
          }
          .shows-time{
            width 38%
            font-size: .12rem;
            color: #aaa;
            line-height: .15rem;
            text-align right 
          }
        }

      }
    }
    
}
</style>