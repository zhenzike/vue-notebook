<template>
    <div class="swipeContainer">
        <van-swipe class="my-swipe  swipeBox" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in imgData" :key="item.imgUrl"><img :src="getImgUrl(item.imgUrl)"
                    alt=""></van-swipe-item>
        </van-swipe>
    </div>
</template>

<script setup  lang="ts">

defineProps({
    imgData: Array<any>
})
let getImgUrl = (name: string) => {
    return new URL(`/public/img/${name}`, import.meta.url).href
}
</script>

<style lang="scss" scoped>
.swipeContainer {
    text-align: center;
    .swipeBox {
        width: 100%;
        height: 100%;

        img {
            // width: 100%;
            // height: 100%;
        }
    }
}
</style>