<template>
    <div class="home">
        <serchComponents class="serchComponents"></serchComponents>
        <div class="homeContainer">
            <swipeComponents :imgData="imgData"></swipeComponents>
            <div class="gameListContent">
                <titleContainer v-for="item in titleTextList"  :key="item" :titleText="item" >
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
import swipeComponents from '@/components/swipeComponents/swipe.vue'
import titleContainer from '@/components/titleContainer/titleContainer.vue';
import gameItem from '@/components/gameItem/gameItem.vue'
import { reactive } from 'vue';



let imgData = reactive([
    { imgUrl: '1.png' },
    { imgUrl: '2.png' },
    { imgUrl: '3.png' },
])

let titleTextList = reactive(['热门推荐','浏览记录'])
let hotGameData=reactive([
    { imgUrl: '1.png',text:'热血三国' },
    { imgUrl: '2.png', text:'快打旋风'},
    { imgUrl: '3.png',text:'超级玛丽' },
])

let browseGameData=reactive([
    { imgUrl: '1.png',text:'三国战记' },
    { imgUrl: '2.png', text:'快打旋风'},
])

let gameDataMapText:{[key:string]:any}={
    '热门推荐':hotGameData,
    '浏览记录':browseGameData
}

let getGameData=(name:string)=>{
      return gameDataMapText[name]
}


</script>

<style lang="scss" scoped>
.home {
    display: flex;
    flex-direction: column;

    .serchComponents {
        flex: 1;
    }

    .homeContainer {
        flex: 8;
        padding: 0 8px;

        .gameListContent {
            padding: 10px 5px;
        }
    }
}
</style>