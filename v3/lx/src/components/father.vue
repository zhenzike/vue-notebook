<template>
    <h2>父组件</h2>
    <son></son>
</template>

<script>
import son from './son.vue'
export default {
    components: {
        son
    }
}
</script>
