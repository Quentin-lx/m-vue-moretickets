<template>
  <div class="all">
    <showList type="all">

    </showList>
      
  </div>
</template>

<script>
import showList from '../components/show-type/showList.vue'

export default {
  components:{
      showList
  },
}
</script>

<style lang="stylus" scoped>
.all{
  height auto
  width 100%
  display flex
  flex-direction column
  
}

</style>