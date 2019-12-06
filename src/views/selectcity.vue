<template>
  
      <div class="city_wrap">
        <div class="city_head">
            <div class="prevTopage"
            @click="backRouter"
            >

            </div>
            <h2>选择城市</h2>
        </div>
        <div class="city_main">
            <div class="cities_container">
            <van-index-bar :index-list="indexList" >
                    <section class="position">
                        <van-index-anchor index="定位" class="city_title" >定位城市</van-index-anchor>
                        <div class="position_city cities">
                            <div class="city_name">{{$store.state.cities.name}}</div>
                        </div>
                    </section>
                    <section class="rencent">
                        <van-index-anchor index="历史" class="city_title">最近访问城市</van-index-anchor>
                        <div class="rencentlyVisit_city cities">
                            <div class="city_name"
                            v-for="city in visited"
                            :key="city.id"
                            @click="choiceCity(city.name,city.id)"
                            >{{city.name}}</div>
                        </div>
                    </section>
                    <section class="hot">
                        <van-index-anchor index="热门" class="city_title">热门城市</van-index-anchor>
                        <div class="hot_city cities">
                            <div class="city_name"
                            v-for="city in hot_citiesList"
                            :key="city.cityOID"
                            @click="choiceCity(city.cityName,city.cityOID)"    
                            >{{city.cityName}}</div>
                        </div>
                    </section>
                    <section class="allcities"
                    v-for="citys in all_citiesList"
                    :key="citys.cities.title"
                    >
                        <van-index-anchor :index="citys.title" class="city_title">{{citys.title}}</van-index-anchor>
                            <div class="city_names"
                            v-for="city in citys.cities"
                            :key="city.cityOID"
                            @click="choiceCity(city.cityName,city.cityOID)"
                            >{{city.cityName}}</div>
                    </section>
                    <div class="loading"
                    v-if="all_citiesList.length === 0 && hot_citiesList.length === 0"
                    ><img src="../assets/giaoteman.gif" alt=""></div>
            </van-index-bar>
            </div>
        </div>
      </div>
  
</template>

<script>
import Vue from 'vue';
import { IndexBar, IndexAnchor } from 'vant';
Vue.use(IndexBar).use(IndexAnchor);
import { get } from '../utils/http.js'
import store from 'store'
import _ from 'lodash'

export default {
    data() {
        return {
        index_citiesList: [],
        hot_citiesList:[],
        all_citiesList:[],
        // current_city:{
        //     id:1101,
        //     name:'北京'
        // }
        
        }
    },
    created(){
        this.cityIndexList = [
            '定位',
            '历史',
            '热门'
        ],
        this.visited = store.get('rv')
        // this.current_city = store.get('current_city')
        console.log(this.visited)
    },
    computed:{
        indexList(){
            return [
                ...this.cityIndexList,
                ...this.index_citiesList
            ]
        }


    },
    async mounted() {
        
        let result = await get({
            url:'/showapi/cities',
            params:{
                time:Date.now(),
                src:'m_web'
            }
        })
        
        this.hot_citiesList = result.data.result.hotCities
        this.all_citiesList = result.data.result.allCities
        this.all_citiesList.forEach((value) =>{
            this.index_citiesList.push(value.title)
            
            return this.index_citiesList
        })
        
        
    },
    methods:{
        choiceCity(name,id){
            
            let rencentlyVisited =  store.get('rv') || []
            rencentlyVisited.push({
                name,
                id
            })
           
            store.set('rv' , _.uniqWith(rencentlyVisited,_.isEqual))
            store.set('current_city',{
                id ,
                name 
            })
            this.$store.dispatch('cities/saveCity', {
                id,
                name
            })
            this.$router.back(-1)

            // console.log(cityid)
            // console.log(this.current_city)
        },
        backRouter(){
            this.$router.back(-1)

        }
    }


}
</script>

<style lang="stylus" scoped>
.city_wrap{
    width 100%
    display flex
    flex-direction column
    height 100%
    
    .city_head{
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
    .city_main{
        width 100%
        height calc(100% - .5rem)
        overflow-y scroll
        .cities_container{
            width 100%
            height auto
            box-sizing border-box
            background-color: #f2f2f2;
            padding: 0 15px;
            padding-right: 40px;
            .position{
                width 100%
                height auto
                
            }
        }


    }
}
.city_title{
    font-size .14rem
    letter-spacing: -.2px;
    margin-left -.16rem
    margin-right -.4rem
    margin-bottom: 12px;
    margin-top: 15px;
    
}
.van-index-anchor{
    overflow-y scroll
    flex 1
}
.cities{
    width 100%
    height auto
    display flex
    flex-wrap wrap
    
}
.city_name{
    box-sizing border-box
    width: 30%;
    max-height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 4px;
    background-color: #fff;
    font-size: 16px;
    margin-bottom: 15px;
    margin-right: 5%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.city_names{
    width 100%
    line-height: 45px;
    height: 45px;
    background-color: #fff;
    font-size: 16px;
    padding-left: 10px;
    color: #494949;
    border-bottom: .5px solid #e4e4e4;
    margin-left -15px
    padding-left 30px
    padding-right 40px
}
.city_name:nth-of-type(3n+3){
    margin-right: 0;
}

</style>