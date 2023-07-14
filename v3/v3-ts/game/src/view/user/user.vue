<template>
    <div class="user">
        <div class="userbox">
            <div class="userIcon"><van-icon name="smile-o" :style="{ fontSize: '48px' }" /></div>
            <p class="userName">{{ userData.username }}</p>
            <div class="userID">{{ userData.userID }}</div>
        </div>
        <div class="selectBox">
            <van-cell is-link icon="setting">
                <!-- 使用 title 插槽来自定义标题 -->
                <template #title>
                    <span class="custom-title">账号设置</span>
                </template>

            </van-cell>
        </div>
    </div>
</template>

<script setup  lang="ts">
import { reactive } from 'vue'

let userData = reactive({
    username: '郭巨侠',
    userID: 'sdsdsd'
})
</script>

<style lang="scss" scoped>
.user {
    display: flex;
    flex-direction: column;
    height: 100%;

    .userbox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        padding: 16px 0 8px;
        color: white;

        .userIcon {
            flex: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 25%;
            width: 25%;
            border: 3px rgb(80, 103, 112) solid;


        }

        .userName {

            flex: none;
        }

        .userId {

            flex: none;
        }
    }

    .selectBox {
        flex: 4;
    }
}
</style>

<style lang="scss">
.user {
    .van-cell {
        color: white;
        background-color: rgb(57, 54, 49);
    }
}
</style>

