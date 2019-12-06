<template>
<div class="content_container">
  <div class="loading"
  v-if="infoList.length === 0"
  >
  <img src="../../assets/giao.gif" alt=""></div>
    <div class="content_detail" 
    v-for="info in infoList"
    :key="info.showOID"
    @click="handleClicktoDetail(info.showOID)"
    >
    <div class="poster"><img :src="info.posterURL" alt=""></div>
    <div class="text">
        <div class="title">{{info.showName}}</div>
        <div class="time">{{info.showDate}}</div>
        <div class="address">{{info.venueName}}</div>
        <div class="choice_sale">
        <div class="onsale"
        
        v-if="info.showStatus.code === 3 "
        >售票中</div>
        <div class="presale"
        v-else
        >预售中</div>
        <div class="choice" v-if="info.supportSeatPicking">可选座</div>
        
        </div>
        <div class="price"><span>{{info.minPrice}}</span>元起</div>
        <div class="advertise" v-if="info.advertise"></div><span v-if="info.advertise" class="adv_text">{{info.advertise}}</span>
    </div>
    <div class="discount" v-if="info.discount < 1">
        <div class="discount-value"
        >{{(info.discount*10).toFixed(1)}}</div>
        <span>折起</span>
    </div>
    </div>
</div>
  
</template>

<script>
import { get } from '../../utils/http.js' 
export default {
  props: ['type'],
  data(){
    
    return{
      infoList:[]
    }
  },
  async mounted(){
      var type
      var offset=0
      console.log(this.type)
      if(this.type==='all'){
          
          type=""

      }else if(this.type === 'concert'){
        type=1
          
      }else if(this.type === 'opera'){
        type=3
          
      }else if(this.type === 'match'){
        type=6
          
      }else if(this.type === 'exhibition'){
        type=7
          
      }else if(this.type === 'dance'){
        type=5
          
      }else if(this.type === 'concertt'){
        type=2
          
      }else if(this.type === 'parenting'){
        type=9
          
      }else{
        type=4
      }

    let result = await get({
      url:'/showapi/pub/site/1101/active_show',
      params:{
        offset,
        length:20,
        locationCityOID:"",
        siteCityOID:this.$store.state.cities.cityid,
        type
        // offset: 20,
        // length: 20,
        // sorting: 'weight',
        // seq: 'desc',
        // client: 'piaodashi_weixin',
        // locationCityOID: 3101,
        // siteCityOID: 3101,
        // lat: 0,
        // lng: 0,
        // time: 1574384360841,
        // src: 'm_web',
      }

    })
    
    this.infoList = result.data.result.data
  },
  methods:{
    handleClicktoDetail(data){
      this.$router.push({
        path:'/detail',
        query:{
          data
        }
      })
    }
  }

}
</script>

<style lang="stylus" scoped>
.content_container{
    box-sizing border-box
    
    .content_detail{
      display flex
      justify-content space-between
      padding .22rem 0
      position relative
      .poster{
        width .9rem
        height 1.2rem
        img {
          width 100%
          height 100%
        }
      }
      .text{
        width 2.3rem
        .title{
          width 100%
          color: #000;
          font-size: 17px;
          font-weight: 700;
          line-height: .22rem;
          max-height: .44rem;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .time{
          margin-top .11rem
          font-size .13rem
          color #323038
          line-height .18rem
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .address{
          font-size .13rem
          color #323038
          max-width: 100%;
          line-height: .18rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          margin-bottom: .11rem;
          
        }
        .choice_sale{
          width 100%
          height .26rem
          overflow: hidden;
          position: relative;
          display flex
          .onsale{
            height 16px
            color: #ff1d41;
            border: 1px solid rgba(255,29,65,.3);
            padding: 0 3px;
            text-align: center;
            border-radius: 2px;
            font-size: 12px;
            margin-right: 5px;
            margin-bottom: 10px;
            line-height: 17px;
          }
          .presale{
            color: #fb5200;
            border: 1px solid rgba(251,82,0,.3);
            padding: 0 3px;
            text-align: center;
            border-radius: 2px;
            font-size: 12px;
            
            margin-right: 5px;
            margin-bottom: 10px;
            line-height: 17px;
            height 16px
          }
          .choice{
            height 16px
            padding: 0 3px;
            text-align: center;
            border-radius: 2px;
            font-size: 12px;
            margin-right: 5px;
            margin-bottom: 10px;
            line-height: 17px;
            color: #576bff;
            border: 1px solid rgba(87,107,255,.3);
          }
        }
        .price{
          font-size: .1rem;
          color: #ff1d41;
          span{
            font-size .18rem
            font-weight 700
          }
        }
        .advertise{
          width 100%
          color: #95949d;
          font-size: 13px;
          padding-top: 8px;
          background: url(https://m.moretickets.com/images/icon/decorate-icon-76dded2942.png) no-repeat center center;
          width: 17px;
          height: 17px;
          background-size: 7px 5px;
          display: inline-block;
          vertical-align: top;
        }
        .adv_text{
          color: #95949d;
          font-size: 13px;
          padding-top: 8px;
        }
      }
      .discount{
        width .38rem
        position absolute
        background-image: linear-gradient(315deg,#ff1d41,#ee0e87);
        box-shadow: 0 2px 8px 0 rgba(250,24,88,.5);
        border-radius: 100%;
        text-align: center;
        color: #fff;
        height .38rem
        display flex
        flex-direction column
        justify-content space-around
        right 0
        top .7rem
        .discount-value{
          font-family: DIN-Condensed-Bold;
          font-size: 18px;
          line-height: 18px;
          padding-top: 2px;
          margin-bottom: -3px;
        }
        span{
          font-size .1rem
          line-height .09rem
          
        }
      }
    }
  }

</style>