<template>
    <button class="button shadow-2xl" :style="buttonStyle">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import type { Props } from '../types/types';
import { computed } from 'vue';

const props = defineProps<Props>()

const buttonStyle = computed(() => ({
    color: props.textColor,
    background: props.background
}))
</script>

<style scoped lang="scss">
@import "@/style/variableFont.scss";
.button {
    cursor: pointer;
    border-radius: 4px;
    font-family: $font-pop;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;
    box-shadow: 0px 5px 5px -2px rgb(255, 255, 255);
}
</style>