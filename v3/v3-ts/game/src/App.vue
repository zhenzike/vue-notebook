<template>
  <div class="cotainer">
    <router-view class="view"></router-view>
    <footerNav class="footerNav"></footerNav>
  </div>
 
</template>


<script setup lang="ts">
import footerNav from './view/footerNav/index.vue'

</script>



<style scoped lang="scss">
.cotainer{
  box-sizing: border-box;
  padding-bottom: 50px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: rgb(41,39,37);
  .view{
  
  }
  .footerNav{
  }
}
</style>
