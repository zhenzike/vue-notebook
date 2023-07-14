<template>
    <div class="footer">
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" @click="toPath('/home')"> 首页</van-tabbar-item>
            <van-tabbar-item icon="search" @click="toPath('/game')"> 游戏</van-tabbar-item>
            <van-tabbar-item icon="friends-o" @click="toPath('/user')"> 我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup  lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
let active = ref(0)
const router = useRouter();
function toPath(path: string): void {  
    router.push(path);
}
</script>

<style lang="scss" scoped>
.footer{
   
}

</style>