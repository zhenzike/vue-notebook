<template>
    <div class="serchComponents">
        <span class="iconImg"><van-icon name="smile-o" :style="{ fontSize: '36px' }" /></span>
        <div class="scearchBox">
            <van-search class="searchInput" v-model="inputValue" placeholder="请输入搜索关键词" />
        </div>

    </div>
</template>

<script setup  lang="ts">
import { ref } from 'vue';
let inputValue = ref('');

</script>

<style lang="scss" scoped>
.serchComponents {
    display: flex;
   

    .iconImg {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;

    }

    .scearchBox {
        flex: 5;
        display: flex;
        align-items: center;
      
      
        .searchInput {
            background-color: rgb(41,39,37);
            width: 100%;
        }
    }
}
</style>