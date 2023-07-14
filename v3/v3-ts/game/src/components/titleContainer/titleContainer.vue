<template>
    <div class="titleContainer">
        <p class="titleValue">{{ titleText }}</p>
        <slot name="gameListData"></slot>
    </div>
</template>

<script setup  lang="ts">
defineProps({
    titleText: String
})

</script>

<style lang="scss" scoped>
.titleContainer {
    margin-bottom: 12px;

    .titleValue {
        text-align: left;
        margin: 0 0 12px 0;
        color: white;
        border-left: 5px solid rgb(235, 212, 32);
        padding-left: 10px;
        font-size: 24px;
    }
}
</style>