<template>
  <h1>根组件</h1>
  <father></father>
</template>

<script>
import father from './components/father.vue'
export default {
  data() {
    return {
      color: 'red'
    }
  },
  components: {
    father
  },
  provide() {
    // 返回要共享的数据对象
    return {
      color:this.color
    }
  }
}
</script>

