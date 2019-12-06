<template>
  <div class="login-wrap">
    <div class="login_head">
        <div class="prevTopage"
        @click="backRouter"
        >
        </div>
        <h2>登录摩天轮票务</h2>
    </div>
    <div class="login_main">
      
    </div>
    <div class="input-container">
      <div class="inputrow1">
        <input type="text" placeholder="请输入手机号码">

      </div>
      <div class="inputrow2">
        <input type="text" placeholder="请输入验证码">
        <span>获取验证码</span>

      </div>


    </div>
    <div class="login-btn-wrap">
      <button>登录</button>
      <div class="login-tip">

      </div>


    </div>

  </div>
</template>
 
<script>
export default {


  data(){
    return{

    }
  },
  methods:{
    backRouter(){
      this.$router.back(-1)
    }
  },
  beforeRouteUpdate(to,from){
    console.log(to,from)
    
  }

}
</script>

<style lang="stylus" scoped>
.login-wrap{
  width 100%
  display flex
  flex-direction column
  height 100%
  background #fff
  .login_head{
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
  .input-container{
    width: 80%;
    margin: 0 auto;
    margin-top: .3rem;
    font-size: .16rem;
    line-height: .16rem;
    .inputrow1,.inputrow2{
      margin-top: .1rem;
      width: 100%;
      border-bottom: 1px solid #eaeaeb;
      padding-bottom: .1rem;
      display: flex;
    }
    .inputrow1{
      input {
        height: .3rem;
        line-height: .3rem;
        flex: 1;
        border: none;
        outline: 0;
        color: #494949;
        font-size: .16rem;
        
      }
    }
    .inputrow2{
      input{
        height: .3rem;
        line-height: .3rem;
        flex: 1;
        border: none;
        outline: 0;
        color: #494949;
        font-size: .16rem;
        width: 1rem;

      }
      span{
        color: #323038;
        padding-left: .15rem;
        height: .3rem;
        line-height: .3rem;
        white-space: nowrap;
      }
    }

  }
  .login-btn-wrap{
    width: 80%;
    margin: 0 auto;
    margin-top: .4rem;
    box-sizing border-box
    button {
      border none
      width 100%
      height: .366rem;
      line-height: .366rem;
      color: #fff;
      text-align: center;
      font-size: .16rem;
      border-radius: .183rem;
      background-image: linear-gradient(278deg,#ff1d41,#ee0e87);
    }
    .login-tip{
      padding-top: 15px;
      color: #95949d;
      font-size: .12rem;
      box-sizing: border-box;

    }
  }
  
  
}

</style>