<template>
  <son>
    <template v-slot:right="{msg,user}">
      {{ user }}
    </template>
  </son>
</template>

<script>
import son from './menusChildren/rightsSon.vue'
export default {
  name: 'MyRights',
  components: {
    son
  }
}
</script>

<style lang="less" scoped></style>