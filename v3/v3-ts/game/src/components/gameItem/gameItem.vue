<template>
    <div class="gameItemCentent">
        <div class="gameItem" v-for="item in gameData" :key="item.text"><img :src="getImgUrl(item. imgUrl)" alt="">
            <p>{{ item.text }}</p>
        </div>
    </div>
</template>

<script setup  lang="ts">
defineProps({
    gameData: Array<any>
})

let getImgUrl = (name: string) => {
    return new URL(`/public/img/${name}`, import.meta.url).href
}

</script>

<style lang="scss" scoped>
.gameItemCentent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;


    .gameItem:nth-child(2n) {}

    .gameItem {
        box-sizing: border-box;

        width: 48%;
        height: 120px;
        padding: 0 8px;
        margin-bottom: 8px;
        background-color: rgb(57, 54, 49);

        img {
            width: 100%;
            height: 70%;
        }

        p {
            color: white;
        }

    }
}
</style>