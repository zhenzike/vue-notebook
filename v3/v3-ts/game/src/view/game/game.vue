<template>
    <div class="footer">
        <serchComponents class="serchComponents"></serchComponents>
        <div class="homeContainer">
            <div class="gameListContent">
                <van-dropdown-menu class="dropdown">
                    <van-dropdown-item v-for="item in dropDownList" :key="item.title"  v-model="item.value" :options="item.option" :title="item.title" />
                </van-dropdown-menu>
                <titleContainer v-for="item in titleTextList" :key="item" :titleText="item">
                    <template #gameListData>
                        <gameItem :gameData="getGameData(item)"></gameItem>
                    </template>
                </titleContainer>
            </div>
        </div>
    </div>
</template>

<script setup  lang="ts">
import serchComponents from '@/components/search/searchComponents.vue'
import titleContainer from '@/components/titleContainer/titleContainer.vue';
import gameItem from '@/components/gameItem/gameItem.vue'
import { reactive } from 'vue';

let titleTextList = reactive(['经典系列', '推荐游戏'])
let hotGameData = reactive([
    { imgUrl: '1.png', text: '三国志' },
    { imgUrl: '2.png', text: '冒险岛' },
    { imgUrl: '3.png', text: '吞食天地' },
    { imgUrl: '2.png', text: '恐龙快打' },
    { imgUrl: '3.png', text: '魂斗罗' },
])

let browseGameData = reactive([
    { imgUrl: '1.png', text: '三国战记' },
    { imgUrl: '2.png', text: '快打旋风' },
    { imgUrl: '3.png', text: '吞食天地' },
    { imgUrl: '2.png', text: '恐龙快打' },
])

let gameDataMapText: { [key: string]: any } = {
    '经典系列': hotGameData,
    '推荐游戏': browseGameData
}

let getGameData = (name: string) => {
    return gameDataMapText[name]
}

let dropDownList = reactive([
    {
        title: '大厅', option: [
            { text: '大厅', value: 'dt' },
        ],
        value: 'dt'
    },
    {
        title: '街机', option: [
            { text: '闯关冒险', value: 'cg' },
            { text: '格斗竞技', value: 'gd' },
        ],
        value: 'cg'
    },
    {
        title: 'FC', option: [
            { text: '闯关冒险', value: 'cg' },
            { text: '格斗竞技', value: 'gd' },
        ],
        value: 'cg'
    },
    {
        title: 'GBA', option: [
            { text: '闯关冒险', value: 'cg' },
            { text: '格斗竞技', value: 'gd' },
        ],
        value: 'cg'
    },
    {
        title: 'DOS', option: [
            { text: '闯关冒险', value: 'cg' },
            { text: '格斗竞技', value: 'gd' },
        ],
        value: 'cg'
    },

])


</script>

<style lang="scss" scoped>
.dropdown{
    margin-bottom: 15px;
}
</style>


<style lang="scss" >

.van-dropdown-menu__bar{
    background-color:rgb(57,55,50);
 
    .van-dropdown-menu__title{
        color: white;
    }
}
</style>