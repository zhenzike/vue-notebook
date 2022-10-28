<template>
    <h3>son组件 --{{color}}</h3>
</template>

<script>
export default {
    //接收后可以直接使用
    inject: ['color']
}
</script>
