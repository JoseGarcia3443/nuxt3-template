<template>
  <div :class="['loader', `loader__size--${props.size}`]">
    <div class="loader__item"></div>
    <div class="loader__item"></div>
    <div class="loader__item"></div>
    <div class="loader__item"></div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { LoaderSize } from './types'

const props = defineProps({
  size: {
    type: String as PropType<LoaderSize>,
    default: 'md'
  }
})

</script>

<style lang="scss" scoped>
.loader {
  @apply inline-block relative;
  &__size {
    &--xs {
      @apply w-8 h-8;
    }
    &--sm {
      @apply w-12 h-12;
    }
    &--md {
      @apply w-16 h-16;
    }
    &--lg {
      @apply w-20 h-20;
    }
    &--xl {
      @apply w-24 h-24;
    }
  }
  &__item {
    @apply box-border block absolute w-full h-full m-2;
    @apply border-[8px] border-white border-solid rounded-[50%];
    @apply border-t-white border-r-transparent border-b-transparent border-l-transparent;
    @apply animate-spin-loader;
    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
}  
</style>
